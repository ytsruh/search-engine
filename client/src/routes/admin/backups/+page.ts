import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ fetch }) => {
	const res = await fetch(`/api/admin/backups`);
	if (!res.ok) {
		throw redirect(307, '/');
	}
	const data = await res.json();
	return { backups: data.reverse() };
}) satisfies PageLoad;
