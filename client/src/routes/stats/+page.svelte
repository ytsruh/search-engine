<script lang="ts">
	import type { PageData } from './$types';
	import FaLink from 'svelte-icons/fa/FaLink.svelte';
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import FaExclamation from 'svelte-icons/fa/FaExclamation.svelte';

	export let data: PageData;
	const total = data.latest.reduce((a: any, b: any) => {
		return a + b.count;
	}, 0);
</script>

<div class="flex flex-col h-full w-full">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 py-10">
		<div class="card flex items-center justify-between p-5">
			<div class="icon m-5 text-primary-500"><FaLink /></div>
			<div class="text-right">
				<h2 class="text-4xl py-2">{data.counts.countAll}</h2>
				<p class="text-base text-surface-500 dark:text-surface-200">
					Total number of links indexed
				</p>
			</div>
		</div>
		<div class="card flex items-center justify-between p-5">
			<div class="icon m-5 text-secondary-500"><FaCheck /></div>
			<div class="text-right">
				<h2 class="text-4xl py-2">{data.counts.countTrue}</h2>
				<p class="text-base text-surface-500 dark:text-surface-200">
					Total number of links indexed
				</p>
			</div>
		</div>
		<div class="card flex items-center justify-between p-5">
			<div class="icon m-5 text-tertiary-500"><FaExclamation /></div>
			<div class="text-right">
				<h2 class="text-4xl py-2">{data.counts.countFalse}</h2>
				<p class="text-base text-surface-500 dark:text-surface-200">Total number of failed links</p>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
		<div class="card">
			<div class="table-container">
				<table class="table table-hover w-full">
					<thead>
						<tr>
							<th class="text-center">Date</th>
							<th class="text-center">New Links Found</th>
						</tr>
					</thead>
					<tbody class="text-center">
						{#each data.latest as row, i}
							<tr>
								<td
									>{new Date(row.date).toLocaleString('en-GB', {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}</td
								>
								<td>{row.count}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<div class="text-center py-4">
					<p class="text-xl">
						Total links found in last 7 days : <span class="text-secondary-500">{total}</span>
					</p>
				</div>
			</div>
		</div>
		<div class="card">
			<section class="p-4">Chart</section>
		</div>
	</div>
</div>

<style>
	.icon {
		width: 48px;
		height: 48px;
	}
</style>
