<script>
	export let count = '';
	export let type = '';
	export let content = '';
</script>

<a class="" href="#">
	<div
		class=" flex flex-1 justify-center items-center p-5 rounded-md bg-normal-blue/10 hover:bg-dark-blue/30 w-auto min-w-[200px] h-[90%] transition-all ease-in-out"
	>
		<div class="px-1">
			<span class="text-6xl font-bold text-saftech-white line-clamp-1">{count}</span>
		</div>
		<div class="ml-2">
			<p class="text-lg text-saftech-white font-bold line-clamp-1">
				{type}<span class=" block text-sm font-normal text-saftech-white line-clamp-1"
					>{content}</span
				>
			</p>
		</div>
	</div>
</a>
