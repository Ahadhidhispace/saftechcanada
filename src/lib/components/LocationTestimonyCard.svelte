<script>
	import RatingBar from './RatingBar.svelte'

	// import RatingBar component
	// inport RatingBar from '$lib/components/RatingBar.svelte'

	export let witness = ''
	export let photo = ''
	export let proffesion = ''
	export let organization = ''
	export let detail = ''
</script>

<div class="w-full h-[320px] mt-4 transition-all duration-500 ease-in-out">
	<div
		style="background-image: url('{photo}');"
		class="flex justify-center h-[300px] w-[213px] ring-[8px] ring-[#e6e9eb] rounded-2xl bg-no-repeat bg-center bg-cover transition-all duration-500 ease-in-out"
	>
		<div
			class="flex flex-col justify-between items-start bg-[#e6e9eb] rounded-md space-y-4 self-end mb-4 w-[600px] h-fit px-4 py-4 ml-[300px] transition-all duration-500 ease-in-out"
		>
			<div>
				<span
					class=" block text-lg font-bold text-dark-blue leading-6 mb-1 line-clamp-2 transition-all duration-500 ease-in-out"
					>{witness}</span
				>
				<span
					class=" block -mt-1 text-xs font-normal text-saftech-gray/80 line-clamp-1 transition-all duration-500 ease-in-out"
					>{proffesion} @{organization}</span
				>
			</div>

			<!-- <div class="flex justify-between items-start space-x-1">
        <RatingBar/>
        <RatingBar/>
        <RatingBar/>
        <RatingBar/>
        <RatingBar/>
        </div> -->

			<div>
				<p
					class="w-[200px] text-deep-blue/80 text-xs line-clamp-7 transition-all duration-500 ease-in-out"
				>
					{detail}
				</p>
			</div>
		</div>
	</div>
</div>
