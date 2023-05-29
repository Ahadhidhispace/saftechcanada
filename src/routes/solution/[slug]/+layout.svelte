<script>
	import joinusLady from '$lib/assets/images/join_us.png';
</script>

<slot />

<!-- Join us section -->
<section class="w-full h-fit bg-saftech-white py-16">
	<div
		class="w-full h-[325px] bg-[#d1d3d1] flex justify-stretch items-center rounded-2xl mt-48 mx-auto max-w-7xl"
	>
		<div class="relative flex self-end flex-shrink-0 w-auto h-[500px]">
			<img class="rounded-bl-2xl" src={joinusLady} alt="Join us lady" />
		</div>

		<div class="flex justify-normal items-center">
			<div
				class="w-full h-full flex justify-center items-start rounded-md bg-saftech-gray/20 py-10 mr-6 max-w-7xl px-2 sm:px-6 lg:px-8"
			>
				<div
					class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto py-100"
				>
					<div class="flex justify-between flex-col items-start w-full">
						<div>
							<span class=" block text-4xl font-bold lg:w-[400px] mb-3 text-saftech-black">
								HOW CAN WE SUPPORT YOU?</span
							>
							<span class=" block text-sm lg:text-base w-full lg:w-[280px] text-saftech-black">
								Let's start the conversation. Contact us to learn more.
							</span>
						</div>
						<button
							type="button"
							class=" group mt-6 flex justify-between items-center border border-solid border-dark-blue space-x-3 rounded-md bg-dark-blue hover:bg-saftech-white py-2 px-3 text-sm text-bold text-saftech-white hover:text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all ease-in-out"
						>
							<span class="sr-only">contact us</span>
							CONTACT US
							<span class="">
								<svg
									class=" fill-saftech-white group-hover:fill-dark-blue"
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
		</div>
	</div>
</section>
<!-- The end of the join us section -->
