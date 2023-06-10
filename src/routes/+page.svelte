<script>
	import { page } from '$app/stores';
	export let data;

	console.log($page);

	// @ts-ignore
	import { fade, scale, slide } from 'svelte/transition';
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
	import slideLegacy from '$lib/assets/images/services_02.png';
	import slideOneLegacy from '$lib/assets/images/slide_01.jpg';
	import slideTwoLegacy from '$lib/assets/images/slide_02.jpg';
	import slideThreeLegacy from '$lib/assets/images/slide_03.jpg';
	import slideFourLegacy from '$lib/assets/images/slide_04.jpg';
	import slideFiveLegacy from '$lib/assets/images/services.jpg';
	import slideSixLegacy from '$lib/assets/images/services_01.jpg';

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
			articleImage: slideOneLegacy,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideFiveLegacy,
			specialClass: 'col-span-2'
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideThreeLegacy,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideFourLegacy,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideTwoLegacy,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideLegacy,
			specialClass: 'col-span-2'
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideSixLegacy,
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

	let showLeagacyCarousel = false

	
	// The begining of requested section
	// ####################################################################################################

   import { Container } from "postcss"

    // @ts-ignore
	import heroBackground from '$lib/assets/images/Hero section bg.jpeg'

	import slideOne from '$lib/assets/images/1_team_working.jpg'
	import slideTwo from '$lib/assets/images/2_saftech_office.jpg'
	import slideThree from '$lib/assets/images/3_safari_family.jpg'
	import slideFour from '$lib/assets/images/4_singapore_of_africa.jpg'
	import slideFive from '$lib/assets/images/5_shema_student_graduation.jpg'
	import { onMount } from "svelte"

    let showHeroCarousel = false
    let useNavigateSliderWithNamedButtons = true
	let showNewsSection = false

    /**
	 * @type {HTMLElement}
	 */
    let sliderContainer
    let sliderScrollWidth
    /**
	 * @type {number}
	 */
    let scroll
    let line

    let activeSlideId = '#section-1'

    // @ts-ignore
    function scrollIntoView({ target }) {
            const el = document.querySelector(target.getAttribute('href'));
            if (!el) return;

            activeSlideId = '#'+el.id
            //console.log((window?.innerWidth - sliderContainer.clientWidth)*5)

            el.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });

    }

    let container

    let elements = ['one', 'two', 'three', 'four', 'five'] //[ 'six', 'seven', 'eight', 'nine','ten']
    let images = [slideOne, slideTwo, slideThree, slideFour, slideFive]

    let features = [
        {
            image: slideOne,
            text: 'North America Call Centre Quality',
            attributes: ["Bi-lingual E&F customer support in Rwanda", "IT support in English in Uganda", "Dedicated, high speed Internet"],
            linkTo: '/our-services'
        },
        {
            image: slideTwo,
            text: 'State of the art CSR centres',
            attributes: ["", "", "", "", "",""],
            linkTo: ''
        },
        {
            image: slideThree,
            text: 'Safari Family Team',
            attributes: ["Saftech owners/managers are dual Canadian-Rwanda citizens"],
            linkTo: '/about-us'
        },
        {
            image: slideFour,
            text: 'World class infrastructure',
            attributes: ["", "", "", "", "",""],
            linkTo: ''
        },
        {
            image: slideFive,
            text: 'Our Partners',
            attributes: ["", "", "", "", "",""],
            linkTo: ''
        }
    ]

    let activeFeaureIndex = 0

    /**
	 * @type {Element | null}
	 */
    let selectedElement
    /**
	 * @type {string | undefined}
	 */
    let selectedFeatureId
    let selected

    onMount(() => {

        selected = 'feature0'
        selectedFeatureId = selected

        selectedElement = document.querySelector('#feature0')
        selectedElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        })
    })

    $: console.log(selectedFeatureId)


	// ####################################################################################################


