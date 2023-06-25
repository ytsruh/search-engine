<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Loading from '$lib/Loading.svelte';
	import NoResults from '$lib/NoResults.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	const query = $page.url.searchParams.get('q');
	if (!query) {
		goto('/');
	}
	let loading = true;
	let data: any = {
		count: 0,
		results: []
	};
	async function getData() {
		try {
			const response = await fetch('/api/search', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ searchTerm: query })
			});
			if (!response.ok) {
				console.log('problem with fetching data');
				loading = false;
				return;
			}
			data = await response.json();
			loading = false;
		} catch (error) {
			goto('500');
			loading = false;
		}
	}
	getData();
</script>

{#if loading}
	<Loading />
{:else if data.count > 0}
	<div class="grid grid-cols-1 lg:grid-cols-3 p-5 h-full">
		<div class="col-span-2">
			<h1 class="text-3xl pb-5">Your Search Results</h1>
			<h2 class="text-lg pb-5">{data.count} results found</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 py-2 gap-4">
				{#each data.results as result}
					<a class="block card card-hover p-1 h-full" href={result.url} target="_blank">
						<div class="flex flex-col justify-between h-full">
							<section class="p-4">
								<h6 class="text-primary-500 font-bold truncate">
									{result.pageTitle ? result.pageTitle : result.url}
								</h6>
								<p class="text-surface-900 dark:text-surface-100 line-clamp-3">
									{result.pageDescription ? result.pageDescription : 'No description available'}
								</p>
							</section>
							<footer
								class="card-footer flex justify-between items-center text-surface-500 dark:text-surface-200"
							>
								<p class="text-sm italic truncate pr-5">{result.url}</p>
								<div class="icon"><FaArrowRight /></div>
							</footer>
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div class="hidden lg:flex lg:flex-col p-5 my-10">
			<h2 class="text-2xl py-2">Not found what you're looking for?</h2>
			<h5 class="text-lg py-2">Try a proper search engine instead</h5>
			<div class="flex py-2">
				<a
					type="button"
					class="btn variant-filled-primary"
					href={`https://www.duckduckgo.com?q=${query}`}>Search DuckDuckGo</a
				>
			</div>
		</div>
	</div>
{:else}
	<NoResults />
{/if}

<style>
	.icon {
		width: 16px;
		height: 16px;
	}
</style>
