import { writable } from 'svelte/store';
// Auth store is used to preserve loggedin state on client side, since cookies are httponly
export const isLoggedIn = writable(false);
