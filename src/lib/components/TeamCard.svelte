<script>
	export let name = '';
	export let position = '';
	export let background = '';
</script>

<div class="w-full h-[320px] mt-10">
	<div
		style="background-image: url('{background}');"
		class="flex justify-center h-80 w-[213px] rounded-2xl bg-no-repeat bg-center bg-cover"
	>
		<div
			class="flex justify-between items-center self-end mb-4 w-11/12 h-fit px-3 py-2 backdrop-blur rounded-lg border border-solid border-saftech-white/10 shadow-md"
		>
			<div>
				<span class=" block text-lg font-bold text-saftech-white">{name}</span>
				<span class=" block -mt-1 text-xs font-normal text-saftech-white/70">{position}</span>
			</div>

			<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
				><path
					d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
					transform="translate(0 0)"
				/></svg
			>
		</div>
	</div>
</div>
