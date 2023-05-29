<script>
	import { page } from '$app/stores';

	export let conditionChecker = true;
	// export let url = '#'
	export let title = 'Location';
	export let info = 'KN 64 St, Kigali - Rwanda';
	export let round = 'none';

	/**
	 * @param {string} pathName
	 */
	// @ts-ignore
	function currentPathnameIs(links = [], pathName) {
		return links.some((linkVar) => pathName === linkVar);
	}
</script>

<button
	type="button"
	class=" {conditionChecker == true
		? 'block opacity-100'
		: 'hidden opacity-0 '} text-left transition-all delay-500 duration-500 ease-out"
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
			<slot />
		</div>
		<div class="ml-2">
			<p class="text-md text-saftech-black">
				{title}<span class=" block text-xs text-saftech-gray">{@html info}</span>
			</p>
		</div>
	</div>
</button>
