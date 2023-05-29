<script>
	import { page } from '$app/stores';
	export let data;

	console.log($page);

	// @ts-ignore
	import { fade, scale } from 'svelte/transition';
	// @ts-ignore
	import { tweened } from 'svelte/motion';
	// @ts-ignore
	import { cubicOut, quintOut } from 'svelte/easing';

	// import service background / join the team lady
	import serviceBg from '$lib/assets/images/services_01.jpg';
	import joinusLady from '$lib/assets/images/join_us_opt_2x.png';
	import decorBg from '$lib/assets/images/Group 4.png';

	// import svg for services
	import solutionTech from '$lib/assets/icons/icons8_technical_support.svg';
	import solutionSoftware from '$lib/assets/icons/icons8_electronics_2.svg';
	import solutionSales from '$lib/assets/icons/icons8_fantasy.svg';
	import solutionCustomer from '$lib/assets/icons/icons8_customer_support.svg';

	// import components

	import Carousel from '$lib/components/Carousel.svelte';
	import SolutionCard from '$lib/components/SolutionCard.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import FootprintCard from '$lib/components/FootprintCard.svelte';
	import FaqCard from '$lib/components/FaqCard.svelte';

	// import slides images
	import slide from '$lib/assets/images/services_02.png';
	import slideOne from '$lib/assets/images/slide_01.jpg';
	import slideTwo from '$lib/assets/images/slide_02.jpg';
	import slideThree from '$lib/assets/images/slide_03.jpg';
	import slideFour from '$lib/assets/images/slide_04.jpg';
	import slideFive from '$lib/assets/images/services.jpg';
	import slideSix from '$lib/assets/images/services_01.jpg';

	// import team images
	import adaCute from '$lib/assets/images/team_ada_cute.jpg';
	import evaCute from '$lib/assets/images/team_eva_cute.jpg';
	import eyeGrace from '$lib/assets/images/team_eye_grace.jpg';
	import johnDoe from '$lib/assets/images/team_john_doe.jpg';
	import mrWilson from '$lib/assets/images/team_mr_wilson.jpg';
	import otileBrown from '$lib/assets/images/team_otile_brown.jpg';

	//import news images

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

	let team = [
		{
			name: 'Ada Cute',
			position: 'Secretary',
			email: 'adacute@gmail.com',
			profileImage: adaCute,
			social: [
				{
					instagram: 'https://instagram.com/ada_cute',
					facebook: 'https://facebook.com/ada_cute',
					linkedin: 'https://linkedin.com/ada_cute',
					youtube: 'https://youtube.com/ada_cute'
				}
			]
		},
		{
			name: 'Otile Brown',
			position: 'Manager',
			email: 'adacute@gmail.com',
			profileImage: otileBrown,
			social: [
				{
					instagram: 'https://instagram.com/ada_cute',
					facebook: 'https://facebook.com/ada_cute',
					linkedin: 'https://linkedin.com/ada_cute',
					youtube: 'https://youtube.com/ada_cute'
				}
			]
		},
		{
			name: 'Eye Grace',
			position: 'Human Resource',
			email: 'adacute@gmail.com',
			profileImage: eyeGrace,
			social: [
				{
					instagram: 'https://instagram.com/ada_cute',
					facebook: 'https://facebook.com/ada_cute',
					linkedin: 'https://linkedin.com/ada_cute',
					youtube: 'https://youtube.com/ada_cute'
				}
			]
		},
		{
			name: 'John Doe',
			position: 'Coordinator',
			email: 'adacute@gmail.com',
			profileImage: johnDoe,
			social: [
				{
					instagram: 'https://instagram.com/ada_cute',
					facebook: 'https://facebook.com/ada_cute',
					linkedin: 'https://linkedin.com/ada_cute',
					youtube: 'https://youtube.com/ada_cute'
				}
			]
		},
		{
			name: 'Mr Wilson',
			position: 'President',
			email: 'adacute@gmail.com',
			profileImage: mrWilson,
			social: [
				{
					instagram: 'https://instagram.com/ada_cute',
					facebook: 'https://facebook.com/ada_cute',
					linkedin: 'https://linkedin.com/ada_cute',
					youtube: 'https://youtube.com/ada_cute'
				}
			]
		}
	];

	let news = [
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideOne,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideFive,
			specialClass: 'col-span-2'
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideThree,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideFour,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideTwo,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slide,
			specialClass: 'col-span-2'
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideSix,
			specialClass: ''
		}
	];

	let testimonials = [
		{
			featured: true,
			witness: 'Niyobuhungiro Wilson Long',
			photo: evaCute,
			proffesion: 'Designer',
			organization: 'DHispace, Inc',
			detail:
				'Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the'
		},
		{
			featured: true,
			witness: 'Evan Lee',
			photo: otileBrown,
			proffesion: 'Photographer',
			organization: 'Pixel, Inc',
			detail:
				'Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps '
		},
		{
			featured: true,
			witness: 'Grace Makala',
			photo: eyeGrace,
			proffesion: 'Entrepreneur',
			organization: 'Afromark. Co',
			detail:
				'Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the'
		}
	];

	let footprints = [
		{
			count: '03',
			type: 'Countries',
			content: 'Rwanda, Uganda, Canada'
		},
		{
			count: '25',
			type: 'Sites',
			content: 'Listing sites here'
		},
		{
			count: '418',
			type: 'Employees',
			content: 'contents not available'
		}
	];

	let faqCollection = [
		{
			question: 'How many countries do you operate in?',
			answer:
				'There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally.'
		},
		{
			question: 'How many employees do you have?',
			answer:
				'As of 2024, There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally.'
		},
		{
			question: 'What are the qualificatios for joining the team?',
			answer:
				'For joing our comunity, There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally. There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally'
		},
		{
			question: 'How can I hire Saftech Canada?',
			answer:
				"Hiring us is simple and straight forword, here is what you're gonna do: There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally."
		},
		{
			question: 'Do you support companies of all size?',
			answer:
				'Regarding the company sizes, we are ok regardless of the size of your company. There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally.'
		}
	];

	// let newCollection = faqCollection.splice(0, 3)
	// console.log(newCollection)

	// @ts-ignore
	function decorateCount(countIndex) {
		if (countIndex < 10) {
			return `0${countIndex + 1}`;
		} else {
			return countIndex + 1;
		}
	}

	//
