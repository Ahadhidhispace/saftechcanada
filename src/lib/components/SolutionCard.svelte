<script>
	export let icon = '';
	export let name = '';
	export let description = '';
	export let renderButton = true;
</script>

<a class="" href="#">
	<div
		class=" flex flex-1 p-5 rounded-md hover:bg-saftech-white bg-saftech-white/90 w-fit min-w-[200px] max-w-lg h-auto transition-all ease-in-out"
	>
		<div class=" flex justify-center items-start w-[400px]">
			<!-- svg icon -->
			<img src={icon} class="w-36 h-36 fill-dark-blue" alt="Technology Support" />
		</div>

		<div class="ml-2">
			<p class="text-3xl font-bold text-dark-blue leading-none">
				{name}<span class=" block mt-3 font-normal text-sm text-current"> {description}</span>
			</p>

			{#if renderButton}
				<button
					type="button"
					class=" flex justify-between border border-solid border-transparent items-center space-x-5 rounded-md bg-transparent py-2 mt-3 text-sm font-semibold text-dark-blue hover:text-deep-blue focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
				>
					<span class="sr-only">LEARN MORE</span>
					LEARN MORE
					<span class="">
						<svg class=" fill-dark-blue opacity-80" width="15" height="15" viewBox="0 0 42 42"
							><path
								d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
								transform="translate(0 0)"
							/></svg
						>
					</span>
				</button>
			{/if}
		</div>
	</div>
</a>
