<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';
	import { goto } from '$app/navigation';
	import Loading from '$lib/Loading.svelte';
	import { isLoggedIn } from '$lib/authStore';
	let authState = false;
	let loading = true;
	isLoggedIn.subscribe((value) => {
		authState = value;
		if (authState) loading = false;
	});
	if (!authState) {
		goto('/admin/logout');
	}
</script>

{#if loading}
	<Loading />
{:else}
	<div class="p-10">
		<div class="w-full flex justify-center items-center pb-5">
			<div class="btn-group variant-filled-surface">
				<a href="/admin" class="btn" data-sveltekit-preload-data="hover">Home</a>
				<a href="/admin/settings" class="btn" data-sveltekit-preload-data="hover">Settings</a>
				<a href="/admin/logout" class="btn" data-sveltekit-preload-data="tap">Logout</a>
			</div>
		</div>
		<slot />
	</div>
{/if}