</script>

<Carousel />

<!-- about us short section -->
<section class=" relative bg-saftech-white pt-[150px]">
	<div
		class="z-10 relative flex items-start w-full h-fit overflow-x-hidden bg-saftech-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-7 flex-col w-3/5 h-full">
			<h4 class="text-sm font-bold text-saftech-black w-[500px]">ABOOUT OUR COMPANY</h4>
			<h1 class="text-5xl font-bold lg:w-4/5 text-saftech-black w-[500px]">
				Best IT-Solutions company near the world
			</h1>
			<h2 class="text-sm lg:text-base lg:w-4/5 text-saftech-black w-[400px]">
				There are locations in the United states of america as well as ationally. The organization
				was established in 2000 on the basis of a small idea deived by its promoters that was
				incepted. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			</h2>

			<a
				href="/about"
				class=" flex justify-between items-center space-x-5 rounded-md bg-saftech-black py-2 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
			>
				<span class="sr-only">Read More</span>
				READ MORE
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
	</div>
	<svg
		class=" z-10 absolute inset-0 lg:top-[10%] lg:left-[65%] scale-75"
		width="512"
		height="448"
		viewBox="0 0 512 448"
		><path
			d="M32,32a32,32,0,0,0,0,64H480a32,32,0,0,0,0-64Zm0,384a32,32,0,0,0,0,64H160V352a96,96,0,0,1,192,0V480H480a32,32,0,0,0,0-64V128H32Z"
			transform="translate(0 -32)"
			fill="#001b48"
			opacity="0.03"
		/></svg
	>
	<!-- input="SourceAlpha" removed inside svg -->
	<!-- <svg class="hidden pointer-events-none z-0 absolute inset-0 scale-[1.06] w-full -mt-[280px]" width="2090.085" height="1111.66" viewBox="0 0 2090.085 1111.66"><defs><filter id="a" x="0" y="24.237" width="2057.801" height="1059.337" filterUnits="userSpaceOnUse"><feOffset dy="3" /><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(140.801 -1165.094)"><rect width="1920" height="600" transform="translate(-12 1416)" fill="#f5f5f5" opacity="0"/><rect width="1946" height="734" rx="58" transform="matrix(0.996, 0.087, -0.087, 0.996, 10.689, 1165.094)" fill="#02457a"/><g transform="matrix(1, 0, 0, 1, -140.8, 1165.09)" filter="url(#a)"><rect width="1971.228" height="872.855" rx="55" transform="matrix(1, -0.09, 0.09, 1, 9, 202.04)" fill="#f5f5f5"/></g><rect width="1918.131" height="248" rx="41" transform="translate(-18.839 1995.316) rotate(1)" fill="#f5f5f5"/></g></svg> -->
	<img
		class=" pointer-events-none z-0 absolute inset-0 scale-[1.06] w-full -mt-[80px]"
		src={decorBg}
		alt=""
	/>
