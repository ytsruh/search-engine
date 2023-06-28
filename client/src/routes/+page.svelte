<script lang="ts">
	import { goto } from '$app/navigation';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	const random = Math.random().toString().substring(0, 5).split('.')[1];
	function submit(e: any) {
		const searchQuery = e.target['input'].value;
		if (searchQuery == '') {
			const t: ToastSettings = {
				message: 'Please ensure you enter a search term',
				timeout: 5000,
				background: 'variant-filled-primary'
			};
			toastStore.trigger(t);
			return;
		}
		goto(`/search?q=${searchQuery.toString()}`);
	}
	function clear() {
		const field = <HTMLInputElement>document.getElementById('input');
		field.value = '';
	}
</script>

<svelte:head>
	<title>Home | Search Engine</title>
	<meta
		name="description"
		content="The homemade search engine built using Go (Golang), Fiber, Postgres & SvelteKit."
	/>
</svelte:head>
<div class="flex flex-col h-full items-center justify-center">
	<div
		class="flex flex-col justify-center items-center space-y-5 pb-10 text-center px-10 break-words"
	>
		<h1 class="text-3xl md:text-5xl">
			Search 0.0000000{random}%<span class="text-lg">*</span> of the Web
		</h1>
		<p class="text-sm">* completely made up statistic</p>
	</div>
	<form on:submit|preventDefault={submit} class="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
		<input id="input" class="input" type="text" placeholder="Search" autocomplete="off" />
		<div class="flex justify-around py-5">
			<button type="submit" class="btn variant-filled-primary">Search</button>
			<button on:click={clear} class="btn variant-filled-tertiary">Clear</button>
		</div>
	</form>
	<Toast />
</div>