</script>
{#if showLeagacyCarousel}
	<Carousel />
{/if}



<!-- brand new and requested sections -->
<section class="relative overflow-hidden min-w-full bg-saftech-white  mt-[70px]">

    <div style="background-image: url('{heroBackground}')" class="w-full h-[450px] bg-center bg-no-repeat bg-cover">
        <h1 class="flex flex-col justify-center items-start space-y-5 h-full font-bold text-6xl mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-w-full">
            <span class="text-transparent bg-gradient-to-r from-deep-blue to-dark-blue bg-clip-text -mt-10" >Outsource your BPO</span>
            <span class="flex justify-center items-stretch">
                <span class="text-7xl font-bold text-dark-blue border p-3 px-6 border-solid border-normal-blue">To</span>
                <span class="text-7xl font-bold text-saftech-white bg-gradient-to-r from-deep-blue to-dark-blue p-3 px-8" >East Africa</span>
            </span>
            <span class="font-semibold text-4xl" >Save money. Do Good.</span>
            <!-- <span class="" >Do Good.</span> -->
        </h1>
    </div>

    {#if showHeroCarousel}
        <section on:scroll={() => {
            sliderScrollWidth = sliderContainer.scrollLeft
            scroll = sliderScrollWidth * 100/4515
            //line.clientWidth = (sliderScrollWidth * 100)/4515}%

            }} bind:this={sliderContainer} class=" scrollbar-thin flex min-h-[500px] max-w-full overflow-auto scroll-mt-20  scroll-smooth snap-x snap-mandatory " >
            <section class="{ activeSlideId === '#section-1'? 'shadow-lg bg-white opacity-100':'opacity-60 shadow-none bg-red-600'} flex justify-center items-center min-w-[80vw] min-h-full rounded-2xl m-10 scroll-ms-14 scroll-me-14 snap-center snap-mandatory transition-all delay-250 duration-700 ease-in-out" id="section-1">
                <h2>
                    Section 1
                </h2>
            </section>

            <section class="{ activeSlideId === '#section-2'? 'shadow-lg bg-white opacity-100':'opacity-60 shadow-none bg-green-600'} flex justify-center items-center min-w-[80vw] min-h-full rounded-2xl m-10 scroll-ms-14 scroll-me-14 snap-center snap-mandatory transition-all delay-250 duration-700 ease-in-out" id="section-2">
                <h2>
                    Section 2
                </h2>
            </section>

            <section class="{ activeSlideId === '#section-3'? 'shadow-lg bg-white opacity-100':'opacity-60 shadow-none bg-yellow-600'} flex justify-center items-center min-w-[80vw] min-h-full rounded-2xl m-10 scroll-ms-14 scroll-me-14 snap-center snap-mandatory transition-all delay-250 duration-700 ease-in-out" id="section-3">
                <h2>
                    Section 3
                </h2>
            </section>
            <section class="{ activeSlideId === '#section-4'? 'shadow-lg bg-white opacity-100':'opacity-60 shadow-none bg-blue-600'} flex justify-center items-center min-w-[80vw] min-h-full rounded-2xl m-10 scroll-ms-14 scroll-me-14 snap-center snap-mandatory transition-all delay-250 duration-700 ease-in-out" id="section-4">
                <h2>
                    Section 4
                </h2>
            </section>
            <section class="{ activeSlideId === '#section-5'? 'shadow-lg bg-white opacity-100':'opacity-60 shadow-none bg-slate-500'} flex justify-center items-center min-w-[80vw] min-h-full rounded-2xl m-10 scroll-ms-14 scroll-me-14 snap-center snap-mandatory transition-all delay-250 duration-700 ease-in-out" id="section-5">
                <h2>
                    Section 5
                </h2>
            </section>
        </section>

        <div bind:this={line} style="width: {scroll}%" class="absolute h-[4px] bg-normal-blue top-0 left-0 "></div>
            <nav class="absolute min-w-fit flex items-center space-x-5 top-8 left-1/2 -translate-x-1/2 ">
                <a href="#section-1" class=" {activeSlideId === '#section-1' ? 'border-2 border-saftech-white bg-saftech-black outline outline-5 outline-saftech-black/30' : ' border-none outline-none bg-saftech-black/40' } w-3 h-3 rounded-full transition-all duration-500 ease-in-out" on:click|preventDefault={scrollIntoView}></a>
                <a href="#section-2" class=" {activeSlideId === '#section-2' ? 'border-2 border-saftech-white bg-saftech-black outline outline-5 outline-saftech-black/30' : ' border-none outline-none bg-saftech-black/40' } w-3 h-3 rounded-full transition-all duration-500 ease-in-out" on:click|preventDefault={scrollIntoView}></a>
                <a href="#section-3" class=" {activeSlideId === '#section-3' ? 'border-2 border-saftech-white bg-saftech-black outline outline-5 outline-saftech-black/30' : ' border-none outline-none bg-saftech-black/40' } w-3 h-3 rounded-full transition-all duration-500 ease-in-out" on:click|preventDefault={scrollIntoView}></a>
                <a href="#section-4" class=" {activeSlideId === '#section-4' ? 'border-2 border-saftech-white bg-saftech-black outline outline-5 outline-saftech-black/30' : ' border-none outline-none bg-saftech-black/40' } w-3 h-3 rounded-full transition-all duration-500 ease-in-out" on:click|preventDefault={scrollIntoView}></a>
                <a href="#section-5" class=" {activeSlideId === '#section-5' ? 'border-2 border-saftech-white bg-saftech-black outline outline-5 outline-saftech-black/30' : ' border-none outline-none bg-saftech-black/40' } w-3 h-3 rounded-full transition-all duration-500 ease-in-out" on:click|preventDefault={scrollIntoView}></a>
            </nav>
    {/if}
</section>

<section class="w-full h-fit overflow-hidden bg-black pb-24">
        <div class="flex items-center flex-col py-10 mb-10 space-y-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-w-full">
        <h2 class="py-10 font-semibold text-6xl text-saftech-white ">More Than A Tech Company</h2>
        <div class="flex justify-between items-center space-x-5  text-saftech-white">
            <div class="w-fit flex items-center bg-saftech-white/5 rounded-lg p-6 space-x-3">
                <svg class="p-3 px-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="200" height="200">
                    <path fill="#039be5" d="M42,7c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S43.657,7,42,7z M42,11c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S42.552,11,42,11z" />
                    <path fill="#ff9800" d="M24,43C10.542,43,0,37.557,0,30.608c0-2.591,1.475-5.054,4.264-7.123c0.445-0.329,1.07-0.235,1.399,0.208c0.329,0.443,0.236,1.07-0.208,1.398C3.879,26.261,2,28.167,2,30.608C2,36.242,12.075,41,24,41c11.925,0,22-4.759,22-10.393c0-2.285-1.707-4.563-4.806-6.412c-0.474-0.283-0.629-0.897-0.346-1.372c0.282-0.475,0.896-0.629,1.371-0.346c3.728,2.225,5.78,5.112,5.78,8.13C48,37.557,37.458,43,24,43z" />
                    <path fill="#039be5" d="M11.756,18.395h1.349c0.512,0,0.888-0.179,1.127-0.536c0.24-0.358,0.359-0.835,0.359-1.432 c0-0.571-0.123-1.015-0.369-1.334c-0.246-0.318-0.576-0.477-0.989-0.477c-0.387,0-0.704,0.151-0.95,0.453 c-0.246,0.302-0.369,0.683-0.369,1.142H9.128c0-0.748,0.172-1.419,0.517-2.013c0.345-0.594,0.827-1.058,1.447-1.393 c0.62-0.334,1.307-0.502,2.062-0.502c1.319,0,2.353,0.364,3.101,1.093c0.748,0.729,1.122,1.726,1.122,2.992 c0,0.65-0.169,1.252-0.507,1.806c-0.338,0.554-0.783,0.98-1.334,1.275c0.676,0.289,1.18,0.722,1.511,1.299 c0.331,0.578,0.497,1.26,0.497,2.048c0,1.273-0.405,2.294-1.216,3.061c-0.811,0.768-1.875,1.152-3.194,1.152 c-1.227,0-2.224-0.379-2.988-1.137C9.382,25.134,9,24.138,9,22.904h2.786c0,0.512,0.134,0.942,0.404,1.289 c0.269,0.348,0.61,0.522,1.024,0.522c0.479,0,0.858-0.177,1.137-0.531c0.279-0.354,0.419-0.827,0.419-1.417 c0-1.411-0.548-2.12-1.644-2.126h-1.368V18.395z" />
                    <path fill="#039be5" d="M26.118,12.351v2.363h-0.156c-1.043,0.006-1.873,0.32-2.486,0.94 c-0.614,0.62-0.986,1.488-1.118,2.604c0.598-0.683,1.346-1.024,2.245-1.024c1.037,0,1.864,0.443,2.485,1.329 c0.621,0.886,0.931,2.067,0.931,3.543c0,0.939-0.177,1.785-0.531,2.54c-0.356,0.754-0.853,1.34-1.492,1.757 c-0.641,0.417-1.364,0.625-2.171,0.625c-1.299,0-2.341-0.522-3.125-1.565c-0.784-1.043-1.177-2.448-1.177-4.213v-1.034 c0-1.582,0.248-2.967,0.744-4.154c0.495-1.188,1.211-2.102,2.146-2.741c0.935-0.64,2.026-0.963,3.273-0.97H26.118z M23.726,19.527 c-0.355,0-0.652,0.111-0.891,0.335c-0.24,0.224-0.418,0.5-0.536,0.829v1.006c0,1.013,0.134,1.769,0.403,2.268 c0.269,0.5,0.623,0.749,1.063,0.749c0.446,0,0.804-0.241,1.073-0.725c0.269-0.483,0.403-1.103,0.403-1.859 c0-0.769-0.14-1.396-0.418-1.879C24.545,19.769,24.179,19.527,23.726,19.527z" />
                    <path fill="#039be5" d="M38,20.905c0,1.982-0.36,3.498-1.078,4.548c-0.718,1.05-1.744,1.575-3.076,1.575 c-1.319,0-2.339-0.51-3.057-1.531c-0.718-1.02-1.091-2.483-1.117-4.386v-2.707c0-1.975,0.357-3.487,1.073-4.533 c0.715-1.047,1.742-1.57,3.081-1.57c1.339,0,2.365,0.519,3.081,1.555c0.715,1.037,1.079,2.517,1.093,4.44V20.905z M35.204,18.001 c0-1.128-0.111-1.975-0.334-2.54c-0.223-0.564-0.571-0.847-1.043-0.847c-0.886,0-1.346,1.034-1.379,3.101v3.573 c0,1.155,0.114,2.015,0.34,2.579c0.226,0.565,0.579,0.846,1.058,0.846c0.453,0,0.789-0.264,1.009-0.792 c0.219-0.528,0.337-1.337,0.349-2.426V18.001z" />
                </svg>
                <h2 class="font-normal text-3xl w-[25ch]">See how we create <span class="text-normal-blue">360<sup>o</sup></span> value and help clients become the next and best versions of themselves</h2>
            </div>
            <div class="w-fit flex items-center bg-saftech-white/5 rounded-lg p-6 space-x-3">
                <svg class="p-3 px-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="200" height="200">
                    <linearGradient id="9~1WB1iQjVkklyIWsQykta" x1="9.858" x2="38.142" y1="-27.858" y2="-56.142" gradientTransform="matrix(1 0 0 -1 0 -18)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#75daff" />
                        <stop offset="1" stop-color="#1ea2e4" />
                    </linearGradient>
                    <path fill="url(#9~1WB1iQjVkklyIWsQykta)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                    <radialGradient id="9~1WB1iQjVkklyIWsQyktb" cx="24" cy="-42" r="18.5" gradientTransform="matrix(1 0 0 -1 0 -18)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" />
                        <stop offset="1" stop-opacity="0" />
                    </radialGradient>
                    <circle cx="24" cy="24" r="18.5" fill="url(#9~1WB1iQjVkklyIWsQyktb)" />
                    <radialGradient id="9~1WB1iQjVkklyIWsQyktc" cx="23.89" cy="-25.394" r="37.883" gradientTransform="matrix(1 0 0 -1 0 -18)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#fafafb" />
                        <stop offset="1" stop-color="#c8cdd1" />
                    </radialGradient>
                    <circle cx="24" cy="24" r="17" fill="url(#9~1WB1iQjVkklyIWsQyktc)" />
                    <polygon fill="#b2bbc7" points="33.899,33.899 25.414,22.586 14.101,14.101 22.586,25.414" />
                    <polygon fill="#b2bbc7" points="37.999,24 24,22 10.001,24 24,26" />
                    <polygon fill="#b2bbc7" points="33.899,14.101 22.586,22.586 14.101,33.899 25.414,25.415" />
                    <polygon fill="#b2bbc7" points="24,10.001 22,24 24,37.999 26,24.001" />
                    <path fill="#f25022" d="M24,19.757v8.485l13.441-3.666c0.588-0.161,0.588-0.993,0-1.154L24,19.757z" />
                    <path fill="#00a4ef" d="M24,28.243v-8.485l-13.441,3.666c-0.588,0.161-0.588,0.993,0,1.154L24,28.243z" />
                    <path fill="#fff" d="M25.061,25.061c-0.586,0.586-1.535,0.586-2.121,0c-0.586-0.586-0.586-1.535,0-2.121 c0.586-0.586,1.536-0.585,2.121,0C25.647,23.526,25.647,24.474,25.061,25.061" />
                </svg>
                <h2 class="font-normal text-3xl w-[20ch]">Find the low cost BPO that's right for you in <span class="text-normal-blue">East Africa</span> </h2>
            </div>
        </div>
    </div>

    {#if useNavigateSliderWithNamedButtons}
        <div class="flex justify-start items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-10 min-w-full space-x-2 w-full h-fit">
            {#each features as featuring, index}
                <button on:click={() => {
                    selectedElement = document.querySelector(`#feature${index}`)

                    activeFeaureIndex = index
                    // console.log(selectedElement)
                    selected = selectedElement?.id
                    selectedFeatureId = selectedElement?.id

                    selectedElement?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    })

                }} type="button" value="{`0${index + 1}`}" class=" {activeFeaureIndex === index ? 'w-48 text-normal-blue bg-normal-blue/5 opacity-100':'w-fit text-saftech-white bg-saftech-white/5 opacity-50'}   first-of-type:rounded-l-sm last-of-type:rounded-r-sm   px-3 py-2 border-none shadow-sm transition-all duration-700 ease-out">
                <div class="flex items-center space-x-3 w-fit transition-all duration-700 ease-out">
                    <span class="text-xl font-light transition-all duration-700 ease-out" >{`0${index + 1}`}</span>
                    {#if activeFeaureIndex === index }
                        <span transition:slide={{ duration: 500, easing: quintOut, axis: 'x' }} class="flex flex-col justify-center transition-all duration-700 ease-out">
                            <span class="text-sm font-normal  text-left line-clamp-1 transition-all duration-700 ease-out" >{featuring.text}</span>
                            
                        </span>
                    {/if} 
                </div>

            </button>
                
            {/each}

        </div>
    {/if}


    <div bind:this={container} class="flex items-center w-full max-h-fit scrollbar-none p-5 snap-x overflow-auto">

        <!-- use filter effect if slide is active black&white/color -->
        {#each features as feature, index}
            <div on:mouseenter={(e) => {
                selectedElement = e.currentTarget
                // console.log(selectedElement)
                selectedFeatureId = selectedElement.id
                selected = selectedFeatureId

                selectedElement?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
            }} id="{ `feature${index}` }" title="{feature.text}" style="background-image: url('{feature.image}');" class="relative flex justify-center overflow-hidden shadow-lg bg-center bg-cover bg-no-repeat items-center max-h-400px[] min-h-[400px] py-4 rounded-xl text-2xl { `feature${index}` === selectedFeatureId ? ' min-w-[700px] bg-deep-blue text-saftech-white mx-7 opacity-100':'opacity-70 mx-2 max-w-[300px] min-w-[300px] bg-white/50 text-saftech-black' } snap-center snap-mandatory origin-center transition-all duration-500 ease-out ">
                <div class="absolute inset-0 { `feature${index}` === selectedFeatureId ? 'bg-transparent':'bg-black mix-blend-saturation' } transition-all duration-500 ease-in-out">
                </div> 
                
                <div class="flex flex-col justify-end space-y-5 absolute bottom-0 left-0 p-4 h-[400px] { `feature${index}` === selectedFeatureId ? 'w-full bg-gradient-to-t from-black/95 to-transparent':'w-full min-full bg-gradient-to-t from-white/100 to-transparent' }  rounded-none  transition-all duration-500 ease-out ">
                    <div class="flex justify-between items-center h-fit { `feature${index}` === selectedFeatureId ? 'w-full ':'w-full min-full ' }  transition-all duration-500 ease-out ">
                        <h2 class="  { `feature${index}` === selectedFeatureId ? 'text-saftech-white font-bold text-4xl w-[20ch]':'font-semibold text-2xl w-[15ch] text-saftech-black' }  transition-all duration-500 ease-out ">{feature.text}</h2>
                        <svg class=" -rotate-90 { `feature${index}` === selectedFeatureId ? 'fill-saftech-white w-16 ':' w-6 fill-saftech-black' }  transition-all duration-500 ease-out "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path d="M41.586,12.586L24,30.172L6.414,12.586c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l19,19 C22.977,34.805,23.488,35,24,35s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828S42.367,11.805,41.586,12.586z" />
                        </svg>
                    </div>

                    {#if activeFeaureIndex === index }
                        <div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class=" grid grid-cols-2 place-content-center place-items-center gap-2 transition-all duration-700 ease-out">
                            {#each feature.attributes as attr}
                                {#if attr != ""}
                                    <div class="flex items-center px-4 py-2 space-x-4 max-w-xs rounded-lg bg-saftech-white/5 text-sm font-normal  line-clamp-1 transition-all duration-700 ease-out" >
                                        <svg class="fill-saftech-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25">
                                            <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z" />
                                        </svg>
                                        <h2 class=" text-saftech-white/80 font-semibold text-sm w-[40ch] transition-all duration-500 ease-out ">{attr}</h2>
                                    </div>
                                {/if}
                            {/each}
                            
                            
                        </div>
                    {/if} 
                </div>
            </div>
        {/each}

    </div>
</section>
<!-- end requested sections-->



<!-- History section -->
<section
	class="flex justify-between items-center w-full h-fit bg-saftech-white py-4 mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="w-full h-fit min-h-full flex flex-col justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-3 flex-col w-full h-auto py-2">
			<h4 class="text-sm font-bold text-saftech-black/90 w-full">OUR HISTORY</h4>
			<span class=" block text-4xl font-bold w-full lg:w-2/4 text-saftech-black/90">
				Saftech Canada's Growth History</span
			>
		</div>
	</div>
</section>


<section
	class="flex justify-start items-center flex-nowrap space-x-2 w-full h-fit bg-saftech-gray/5 py-[200px] mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="relative w-[300px] h-[35px] flex flex-col text-normal-blue bg-normal-blue justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		&nbsp;
		<svg
			class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] fill-normal-blue justify-self-start -mb-[26px]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
		>
			<path
				d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z"
			/>
		</svg>
		<div
			class="absolute -bottom-0 left-0 mb-[35px] pb-5 px-5 bg-orange-500/0 flex flex-col justify-center items-center w-full h-fit py-100"
		>
			<h2 class="font-bold text-2xl text-current text-center">Canada</h2>
			<p class="font-bold text-xs text-current text-center/80">
				340 West 42<sup>nd</sup> St Toronto, TN 10036
			</p>
		</div>
		<div
			class="absolute -top-0 left-0 mt-[35px] bg-teal-500/0 flex justify-center items-center space-y-3 flex-col w-full h-auto py-100"
		>
			<!-- <svg class="w-[40px] h-[40px] fill-normal-blue justify-self-start -mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z" />
            </svg> -->

			<h2 class="font-bold text-3xl text-current text-center mt-10">2021</h2>
			<p class=" font-normal text-sm text-current text-center line-clamp-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita atque velit aperiam,
				enim voluptateso.
			</p>
		</div>
	</div>
	<div
		class="-rotate-180 relative w-[300px] h-[35px] flex flex-col text-dark-blue bg-dark-blue justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		&nbsp;
		<svg
			class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] fill-current justify-self-start -mb-[26px]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
		>
			<path
				d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z"
			/>
		</svg>
		<div
			class="absolute -bottom-0 left-0 mb-[35px] pb-5 px-5 bg-orange-500/0 flex flex-col justify-center items-center w-full h-fit py-100"
		>
			<h2 class="rotate-180 font-bold text-2xl text-current text-center">Rwanda</h2>
			<p class="rotate-180 font-bold text-xs text-current text-center/80">
				KG 340 Ave, Kigali - Gasabo
			</p>
		</div>
		<div
			class="absolute -top-0 left-0 mt-[35px] bg-teal-500/0 flex justify-center items-center space-y-3 flex-col w-full h-auto py-100"
		>
			<!-- <svg class="w-[40px] h-[40px] fill-normal-blue justify-self-start -mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z" />
            </svg> -->

			<h2 class="rotate-180 font-bold text-3xl text-current text-center mt-10">2022</h2>
			<p class="rotate-180 font-normal text-sm text-current text-center line-clamp-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita atque velit aperiam,
				enim voluptateso.
			</p>
		</div>
	</div>
	<div
		class="relative w-[300px] h-[35px] flex flex-col text-normal-blue bg-normal-blue justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		&nbsp;
		<svg
			class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] fill-normal-blue justify-self-start -mb-[26px]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
		>
			<path
				d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z"
			/>
		</svg>
		<div
			class="absolute -bottom-0 left-0 mb-[35px] pb-5 px-5 bg-orange-500/0 flex flex-col justify-center items-center w-full h-fit py-100"
		>
			<h2 class="font-bold text-2xl text-current text-center">Uganda</h2>
			<p class="font-bold text-xs text-current text-center/80">
				340 East 21<sup>st</sup> St Entebe, ET 456
			</p>
		</div>
		<div
			class="absolute -top-0 left-0 mt-[35px] bg-teal-500/0 flex justify-center items-center space-y-3 flex-col w-full h-auto py-100"
		>
			<!-- <svg class="w-[40px] h-[40px] fill-normal-blue justify-self-start -mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z" />
            </svg> -->

			<h2 class="font-bold text-3xl text-current text-center mt-10">2023</h2>
			<p class=" font-normal text-sm text-current text-center line-clamp-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita atque velit aperiam,
				enim voluptateso.
			</p>
		</div>
	</div>
</section>

<!-- The end of History section section -->



<!-- about us short section -->
<section class=" relative bg-gradient-to-b from-deep-blue to-dark-blue py-20 overflow-hidden">
	<div
		class="z-10 relative flex items-start w-full h-fit overflow-x-hidden mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div style="background-image: url('{slideFour}');" class="absolute flex justify-center items-center w-[560px] h-[320px] bg-saftech-white rounded-2xl top-1/2 -translate-y-1/2 right-0 bg-center bg-no-repeat bg-cover">
			<div class="scale-100 bg-transparent  w-[50px] h-[50px] flex flex-grow-0 shrink-0 justify-center items-center rounded-full"
			>
				<button
					type="button"
					class="absolute inset-0 w-[50px] h-[50px] flex flex-grow-0 shrink-0 justify-center items-center rounded-full opacity-100 bg-normal-blue hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-saftech-white ring-offset-2 focus:ring-offset-saftech-white"
				>
					<span class="sr-only">play video </span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60" height="60">
						<path fill="#2196f3" d="M44,24c0,11.047-8.953,20-20,20S4,35.047,4,24S12.953,4,24,4S44,12.953,44,24z" />
						<path fill="#fff" d="M17,33V15l18,9L17,33z" />
					</svg>
				</button>

				<div
					class="absolute rounded-full inset-0 bg-normal-blue w-[50px] h-[50px] pointer-events-none animate-ping"
				></div>
			</div>
		</div>

		<div class="relative flex justify-center items-start space-y-7 flex-col w-3/5 h-full">
			<h4 class="text-sm font-bold text-saftech-white w-[500px]">ABOOUT OUR COMPANY</h4>
			<h1 class="text-5xl font-bold lg:w-4/5 text-saftech-white w-[500px]">
				Best IT-Solutions company near the world
			</h1>
			<h2 class="text-sm lg:text-base lg:w-4/5 text-saftech-white w-[400px]">
				There are locations in the United states of america as well as ationally. The organization
				was established in 2000 on the basis of a small idea deived by its promoters that was
				incepted. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			</h2>

			<a
				href="/about-us"
				class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-saftech-white/80 hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 focus:px-3 transition-all duration-500 ease-out"
			>
				<span class="sr-only">READ MORE</span>
				READ MORE
				<span class="">
					<svg class=" fill-saftech-white/80" width="15" height="15" viewBox="0 0 42 42"
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
		class=" sr-only z-10 absolute inset-0 lg:top-1/2 -translate-y-1/2 lg:left-[65%] scale-50"
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
		class=" sr-only pointer-events-none z-0 absolute inset-0 scale-[1.06] w-full -mt-[80px]"
		src={decorBg}
		alt=""
	/>
</section>
<!-- The end of about section -->

<!-- Solution or Services section -->
<section
	class="w-full h-fit bg-normal-blue pt-10 pb-20 bg-no-repeat bg-cover bg-right"
	style="background-image: url('{serviceBg}')"
>
	<div
		class="z-10 relative flex flex-col gap-5 w-full h-fit overflow-x-hidden mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-7 flex-col w-[50%] h-full p-20 pt-0">
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
				Meet Our Incredible Team</span
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
{#if showNewsSection}
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
{/if}
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
