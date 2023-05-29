<script context="module">
	import { writable } from 'svelte/store';

	export const activeTabId = writable(0);
	//export const lastActiveTabIndex = writable('0')

	let id = 0;
</script>

<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// export let url = '#'
	export let title = 'Location';
	export let info = 'KN 64 St, Kigali - Rwanda';
	export let round = 'none';

	const tabId = id++;
	id > 2 ? (id = 0) : '';
	$: active = $activeTabId === tabId;

	function setActive() {
		$activeTabId = tabId;

		//console.log($page)
	}

	onMount(() => {
		$activeTabId = 0;
	});
</script>

<!-- <a> tag changed to <button>  -->
<!-- href changed to id -->
<button
	on:click={setActive}
	id={'#tab' + $activeTabId}
	class=" {active
		? 'bg-normal-blue text-saftech-white shadow-xl'
		: 'bg-saftech-gray/5 text-saftech-black'} w-full text-left transition-all duration-500 ease-out"
>
	<div
		class=" flex flex-1 p-3 {round == 'left' ? 'rounded-l-lg' : 'rounded-l-none'} {round == 'right'
			? 'rounded-r-lg'
			: 'rounded-r-none'} {round == 'none'
			? 'rounded-none'
			: ''} w-auto min-w-[200px] h-[90%] transition-all duration-500 ease-in-out"
	>
		<div class="">
			<!-- svg icon -->
			<slot name="tab" isActive={active} />
		</div>
		<div class="ml-2">
			<p
				class="text-md {active
					? 'text-saftech-white'
					: 'text-saftech-black'} transition-all duration-500 ease-in-out"
			>
				{title}<span
					class=" block text-xs text-saftech-gray transition-all duration-500 ease-in-out"
					>{@html info}</span
				>
			</p>
		</div>
	</div>
</button>
