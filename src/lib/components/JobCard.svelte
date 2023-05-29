<script>
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import JobsearchItemsCard from '$lib/components/JobsearchItemsCard.svelte';

	let faqActive = false;

	export let applicationUrl = '/job';
	export let readAllUrl = 'job/';
	export let reqID = '109983';
	export let title = 'Technical Support Engineer 2 - Dynamics ERP/CRM';
	export let overview =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, placeat maxime porro enim ut beatae earum vel corporis aliquid velit cumque, debitis, nisi ipsum sit magni quam. Praesentium soluta vero consectetur perferendis illum porro nemo rerum earum perspiciatis beatae expedita sed eum, id aliquam sint voluptate eius tenetur a dolore, fugit nobis sequi temporibus maxime. Sint voluptatum suscipit eos nemo impedit sed architecto modi nihil temporibus est! Perferendis facilis labore neque consequatur debitis, corrupti rerum voluptatum deserunt? Quos voluptas deleniti vitae dolor corporis officiis omnis temporibus cum eaque quisquam. Excepturi provident assumenda aspernatur sapiente voluptatem dolores rerum vero laborum rem vitae omnis enim est, eius minima sunt eveniet, molestiae voluptatum accusamus id possimus ipsum dignissimos esse! Et, facilis? Illum consectetur expedita atque? Rem quaerat dignissimos iure minima aspernatur, nam doloremque quis officiis suscipit illo delectus perspiciatis sapiente, aut iusto! Voluptatum hic iste ut similique autem excepturi assumenda suscipit neque commodi ipsum, odit laudantium cumque enim quaerat repudiandae repellat. Ipsa sequi quas vero nemo voluptatibus iste reprehenderit quod animi cumque adipisci earum unde totam suscipit ex, harum sapiente laudantium ratione natus labore inventore omnis! Distinctio nobis magni cumque, repellat atque, est nostrum ullam nesciunt tempore ea eos odit laboriosam provident! Nisi maxime aspernatur itaque vitae alias optio hic veniam, impedit similique delectus cum dignissimos! Quod quo porro, et iste hic animi nulla sint quas rerum ducimus. Neque reiciendis dolor pariatur quisquam autem provident, asperiores nesciunt voluptatibus assumenda architecto mollitia ipsum aut officiis amet. Magnam incidunt sunt voluptatum, sed vero, culpa quas amet molestias exercitationem, commodi debitis rem. Maxime, laborum sunt. Aperiam odit sint fugit corporis? Magnam vel officia saepe esse iusto perspiciatis aliquam sed qui sequi! Architecto distinctio error recusandae aliquid ipsam eum, facilis culpa, praesentium omnis mollitia temporibus! Quam, minima facere repudiandae temporibus aliquam asperiores optio delectus! Provident tenetur fugit maxime non earum ex similique itaque obcaecati deserunt animi error vero, natus delectus perspiciatis nesciunt odit, quod vel eveniet minima! Itaque, optio officiis distinctio odio aspernatur nesciunt quos deserunt, esse doloribus molestias consequuntur, illo non? Culpa aperiam amet, debitis assumenda corporis nihil laudantium incidunt ipsam ratione rem dolore accusamus commodi quisquam, explicabo eius velit quos tenetur tempore dolores reprehenderit officia dicta. Quos enim sed blanditiis quas harum quasi officia ducimus debitis velit. Voluptas dignissimos architecto aliquid modi voluptatibus quos quasi impedit? Natus fuga animi facilis at reprehenderit nam odit suscipit et, dolorem, earum pariatur, laborum molestias vitae illum sapiente ab nisi ex totam ea! Sit doloribus inventore natus exercitationem ipsam dolore, doloremque esse repudiandae eaque eius cumque fuga vero aut repellat suscipit laudantium ea quidem quo rerum vitae rem voluptatibus laborum? Natus obcaecati modi explicabo accusamus distinctio ipsum esse assumenda nobis quaerat eaque consequatur, fugit ea id aliquam quam dolorem? Dolores, dolor autem reiciendis omnis cumque maiores velit impedit aspernatur debitis ipsum, dolorem voluptate nihil commodi officiis. Officia molestiae quis corporis animi minima tempora veniam architecto earum libero non odit velit temporibus provident, rem deleniti nisi reiciendis, perspiciatis suscipit asperiores quod eos? Beatae fugit assumenda culpa dicta illo totam odio.';
	export let workingLocations = 'KN 64 St, Kigali - Rwanda';
	export let workingTypes = 'Remotely, Hybrid';
	export let workingCategories = 'Technology Support';

	function toggleFAQ() {
		faqActive = !faqActive;
	}
</script>

