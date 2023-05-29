<script>
	export let heading = '';
	export let sub = '';
	export let background = '';
</script>

<div class="w-auto h-fit relative transition-all duration-500 ease-out">
	<div
		style="background-image: url('{background}');"
		class="flex justify-center h-full lg:min-h-[550px] w-auto bg-no-repeat bg-center bg-cover overflow-hidden py-10 transition-all duration-500 ease-out"
	>
		<div
			class="flex flex-col justify-between items-start space-y-5 self-end mb-0 mt-32 w-full h-fit p-8 rounded-3xl bg-gradient-to-r from-saftech-black to-saftech-black/10 bborder bborder-solid bborder-saftech-white/10 shadow-md mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 transition-all duration-500 ease-out"
		>
			<div class="flex flex-col justify-start space-y-7 transition-all duration-500 ease-out">
				<span
					class=" block mt-3 text-lg lg:text-6xl lg:w-2/3 font-bold text-saftech-white transition-all duration-500 ease-out"
					>{heading}</span
				>
				<span
					class=" block text-lg font-normal lg:w-[500px] text-saftech-white/80 transition-all duration-500 ease-out"
					>{sub}</span
				>
			</div>
			<slot />
		</div>
	</div>

	<svg
		class="rotate-90 animate-bounce absolute bottom-0 left-2/4 -mb-[20px] bg-dark-blue hover:bg-saftech-white rounded-full shadow-lg hover:fill-dark-blue hover:cursor-pointer fill-saftech-white ring-8 hover:ring-10 ring-current/50 border-4 border-solid border-dark-blue hover:border-saftech-white transition-all duration-500 ease-out"
		width="40"
		height="40"
		viewBox="0 0 42 42"
		><path
			d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
			transform="translate(0 0)"
		/></svg
	>
</div>
