<script>
	import { page } from '$app/stores';

	export let conditionChecker = false;
	export let url = '';
	export let title = '';
	export let info = '';

	/**
	 * @param {string} pathName
	 */
	// @ts-ignore
	function currentPathnameIs(links = [], pathName) {
		return links.some((linkVar) => pathName === linkVar);
	}
</script>

<a
	class=" {conditionChecker == true
		? 'block opacity-100'
		: 'hidden opacity-0 '} transition-all delay-500 duration-500 ease-out"
	href={url}
>
	<div
		class=" flex flex-1 p-3 rounded-md {currentPathnameIs([url], $page.url.pathname)
			? 'bg-normal-blue hover:bg-normal-blue/70'
			: 'bg-saftech-black/5 hover:bg-saftech-black/20'}  w-auto min-w-[200px] h-[90%] transition-all duration-500 ease-in-out"
	>
		<div class="px-1">
			<!-- svg icon -->
			<slot />
		</div>
		<div class="ml-2">
			<p
				class="text-lg {currentPathnameIs([url], $page.url.pathname)
					? 'text-saftech-white'
					: 'text-saftech-black'} "
			>
				{title}<span
					class=" block text-sm {currentPathnameIs([url], $page.url.pathname)
						? 'text-saftech-white/70'
						: 'text-saftech-gray'} ">{info}</span
				>
			</p>
		</div>
	</div>
</a>