</section>
<!-- The end of about section -->

<!-- Solution or Services section -->
<section
	class="w-full h-fit bg-normal-blue pt-40 pb-20 bg-no-repeat bg-cover bg-right"
	style="background-image: url('{serviceBg}')"
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

<!-- Team section -->
<section class="w-full h-fit bg-saftech-white py-16">
	<div
		class="w-full h-full flex flex-col justify-center items-start rounded-md bg-saftech-gray/10 py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-black w-full -mt-4 mb-4">OUR LEADERSHIP</h4>
			<span class=" block text-4xl font-bold lg:w-full text-saftech-black">
				Meet Our Incredible Team articles</span
			>
			<span class=" block text-sm lg:text-base w-full text-saftech-black">
				We are always working together to make your dream real.
			</span>

			<a
				href="/leadership"
				class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 focus:px-3 transition-all duration-500 ease-out"
			>
				<span class="sr-only">More on team here</span>
				More on team here
				<span class="">
					<svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"
						><path
							d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
							transform="translate(0 0)"
						/></svg
					>
				</span>
			</a>
		</div>

		<div class="flex justify-normal items-center space-x-5">
			{#each team as article}
				<TeamCard
					name={article.name}
					position={article.position}
					background={article.profileImage}
				/>
			{/each}
		</div>
	</div>
</section>
<!-- The end of Team section -->

<!-- News insights section -->
<section class="w-full h-fit bg-saftech-gray/5 py-16">
	<div
		class="w-full h-full flex flex-col justify-center items-start rounded-md bg-saftech-gray/10 mb-10 py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-black w-full -mt-4 mb-4">NEWS INSIGHTS</h4>
			<div class="flex justify-between items-center w-full">
				<div>
					<span class=" block text-4xl font-bold lg:w-full text-saftech-black">
						Behold, Our Latest News!</span
					>
					<span class=" block text-sm lg:text-base w-full text-saftech-black">
						Trusted way to know what is happening at saftech canada.
					</span>
				</div>
				<button
					type="button"
					class=" group flex justify-between items-center border border-solid border-dark-blue space-x-3 rounded-md bg-dark-blue hover:bg-saftech-white py-2 px-3 text-sm text-bold text-saftech-white hover:text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all ease-in-out"
				>
					<span class="sr-only">Browse for more</span>
					BROWSE FOR MORE
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

	<div class="grid grid-cols-3 gap-8 items-center w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		{#each news as article}
			<NewsCard
				name={article.title}
				position={article.publisher}
				background={article.articleImage}
				specialClass={article.specialClass}
				readTime={article.readTime}
			/>
		{/each}
	</div>
</section>
<!-- The end of news insights section -->

<!-- Testimonials section -->
<section class="w-full h-fit bg-saftech-white py-16">
	<div
		class="w-full h-full flex flex-col justify-center items-start rounded-md mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-black w-full -mt-4 mb-4">TESTIMONIALS</h4>
			<span class=" block text-4xl font-bold lg:w-2/4 text-saftech-black">
				We've met a ton of proffesionals and brand owners along the way!</span
			>
			<span class=" block text-sm lg:text-base w-full text-saftech-black">
				Gorgeous people we interacted with say this...
			</span>

			<button
				type="button"
				class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
			>
				<span class="sr-only">More testimonials here</span>
				More testimonials here
				<span class="">
					<svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"
						><path
							d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
							transform="translate(0 0)"
						/></svg
					>
				</span>
			</button>
		</div>

		<div class="flex justify-normal items-center space-x-48">
			{#each testimonials as review}
				{#if review.featured}
					<TestimonialCard
						witness={review.witness}
						photo={review.photo}
						proffesion={review.proffesion}
						organization={review.organization}
						detail={review.detail}
					/>
				{/if}
			{/each}
		</div>
	</div>
</section>
<!-- The end of Testimonials section -->

<!-- Global Footprint section -->
<section class="w-full h-fit bg-saftech-black py-16">
	<div
		class="w-full h-full flex justify-between items-center rounded-md mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-1 flex-col w-fit h-auto">
			<h4 class="text-sm font-bold text-saftech-gray w-full -mt-4">OUR IMPACT</h4>
			<span class=" block text-4xl font-bold text-saftech-gray"> Global Footprint</span>
			<span class=" block text-sm lg:text-base w-60 text-saftech-gray">
				Get to know our employees, sites and countries in which we operate.
			</span>
		</div>

		<div class="flex justify-normal items-center space-x-4">
			{#each footprints as footprint}
				<FootprintCard count={footprint.count} type={footprint.type} content={footprint.content} />
			{/each}
		</div>
	</div>
</section>
<!-- The end of the Footprint section -->

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
					<h4 class="text-sm font-bold text-saftech-black w-full -mt-4 mb-4">INVITATION</h4>
					<div class="flex justify-between flex-col items-start w-full">
						<div>
							<span class=" block text-4xl font-bold lg:w-full text-saftech-black">
								Join the team</span
							>
							<span class=" block text-sm lg:text-base w-full lg:w-2/4 text-saftech-black">
								A global comunity that embraces challenges and always curious to go deeper.
							</span>
						</div>
						<button
							type="button"
							class=" group mt-6 flex justify-between items-center border border-solid border-dark-blue space-x-3 rounded-md bg-dark-blue hover:bg-saftech-white py-2 px-3 text-sm text-bold text-saftech-white hover:text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all ease-in-out"
						>
							<span class="sr-only">Find an opportunity</span>
							FIND AN OPPORTUNITY
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

<!-- The FAQs section -->
<section class="w-full h-fit bg-saftech-white py-16">
	<div
		class="w-full h-full bg-[#d1d3d1]/20 flex justify-stretch items-center py-20 rounded-2xl mx-auto max-w-7xl"
	>
		<div class="relative flex justify-center self-start flex-shrink-0 w-2/5 h-[500px]">
			<!--  -->
			<div
				class="w-full h-full flex justify-center items-start rounded-md py-10 mr-6 max-w-7xl px-2 sm:px-6 lg:px-8"
			>
				<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto">
					<h4 class="text-sm font-bold text-saftech-black w-full -mt-4 mb-4">The FAQs</h4>
					<div class="flex justify-between flex-col items-start w-full">
						<div class="">
							<span class=" block text-4xl font-bold lg:w-2/3 text-saftech-black">
								Frequently Asked Questions</span
							>
							<span class=" block text-sm lg:text-base w-full lg:w-2/3 mt-6 text-saftech-black">
								Take a look at the questions people ask most and their answers.
							</span>
						</div>

						<!--  -->
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="240" height="240">
							<linearGradient
								id="wvGVdeqK1wyL1PvDjvN74a"
								x1="25.193"
								x2="32.706"
								y1="19.887"
								y2="44.278"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#0176d0" />
								<stop offset="1" stop-color="#16538c" />
							</linearGradient>
							<path
								fill="url(#wvGVdeqK1wyL1PvDjvN74a)"
								d="M16,20h24c1.105,0,2,0.895,2,2v14c0,1.105-0.895,2-2,2h-1v6.082c0,0.553-0.724,0.76-1.016,0.291L34,38H16c-1.105,0-2-0.895-2-2V22C14,20.895,14.895,20,16,20z"
							/>
							<path
								fill="#fff"
								d="M31.587,33h-1.241c-0.216,0-0.407-0.14-0.473-0.346l-0.459-1.434h-2.845l-0.454,1.433C26.05,32.86,25.858,33,25.642,33h-1.226c-0.176,0-0.299-0.175-0.239-0.341l2.668-7.33c0.072-0.198,0.26-0.329,0.47-0.329h1.434c0.212,0,0.4,0.133,0.471,0.333l2.606,7.328C31.885,32.826,31.763,33,31.587,33z M29.001,29.837c0,0-0.967-3.13-0.993-3.409h-0.045c-0.019,0.234-1.01,3.409-1.01,3.409H29.001z"
							/>
							<path d="M33,25H14v-5h21v3C35,24.105,34.105,25,33,25z" opacity=".05" />
							<path
								d="M32.5,24.5H14V20h20.5v2.5C34.5,23.605,33.605,24.5,32.5,24.5z"
								opacity=".07"
							/>
							<linearGradient
								id="wvGVdeqK1wyL1PvDjvN74b"
								x1="12.177"
								x2="26.673"
								y1="3.749"
								y2="27.335"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#33bef0" />
								<stop offset="1" stop-color="#22a5e2" />
							</linearGradient>
							<path
								fill="url(#wvGVdeqK1wyL1PvDjvN74b)"
								d="M32,6H8C6.895,6,6,6.895,6,8v14c0,1.105,0.895,2,2,2h1v6.257c0,0.502,0.658,0.691,0.924,0.265L14,24h18c1.105,0,2-0.895,2-2V8C34,6.895,33.105,6,32,6z"
							/>
							<path
								fill="#fff"
								d="M21.548,18.12c1.143,1.304,2.451,1.146,2.975,1.01c0.109-0.028,0.213,0.055,0.213,0.167v1.176c0,0.11-0.073,0.205-0.181,0.228c-0.221,0.049-0.608,0.113-1.143,0.113c-1.936,0-3.174-1.901-3.715-2.408c-1.916,0-3.809-1.52-3.809-4.219c0-3.109,2.075-4.453,4.225-4.453c3.141,0,4.008,2.5,4.008,4.283C24.121,16.79,22.412,17.844,21.548,18.12z M20.048,11.364c-1.15,0-2.168,0.886-2.168,2.725c0,1.898,1.019,2.701,2.121,2.701c1.158,0,2.127-0.797,2.127-2.666C22.128,12.202,21.199,11.364,20.048,11.364z"
							/>
						</svg>
						<!--  -->
					</div>
				</div>
			</div>
			<!--  -->
			<!-- <img class="rounded-bl-2xl" src="{joinusLady}" alt="Join us lady"> -->
		</div>

		<div class=" w-full mx-auto self-stretch">
			<div class="flex flex-col justify-center items-center space-y-4 pr-11">
				{#each faqCollection as faq, index}
					<FaqCard count={decorateCount(index)} question={faq.question} answer={faq.answer} />
				{/each}
			</div>
		</div>
	</div>
</section>
<!-- The end of The FAQs section -->
