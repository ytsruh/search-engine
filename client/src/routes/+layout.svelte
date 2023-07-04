<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import FaSearchengin from 'svelte-icons/fa/FaSearchengin.svelte';
	import { navigating } from '$app/stores';
	import Loading from '$lib/Loading.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead"
				><a href="/" class="icon text-primary-600"><FaSearchengin /></a></svelte:fragment
			>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-tertiary" href="/"> Home </a>
				<a class="btn btn-sm variant-ghost-tertiary" href="/stats" data-sveltekit-preload-data>
					Stats
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content with loading state between long loads -->
	{#if $navigating}
		<Loading />
	{:else}
		<slot />
	{/if}
</AppShell>

<style>
	.icon {
		width: 24px;
		height: 24px;
	}
</style>
