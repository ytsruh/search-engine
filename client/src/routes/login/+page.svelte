<script lang="ts">
	import { goto } from '$app/navigation';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import Loading from '$lib/Loading.svelte';
	import { isLoggedIn } from '$lib/authStore';
	let loading = false;
	async function submit(e: any) {
		loading = true;
		const email = e.target['email'].value;
		const password = e.target['password'].value;
		if (email == '' || password == '') {
			const t: ToastSettings = {
				message: 'Please ensure you enter your username & password',
				timeout: 5000,
				background: 'variant-filled-primary'
			};
			loading = false;
			toastStore.trigger(t);
			return;
		}
		const response = await fetch('/api/auth/login', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: email, password: password })
		});
		if (!response.ok) {
			const t: ToastSettings = {
				message: 'There was a problem logging you in. Please ensure your details are correct.',
				timeout: 5000,
				background: 'variant-filled-primary'
			};
			loading = false;
			toastStore.trigger(t);
			return;
		}
		await response.json();
		loading = false;
		isLoggedIn.set(true);
		goto('/admin');
	}
</script>

<svelte:head>
	<title>Login | Search Engine</title>
	<meta name="description" content="Login to the admin section of the search engine" />
</svelte:head>
{#if loading}
	<Loading />
{:else}
	<div class="flex flex-col h-full items-center justify-center px-10">
		<h1 class="text-3xl py-5">
			<span class="text-primary-600">Login</span> to Search Engine Admin
		</h1>
		<form
			on:submit|preventDefault={submit}
			class="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3"
			autocomplete="off"
		>
			<label class="label py-2">
				<span>Email</span>
				<input class="input" id="email" type="email" placeholder="Email Address" />
			</label>
			<label class="label py-2">
				<span>Password</span>
				<input class="input" id="password" type="password" placeholder="Password" />
			</label>
			<div class="flex justify-around py-5">
				<button type="submit" class="btn variant-filled-primary">Login</button>
			</div>
		</form>
		<Toast />
	</div>
{/if}
