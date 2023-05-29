<script>
	export let name = '';
	export let position = '';
	export let background = '';
	export let specialClass = '';
	export let readTime = '';
</script>

<div class="w-auto h-96 {specialClass}">
	<div
		style="background-image: url('{background}');"
		class="flex justify-center h-96 w-auto rounded-2xl bg-no-repeat bg-center bg-cover overflow-hidden"
	>
		<div
			class="flex flex-col justify-between items-start space-y-5 self-end mb-0 w-full h-fit p-8 backdrop-blur rounded-t-lg bg-dark-blue/50 bborder bborder-solid bborder-saftech-white/10 shadow-md"
		>
			<div class="flex flex-col-reverse justify-start">
				<span
					class=" block mt-3 text-lg lg:text-2xl w-full {specialClass != ''
						? 'w-3/4'
						: ''} font-bold text-saftech-white">{name}</span
				>
				<span class=" block text-xs font-normal text-saftech-white"
					>{position}
					<div class=" inline-flex w-2 h-2 mx-2 rounded-full bg-saftech-gray" />
					{readTime}</span
				>
			</div>
			<button
				type="button"
				class=" group opacity-90 hover:opacity-100 flex justify-between items-center space-x-3 rounded-md hover:bg-dark-blue bg-saftech-white py-2 px-3 text-sm text-bold hover:text-saftech-white text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all ease-in-out"
			>
				<span class="sr-only">Read this article</span>
				READ FULL ARTICLE
				<span class="">
					<svg
						class=" fill-dark-blue group-hover:fill-saftech-white"
						width="15"
						height="15"
						viewBox="0 0 42 42"
						><path
							d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
							transform="translate(0 0)"
						/></svg
					>
				</span>
			</button>
		</div>
	</div>
</div>
