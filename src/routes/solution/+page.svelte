<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import SolutionCard from '$lib/components/SolutionCard.svelte';

	// importing page hero images
	import heroCute from '$lib/assets/images/page_hero_cute.jpg';
	import heroCoding from '$lib/assets/images/page_hero_coding.jpg';
	import heroCelebration from '$lib/assets/images/page_hero_celebration.jpg';
	import heroYellow from '$lib/assets/images/page_hero_yellow.jpg';
	import heroGirls from '$lib/assets/images/page_hero_girls.jpg';
	import heroStaff from '$lib/assets/images/page_hero_staff.jpg';
	import heroLatino from '$lib/assets/images/page_hero_latino.jpg';
	import heroGood from '$lib/assets/images/page_hero_good.jpg';
	import heroObserve from '$lib/assets/images/page_hero_observe.jpg';
	import heroService from '$lib/assets/images/page_hero_service.jpg';

	// import service background / join the team lady
	import serviceBg from '$lib/assets/images/services_01.jpg';
	import joinusLady from '$lib/assets/images/join_us.png';

	// import svg for services
	import solutionTech from '$lib/assets/icons/icons8_technical_support.svg';
	import solutionSoftware from '$lib/assets/icons/icons8_electronics_2.svg';
	import solutionSales from '$lib/assets/icons/icons8_fantasy.svg';
	import solutionCustomer from '$lib/assets/icons/icons8_customer_support.svg';

	let solutions = [
		{
			icon: solutionTech,
			name: 'Technology Support',
			description: `There are locations in the United states of america as well as ationally.
                The organization was established in 2000 on the basis of a small idea deived
                by its promoters that was incepted.`,
			url: '/solution/slug'
		},
		{
			icon: solutionSoftware,
			name: 'Sofware Develepment',
			description: `There are locations in the United states of america as well as ationally.
                The organization was established in 2000 on the basis of a small idea deived
                by its promoters that was incepted.`,
			url: '/solution/slug'
		},
		{
			icon: solutionSales,
			name: 'Sales Agents',
			description: `There are locations in the United states of america as well as ationally.
                The organization was established in 2000 on the basis of a small idea deived
                by its promoters that was incepted.`,
			url: '/solution/slug'
		},
		{
			icon: solutionCustomer,
			name: 'Customer Services',
			description: `There are locations in the United states of america as well as ationally.
                The organization was established in 2000 on the basis of a small idea deived
                by its promoters that was incepted.`,
			url: '/solution/slug'
		}
	];
</script>

<PageHero
	heading="Welcome to Our News"
	sub="The Official News Page. A Way to Know and Stay Updated About What is happening at Saftech Canada."
	background={heroGirls}
>
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
</PageHero>

<!-- Solution or Services section -->
<section
	class="w-full h-fit bg-saftech-white pt-0 pb-20 bg-no-repeat bg-cover bg-right"
	style="background-image: url('')"
>
	<div
		class="z-10 relative flex flex-col gap-5 w-full h-fit overflow-x-hidden mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-7 flex-col w-[50%] h-full p-20">
			<h4 class="text-sm font-bold text-deep-blue w-full">OUR SERVICES</h4>
			<h1 class="text-4xl font-bold lg:w-full leading-none text-deep-blue">
				Our Services, The Solution You're Looking For!
			</h1>
			<h2 class="text-sm lg:text-base w-full leading-none text-deep-blue">
				We always go above and beyond, We are more than a company
			</h2>

			<button
				type="button"
				class=" hidden justify-between border border-solid border-saftech-white items-center space-x-5 rounded-md bg-transparent py-2 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
			>
				<span class="sr-only">EXPLORE</span>
				EXPLORE
				<span class="">
					<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
						><path
							d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
							transform="translate(0 0)"
						/></svg
					>
				</span>
			</button>
		</div>

		<div
			class="bg-saftech-black/10 rounded-md flex justify-evenly items-center py-16 gap-12 flex-wrap"
		>
			{#each solutions as service}
				<SolutionCard icon={service.icon} name={service.name} description={service.description} />
			{/each}
		</div>
	</div>
</section>
<!-- The end of services section -->
