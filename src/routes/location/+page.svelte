<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	$page.url.searchParams.set('nav_background_optimize', 'true');

	$: console.log($page);

	// import location markers
	import canadaMarker from '$lib/assets/images/marker_canada_opt_2x.png';
	import rwandaMarker from '$lib/assets/images/marker_rwanda_opt_2x.png';
	import ugandaMarker from '$lib/assets/images/marker_uganda_opt_2x.png';

	// import location images
	// @ts-ignore
	import locCanada from '$lib/assets/images/loc_canada.jpg';
	import locKigali from '$lib/assets/images/loc_kigali.jpg';
	import locUganda from '$lib/assets/images/loc_kigali_1.jpg';

	import slideOne from '$lib/assets/images/slide_01.jpg';
	import slideTwo from '$lib/assets/images/slide_02.jpg';
	import slideThree from '$lib/assets/images/slide_03.jpg';
	import slideFour from '$lib/assets/images/slide_04.jpg';

	// import team images
	import adaCute from '$lib/assets/images/team_ada_cute.jpg';
	import evaCute from '$lib/assets/images/team_eva_cute.jpg';
	import eyeGrace from '$lib/assets/images/team_eye_grace.jpg';
	import johnDoe from '$lib/assets/images/team_john_doe.jpg';
	import mrWilson from '$lib/assets/images/team_mr_wilson.jpg';
	import otileBrown from '$lib/assets/images/team_otile_brown.jpg';

	// @ts-ignore
	import slideFive from '$lib/assets/images/services.jpg';
	// @ts-ignore
	import guidesix from '$lib/assets/images/services_01.jpg';
	import LocationTestimonyCard from '$lib/components/LocationTestimonyCard.svelte';

	//   let images = [slideOne, slideTwo, slideThree, slideFour];

	let locationsAutoPlay = false;

	let currentLocation = 0;

	function nextLocation() {
		currentLocation = (currentLocation + 1) % locations.length;
	}

	// @ts-ignore
	function prevLocation() {
		currentLocation = (currentLocation - 1 + locations.length) % locations.length;
	}

	// @ts-ignore
	let intervalThree;
	// @ts-ignore
	let timeoutThree;

	onMount(() => {
		if (locationsAutoPlay) {
			intervalThree = setInterval(nextLocation, 5000);
			// @ts-ignore
			return () => clearInterval(intervalThree);
		}
	});

	function reset() {
		// @ts-ignore
		clearInterval(intervalThree);
		// @ts-ignore
		clearTimeout(timeoutThree);

		timeoutThree = setTimeout(() => {
			intervalThree = setInterval(nextLocation, 5000);
		}, 5000);
	}

	// @ts-ignore
	function setcurrentLocation(indexValue) {
		currentLocation = indexValue;
		if (locationsAutoPlay) {
			reset();
		}
	}

	//   end

	let testimonials = [
		{
			featured: true,
			witness: 'Ada Cute',
			photo: evaCute,
			proffesion: 'Designer',
			organization: 'DHispace Labs',
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

	// Locations object

	let locations = [
		[
			{
				about: {
					name: 'Canada',
					address:
						'Sanlam Towers N<sup>o</sup> 10, KN 64 Street Nyarugenge District, Kigali, Rwanda 1109',
					image: locCanada,
					markerImage: canadaMarker
				}
			},
			{
				testimonial: {
					featured: true,
					witness: 'Ada Cute',
					photo: eyeGrace,
					proffesion: 'Designer',
					organization: 'DHispace, Inc',
					detail:
						'Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the'
				}
			},
			{
				benefits: [
					'Canada ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.',
					'Canada ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.',
					'Canada ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.'
				]
			},
			{
				button: {
					text: 'Contact Us',
					url: '/contact'
				}
			}
		],
		[
			{
				about: {
					name: 'Rwanda',
					address:
						'Sanlam Towers N<sup>o</sup> 10, KN 64 Street Nyarugenge District, Kigali, Rwanda 1109',
					image: locKigali,
					markerImage: rwandaMarker
				}
			},
			{
				testimonial: {
					featured: true,
					witness: 'Graceson Niyo',
					photo: otileBrown,
					proffesion: 'Founder&CEO',
					organization: 'DHispace Labs',
					detail:
						'Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the'
				}
			},
			{
				benefits: [
					'Rwanda ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.',
					'Rwanda ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.'
				]
			},
			{
				button: {
					text: 'Contact Us',
					url: '/contact'
				}
			}
		],
		[
			{
				about: {
					name: 'Uganda',
					address:
						'Sanlam Towers N<sup>o</sup> 10, KN 64 Street Nyarugenge District, Kigali, Rwanda 1109',
					image: locUganda,
					markerImage: ugandaMarker
				}
			},
			{
				testimonial: {
					featured: true,
					witness: 'Kansime Ana',
					photo: evaCute,
					proffesion: 'Manager',
					organization: 'Afromark. Co',
					detail:
						'Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the'
				}
			},
			{
				benefits: [
					'Uganda ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.',
					'Uganda ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.',
					'Uganda ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.',
					'Uganda ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.',
					'Uganda ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit obcaecati incidunt accusamus nam.'
				]
			},
			{
				button: {
					text: 'Contact Us',
					url: '/contact'
				}
			}
		]
	];
</script>

<div class="w-auto h-fit relative transition-all duration-500 ease-out">
	<div
		style="background-image: url('{locations[currentLocation][0].about?.markerImage}');"
		class="flex justify-center h-full lg:min-h-[530px] w-auto lg:pb-20 bg-no-repeat {locations[
			currentLocation
		][0].about?.name === 'Rwanda' || locations[currentLocation][0].about?.name === 'Uganda'
			? 'bg-[center_left_25rem]'
			: 'bg-[top_4rem_left_25rem]'}  bg-contain bg-saftech-white overflow-hidden pb-10 transition-all duration-500 ease-in-out"
	>
		<div
			class="flex flex-col justify-between items-start space-y-5 mb-10 self-end mt-32 w-full h-fit p-8 rounded-3xl bg-saftech-black/0 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 transition-all duration-500 ease-out"
		>
			<div class="flex flex-col justify-start transition-all duration-500 ease-out">
				<h4 class="text-sm font-bold text-saftech-black w-full mt-4">&nbsp;</h4>
				<span
					class=" block mb-20 text-lg lg:text-6xl lg:w-2/3 font-bold text-saftech-black transition-all duration-500 ease-out"
					>Our Global Hubs</span
				>
				<div
					class=" flex justify-start items-center rounded-none w-full text-saftech-white/80 transition-all duration-500 ease-out"
				>
					{#each locations as _, index}
						<button
							on:click={() => setcurrentLocation(index)}
							type="button"
							class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 py-2 mt-4 text-sm text-bold {currentLocation ==
							index
								? 'bg-dark-blue hover:opacity-100 focus:outline-none mx-4 ring-2 ring-saftech-white ring-offset-2 ring-offset-saftech-white px-4 rounded-md shadow-sm'
								: 'px-2  bg-saftech-gray/0 text-saftech-black/70 hover:text-blue-700/60 focus:outline-none focus:ring-2 focus:ring-saftech-white focus:ring-offset-2 focus:ring-offset-saftech-white'} transition-all duration-500 ease-in-out"
						>
							<span class="sr-only">current location is {locations[index][0].about?.name}</span>
							{locations[index][0].about?.name}
						</button>
					{/each}
				</div>
			</div>
			<slot />
		</div>
	</div>

	<!-- <svg class="absolute bottom-0 left-2/4 -mb-[20px] rotate-90 bg-dark-blue hover:bg-saftech-white rounded-full shadow-lg hover:fill-dark-blue hover:cursor-pointer fill-saftech-white ring-8 hover:ring-10 ring-current/50 border-4 border-solid border-dark-blue hover:border-saftech-white transition-all duration-500 ease-out" width="40" height="40" viewBox="0 0 42 42"><path d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z" transform="translate(0 0)"/></svg> -->
</div>

<!-- Testimonials section -->
<section
	class="flex flex-row-reverse justify-start items-center w-full h-fit bg-saftech-gray/30 space-x-10 pb-16 pt-5 mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="relative w-full min-w-fit h-fit min-h-full flex flex-col justify-center items-start rounded-md lg:pl-20 px-2 sm:px-6 lg:px-8"
	>
		<div
			class="relative flex justify-center items-start space-y-3 flex-col w-full h-auto py-100 transition-all duration-500 ease-out"
		>
			<h4 class="text-xs text-normal-blue w-full transition-all duration-500 ease-out">
				Viewing...
			</h4>
			<span
				class=" block text-5xl font-bold w-full lg:w-3/4 text-dark-blue transition-all duration-500 ease-out"
			>
				{locations[currentLocation][0].about?.name}
			</span>
			<span
				class=" block text-sm lg:text-sm w-full lg:max-w-[210px] text-saftech-black/80 transition-all duration-500 ease-out"
			>
				{@html locations[currentLocation][0].about?.address}
			</span>
			<a
				href={locations[currentLocation][3].button?.url}
				class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-normal-blue/60 focus:outline-none focus:px-4 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-500 ease-out"
			>
				<span class="sr-only">Meet our leaders</span>
				{locations[currentLocation][3].button?.text}
				<span class="">
					<svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"
						><path
							d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
							transform="translate(0 0)"
						/></svg
					>
				</span>
			</a>

			<div
				class=" z-20 flex justify-center items-start w-fit space-x-5 pt-0 -ml-32 pointer-events-auto transition-all duration-500 ease-in-out"
			>
				<LocationTestimonyCard
					witness={locations[currentLocation][1].testimonial?.witness}
					photo={locations[currentLocation][1].testimonial?.photo}
					proffesion={locations[currentLocation][1].testimonial?.proffesion}
					organization={locations[currentLocation][1].testimonial?.organization}
					detail={locations[currentLocation][1].testimonial?.detail}
				/>
			</div>

			<!-- <button type="button" class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100">
          <span class="sr-only">More testimonials here</span>
          More testimonials here
          <span class="">
            <svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"><path d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z" transform="translate(0 0)"/></svg>

          </span>
        </button> -->
		</div>

		<div
			class="overflow-y-auto scrollbar-thin absolute inset-0 ml-[420px] bg-saftech-gray/10 w-2/5 text-saftech-black rounded-lg lg:max-w-md p-10 pt-8 self-stretch"
		>
			<h2
				class="font-semibold text-2xl mb-5 text-saftech-black transition-all duration-500 ease-out"
			>
				Benefits
			</h2>

			<div class="block overflow-hidden pl-8 w-full h-fit">
				<ul class="flex flex-col space-y-5">
					{#each locations[currentLocation][2]?.benefits as benefit, index}
						<li
							class="relative before:absolute before:-left-8 before:top-1 before:content-ticky transition-all duration-500 ease-out"
						>
							{benefit}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div
		style="background-image: url('{locations[currentLocation][0].about?.image}')"
		class="z-10 flex justify-center items-center bg-no-repeat bg-cover bg-center w-2/4 lg:min-h-[400px] rounded-2xl p-10 py-0 -mt-[350px] transition-all duration-500 ease-out"
	/>
</section>
<!-- The end of Testimonials section -->
