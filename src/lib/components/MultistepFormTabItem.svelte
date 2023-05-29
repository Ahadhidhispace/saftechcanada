<script context="module">
	import { writable } from 'svelte/store';

	export const activeFormTabId = writable(0);
	//export const lastActiveTabIndex = writable('0')

	let id = 0;
</script>

<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const tabId = id++;
	id > 2 ? (id = 0) : '';

	$: active = $activeFormTabId === tabId;
	let done = false;
	let defaulty = true;

	function setActive() {
		$activeFormTabId = tabId;

		//console.log($page)
	}

	onMount(() => {
		$activeFormTabId = 0;
	});
</script>

<!-- <a> tag changed to <button>  -->
<!-- href changed to id -->
<button
	on:click|preventDefault={setActive}
	id={'#tab' + $activeFormTabId}
	class="rounded-2xl {active
		? 'bg-normal-blue/10 text-saftech-white'
		: 'bg-saftech-gray/10 text-saftech-black'} w-full self-stretch text-left transition-all duration-500 ease-out"
>
	<div
		class=" flex flex-1 p-3 justify-center items-center w-auto min-w-[110px] h-[110px] transition-all duration-500 ease-in-out"
	>
		<div
			class=" {active
				? 'bg-normal-blue'
				: 'bg-white/10 ring-1 ring-saftech-black/50'}  rounded-full p-4"
		>
			<!-- svg icon -->
			<slot name="tab" isActive={active} />
		</div>
	</div>
</button>
