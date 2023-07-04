import type { PageLoad } from './$types';
import { isLoggedIn } from '../../../lib/authStore';
import { goto } from '$app/navigation';
export const load = (async ({ fetch }) => {
	await fetch('/api/auth/logout', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	isLoggedIn.set(false);
	goto('/login');
}) satisfies PageLoad;
