<script lang="ts">
	const random = Math.random().toString().substring(0, 5).split('.')[1];
	function clear() {
		const field = <HTMLInputElement>document.getElementById('input');
		field.value = '';
	}
</script>

<div class="flex flex-col h-full items-center justify-center px-5">
	<div
		class="flex flex-col justify-center items-center space-y-5 pb-10 text-center px-10 break-words"
	>
		<h1 class="text-3xl md:text-5xl">
			Search 0.0000000{random}%<span class="text-lg">*</span> of the Web
		</h1>
		<p class="text-sm">* completely made up statistic</p>
	</div>
	<form on:submit|preventDefault class="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
		<input id="input" class="input" type="text" placeholder="Search" />
		<div class="flex justify-around py-5">
			<button type="button" class="btn variant-filled-primary">Search</button>
			<button on:click={clear} class="btn variant-filled-tertiary">Clear</button>
		</div>
	</form>
</div>
