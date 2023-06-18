package crawler

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"

	"golang.org/x/net/html"
)

type CrawlData struct {
	Url          string
	Success      bool
	ResponseCode int
	CrawlData    ParsedBody
}

type ParsedBody struct {
	CrawlTime       time.Duration
	PageTitle       string
	PageDescription string
	Headings        string
	Links           []string
}

func RunCrawl(inputUrl string) CrawlData {
	resp, err := http.Get(inputUrl)
	baseUrl, _ := url.Parse(inputUrl)
	// Check for error or if respode code is not 200
	if err != nil || resp.StatusCode != 200 {
		fmt.Print(err)
		fmt.Println("something went wrong fetch the body")
		return CrawlData{Url: inputUrl, Success: false, ResponseCode: resp.StatusCode, CrawlData: ParsedBody{}}
	}
	defer resp.Body.Close()
	// Check the content type is text/html
	contentType := resp.Header.Get("Content-Type")
	if strings.HasPrefix(contentType, "text/html") {
		// response is HTML
		data, err := parseBody(resp.Body, baseUrl)
		if err != nil {
			fmt.Println("something went wrong getting data from html body")
			return CrawlData{Url: inputUrl, Success: false, ResponseCode: resp.StatusCode, CrawlData: ParsedBody{}}
		}
		return CrawlData{Url: inputUrl, Success: true, ResponseCode: resp.StatusCode, CrawlData: data}
	} else {
		// response is not HTML
		fmt.Println("non html response detected")
		return CrawlData{Url: inputUrl, Success: false, ResponseCode: resp.StatusCode, CrawlData: ParsedBody{}}
	}

}

func parseBody(body io.Reader, baseUrl *url.URL) (ParsedBody, error) {
	doc, err := html.Parse(body)
	if err != nil {
		fmt.Println(err)
		fmt.Println("something went wrong parsing body")
		return ParsedBody{}, err
	}

	start := time.Now()
	// Get the links from the doc
	links := getLinks(doc, baseUrl)
	// Get the page title description
	title, desc := getPageData(doc)
	// Get the H1 tags for the page
	headings := getPageHeadings(doc)

	// Record timings
	end := time.Now()
	fmt.Println("Crawl took", end.Sub(start), "to run")
	// Return the data
	return ParsedBody{
		CrawlTime:       end.Sub(start),
		PageTitle:       title,
		PageDescription: desc,
		Headings:        headings,
		Links:           links,
	}, nil
}

// Depth First Search (DFS) of the html tree structure. This is a recursive function to scan the full tree.
func getLinks(node *html.Node, baseUrl *url.URL) []string {
	var links []string
	var findLinks func(*html.Node)
	findLinks = func(node *html.Node) {
		// Check if the current node is an `html.ElementNode` and if it has a tag name of "a" (i.e., an anchor tag).
		if node.Type == html.ElementNode && node.Data == "a" {
			for _, attr := range node.Attr {
				if attr.Key == "href" {
					url, err := url.Parse(attr.Val)
					// Check for errors or if url starts with hashtag, is mail link or telephone link
					if err != nil || strings.HasPrefix(url.String(), "#") || strings.HasPrefix(url.String(), "mail") || strings.HasPrefix(url.String(), "tel") {
						continue
					}
					// If url is absolute then append it. Else add the baseUrl
					if url.IsAbs() {
						links = append(links, url.String())
					} else {
						abs := baseUrl.ResolveReference(url)
						links = append(links, abs.String())
					}
				}
			}
		}
		// Recursively call function to do Depth First Search of entire tree
		for child := node.FirstChild; child != nil; child = child.NextSibling {
			findLinks(child)
		}
	}
	findLinks(node)

	return links
}

func getPageData(node *html.Node) (string, string) {
	// Find the page title and description
	title, desc := "", ""
	var findMetaAndTitle func(*html.Node)
	findMetaAndTitle = func(node *html.Node) {
		// Recursive function to search for `meta` elements in the HTML tree and extracts their `name` and `content` attributes.
		if node.Type == html.ElementNode && node.Data == "title" {
			title = node.FirstChild.Data
		} else if node.Type == html.ElementNode && node.Data == "meta" {
			var name, content string
			for _, attr := range node.Attr {
				if attr.Key == "name" {
					name = attr.Val
				} else if attr.Key == "content" {
					content = attr.Val
				}
			}
			if name == "description" {
				desc = content
			}
		}
		for child := node.FirstChild; child != nil; child = child.NextSibling {
			findMetaAndTitle(child)
		}
	}
	findMetaAndTitle(node)
	return title, desc
}

func getPageHeadings(n *html.Node) string {
	// Find all h1 elements and concatenate their content
	var headings strings.Builder
	var findH1 func(*html.Node)
	findH1 = func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "h1" {
			headings.WriteString(n.FirstChild.Data)
			headings.WriteString(", ")
		}
		for c := n.FirstChild; c != nil; c = c.NextSibling {
			findH1(c)
		}
	}
	findH1(n)
	// Remove the last comma and space from the concatenated string & return
	return strings.TrimSuffix(headings.String(), ", ")
}
