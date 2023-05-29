<script>
	import { getContext } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let header = '';
	export let sub = 'Filters matched no file';
	export let subsub = 'However, you can try applying other filters again... or';
	export let filterMatch = '';
</script>

<slot name="icon" />
<h2 class="text-center">
	{#key filterMatch || header}
		<span
			transition:fade={{ duration: 500, delay: 300 }}
			class="font-bold text-4xl text-saftech-black/80 trnsition-all duration-500 ease-in-out"
			>{filterMatch} {header}</span
		>
	{/key}

	{#key sub}
		<span
			transition:fade={{ duration: 500, delay: 600 }}
			class="block text-2xl font-normal max-w-xs text-saftech-black/60 trnsition-all duration-500 ease-in-out"
			>{sub}</span
		>
	{/key}

	{#key subsub}
		<span
			transition:fade={{ duration: 500, delay: 700 }}
			class="block text-xs font-normal max-w-xs text-saftech-black/60 trnsition-all duration-500 ease-in-out"
			>{subsub}</span
		>
	{/key}
</h2>

<a
	href="/jobs"
	class=" flex justify-between items-center space-x-5 rounded-md bg-normal-blue py-3 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 trnsition-all duration-500 ease-in-out"
>
	<span class="sr-only">Checkout All Job Listings</span>
	Checkout All Job Listings
	<span class="">
		<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
			><path
				d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
				transform="translate(0 0)"
			/></svg
		>
	</span>
</a>
