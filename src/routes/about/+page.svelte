<script>
	// about PrincipleCarousel components

	import { onMount } from 'svelte';

	// import guides images
	// @ts-ignore
	import slide from '$lib/assets/images/services_02.png';
	import slideOne from '$lib/assets/images/slide_01.jpg';
	import slideTwo from '$lib/assets/images/slide_02.jpg';
	import slideThree from '$lib/assets/images/slide_03.jpg';
	import slideFour from '$lib/assets/images/slide_04.jpg';
	// @ts-ignore
	import slideFive from '$lib/assets/images/services.jpg';
	// @ts-ignore
	import guidesix from '$lib/assets/images/services_01.jpg';

	//   let images = [slideOne, slideTwo, slideThree, slideFour];

	let guidesAutoPlay = false;

	let guides = [
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

	let currentGuide = 0;

	function nextGuide() {
		currentGuide = (currentGuide + 1) % guides.length;
	}

	// @ts-ignore
	function prevSlide() {
		currentGuide = (currentGuide - 1 + guides.length) % guides.length;
	}

	// @ts-ignore
	let intervalTwo;
	// @ts-ignore
	let timeoutTwo;

	onMount(() => {
		if (guidesAutoPlay) {
			intervalTwo = setInterval(nextGuide, 5000);
			// @ts-ignore
			return () => clearInterval(intervalTwo);
		}
	});

	function reset() {
		// @ts-ignore
		clearInterval(intervalTwo);
		// @ts-ignore
		clearTimeout(timeoutTwo);

		timeoutTwo = setTimeout(() => {
			intervalTwo = setInterval(nextGuide, 5000);
		}, 5000);
	}

	// @ts-ignore
	function setcurrentGuide(indexValue) {
		currentGuide = indexValue;
		if (guidesAutoPlay) {
			reset();
		}
	}

	//   end

	let heading = 'Who<br>We Are';
	let sub = 'Driving Value With Tech Tallent Solutions Through the Entire Lifecycle';

	import PrinciplesCard from '$lib/components/PrinciplesCard.svelte';

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

	// import principles and guideline icons
	import darty from '$lib/assets/icons/icons8_goal.svg';
	import people from '$lib/assets/icons/icons8_staff.svg';
	import fantasy from '$lib/assets/icons/icons8_Fantasy_1.svg';
	import person from '$lib/assets/icons/icons8_street_view_2.svg';

	let principles = [
		{
			title: 'Purpose-built Solution',
			detail:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius dolores quas doloribus officia cumque? Necessitatibus aperiam sint eius nemo suscipit, sapiente eos rem id iure voluptate est mollitia delectus!',
			icon: darty
		},
		{
			title: 'Extraordinary Peaple',
			detail:
				'Facilis eius dolores quas doloribus officia cumque? Necessitatibus aperiam sint eius nemo suscipit, sapiente eos rem id iure voluptate est mollitia delectus!',
			icon: people
		},
		{
			title: 'Exceptional CX',
			detail:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius dolores quas doloribus officia cumque? Necessitatibus aperiam sint eius nemo suscipit, sapiente eos rem id iure voluptate est mollitia delectus!',
			icon: fantasy
		},
		{
			title: 'Focused on You',
			detail:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius dolores quas doloribus officia cumque? Necessitatibus aperiam!',
			icon: person
		}
	];
</script>

<div class="w-auto h-fit relative">
	<div
		style="background-image: url('{heroYellow}');"
		class="flex justify-center h-full w-auto bg-no-repeat bg-center bg-cover overflow-hidden py-10"
	>
		<div
			class="flex flex-col justify-between items-start space-y-5 self-end mb-0 mt-32 w-full h-fit p-8 rounded-3xl bg-gradient-to-r from-saftech-black to-saftech-black/10 bborder bborder-solid bborder-saftech-white/10 shadow-md mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
		>
			<div class="flex flex-col justify-start space-y-7">
				<span class=" block mt-3 text-lg lg:text-6xl lg:w-2/3 font-bold text-saftech-white"
					>{@html heading}</span
				>
				<span class=" block text-lg font-normal lg:w-[350px] text-saftech-white/80">{sub}</span>
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

	<svg
		class="absolute bottom-0 left-2/4 -mb-[20px] rotate-90 bg-dark-blue hover:bg-saftech-white rounded-full shadow-lg hover:fill-dark-blue hover:cursor-pointer fill-saftech-white ring-8 hover:ring-10 ring-current/50 border-4 border-solid border-dark-blue hover:border-saftech-white transition-all duration-500 ease-out"
		width="40"
		height="40"
		viewBox="0 0 42 42"
		><path
			d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
			transform="translate(0 0)"
		/></svg
	>
</div>

<!-- Testimonials section -->
<section
	class="flex justify-between items-center w-full h-fit bg-weak-blue py-16 mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="w-full h-fit min-h-full flex flex-col justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-3 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-black w-full -mt-4 mb-4">OUR PURPORSE</h4>
			<span class=" block text-4xl font-bold w-full lg:w-2/4 text-saftech-black">
				Starting with the customer first</span
			>
			<span class=" block text-sm lg:text-base w-3/5 text-saftech-black">
				Gorgeous people we interacted with say this... Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Voluptatibus magni cum iure minus aut fugiat omnis iste sit reprehenderit
				accusantium quisquam alias repellendus eaque dolorem facere quos architecto, sapiente velit.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti! Lorem ipsum dolor
				sit, amet consectetur adipisicing elit. Repellendus doloribus rerum, alias nisi aliquam
				expedita a eaque in? Maxime placeat exercitationem aperiam consectetur itaque accusantium
				eveniet? Architecto iure aperiam nesciunt.
			</span>

			<!-- <button type="button" class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100">
        <span class="sr-only">More testimonials here</span>
        More testimonials here
        <span class="">
        <svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"><path d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z" transform="translate(0 0)"/></svg>

        </span>
    </button> -->
		</div>
	</div>

	<div
		class=" flex justify-center items-center bg-saftech-gray/10 w-2/5 text-saftech-black rounded-lg lg:max-w-md p-10 self-stretch"
	>
		<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z" />
			<path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z" />
			<path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z" />
			<path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z" />
			<path
				fill="#fbcd59"
				d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
			/>
			<path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z" />
			<path
				fill="#fff"
				d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"
			/>
			<g>
				<path
					fill="#60be92"
					d="M40.608 76.684L36.648 70.673 29.418 72.108 38.255 50.5 49.445 55.076z"
				/>
				<path
					fill="#472b29"
					d="M40.753,78.177l-4.431-6.726l-8.045,1.597l9.595-23.461l12.485,5.106L40.753,78.177z M36.974,69.895l3.489,5.296l8.069-19.731l-9.894-4.046l-8.08,19.754L36.974,69.895z"
				/>
				<path
					fill="#60be92"
					d="M59.392 76.684L63.352 70.673 70.582 72.108 61.745 50.5 50.555 55.076z"
				/>
				<path
					fill="#472b29"
					d="M59.247,78.177l-9.604-23.483l12.485-5.106l9.595,23.461l-8.045-1.597L59.247,78.177z M51.468,55.459l8.069,19.731l3.489-5.296l6.415,1.272l-8.08-19.754L51.468,55.459z"
				/>
				<path
					fill="#fcba7f"
					d="M53.736,61.65c-0.333,0-0.655-0.073-0.956-0.219l-1.214-0.587 c-0.485-0.235-1.027-0.359-1.566-0.359s-1.081,0.124-1.567,0.359l-1.213,0.587c-0.301,0.146-0.623,0.219-0.956,0.219 c-0.649,0.001-1.261-0.283-1.679-0.778l-0.871-1.031c-0.684-0.811-1.685-1.275-2.747-1.275c0,0-1.465,0.045-1.466,0.045 c-1.041,0-1.906-0.651-2.177-1.584l-0.376-1.296c-0.308-1.061-1.072-1.909-2.096-2.328l-1.25-0.509 c-0.929-0.379-1.483-1.339-1.347-2.333l0.184-1.336c0.151-1.096-0.202-2.182-0.968-2.979l-0.934-0.973 c-0.695-0.725-0.811-1.827-0.282-2.68l0.711-1.146c0.583-0.939,0.703-2.075,0.328-3.115l-0.458-1.27 c-0.34-0.944,0.002-1.998,0.832-2.562l1.116-0.758c0.915-0.621,1.486-1.609,1.566-2.713l0.099-1.346 c0.073-1.001,0.814-1.824,1.802-2.001l1.328-0.238c1.088-0.195,2.012-0.867,2.535-1.843l0.637-1.188 c0.383-0.716,1.125-1.16,1.937-1.16c0.176,0,0.353,0.021,0.524,0.063l1.31,0.322c0.281,0.069,0.57,0.104,0.859,0.104 c0.794,0,1.577-0.269,2.205-0.756l1.066-0.827C49.042,21.859,49.508,21.7,50,21.7s0.958,0.159,1.347,0.461l1.066,0.827 c0.627,0.487,1.411,0.756,2.205,0.756c0.29,0,0.579-0.035,0.86-0.104l1.31-0.322c0.172-0.042,0.349-0.063,0.524-0.063 c0.811,0,1.553,0.444,1.936,1.159l0.638,1.189c0.522,0.975,1.446,1.646,2.534,1.842l1.328,0.238c0.988,0.177,1.729,1,1.802,2.001 l0.099,1.346c0.081,1.104,0.651,2.092,1.566,2.713L68.33,34.5c0.83,0.563,1.172,1.617,0.832,2.562l-0.458,1.27 c-0.375,1.04-0.255,2.176,0.328,3.115l0.711,1.146c0.529,0.853,0.413,1.955-0.282,2.68l-0.934,0.973 c-0.766,0.798-1.119,1.884-0.968,2.979l0.184,1.337c0.136,0.993-0.418,1.953-1.348,2.332l-1.249,0.509 c-1.024,0.419-1.788,1.268-2.096,2.328l-0.376,1.296c-0.271,0.933-1.138,1.585-2.109,1.585l-1.534-0.046 c-1.062,0-2.063,0.465-2.747,1.276l-0.87,1.029C54.997,61.367,54.385,61.65,53.736,61.65z"
				/>
				<path
					fill="#472b29"
					d="M50,22.4c0.335,0,0.653,0.109,0.918,0.314l1.065,0.827c0.75,0.582,1.685,0.902,2.634,0.902 c0.345,0,0.691-0.042,1.027-0.125l1.31-0.322c0.118-0.029,0.238-0.043,0.358-0.043c0.552,0,1.058,0.303,1.319,0.79l0.637,1.189 c0.624,1.165,1.727,1.966,3.028,2.2l1.327,0.238c0.673,0.121,1.178,0.682,1.228,1.364l0.098,1.345 c0.096,1.318,0.778,2.5,1.871,3.241l1.116,0.758c0.566,0.384,0.799,1.102,0.567,1.746l-0.457,1.269 c-0.448,1.242-0.305,2.599,0.391,3.722l0.711,1.146c0.361,0.582,0.282,1.332-0.192,1.826l-0.934,0.973 c-0.915,0.953-1.336,2.25-1.157,3.56l0.184,1.336c0.093,0.678-0.284,1.331-0.918,1.589l-1.249,0.509 c-1.223,0.499-2.136,1.512-2.505,2.781l-0.376,1.295c-0.184,0.635-0.774,1.079-1.483,1.079c-0.001,0-0.001,0-0.002,0 l-1.349-0.043l-0.135-0.002c-1.268,0-2.465,0.556-3.283,1.524l-0.87,1.03c-0.285,0.338-0.702,0.531-1.145,0.531 c-0.227,0-0.445-0.05-0.65-0.149l-1.214-0.587c-0.58-0.281-1.227-0.429-1.872-0.429c-0.644,0-1.292,0.148-1.871,0.429 l-1.214,0.587c-0.205,0.099-0.424,0.149-0.65,0.149c-0.442,0-0.86-0.193-1.145-0.531l-0.87-1.03 c-0.818-0.969-2.015-1.524-3.283-1.524l-0.136,0.002l-1.396,0.044c-0.661,0-1.252-0.444-1.436-1.08l-0.376-1.295 c-0.368-1.269-1.281-2.283-2.504-2.781l-1.249-0.509c-0.633-0.258-1.011-0.912-0.918-1.589l0.183-1.336 c0.18-1.309-0.242-2.606-1.157-3.56l-0.934-0.973c-0.474-0.494-0.552-1.244-0.192-1.825l0.711-1.146 c0.696-1.123,0.839-2.479,0.391-3.722l-0.457-1.269c-0.232-0.644,0.001-1.361,0.567-1.746l1.116-0.758 c1.093-0.742,1.775-1.923,1.872-3.241l0.098-1.345c0.05-0.682,0.555-1.243,1.228-1.364l1.328-0.238 c1.3-0.234,2.404-1.036,3.027-2.2l0.637-1.189c0.261-0.487,0.767-0.79,1.319-0.79c0.12,0,0.24,0.015,0.358,0.043l1.31,0.322 c0.336,0.083,0.681,0.125,1.026,0.125c0.949,0,1.885-0.32,2.634-0.902l1.065-0.827C49.347,22.509,49.665,22.4,50,22.4 M50,21 c-0.627,0-1.254,0.203-1.776,0.608l-1.066,0.827c-0.513,0.398-1.139,0.608-1.776,0.608c-0.231,0-0.463-0.028-0.692-0.084 l-1.31-0.322c-0.231-0.057-0.463-0.084-0.692-0.084c-1.049,0-2.04,0.572-2.553,1.529l-0.637,1.189 c-0.418,0.78-1.17,1.327-2.041,1.483l-1.328,0.238c-1.302,0.234-2.28,1.32-2.377,2.64l-0.098,1.345 c-0.065,0.883-0.529,1.688-1.262,2.185l-1.116,0.758c-1.094,0.744-1.546,2.134-1.098,3.378l0.457,1.269 c0.3,0.833,0.203,1.757-0.264,2.509l-0.711,1.146c-0.698,1.125-0.545,2.578,0.371,3.533l0.934,0.973 c0.613,0.639,0.9,1.523,0.78,2.4l-0.184,1.336c-0.18,1.311,0.551,2.577,1.776,3.076l1.249,0.509 c0.82,0.334,1.442,1.025,1.688,1.875l0.376,1.295c0.36,1.241,1.496,2.089,2.781,2.089c0.031,0,0.062,0,0.093-0.001l1.348-0.043 c0.031-0.001,0.061-0.001,0.091-0.001c0.852,0,1.662,0.375,2.214,1.028l0.87,1.03c0.565,0.668,1.381,1.028,2.214,1.028 c0.426,0,0.857-0.094,1.26-0.289l1.214-0.587c0.398-0.193,0.83-0.29,1.262-0.29s0.863,0.097,1.262,0.29l1.214,0.587 c0.403,0.195,0.834,0.289,1.26,0.289c0.833,0,1.65-0.359,2.214-1.028l0.87-1.03c0.551-0.653,1.362-1.028,2.214-1.028 c0.03,0,0.061,0,0.091,0.001l1.348,0.043c0.031,0.001,0.062,0.001,0.093,0.001c1.284,0,2.421-0.849,2.781-2.089l0.376-1.295 c0.247-0.85,0.869-1.541,1.688-1.875l1.249-0.509c1.225-0.5,1.956-1.766,1.776-3.076l-0.184-1.336 c-0.12-0.877,0.167-1.761,0.78-2.4l0.934-0.973c0.916-0.955,1.069-2.408,0.371-3.533l-0.711-1.146 c-0.467-0.752-0.564-1.677-0.264-2.509l0.457-1.269c0.449-1.245-0.003-2.635-1.098-3.378l-1.116-0.758 c-0.732-0.497-1.197-1.302-1.262-2.185l-0.098-1.345c-0.096-1.319-1.075-2.406-2.377-2.64l-1.328-0.238 c-0.871-0.157-1.623-0.703-2.041-1.483l-0.637-1.189c-0.513-0.957-1.504-1.529-2.553-1.529c-0.229,0-0.462,0.027-0.692,0.084 l-1.31,0.322c-0.229,0.056-0.461,0.084-0.692,0.084c-0.637,0-1.263-0.21-1.776-0.608l-1.066-0.827C51.254,21.203,50.627,21,50,21 L50,21z"
				/>
				<path
					fill="#472b29"
					d="M64.751 37.972c-.214 0-.412-.139-.478-.354-.066-.217-.138-.431-.214-.643-.295-.824-.667-1.627-1.107-2.387-.139-.238-.057-.544.182-.683.239-.142.544-.058.683.183.47.811.868 1.669 1.183 2.549.081.226.157.455.229.688.081.264-.067.544-.332.625C64.849 37.965 64.799 37.972 64.751 37.972zM34.89 39.049c-.036 0-.072-.004-.108-.012-.27-.06-.44-.327-.38-.597 1.6-7.231 8.16-12.48 15.599-12.48 4.571 0 8.932 1.958 11.964 5.373.229.26.45.524.662.796.169.218.131.532-.087.702-.219.168-.533.13-.702-.087-.199-.256-.406-.505-.622-.748-2.842-3.2-6.93-5.036-11.216-5.036-6.973 0-13.123 4.919-14.622 11.697C35.326 38.89 35.12 39.049 34.89 39.049zM50 57.811c-7.787 0-14.405-5.543-15.737-13.18-.047-.272.135-.531.407-.578.278-.058.531.135.579.406C36.496 51.616 42.7 56.811 50 56.811c8.256 0 14.973-6.695 14.973-14.925 0-.75-.056-1.504-.167-2.24-.041-.272.147-.527.42-.568.276-.038.528.146.569.42.118.785.178 1.589.178 2.389C65.973 50.667 58.808 57.811 50 57.811zM66.113 68.707c-.099 0-.192-.059-.232-.156l-.985-2.44c-.052-.128.01-.273.138-.325.126-.054.273.009.326.138l.985 2.44c.052.128-.01.273-.138.325C66.176 68.701 66.145 68.707 66.113 68.707z"
				/>
				<g>
					<path
						fill="#472b29"
						d="M64.41,64.486c-0.099,0-0.192-0.059-0.232-0.156l-2.268-5.618c-0.052-0.128,0.01-0.273,0.138-0.325 c0.126-0.055,0.273,0.009,0.326,0.138l2.268,5.618c0.052,0.128-0.01,0.273-0.138,0.325C64.473,64.48,64.441,64.486,64.41,64.486z"
					/>
				</g>
				<g>
					<path
						fill="#472b29"
						d="M39.846,71.379c-0.033,0-0.066-0.007-0.098-0.02c-0.127-0.055-0.187-0.201-0.132-0.328l1.029-2.423 c0.054-0.128,0.202-0.183,0.328-0.133c0.127,0.055,0.187,0.201,0.132,0.328l-1.029,2.423 C40.036,71.322,39.943,71.379,39.846,71.379z"
					/>
				</g>
				<g>
					<path
						fill="#472b29"
						d="M41.626,67.189c-0.033,0-0.066-0.007-0.098-0.02c-0.127-0.055-0.187-0.201-0.132-0.328l0.508-1.195 c0.054-0.128,0.202-0.183,0.328-0.133c0.127,0.055,0.187,0.201,0.132,0.328l-0.508,1.195 C41.815,67.133,41.723,67.189,41.626,67.189z"
					/>
				</g>
				<g>
					<path
						fill="#472b29"
						d="M42.702,64.657c-0.033,0-0.066-0.007-0.098-0.02c-0.127-0.055-0.187-0.201-0.132-0.328l1.293-3.045 c0.054-0.128,0.202-0.182,0.328-0.133c0.127,0.055,0.187,0.201,0.132,0.328l-1.293,3.045 C42.891,64.601,42.799,64.657,42.702,64.657z"
					/>
				</g>
			</g>
			<g>
				<path
					fill="#fefdef"
					d="M48.167,48.784c-0.331,0-0.648-0.121-0.893-0.34l-6.485-6.37 c-0.255-0.228-0.409-0.551-0.426-0.901c-0.017-0.35,0.106-0.686,0.346-0.945c0.252-0.271,0.61-0.427,0.983-0.427 c0.33,0,0.647,0.12,0.892,0.339l5.57,5.537l9.351-9.227c0.253-0.235,0.577-0.362,0.917-0.362c0.369,0,0.711,0.146,0.965,0.41 c0.245,0.254,0.374,0.587,0.364,0.938s-0.158,0.677-0.418,0.918L49.083,48.423C48.831,48.657,48.508,48.784,48.167,48.784z"
				/>
				<path
					fill="#472b29"
					d="M58.42,36.338c0.286,0,0.572,0.111,0.785,0.333c0.41,0.426,0.39,1.097-0.044,1.499L48.907,48.245 c-0.207,0.193-0.474,0.29-0.74,0.29c-0.26,0-0.52-0.092-0.726-0.276l-6.476-6.363c-0.441-0.394-0.473-1.065-0.072-1.498 c0.213-0.23,0.506-0.347,0.8-0.347c0.259,0,0.518,0.091,0.725,0.275l5.736,5.702l9.527-9.4 C57.888,36.435,58.154,36.338,58.42,36.338 M58.42,35.838L58.42,35.838c-0.403,0-0.787,0.15-1.081,0.423l-9.185,9.063 l-5.385-5.353c-0.31-0.278-0.686-0.421-1.077-0.421c-0.442,0-0.867,0.185-1.166,0.506c-0.286,0.309-0.432,0.709-0.413,1.127 c0.02,0.418,0.204,0.803,0.518,1.084l6.459,6.346c0.308,0.276,0.684,0.42,1.077,0.42c0.403,0,0.787-0.15,1.081-0.424 l10.264-10.084c0.299-0.276,0.476-0.665,0.488-1.083c0.012-0.418-0.142-0.815-0.434-1.119 C59.269,36.016,58.851,35.838,58.42,35.838L58.42,35.838z"
				/>
			</g>
		</svg>
	</div>
</section>
<!-- The end of Testimonials section -->

<!-- Testimonials section -->
<section
	class="flex justify-between items-center w-full h-fit bg-saftech-gray/20 py-16 mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="w-full h-fit min-h-full flex flex-col justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-3 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-black w-full">OUR PRINCIPLES</h4>
			<span class=" block text-4xl font-bold w-full lg:w-2/4 text-saftech-black">
				Guiding Principles</span
			>
		</div>
	</div>
</section>
<!-- The end of Testimonials section -->

<div
	class="bg-saftech-white rounded-md flex justify-evenly items-center pt-16 pb-[150px] gap-12 flex-wrap"
>
	{#each principles as guide}
		<PrinciplesCard
			icon={guide.icon}
			name={guide.title}
			description={guide.detail}
			renderButton={false}
		/>
	{/each}
</div>

<!-- Testimonials section -->
<section
	class="flex flex-row-reverse justify-between items-center w-full h-fit bg-deep-blue space-x-10 pb-16 pt-5 mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="w-full h-fit min-h-full flex flex-col justify-center items-start rounded-md lg:pl-20 px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-3 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-white/60 w-full">OUR LEADERSHIP</h4>
			<span class=" block text-3xl font-bold w-full lg:w-3/4 text-saftech-white">
				A team of experienced and passionate leaders</span
			>
			<span class=" block text-sm lg:text-sm w-full text-saftech-white/60">
				Gorgeous people we interacted with say this... Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Voluptatibus magni cum iure minus aut fugiat omnis iste sit reprehenderit
				accusantium quisquam alias repellendus eaque dolorem facere quos architecto, sapiente velit.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti! Lorem ipsum dolor
				sit, amet consectetur adipisicing elit. Repellendus doloribus rerum, alias nisi aliquam
				expedita a eaque in? Maxime placeat exercitationem aperiam consectetur itaque accusantium
				eveniet? Architecto iure aperiam nesciunt.
			</span>
			<a
				href="/leadership"
				class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-normal-blue/60 focus:outline-none focus:px-4 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-500 ease-out"
			>
				<span class="sr-only">Meet our leaders</span>
				MEET OUR LEADERS
				<span class="">
					<svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"
						><path
							d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
							transform="translate(0 0)"
						/></svg
					>
				</span>
			</a>

			<div class="flex justify-center items-start w-fit space-x-5 pt-6 pointer-events-auto">
				{#each guides as _, index}
					<button
						on:click={() => setcurrentGuide(index)}
						type="button"
						class=" hover:cursor-pointer w-4 h-4 rounded-full {currentGuide == index
							? 'bg-deep-blue hover:opacity-100 focus:outline-none ring-2 ring-saftech-white ring-offset-2 ring-offset-saftech-white'
							: 'bg-saftech-white/80 hover:text-blue-700/60 focus:outline-none focus:ring-2 focus:ring-saftech-white focus:ring-offset-2 focus:ring-offset-saftech-white'} transition-all duration-500 ease-out"
					>
						<span class="sr-only">select next slide element</span>
					</button>
				{/each}
			</div>

			<!-- <button type="button" class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100">
          <span class="sr-only">More testimonials here</span>
          More testimonials here
          <span class="">
            <svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"><path d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z" transform="translate(0 0)"/></svg>

          </span>
        </button> -->
		</div>
	</div>

	<div
		style="background-image: url('{guides[currentGuide].image}')"
		class=" flex justify-center items-center self-end bg-no-repeat bg-cover bg-center w-2/4 lg:min-h-[550px] rounded-2xl p-10 py-0 -mt-[150px] transition-all duration-500 ease-out"
	/>
</section>
<!-- The end of Testimonials section -->

<!-- History section -->
<section
	class="flex justify-between items-center w-full h-fit bg-dark-blue py-16 mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="w-full h-fit min-h-full flex flex-col justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-3 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-white w-full">OUR HISTORY</h4>
			<span class=" block text-4xl font-bold w-full lg:w-2/4 text-saftech-white">
				Saftech Canada's Growth History</span
			>
		</div>
	</div>
</section>
<!-- The end of History section section -->

<!-- Testimonials section -->
<section
	class="flex justify-start items-center flex-nowrap space-x-2 w-full h-fit bg-saftech-white py-[200px] mx-auto max-w-full px-2 sm:px-6 lg:px-8"
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
<!-- The end of Testimonials section -->
