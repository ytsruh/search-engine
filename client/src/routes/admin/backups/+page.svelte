<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';
	import FaTrash from 'svelte-icons/fa/FaTrash.svelte';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import Loading from '$lib/Loading.svelte';
	export let data: PageData;
	let loading = false;

	const modal: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to delete this backup?',
		// Provide arbitrary metadata to your modal instance:
		meta: {},
		response: async (response: boolean) => {
			if (response) {
				try {
					loading = true;
					const fileName = stripPath($modalStore[0].meta.fileName);
					const res = await fetch(`/api/admin/backups/${fileName}`, {
						method: 'Delete'
					});
					if (!res.ok) {
						throw new Error('something went wrong');
					}
					loading = false;
					// Refresh the page by invalidating page data
					invalidateAll();
				} catch (error) {
					console.log(error);
					loading = false;
				}
			}
		}
	};
	function stripPath(fullPath: string) {
		return fullPath.substring(7, fullPath.length);
	}
	function confirmDelete(fileName: string) {
		// Pass file name to modal via meta prop
		modal.meta.fileName = fileName;
		modalStore.trigger(modal);
	}
</script>

{#if loading}
	<Loading />
{:else}
	<div class="flex flex-col justify-center items-center">
		<h1 class="text-4xl py-5 text-primary-500">Backups</h1>
		<!-- Responsive Container (recommended) -->
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th class="text-center">File Name</th>
						<th class="text-center">Date</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#each data.backups as row, i}
						<tr class="text-center">
							<td>{stripPath(row.fileName)}</td>
							<td
								>{new Date(row.dateModified).toLocaleString('en-GB', {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}</td
							>
							<td
								><button
									type="button"
									on:click={() => confirmDelete(row.fileName)}
									class="btn-icon btn-icon-sm variant-filled-primary"
								>
									<p class="icon"><FaTrash /></p>
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<Modal buttonPositive="variant-filled-primary" />
		</div>
	</div>
{/if}

<style>
	.icon {
		width: 16px;
		height: 16px;
	}
</style>
