<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import Loading from '$lib/Loading.svelte';
	export let data: PageData;

	let searchOn = data.settings.on;
	let amount = data.settings.amount;
	let addNew = data.settings.addNew;
	let loading = false;

	async function submit(e: any) {
		loading = true;
		if (amount < 1) {
			const t: ToastSettings = {
				message: 'Please ensure all fields are set & amount is greater than 0',
				timeout: 5000,
				background: 'variant-filled-primary'
			};
			loading = false;
			toastStore.trigger(t);
			return;
		}
		const response = await fetch('/api/admin/settings', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ on: searchOn, amount: amount, addNew: addNew })
		});
		if (!response.ok) {
			const t: ToastSettings = {
				message: 'There was a problem updating settings. Please try again.',
				timeout: 5000,
				background: 'variant-filled-primary'
			};
			loading = false;
			toastStore.trigger(t);
			return;
		}
		await response.json();
		loading = false;
		goto('/admin');
	}
</script>

{#if loading}
	<Loading />
{:else}
	<div class="flex flex-col justify-center items-center">
		<h1 class="text-4xl py-5 text-primary-500">Settings</h1>
		<form
			on:submit|preventDefault={submit}
			class="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3"
			autocomplete="off"
		>
			<label class="label py-2">
				<p class="py-4">Search On:</p>
				<div class="space-y-2">
					<label class="flex items-center justify-around">
						<div class="flex items-center space-x-5">
							<input
								class="radio"
								type="radio"
								bind:group={searchOn}
								name="search-on"
								value={true}
							/>
							<p>On</p>
						</div>
						<div class="flex items-center space-x-5">
							<input
								class="radio"
								type="radio"
								bind:group={searchOn}
								name="search-on"
								value={false}
							/>
							<p>Off</p>
						</div>
					</label>
				</div>
			</label>

			<label class="label py-2">
				<p class="py-4">Add New Urls:</p>
				<div class="space-y-2">
					<label class="flex items-center justify-around">
						<div class="flex items-center space-x-5">
							<input class="radio" type="radio" bind:group={addNew} name="add-new" value={true} />
							<p>On</p>
						</div>
						<div class="flex items-center space-x-5">
							<input class="radio" type="radio" bind:group={addNew} name="add-new" value={false} />
							<p>Off</p>
						</div>
					</label>
				</div>
			</label>

			<label class="label py-2">
				<p class="py-4">Urls per hour:</p>
				<input class="input" id="amount" type="number" bind:value={amount} />
			</label>
			<div class="flex justify-around py-5">
				<button type="submit" class="btn variant-filled-primary">Update</button>
			</div>
		</form>
		<Toast />
	</div>
{/if}
