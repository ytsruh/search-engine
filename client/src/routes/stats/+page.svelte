<script lang="ts">
	import type { PageData } from './$types';
	import FaLink from 'svelte-icons/fa/FaLink.svelte';
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import FaExclamation from 'svelte-icons/fa/FaExclamation.svelte';
	import { Line } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		LineElement,
		Tooltip,
		Title,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Tooltip, Title);

	export let data: PageData;

	// const total = data.latest.reduce((a: any, b: any) => {
	// 	return a + b.count;
	// }, 0);
	const total: any = [];

	const chartData: any = {
		labels: total,
		datasets: [
			{
				label: '# urls found',
				lineTension: 0.3,
				backgroundColor: 'rgb(212,21,60)',
				borderColor: 'rgb(212,21,60)',
				borderCapStyle: 'butt',
				borderJoinStyle: 'miter',
				pointBorderWidth: 10,
				pointRadius: 1,
				pointHitRadius: 10,
				data: total
			}
		]
	};
</script>

<svelte:head>
	<title>Statistics | Search Engine</title>
	<meta
		name="description"
		content="Summary of indexed status of urls & pages. Total stats are shown as well as data for the latest 7 days."
	/>
</svelte:head>
<div class="flex flex-col h-full w-full">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 py-10">
		<div class="card flex items-center justify-between p-5">
			<div class="icon m-5 text-primary-500"><FaLink /></div>
			<div class="text-right">
				<h2 class="text-4xl py-2">{data.counts.countAll}</h2>
				<p class="text-base text-surface-500 dark:text-surface-200">Total number of links found</p>
			</div>
		</div>
		<div class="card flex items-center justify-between p-5">
			<div class="icon m-5 text-secondary-500"><FaCheck /></div>
			<div class="text-right">
				<h2 class="text-4xl py-2">{data.counts.countTrue}</h2>
				<p class="text-base text-surface-500 dark:text-surface-200">
					Number of links successfully indexed
				</p>
			</div>
		</div>
		<div class="card flex items-center justify-between p-5">
			<div class="icon m-5 text-tertiary-500"><FaExclamation /></div>
			<div class="text-right">
				<h2 class="text-4xl py-2">{data.counts.countFalse}</h2>
				<p class="text-base text-surface-500 dark:text-surface-200">
					Number of links that failed to be indexed
				</p>
			</div>
		</div>
	</div>
	{#if data.latest}
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
			<div class="card flex items-center justify-center">
				<div class="px-10 py-20 w-full h-96">
					{#if data.latest}
						<Line
							data={chartData}
							options={{
								scales: {
									y: {
										ticks: {
											color: $modeCurrent ? '#000' : '#fff'
										},
										grid: { display: false }
									},
									x: {
										ticks: {
											color: $modeCurrent ? '#000' : '#fff',
											maxRotation: 45,
											minRotation: 45
										},
										grid: { display: false }
									}
								},
								maintainAspectRatio: false,
								plugins: {
									tooltip: { enabled: true },
									legend: {
										display: false
									},
									title: {
										color: $modeCurrent ? '#000' : '#fff',
										display: true,
										text: 'Urls found per day',
										font: {
											size: 20
										}
									}
								}
							}}
						/>
					{/if}
				</div>
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-5 p-5 mx-10">
			<div class="card p-10">
				<h6 class="text-center">No latest data available</h6>
			</div>
		</div>
	{/if}
</div>

<style>
	.icon {
		width: 48px;
		height: 48px;
	}
</style>
