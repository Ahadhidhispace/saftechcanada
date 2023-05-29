<script context="module">
	import { writable } from 'svelte/store';

	const activeCategoryId = writable(0);
	const selectedCategory = writable('0');

	let category_id = 0;
</script>

<script>
	import { page } from '$app/stores';

	// export let url = '#'
	export let title = 'Location';
	export let info = 'KN 64 St, Kigali - Rwanda';
	export let round = 'none';
	export let category = '';

	const selectionItemId = category_id++;
	$: active = $activeCategoryId === selectionItemId;

	/**
	 * @param {{ target: { dataset: string; }; }} event
	 */
	// function setActive(event){
	//     $activeCategoryId = selectionItemId
	//     $selectedCategory = JSON.stringify(event.currentTarget.getAttribute('data-location'))
	//     console.log($selectedCategory)
	// }
</script>

<button
	on:click={(event) => {
		active = !active;

		if (active) {
			$activeCategoryId = selectionItemId;
			$selectedCategory = JSON.stringify(event.currentTarget.getAttribute('data-location'));
			$page.url.searchParams.delete('category'); // Remove all the previous "category"
			$page.url.searchParams.append('category', $activeCategoryId.toString()); // Then add new one
			console.log($page);
		} else {
			$activeCategoryId = -1;
			$selectedCategory = '';
			$page.url.searchParams.delete('category');
			console.log($page);
		}

		console.log($selectedCategory);
	}}
	data-location={category}
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
