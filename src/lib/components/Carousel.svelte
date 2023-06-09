<script>
	import { onMount } from 'svelte';

	// import slides images
	// @ts-ignore
	import slide from '$lib/assets/images/services_02.png';
	import slideOne from '$lib/assets/images/slide_01.jpg';
	import slideTwo from '$lib/assets/images/slide_02.jpg';
	import slideThree from '$lib/assets/images/slide_03.jpg';
	import slideFour from '$lib/assets/images/slide_04.jpg';
	import slideFive from '$lib/assets/images/services.jpg';
	import slideSix from '$lib/assets/images/services_01.jpg';

	//   let images = [slideOne, slideTwo, slideThree, slideFour];

	let slides = [
		{
			image: slideOne,
			title: 'IT Solution Company For your Business',
			subTitle:
				'But in practice, as many differences exist within these is resolve  the future creative things humans do best..',
			ctaUrl: '/solution',
			ctaString: 'LEARN MORE'
		},
		{
			image: slideTwo,
			title: 'Need to find and retain tech talent?',
			subTitle:
				'But in practice, as many differences exist within these is resolve  the future creative things humans do best..',
			ctaUrl: '/solution',
			ctaString: 'DOWNLOAD'
		},
		{
			image: slideThree,
			title: 'Extraordinary Talent. Exceptional Customer Experiences.',
			subTitle:
				'We’re problem solvers, engagers, and creative thinkers who always strive to help our customers succeed.',
			ctaUrl: '/solution',
			ctaString: 'WATCH VIDEO'
		},
		{
			image: slideFour,
			title: '3 Reasons Why Africa is the Next Major Outsourcing Hub',
			subTitle:
				'But in practice, as many differences exist within these is resolve  the future creative things humans do best..',
			ctaUrl: '/solution',
			ctaString: 'GET STARTED'
		}
	];

	let currentSlide = 0;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	// @ts-ignore
	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	// @ts-ignore
	let interval;
	// @ts-ignore
	let timeout;

	onMount(() => {
		interval = setInterval(nextSlide, 5000);
		// @ts-ignore
		return () => clearInterval(interval);
	});

	function reset() {
		// @ts-ignore
		clearInterval(interval);
		// @ts-ignore
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			interval = setInterval(nextSlide, 5000);
		}, 5000);
	}

	// @ts-ignore
	function setCurrentSlide(indexValue) {
		currentSlide = indexValue;
		reset();
	}
</script>

<!-- <div style="background-image: url('{images[currentImage]}')" class="w-screen h-screen bg-no-repeat bg-center bg-cover flex-shrink-0 transition-all duration-1000 ease-out">
  </div> -->

<div
	style="background-image: url('{slides[currentSlide].image}')"
	class=" overflow-hidden bg-cover bg-no-repeat bg-gray-200 h-screen min-h-[600px] w-screen overflow-x-hidden transition-all duration-1000 ease-in-out pointer-events-none"
>
	<!-- <img src="{slide}" alt="" class="w-full bg-cover "> -->

	<div
		class="relative flex items-start w-full h-full bg-transparent pointer-events-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="absolute inset-0 blur-xl w-2/5 h-full bg-deep-blue/60 pointer-events-auto" />
		<div
			class="relative flex justify-end items-start space-y-7 flex-col w-3/5 h-full pb-36 bg-deep-blues pointer-events-auto"
		>
			<h1
				class="text-5xl font-bold text-saftech-white w-[500px] transition-all duration-1000 ease-in-out"
			>
				{slides[currentSlide].title}
			</h1>
			<h2 class="text-sm text-saftech-white w-[350px] transition-all duration-1000 ease-in-out">
				{slides[currentSlide].subTitle}
			</h2>

			<button
				type="button"
				class="rounded-md bg-saftech-white py-2 px-6 text-xs font-bold text-dark-blue hover:text-blue-700/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-1000 ease-in-out"
			>
				<span class="sr-only">{slides[currentSlide].ctaString}</span>
				{slides[currentSlide].ctaString}
				<!-- <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg> -->
			</button>

			<div class="flex justify-center items-start w-fit space-x-5 pt-6 pointer-events-auto">
				{#each slides as slideLabel, index}
					<button
						on:click={() => setCurrentSlide(index)}
						type="button"
						class=" hover:cursor-pointer w-4 h-4 rounded-full {currentSlide == index
							? 'bg-deep-blue hover:opacity-100 focus:outline-none ring-2 ring-saftech-white ring-offset-2 ring-offset-saftech-white'
							: 'bg-saftech-white/80 hover:text-blue-700/60 focus:outline-none focus:ring-2 focus:ring-saftech-white focus:ring-offset-2 focus:ring-offset-saftech-white'} transition-all duration-500 ease-out"
					>
						<span class="sr-only">select next slide element</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
