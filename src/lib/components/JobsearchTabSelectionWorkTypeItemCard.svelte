<script context="module">
	import { writable } from 'svelte/store';

	const activeWorkTypeId = writable(0);
	const selectedWorkType = writable('0');

	let worktype_id = 0;
</script>

<script>
	import { page } from '$app/stores';

	// export let url = '#'
	export let title = 'Location';
	export let info = 'KN 64 St, Kigali - Rwanda';
	export let round = 'none';
	export let workType = '';

	const selectionItemId = worktype_id++;
	$: active = $activeWorkTypeId === selectionItemId;

	/**
	 * @param {{ target: { dataset: string; }; }} event
	 */
	// function setActive(event){
	//     $activeWorkTypeId = selectionItemId
	//     $selectedWorkType = JSON.stringify(event.currentTarget.getAttribute('data-location'))
	//     console.log($selectedWorkType)
	// }
</script>

<button
	on:click={(event) => {
		active = !active;

		if (active) {
			$activeWorkTypeId = selectionItemId;
			$selectedWorkType = JSON.stringify(event.currentTarget.getAttribute('data-location'));
			$page.url.searchParams.delete('work-type'); // Remove all the previous "work-type"
			$page.url.searchParams.append('work-type', $activeWorkTypeId.toString()); //Then add new one
			console.log($page);
		} else {
			$activeWorkTypeId = -1;
			$selectedWorkType = '';
			$page.url.searchParams.delete('work-type');
			console.log($page);
		}

		console.log($selectedWorkType);
	}}
	data-location={workType}
	type="button"
	class=" {active
		? 'bg-normal-blue text-saftech-white'
		: 'bg-white text-saftech-black'} w-full text-left transition-all duration-500 ease-out"
>
	<div
		class=" flex flex-1 p-3 {round == 'left' ? 'rounded-l-lg' : 'rounded-l-none'} {round == 'right'
			? 'rounded-r-lg'
			: 'rounded-r-none'} {round == 'none'
			? 'rounded-none'
			: ''} bg-saftech-gray/5 w-auto min-w-[200px] h-[90%] transition-all duration-500 ease-in-out"
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