<button
	on:click={toggleFAQ}
	class="hover:shadow-lg w-full h-full flex justify-center items-start cursor-pointer text-left rounded-md bg-white/70 shadow-sm py-6 mr-6 max-w-7xl px-2 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out"
>
	<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto">
		<div class="flex flex-row-reverse items-start w-full mr-6">
			<div class="flex justify-end items-start pl-10 w-fit h-16 flex-shrink-0">
				<a
					href={applicationUrl}
					class=" flex justify-between items-center space-x-5 rounded-md bg-normal-blue py-3 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
				>
					<span class="sr-only">Apply Now</span>
					Apply Now
					<span class="">
						<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
							><path
								d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
								transform="translate(0 0)"
							/></svg
						>
					</span>
				</a>
			</div>
			<div class="flex-1 flex-col justify-start items-start mt-0 pt-0 self-start">
				<div class=" line-clamp-1">
					<span
						class=" block text-2xl leading-snug font-bold lg:w-full text-normal-blue transition-all duration-500 ease-in-out"
						>{title}</span
					>
				</div>
				<p class="font-bold text-md text-normal-blue/90">ReqID: {reqID}</p>
				<div class="mt-4 flex transition-all duration-500 ease-in-out">
					<JobsearchItemsCard round="left" info={workingLocations}>
						<svg
							class="fill-saftech-black/60 mt-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="20"
							height="20"
						>
							<path
								d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z"
							/>
						</svg>
					</JobsearchItemsCard>
					<JobsearchItemsCard title="Working Type" info={workingTypes}>
						<svg class="fill-saftech-black/60 mt-1" viewBox="0 0 48 48" width="20" height="20">
							<path
								d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z"
							/>
						</svg>
					</JobsearchItemsCard>
					<JobsearchItemsCard title="Categories" info={workingCategories} round="right">
						<svg class="fill-saftech-black/60 mt-1" viewBox="0 0 48 48" width="20" height="20">
							<path
								d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z"
							/>
						</svg>
					</JobsearchItemsCard>
				</div>
			</div>

			<div class=" flex justify-start items-start w-16 h-16 flex-shrink-0">
				<svg
					class=" {faqActive === true
						? '-rotate-90 fill-saftech-white'
						: 'rotate-90 fill-saftech-gray'}   cursor-pointer transition-all duration-500 ease-in-out"
					width="30"
					height="30"
					viewBox="0 0 42 42"
					><path
						d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
						transform="translate(0 0)"
					/></svg
				>
			</div>
		</div>

		{#if faqActive}
			<div
				transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
				class="flex flex-row-reverse bg-white/90 shadow-lg h-full py-6 items-start w-full rounded-t-lg mr-6"
			>
				<div class="flex justify-end items-start pl-10 w-fit h-16 flex-shrink-0">&nbsp;</div>
				<div class="overflow-hidden flex-1 flex-col justify-start items-start mt-0 pt-0 self-start">
					<div class=" line-clamp-1">
						<span
							transition:fade={{ duration: 250, easing: quintOut }}
							class=" block text-2xl leading-snug font-bold lg:w-full text-saftech-black/70 transition-all duration-500 ease-in-out"
							>Overview</span
						>
					</div>
					<div
						class=" after:absolute after:w-full after:bg-gradient-to-t after:from-white after:h-[70px] after:top-[65%] after:left-0 line-clamp-4 mt-4 transition-all duration-500 ease-in-out"
					>
						<span
							class=" block text-sm lg:text-base w-full text-saftech-black/70 transition-all duration-500 ease-in-out"
							>{@html overview}</span
						>
					</div>
					<a
						href={readAllUrl}
						class="flex justify-between max-w-fit items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-normal-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 focus:px-3 transition-all duration-500 ease-out"
					>
						<span class="sr-only">More information about this job</span>
						Read all information here
						<span class="">
							<svg class="fill-current" viewBox="0 0 48 48" width="20" height="20">
								<path
									d="M4,26h35.172l-6.586,6.586c-0.781,0.781-0.781,2.047,0,2.828C32.977,35.805,33.488,36,34,36s1.023-0.195,1.414-0.586l10-10 C45.789,25.04,46,24.531,46,24s-0.211-1.039-0.586-1.414l-10-10c-0.781-0.781-2.047-0.781-2.828,0 c-0.781,0.781-0.781,2.047,0,2.828L39.172,22H4c-1.104,0-2,0.896-2,2S2.896,26,4,26z"
								/>
							</svg>
						</span>
					</a>
				</div>

				<div class=" flex justify-start items-start w-16 h-16 flex-shrink-0" />
			</div>
		{/if}
	</div>
</button>
