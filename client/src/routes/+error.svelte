<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-center items-center h-full text-3xl">
	<h1 class="py-5">
		<span class="text-primary-500">Uh-oh!</span> Something went wrong
	</h1>
	{#if $page?.error}
		<div class="flex py-2">
			<p>
				{$page?.status ? $page?.status : ''} : {$page?.error?.message ? $page?.error?.message : ''}
			</p>
		</div>
	{/if}
</div>
