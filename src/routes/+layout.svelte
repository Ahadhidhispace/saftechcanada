<script>
	// @ts-nocheck
	import { page } from '$app/stores'
	export let data
	console.log(data.optimize)

	import '../app.css'
	import { onMount } from 'svelte'

	import { fade, slide, scale } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	import SubmenuCard from '$lib/components/SubmenuCard.svelte'

	// import svg for services
	import addressLocation from '$lib/assets/icons/icons8_location_2.svg'
	import addressPhone from '$lib/assets/icons/icons8_ringer_volume.svg'
	import addressTime from '$lib/assets/icons/icons8_technical_support.svg'

	let whiteBackgroundOptimized = JSON.parse(data.optimize) // JSON.parse($page.url.searchParams.get('nav_background_optimize')) || false

	export let applyTransparency = false
	export let showingSubRoutes = false

	export let showingCareer = false
	export let showingSolution = false
	export let showingWho = false

	export let loggedIn = false

	export let viewingProfile = false

	let useOld = false
	export function toggleProfileView() {
		viewingProfile = !viewingProfile
	}

	let y = 0
	// @ts-ignore
	$: {
		y > 25 ? (applyTransparency = false) : (applyTransparency = true)
	}

	$: navBgOptimized = applyTransparency && whiteBackgroundOptimized

	// @ts-ignore
	$: console.log(navBgOptimized)

	/**
	 * @param {string} pathName
	 */
	// @ts-ignore
	function currentPathnameIs(links = [], pathName) {
		return links.some((linkVar) => pathName === linkVar)
	}

	function scrollToTop() {
		y = 0
	}

	/**
	 * @type {any}
	 */

	onMount(() => {})

	const navLinks = [
		{
			career: {
				job: {
					url: '/job',
					title: 'Find a Job',
					info: 'Find employment from our...'
				},
				partner: {
					url: '/partner',
					title: 'Partner',
					info: 'You can partner with us...'
				}
			},
			whoweare: {
				about: {
					url: '/about',
					title: 'About Us',
					info: 'Our history and what we do'
				},
				location: {
					url: '/location',
					title: 'Locations',
					info: 'Browse our sites and some'
				},
				leadership: {
					url: '/leadership',
					title: 'Leadership',
					info: 'Meat our incredible team'
				}
			},
			solutions: {
				technologySupport: {
					url: '/solution',
					title: 'Technology Support',
					info: 'Technology Support Services',
					slug: 'technology-support'
				},
				softwareDevelopment: {
					url: '/solution',
					title: 'Software Development',
					info: 'Software Development Services',
					slug: 'software-development'
				},
				salesAgents: {
					url: '/solution',
					title: 'Sales Agents',
					info: 'Sales Agents Services',
					slug: 'sales-agent'
				},
				customerServices: {
					url: '/solution',
					title: 'Customer Services',
					info: 'Providing Customer Services',
					slug: 'customer-service'
				}
			}
		}
	]

	let address = {
		location: {
			string: '340 West 42<sup>nd</sup> St Toronto, TN 10036',
			icon: addressLocation
		},
		phone: {
			string: '(922) 3354 2252',
			icon: addressPhone
		},
		time: {
			string: 'Time: 9.00am - 4.00pm',
			icon: addressTime
		}
	}


	//############################################################################

	let subMenuContainer
	let showingSubNav = false
	let showChat = false

	let links = {
		'service': {active: false, displayText: 'Our Services', subLinks: [], icon: ''},
		'work': {active: false, displayText: 'How We Work', subLinks: [
			{text: 'Our Pertners', shortText: 'Browse our partners list', url: '/how-we-work/partners'},
			{text: 'Videos', shortText: 'Watch the videos here', url: '/how-we-work/videos'},
			{text: 'Training', shortText: 'We\'ve trained 400 so far', url: '/how-we-work/training'}
		], icon: ''},
		'about': {active: false, displayText: 'About Us', subLinks: [
			{text: 'Our Story', shortText: 'Being told by', url: '/about-us/our-story'},
			{text: 'Our Team', shortText: 'Being told by', url: '/about-us/our-team'},
			{text: 'Our Mission', shortText: 'Being told by', url: '/about-us/our-mission'},
			{text: 'Our Clients', shortText: 'Being told by', url: '/about-us/our-client'},
			{text: 'Testimonials', shortText: 'What people say about us', url: '/about-us/testimonials'},
		], icon: ''},
		'career': {active: false, displayText: 'Careers', subLinks: [
			{text: 'Careers', shortText: 'Find a job', url: '/how-we-work/careers'},
			{text: 'Management', shortText: 'Short description here', url: '/how-we-work/management'},
			{text: 'Apply Here', shortText: 'Apply for the job here', url: '/how-we-work/apply'},
		], icon: ''},
		'contact': {active: false, displayText: 'Contact Us', subLinks: [], icon: ''}
	}

	    /**
	 * @type {Element | null}
	 */
    let selectedElement
    /**
	 * @type {string | undefined}
	 */
    let selectedFeatureId
    let selected

	let menuSubLinks


</script>

<svelte:window bind:scrollY="{y}" />

<nav
	on:mouseenter={() => {
		showingSubNav = true
	}}
	on:mouseleave={() => {
		showingSubNav = false
	}}
	id="top" class=" fixed z-40 bg-deep-blue backdrop-blur mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-w-full py-4 transition-all duration-500 ease-in-out">
	
	<div id="main-menu"
		class="flex justify-between items-center"	
	>
		<section class=" flex {showingSubNav ? 'pb-6':'pb-0'} transition-all duration-500 ease-out">
			<a href="/">
			<svg
					class=" h-10 w-auto"
					xmlns="http://www.w3.org/2000/svg"
					width="320.809"
					height="73.18"
					viewBox="0 0 320.809 73.18"
					><g transform="translate(3.543 3.546)"
						><path
							d="M654,449.333s-2.734-20.311,9.333-37.333C675.066,395.448,706,383.333,734,408"
							transform="translate(-653.734 -393.979)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7"></path><path
							d="M653.9,431.979s-1.58-14.314,5.837-26c7.211-11.363,27.333-18,43.333-6"
							transform="translate(-638.135 -377.959)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7"></path><path
							d="M653.816,417.608a21.035,21.035,0,0,1,0-14.667c2.93-7.3,12.863-10.667,19.333-8.667"
							transform="translate(-622.216 -362.921)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7"></path><path
							d="M726.224,436.715s-16.489-.4-18.222,6.618,0,18,18.222,16.667,32.17,3.431,32.845-23.285c-2-13.069-12.615-17.312-22.047-14.715C726.534,424.885,726.224,436.715,726.224,436.715Z"
							transform="translate(-653.734 -393.979)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linejoin="round"
							stroke-width="7"></path><g transform="translate(-416.734 -291)"
							><g transform="translate(542 309)"
								><text
									transform="translate(0 24)"
									fill="#f5f5f5"
									font-size="23"
									font-family="Poppins-Bold, Poppins"
									font-weight="700"><tspan x="0" y="0">Saftech Canada</tspan></text
								><text
									transform="translate(2 44)"
									fill="#f5f5f5"
									font-size="13"
									font-family="Poppins-Light, Poppins"
									font-weight="300"><tspan x="0" y="0">More that a tech company</tspan></text
								></g
							></g
						></g
					></svg
				>
		</a>
		</section>
		<section class="h-full flex justify-center items-center {showingSubNav ? 'pb-6':'pb-0'} transition-all duration-500 ease-out">
			<div class="h-full">
				<ul class="h-full flex space-x-10">
					{#each Object.keys(links) as navItem, index}
						<li
						on:mouseenter={() => {
                selectedElement = document.querySelector(`#${navItem}`)
                // console.log(selectedElement)
                console.log(Object.entries(links)[index][1].subLinks)
				let menuSubLinks = Object.entries(links)[index][1].subLinks

                selected = selectedElement?.id
                selectedFeatureId = selectedElement?.id

                selectedElement?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })}}
						
						id="" class="font-bold text-lg text-saftech-white">{ Object.entries(links)[index][1].displayText }</li> 
					{/each}
				</ul>
			</div>	
		</section>
		<section class="{showingSubNav ? 'pb-6':'pb-0'} transition-all duration-500 ease-out">
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button
					type="button"
					class="rounded-md p-2 mr-6 font-bold text-xs hover:text-blue-700/60 bg-white/5 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-500 ease-out"
				>
					<span class="sr-only">search</span>
					<svg class="fill-saftech-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20">
						<path d="M13 3C7.4889971 3 3 7.4889971 3 13C3 18.511003 7.4889971 23 13 23C15.396508 23 17.597385 22.148986 19.322266 20.736328L25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969L20.736328 19.322266C22.148986 17.597385 23 15.396508 23 13C23 7.4889971 18.511003 3 13 3 z M 13 5C17.430123 5 21 8.5698774 21 13C21 17.430123 17.430123 21 13 21C8.5698774 21 5 17.430123 5 13C5 8.5698774 8.5698774 5 13 5 z" />
					</svg>
				</button>

				<div class="flex items-center space-x-2">
					<svg
						class="flex items-center fill-saftech-white"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="30"
						height="30"
					>
						<path
							d="M11.316406 3.007813C10.707031 3.046875 10.050781 3.265625 9.425781 3.703125C9.359375 3.746094 2.917969 8.414063 3 11.035156C3.238281 18.519531 10.523438 27.328125 16.59375 33.402344C22.664063 39.46875 31.46875 46.753906 38.984375 47L39.03125 47C41.632813 47 46.242188 40.636719 46.285156 40.574219C46.808594 39.828125 47.058594 38.972656 46.984375 38.164063C46.914063 37.363281 46.546875 36.675781 45.976563 36.277344C45.296875 35.800781 37.917969 30.894531 37.019531 30.34375C36.140625 29.804688 34.851563 29.890625 33.570313 30.566406C32.847656 30.949219 30.636719 32.207031 29.605469 32.796875C28.695313 32.160156 26.476563 30.472656 23 26.996094C19.519531 23.519531 17.832031 21.296875 17.199219 20.390625C17.789063 19.359375 19.046875 17.148438 19.425781 16.425781C20.113281 15.125 20.195313 13.824219 19.640625 12.957031C19.113281 12.117188 14.230469 4.71875 13.714844 4.003906C13.238281 3.34375 12.335938 2.933594 11.316406 3.007813 Z M 25 5L25 7C34.925781 7 43 15.074219 43 25L45 25C45 13.972656 36.027344 5 25 5 Z M 25 10.542969L25 12.542969C31.871094 12.542969 37.457031 18.132813 37.457031 25L39.457031 25C39.457031 17.027344 32.972656 10.542969 25 10.542969 Z M 25 16L25 18C28.859375 18 32 21.140625 32 25L34 25C34 20.035156 29.960938 16 25 16Z"
						></path>
					</svg>
					<h2 class=" relative before:absolute before:inset-0 before:-mt-4 -mb-3 before:indent-3 font-bold before:font-normal before:content-['Contact_info'] before:text-saftech-white/80 before:text-sm text-saftech-white">+1 2345 67890</h2>

				</div>

				<!-- Profile dropdown -->
				<div class="relative ml-3">
					<div>
						<button
							on:click="{toggleProfileView}"
							type="button"
							class="flex rounded-full bg-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<span class="sr-only">Open user menu</span>

							<!-- load user image if logged in and has profile -->
							{#if !loggedIn}
								<!-- <svg
									fill=""
									class=" fill-slate-100 h-8 w-8 rounded-full"
									xmlns="http://www.w3.org/2000/svg"
									width="72"
									height="72"
									viewBox="0 0 72 72"
									><path
										d="M38,2.008a35.995,35.995,0,0,0-2.724,71.887l.11.009c.864.062,1.733.1,2.614.1s1.749-.042,2.614-.1l.11-.009A35.995,35.995,0,0,0,38,2.008Zm0,3.13A32.865,32.865,0,0,1,61.463,61.021a32.033,32.033,0,0,0-8.315-3.858c-3.262-1.143-6.348-2.226-7.2-4.109-.135-1.607-.123-2.863-.11-4.3l0-.611a15.2,15.2,0,0,0,3.736-6.692c1.033-.551,2.3-1.872,2.675-5.035a4.847,4.847,0,0,0-.883-3.6c.845-2.9,2.527-10.254-.419-15a8.211,8.211,0,0,0-5.6-3.769c-1.388-1.719-4.008-2.657-7.511-2.657-5.323.1-9.226,1.729-11.592,4.845-2.791,3.678-3.318,9.236-1.571,16.527a4.832,4.832,0,0,0-.92,3.65c.38,3.163,1.639,4.484,2.672,5.035a15.175,15.175,0,0,0,3.736,6.7l0,.6c.013,1.448.025,2.706-.11,4.32-.858,1.888-3.958,2.983-7.236,4.139a32.7,32.7,0,0,0-8.275,3.837A32.867,32.867,0,0,1,38,5.138Z"
										transform="translate(-2 -2.008)"></path></svg
								> -->
							{:else}
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="user profile"
								/>
							{/if}
						</button>
					</div>

								<!--
						Dropdown menu, show/hide based on menu state.
			
						Entering: "transition ease-out duration-100"
							From: "transform opacity-0 scale-95"
							To: "transform opacity-100 scale-100"
						Leaving: "transition ease-in duration-75"
							From: "transform opacity-100 scale-100"
							To: "transform opacity-0 scale-95"
						-->
					{#if viewingProfile}
						<!-- and only if the user is logged in -->
						<div
							class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<!-- Active: "bg-gray-100", Not Active: "" -->
							<a
								href="/user/profile"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0">Your Profile</a
							>
							<a
								href="/user/settings"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-1">Settings</a
							>
							<a
								href="/auth/logout"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-2">Sign out</a
							>
						</div>
					{/if}
				</div>
			</div>
		</section>
	</div>

	{#if showingSubNav}
		<div id="submenu-container" transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
			class="overflow-x-visible relative h-[400px] min-h-fit bg-dark-blue/0"
		>
				<svg class="z-0 absolute top-1/2 -translate-y-1/2 -right-[100px] p-3 px-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="400" height="400">
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
			<div bind:this={subMenuContainer} class=" flex flex-col items-center w-full min-h-full max-h-full scrollbar-none p-5 snap-y overflow-auto">

				<!-- use filter effect if slide is active black&white/color -->
				{#each Object.keys(links) as feature, index}
					<div on:mouseenter={(e) => {
						selectedElement = e.currentTarget
						// console.log(selectedElement)
						selectedFeatureId = selectedElement.id
						selected = selectedFeatureId

						selectedElement?.scrollIntoView({
							behavior: 'smooth',
							block: 'nearest'
						})
					}} id="{ feature }" title="{feature}" class="backdrop-blur-lg px-20 overflow-hidden w-full max-h-400px[] min-h-[400px] rounded-xl text-2xl { feature === selectedFeatureId ? ' bg-saftech-white/5 text-saftech-white opacity-100':'opacity-5 bg-transparent text-saftech-black' } snap-center snap-mandatory origin-center transition-all duration-300 ease-out ">
						<div class="w-fit max-h-400px[] min-h-[400px] grid grid-cols-2 place-content-center place-items-center gap-4">
							{#each Object.entries(links)[index][1].subLinks  as navSubLink, index}
								<div class=" group hover:bg-saftech-white cursor-pointer rounded-lg px-10 py-5 h-fit w-fit min-w-[300px] transition-all duration-300 ease-out">
									<p class="group-hover:text-normal-blue text-xl font-normal text-saftech-white transition-all duration-300 ease-out">{navSubLink.text}</p>
									<p class="group-hover:text-normal-blue text-sm font-normal text-saftech-white/60 transition-all duration-300 ease-out">{navSubLink.shortText}</p>
								</div> 
							{/each}
						</div>
						
						
						<!-- <div class="flex items-end absolute bottom-0 left-0 m-2 p-5 h-fit { `feature${index}` === selectedFeatureId ? 'w-1/2 bg-black':'w-fit min-full bg-white' }  rounded-xl  transition-all duration-500 ease-out ">
							<h2 class=" font-bold text-2xl w-[10ch] { `feature${index}` === selectedFeatureId ? 'text-saftech-white':'text-black' }  transition-all duration-500 ease-out ">{feature.text}</h2>
						</div> -->
					</div>
				{/each}

			</div>
		</div>
	{/if}
	
</nav>

<!-- bg optimize previous background color bg-saftech-black/50 -->
{#if useOld}
	<nav
		id="top"
		class=" fixed z-40 {applyTransparency && navBgOptimized
			? 'bg-dark-blue'
			: 'bg-dark-blue'}  {applyTransparency && !navBgOptimized
			? ' bg-saftech-white/5 backdrop-blur'
			: ' bg-dark-blue'}  min-w-full py-4 transition-all duration-500 ease-in-out"
	>
		<div
			class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between transition-all ease-in-out"
		>
			<div class=" flex justify-center items-center transition-all ease-in-out">
				<svg
					class=" h-10 w-auto"
					xmlns="http://www.w3.org/2000/svg"
					width="320.809"
					height="73.18"
					viewBox="0 0 320.809 73.18"
					><g transform="translate(3.543 3.546)"
						><path
							d="M654,449.333s-2.734-20.311,9.333-37.333C675.066,395.448,706,383.333,734,408"
							transform="translate(-653.734 -393.979)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7"></path><path
							d="M653.9,431.979s-1.58-14.314,5.837-26c7.211-11.363,27.333-18,43.333-6"
							transform="translate(-638.135 -377.959)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7"></path><path
							d="M653.816,417.608a21.035,21.035,0,0,1,0-14.667c2.93-7.3,12.863-10.667,19.333-8.667"
							transform="translate(-622.216 -362.921)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7"></path><path
							d="M726.224,436.715s-16.489-.4-18.222,6.618,0,18,18.222,16.667,32.17,3.431,32.845-23.285c-2-13.069-12.615-17.312-22.047-14.715C726.534,424.885,726.224,436.715,726.224,436.715Z"
							transform="translate(-653.734 -393.979)"
							fill="none"
							stroke="#f5f5f5"
							stroke-linejoin="round"
							stroke-width="7"></path><g transform="translate(-416.734 -291)"
							><g transform="translate(542 309)"
								><text
									transform="translate(0 24)"
									fill="#f5f5f5"
									font-size="23"
									font-family="Poppins-Bold, Poppins"
									font-weight="700"><tspan x="0" y="0">Saftech Canada</tspan></text
								><text
									transform="translate(2 44)"
									fill="#f5f5f5"
									font-size="13"
									font-family="Poppins-Light, Poppins"
									font-weight="300"><tspan x="0" y="0">More that a tech company</tspan></text
								></g
							></g
						></g
					></svg
				>
			</div>
			<!-- logo container-->
			<div class=" h-full flex justify-center items-center">
				<div class=" h-full flex items-stretch space-x-4 bg-blend-difference">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<a
						on:mouseenter="{() => {
							showingSubRoutes = false
							showingWho = false
							showingCareer = false
							showingSolution = false
						}}"
						href="/"
						class="{currentPathnameIs(['/'], $page.url.pathname) && !applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-normal-blue/50 px-4'
							: 'rounded-none'} {currentPathnameIs(['/'], $page.url.pathname) && applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-saftech-black/20 px-4'
							: 'rounded-none'} {applyTransparency
							? 'text-slate-50 hover:text-sky-700'
							: 'text-slate-400 hover:text-slate-50'} px-2 py-2 text-sm font-light flex flex-1 transition-all duration-500 ease-in-out"
						aria-current="page">Home</a
					>
					<a
						on:mouseenter="{() => {
							showingSubRoutes = true
							showingWho = false
							showingCareer = false
							showingSolution = true
						}}"
						href="/solution"
						class="{currentPathnameIs(
							[
								'/solution',
								'/solution/technology-support',
								'/solution/software-development',
								'/solution/sales-agent',
								'/solution/customer-service'
							],
							$page.url.pathname
						) && !applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-normal-blue/50 px-4'
							: 'rounded-none'} {currentPathnameIs(
							[
								'/solution',
								'/solution/technology-support',
								'/solution/software-development',
								'/solution/sales-agent',
								'/solution/customer-service'
							],
							$page.url.pathname
						) && applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-saftech-black/20 px-4'
							: 'rounded-none'} {applyTransparency
							? 'text-slate-50 hover:text-sky-700'
							: 'text-slate-400 hover:text-slate-50'} px-2 py-2 text-sm font-light flex flex-1 transition-all duration-500 ease-in-out"
						>Solutions
						<span class=" w-4 h-4 flex justify-center items-end">
							<svg
								class=" ml-1 w-3 h-3 fill-current pt-1"
								viewBox="0 0 48 48"
								width="144"
								height="144"
							>
								<path
									d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z"
								></path>
							</svg>
						</span>
					</a>
					<a
						on:mouseenter="{() => {
							showingSubRoutes = false
							showingWho = false
							showingCareer = false
							showingSolution = false
						}}"
						href="/news"
						class="{currentPathnameIs(['/news'], $page.url.pathname) && !applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-normal-blue/50 px-4'
							: 'rounded-none'} {currentPathnameIs(['/news'], $page.url.pathname) && applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-saftech-black/20 px-4'
							: 'rounded-none'} {applyTransparency
							? 'text-slate-50 hover:text-sky-700'
							: 'text-slate-400 hover:text-slate-50'} px-2 py-2 text-sm font-light flex flex-1 transition-all duration-500 ease-in-out"
						>News</a
					>
					<a
						on:mouseenter="{() => {
							showingSubRoutes = true
							showingWho = false
							showingCareer = true
							showingSolution = false
						}}"
						href="/career"
						class="{currentPathnameIs(['/job', '/partner'], $page.url.pathname) && !applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-normal-blue/50 px-4'
							: 'rounded-none'} {currentPathnameIs(['/job', '/partner'], $page.url.pathname) &&
						applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-saftech-black/20 px-4'
							: 'rounded-none'} {applyTransparency
							? 'text-slate-50 hover:text-sky-700'
							: 'text-slate-400 hover:text-slate-50'} px-2 py-2 text-sm font-light flex flex-1 transition-all duration-500 ease-in-out"
						>Career
						<span class=" w-4 h-4 flex justify-center items-end">
							<svg
								class=" ml-1 w-3 h-3 fill-current pt-1"
								viewBox="0 0 48 48"
								width="144"
								height="144"
							>
								<path
									d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z"
								></path>
							</svg>
						</span>
					</a>
					<a
						on:mouseenter="{() => {
							showingSubRoutes = true
							showingWho = true
							showingCareer = false
							showingSolution = false
						}}"
						href="/whoweare"
						class="{currentPathnameIs(['/about', '/locations', '/leadership'], $page.url.pathname) &&
						!applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-normal-blue/50 px-4'
							: 'rounded-none'} {currentPathnameIs(
							['/about', '/locations', '/leadership'],
							$page.url.pathname
						) && applyTransparency
							? 'rounded-t opacity-90 bg-gradient-to-b from-saftech-black/20 px-4'
							: 'rounded-none'} {applyTransparency
							? 'text-slate-50 hover:text-sky-700'
							: 'text-slate-400 hover:text-slate-50'} px-2 py-2 text-sm font-light flex transition-all duration-500 ease-in-out"
						>Who We Are

						<span class=" w-4 h-4 flex justify-center items-end">
							<svg
								class=" ml-1 w-3 h-3 fill-current pt-1"
								viewBox="0 0 48 48"
								width="144"
								height="144"
							>
								<path
									d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z"
								></path>
							</svg>
						</span>
					</a>
				</div>
			</div>
			<!-- links container-->

			<div class=" h-full flex justify-center items-center">
				<div
					class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<button
						type="button"
						class="rounded-md bg-slate-50 py-2 px-6 mr-3 font-bold text-xs text-dark-blue hover:text-blue-700/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-500 ease-out"
					>
						<span class="sr-only">quote us</span>
						QUOTE US
						<!-- <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
						</svg> -->
					</button>

					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								on:click="{toggleProfileView}"
								type="button"
								class="flex rounded-full bg-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="sr-only">Open user menu</span>

								<!-- load user image if logged in and has profile -->
								{#if !loggedIn}
									<svg
										fill=""
										class=" fill-slate-100 h-8 w-8 rounded-full"
										xmlns="http://www.w3.org/2000/svg"
										width="72"
										height="72"
										viewBox="0 0 72 72"
										><path
											d="M38,2.008a35.995,35.995,0,0,0-2.724,71.887l.11.009c.864.062,1.733.1,2.614.1s1.749-.042,2.614-.1l.11-.009A35.995,35.995,0,0,0,38,2.008Zm0,3.13A32.865,32.865,0,0,1,61.463,61.021a32.033,32.033,0,0,0-8.315-3.858c-3.262-1.143-6.348-2.226-7.2-4.109-.135-1.607-.123-2.863-.11-4.3l0-.611a15.2,15.2,0,0,0,3.736-6.692c1.033-.551,2.3-1.872,2.675-5.035a4.847,4.847,0,0,0-.883-3.6c.845-2.9,2.527-10.254-.419-15a8.211,8.211,0,0,0-5.6-3.769c-1.388-1.719-4.008-2.657-7.511-2.657-5.323.1-9.226,1.729-11.592,4.845-2.791,3.678-3.318,9.236-1.571,16.527a4.832,4.832,0,0,0-.92,3.65c.38,3.163,1.639,4.484,2.672,5.035a15.175,15.175,0,0,0,3.736,6.7l0,.6c.013,1.448.025,2.706-.11,4.32-.858,1.888-3.958,2.983-7.236,4.139a32.7,32.7,0,0,0-8.275,3.837A32.867,32.867,0,0,1,38,5.138Z"
											transform="translate(-2 -2.008)"></path></svg
									>
								{:else}
									<img
										class="h-8 w-8 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt="user profile"
									/>
								{/if}
							</button>
						</div>

									<!--
							Dropdown menu, show/hide based on menu state.
				
							Entering: "transition ease-out duration-100"
								From: "transform opacity-0 scale-95"
								To: "transform opacity-100 scale-100"
							Leaving: "transition ease-in duration-75"
								From: "transform opacity-100 scale-100"
								To: "transform opacity-0 scale-95"
							-->
						{#if viewingProfile}
							<!-- and only if the user is logged in -->
							<div
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a
									href="/user/profile"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Your Profile</a
								>
								<a
									href="/user/settings"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-1">Settings</a
								>
								<a
									href="/auth/logout"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2">Sign out</a
								>
							</div>
						{/if}
					</div>
				</div>
			</div>
			<!-- profile and quote buttons container-->
		</div>
	</nav>


	<!-- {#if showingSubRoutes} -->
	<!-- in:scale="{{ duration: 250, delay: 300, opacity: 0, easing: quintOut }}" out:scale="{{ duration: 500, delay: 0, opacity: 0, easing: quintOut }} -->
	<div
		class="fixed z-50 {showingSubRoutes == true
			? 'opacity-100 mt-[70px] '
			: ' mt-[65px] opacity-0'} shadow-lg flex justify-center items-center space-x-4 w-full h-auto bg-saftech-white mt-5 transition-all duration-500 ease-out"
	>
		<!-- {#if showingCareer == true} -->
		<div
			class=" {showingCareer == true
				? 'block opacity-100'
				: 'hidden opacity-0 '} flex justify-center items-center space-x-4 w-full h-[100px] transition-all delay-500 ease-in-out"
		>
			<SubmenuCard
				conditionChecker="{showingCareer}"
				url="{navLinks[0].career.job.url}"
				title="{navLinks[0].career.job.title}"
				info="{navLinks[0].career.job.info}"
			>
				<svg
					class=" object-center w-12 h-12 {currentPathnameIs(['/job'], $page.url.pathname)
						? 'fill-saftech-white/20'
						: 'fill-saftech-black/20'} "
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C12.972,4,4,12.972,4,24c0,3.186,0.77,6.343,2.232,9.172l-2.139,7.657c-0.242,0.867,0.003,1.802,0.64,2.439c0.475,0.475,1.115,0.732,1.771,0.732c0.224,0,0.449-0.03,0.67-0.092l7.661-2.139C17.662,43.23,20.817,44,24,44c11.028,0,20-8.972,20-20S35.028,4,24,4z M22.5,14.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v12c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5V14.5z M24,35c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,34.105,25.105,35,24,35z"
					></path>
				</svg>
			</SubmenuCard>

			<SubmenuCard
				conditionChecker="{showingCareer}"
				url="{navLinks[0].career.partner.url}"
				title="{navLinks[0].career.partner.title}"
				info="{navLinks[0].career.partner.info}"
			>
				<svg
					class=" object-center w-12 h-12 {currentPathnameIs(['/partner'], $page.url.pathname)
						? 'fill-saftech-white/20'
						: 'fill-saftech-black/20'} "
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C12.972,4,4,12.972,4,24c0,3.186,0.77,6.343,2.232,9.172l-2.139,7.657c-0.242,0.867,0.003,1.802,0.64,2.439c0.475,0.475,1.115,0.732,1.771,0.732c0.224,0,0.449-0.03,0.67-0.092l7.661-2.139C17.662,43.23,20.817,44,24,44c11.028,0,20-8.972,20-20S35.028,4,24,4z M22.5,14.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v12c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5V14.5z M24,35c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,34.105,25.105,35,24,35z"
					></path>
				</svg>
			</SubmenuCard>
		</div>
		<!-- {/if} -->

		<!-- {#if showingWho == true} -->
		<div
			class=" {showingWho == true
				? 'opacity-100 block transition-all ease-in-out'
				: ' opacity-0 hidden transition-all ease-in-out'} flex justify-center items-center space-x-4 w-full h-[100px] transition-all delay-500 ease-in-out"
		>
			<SubmenuCard
				conditionChecker="{showingWho}"
				url="{navLinks[0].whoweare.about.url}"
				title="{navLinks[0].whoweare.about.title}"
				info="{navLinks[0].whoweare.about.info}"
			>
				<svg
					class=" object-center w-12 h-12 fill-saftech-black/20"
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C12.972,4,4,12.972,4,24c0,3.186,0.77,6.343,2.232,9.172l-2.139,7.657c-0.242,0.867,0.003,1.802,0.64,2.439c0.475,0.475,1.115,0.732,1.771,0.732c0.224,0,0.449-0.03,0.67-0.092l7.661-2.139C17.662,43.23,20.817,44,24,44c11.028,0,20-8.972,20-20S35.028,4,24,4z M22.5,14.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v12c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5V14.5z M24,35c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,34.105,25.105,35,24,35z"
					></path>
				</svg>
			</SubmenuCard>

			<SubmenuCard
				conditionChecker="{showingWho}"
				url="{navLinks[0].whoweare.location.url}"
				title="{navLinks[0].whoweare.location.title}"
				info="{navLinks[0].whoweare.location.info}"
			>
				<svg
					class=" object-center w-12 h-12 fill-saftech-black/20"
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z"
					></path>
				</svg>
			</SubmenuCard>

			<SubmenuCard
				conditionChecker="{showingWho}"
				url="{navLinks[0].whoweare.leadership.url}"
				title="{navLinks[0].whoweare.leadership.title}"
				info="{navLinks[0].whoweare.leadership.info}"
			>
				<svg
					class=" object-center w-12 h-12 fill-saftech-black/20"
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M23.984375 5.9863281 A 1.0001 1.0001 0 0 0 23 7L23 13 A 1.0001 1.0001 0 1 0 25 13L25 7 A 1.0001 1.0001 0 0 0 23.984375 5.9863281 z M 13.869141 9.8691406 A 1.0001 1.0001 0 0 0 13.171875 11.585938L17.414062 15.828125 A 1.0001 1.0001 0 1 0 18.828125 14.414062L14.585938 10.171875 A 1.0001 1.0001 0 0 0 13.869141 9.8691406 z M 34.101562 9.8691406 A 1.0001 1.0001 0 0 0 33.414062 10.171875L29.171875 14.414062 A 1.0001 1.0001 0 1 0 30.585938 15.828125L34.828125 11.585938 A 1.0001 1.0001 0 0 0 34.101562 9.8691406 z M 24 16C22.458334 16 21.112148 16.632133 20.253906 17.597656C19.395664 18.563179 19 19.791667 19 21C19 22.208333 19.395664 23.436821 20.253906 24.402344C21.112148 25.367867 22.458334 26 24 26C25.541666 26 26.887852 25.367867 27.746094 24.402344C28.604336 23.436821 29 22.208333 29 21C29 19.791667 28.604336 18.563179 27.746094 17.597656C26.887852 16.632133 25.541666 16 24 16 z M 24 19C24.791666 19 25.195482 19.242867 25.503906 19.589844C25.81233 19.936821 26 20.458333 26 21C26 21.541667 25.81233 22.063179 25.503906 22.410156C25.195482 22.757133 24.791666 23 24 23C23.208334 23 22.804518 22.757133 22.496094 22.410156C22.18767 22.063179 22 21.541667 22 21C22 20.458333 22.18767 19.936821 22.496094 19.589844C22.804518 19.242867 23.208334 19 24 19 z M 9 22C7.4583337 22 6.1121484 22.632133 5.2539062 23.597656C4.3956641 24.563179 4 25.791667 4 27C4 28.208333 4.3956641 29.436821 5.2539062 30.402344C6.1121484 31.367867 7.4583337 32 9 32C10.541666 32 11.887852 31.367867 12.746094 30.402344C13.604336 29.436821 14 28.208333 14 27C14 25.791667 13.604336 24.563179 12.746094 23.597656C11.887852 22.632133 10.541666 22 9 22 z M 39 22C37.458334 22 36.112148 22.632133 35.253906 23.597656C34.395664 24.563179 34 25.791667 34 27C34 28.208333 34.395664 29.436821 35.253906 30.402344C36.112148 31.367867 37.458334 32 39 32C40.541666 32 41.887852 31.367867 42.746094 30.402344C43.604336 29.436821 44 28.208333 44 27C44 25.791667 43.604336 24.563179 42.746094 23.597656C41.887852 22.632133 40.541666 22 39 22 z M 9 25C9.791666 25 10.195482 25.242867 10.503906 25.589844C10.81233 25.936821 11 26.458333 11 27C11 27.541667 10.81233 28.063179 10.503906 28.410156C10.195482 28.757133 9.791666 29 9 29C8.208334 29 7.8045177 28.757133 7.4960938 28.410156C7.1876698 28.063179 7 27.541667 7 27C7 26.458333 7.1876698 25.936821 7.4960938 25.589844C7.8045177 25.242867 8.208334 25 9 25 z M 39 25C39.791666 25 40.195482 25.242867 40.503906 25.589844C40.81233 25.936821 41 26.458333 41 27C41 27.541667 40.81233 28.063179 40.503906 28.410156C40.195482 28.757133 39.791666 29 39 29C38.208334 29 37.804518 28.757133 37.496094 28.410156C37.18767 28.063179 37 27.541667 37 27C37 26.458333 37.18767 25.936821 37.496094 25.589844C37.804518 25.242867 38.208334 25 39 25 z M 18.052734 28C16.384766 28 15 29.384766 15 31.052734L15 38.949219C15 40.778128 16.154905 42.35297 17.769531 43.382812C19.384158 44.412656 21.526281 45.001953 24 45.001953C26.473607 45.001953 28.613818 44.412548 30.228516 43.382812C31.843213 42.353077 33 40.77836 33 38.949219L33 31.052734C33 29.384766 31.615234 28 29.947266 28L18.052734 28 z M 18.052734 31L29.947266 31C29.993297 31 30 31.006703 30 31.052734L30 38.949219C30 39.503077 29.637239 40.203001 28.617188 40.853516C27.597135 41.50403 25.987393 42.001953 24 42.001953C22.012719 42.001953 20.402936 41.504172 19.382812 40.853516C18.362689 40.202859 18 39.502309 18 38.949219L18 31.052734C18 31.006703 18.006703 31 18.052734 31 z M 3.0527344 34C1.3697344 34 2.9605947e-16 35.369734 0 37.052734L0 38.949219C0 42.399219 3.869 45.001953 9 45.001953C11.3 45.001953 13.342391 44.475891 14.900391 43.587891C13.695391 42.292891 13 40.705219 13 38.949219L13 34L3.0527344 34 z M 35 34L35 38.949219C35 40.704219 34.304609 42.292891 33.099609 43.587891C34.657609 44.475891 36.7 45.001953 39 45.001953C44.131 45.001953 48 42.399219 48 38.949219L48 37.052734C48 35.369734 46.630266 34 44.947266 34L35 34 z"
					></path>
				</svg>
			</SubmenuCard>
		</div>
		<!-- {/if} -->

		<!-- {#if showingSolution == true} -->
		<div
			class=" {showingSolution == true
				? 'opacity-100 block transition-all ease-in-out'
				: ' opacity-0 hidden transition-all ease-in-out'} flex justify-center items-center space-x-4 w-full h-[100px] transition-all delay-500 ease-in-out"
		>
			<SubmenuCard
				conditionChecker="{showingSolution}"
				url="{navLinks[0].solutions.technologySupport.url.concat(
					`/${navLinks[0].solutions.technologySupport.slug}`
				)}"
				title="{navLinks[0].solutions.technologySupport.title}"
				info="{navLinks[0].solutions.technologySupport.info}"
			>
				<svg
					class=" object-center w-12 h-12 fill-saftech-black/20"
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C12.972,4,4,12.972,4,24c0,3.186,0.77,6.343,2.232,9.172l-2.139,7.657c-0.242,0.867,0.003,1.802,0.64,2.439c0.475,0.475,1.115,0.732,1.771,0.732c0.224,0,0.449-0.03,0.67-0.092l7.661-2.139C17.662,43.23,20.817,44,24,44c11.028,0,20-8.972,20-20S35.028,4,24,4z M22.5,14.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v12c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5V14.5z M24,35c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,34.105,25.105,35,24,35z"
					></path>
				</svg>
			</SubmenuCard>

			<SubmenuCard
				conditionChecker="{showingSolution}"
				url="{navLinks[0].solutions.softwareDevelopment.url.concat(
					`/${navLinks[0].solutions.softwareDevelopment.slug}`
				)}"
				title="{navLinks[0].solutions.softwareDevelopment.title}"
				info="{navLinks[0].solutions.softwareDevelopment.info}"
			>
				<svg
					class=" object-center w-12 h-12 fill-saftech-black/20"
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C12.972,4,4,12.972,4,24c0,3.186,0.77,6.343,2.232,9.172l-2.139,7.657c-0.242,0.867,0.003,1.802,0.64,2.439c0.475,0.475,1.115,0.732,1.771,0.732c0.224,0,0.449-0.03,0.67-0.092l7.661-2.139C17.662,43.23,20.817,44,24,44c11.028,0,20-8.972,20-20S35.028,4,24,4z M22.5,14.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v12c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5V14.5z M24,35c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,34.105,25.105,35,24,35z"
					></path>
				</svg>
			</SubmenuCard>

			<SubmenuCard
				conditionChecker="{showingSolution}"
				url="{navLinks[0].solutions.salesAgents.url.concat(
					`/${navLinks[0].solutions.salesAgents.slug}`
				)}"
				title="{navLinks[0].solutions.salesAgents.title}"
				info="{navLinks[0].solutions.salesAgents.info}"
			>
				<svg
					class=" object-center w-12 h-12 fill-saftech-black/20"
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C12.972,4,4,12.972,4,24c0,3.186,0.77,6.343,2.232,9.172l-2.139,7.657c-0.242,0.867,0.003,1.802,0.64,2.439c0.475,0.475,1.115,0.732,1.771,0.732c0.224,0,0.449-0.03,0.67-0.092l7.661-2.139C17.662,43.23,20.817,44,24,44c11.028,0,20-8.972,20-20S35.028,4,24,4z M22.5,14.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v12c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5V14.5z M24,35c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,34.105,25.105,35,24,35z"
					></path>
				</svg>
			</SubmenuCard>

			<SubmenuCard
				conditionChecker="{showingSolution}"
				url="{navLinks[0].solutions.customerServices.url.concat(
					`/${navLinks[0].solutions.customerServices.slug}`
				)}"
				title="{navLinks[0].solutions.customerServices.title}"
				info="{navLinks[0].solutions.customerServices.info}"
			>
				<svg
					class=" object-center w-12 h-12 fill-saftech-black/20"
					viewBox="0 0 48 48"
					width="144"
					height="144"
				>
					<path
						d="M24,4C12.972,4,4,12.972,4,24c0,3.186,0.77,6.343,2.232,9.172l-2.139,7.657c-0.242,0.867,0.003,1.802,0.64,2.439c0.475,0.475,1.115,0.732,1.771,0.732c0.224,0,0.449-0.03,0.67-0.092l7.661-2.139C17.662,43.23,20.817,44,24,44c11.028,0,20-8.972,20-20S35.028,4,24,4z M22.5,14.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v12c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5V14.5z M24,35c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,34.105,25.105,35,24,35z"
					></path>
				</svg>
			</SubmenuCard>
		</div>
		<!-- {/if} -->
	</div>

	<!-- {/if} -->
{/if}



{#if showChat}
	<div transition:scale={{duration: 500, easing: quintOut}}
		class="{!showChat ? 'opacity-0 scale-0':'scale-100 opacity-100'}  fixed bg-transparent top-[80%] left-[95%] z-[999] w-[50px] h-[50px] flex flex-grow-0 shrink-0 justify-center items-center rounded-full"
	>
		<button
			type="button"
			class="absolute inset-0 w-[50px] h-[50px] flex flex-grow-0 shrink-0 justify-center items-center rounded-full opacity-100 bg-saftech-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-saftech-white ring-offset-2 focus:ring-offset-saftech-white"
		>
			<span class="sr-only">Chatbot button</span>
			<svg class="" width="30" height="30" viewBox="0 0 50.019 50"
				><g transform="translate(-24.991 -25)"
					><path
						d="M44.912,41.333A14.058,14.058,0,1,0,32.389,49H49a19.054,19.054,0,0,1-4.052-7.592M43.506,26A19.167,19.167,0,1,0,6.646,28.556C9.391,36.252,3,41.333,3,41.333H19.611"
						transform="translate(24 24)"
						fill="#F5F5F5"></path><path
						d="M49,51H32.389A16.082,16.082,0,0,1,18.7,43.333H3a2,2,0,0,1-1.249-3.562,11.22,11.22,0,0,0,2.422-3.036,8.865,8.865,0,0,0,.589-7.507l0-.005a21.171,21.171,0,1,1,41.128-7.055,21.36,21.36,0,0,1-.309,3.62,16.014,16.014,0,0,1,2.864,9.157,16.841,16.841,0,0,1-1.361,6.587,17.135,17.135,0,0,0,3.335,6.059A1.994,1.994,0,0,1,49,51ZM32.389,22.889a12.056,12.056,0,1,0,0,24.111H45.145a24.377,24.377,0,0,1-2.115-5.022,2,2,0,0,1,.11-1.426,13.023,13.023,0,0,0,1.3-5.607A12.069,12.069,0,0,0,32.389,22.889ZM7.288,39.333H16.94A16.057,16.057,0,0,1,41.888,22,17.167,17.167,0,1,0,8.532,27.889,12.883,12.883,0,0,1,7.6,38.811Q7.445,39.08,7.288,39.333Z"
						transform="translate(24 24)"
						fill="#353A40"></path></g
				></svg
			>
		</button>

		<div
			class="absolute rounded-xl inset-0 bg-saftech-black w-[50px] h-[50px] pointer-events-none animate-ping"
		></div>
	</div>
{:else}
	<!--  -->
	<div transition:scale={{duration: 500, easing: quintOut}}
		class=" {showChat ? 'opacity-0 scale-0':'scale-100 opacity-100'} fixed shadow-2xl bg-transparent bottom-[15%] right-[8%] z-[999] w-[100px] h-[100px] flex flex-grow-0 shrink-0 justify-center items-center rounded-sm"
	>
		<button
			type="button"
			class="absolute p-5 inset-0 w-fit h-fit text-left flex flex-grow-0 shrink-0 justify-center items-center space-x-3 rounded-sm opacity-100 bg-saftech-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-saftech-white ring-offset-2 focus:ring-offset-saftech-white"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="80" height="80">
				<linearGradient id="uhJKu8hZPNFcuuAwNx4sRa" x1="12.686" x2="35.58" y1="385.408" y2="348.159" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse">
					<stop offset="0" stop-color="#33bef0" />
					<stop offset="1" stop-color="#0a85d9" />
				</linearGradient>
				<path fill="url(#uhJKu8hZPNFcuuAwNx4sRa)" d="M42,8H6c-1.105,0-2,0.895-2,2v26c0,1.105,0.895,2,2,2h8v7.998c0,0.891,1.077,1.337,1.707,0.707L24.412,38H42c1.105,0,2-0.895,2-2V10C44,8.895,43.105,8,42,8z" />
				<path d="M15.559,32.011c-0.862,0-1.564-0.7-1.564-1.561c0-0.656,0.41-1.243,1.021-1.46c1.553-0.554,3.84-2.514,3.975-5.688c-0.367,0.11-0.859,0.206-1.497,0.206c-2.166,0-4.503-1.733-4.503-4.533c0-2.445,1.872-4.975,5.004-4.975c2.893,0,6.005,2.207,6.005,7.053c0,6.672-4.917,9.658-7.849,10.843C15.963,31.972,15.763,32.011,15.559,32.011z" opacity=".05" />
				<path d="M15.559,31.511c-0.587,0-1.064-0.476-1.064-1.061c0-0.445,0.276-0.842,0.688-0.989c1.733-0.618,4.313-2.846,4.313-6.453c0-0.198-0.012-0.335-0.024-0.427c-0.003,0.001-0.005,0.002-0.008,0.003c-0.353,0.159-0.943,0.423-1.971,0.423c-1.925,0-4.003-1.542-4.003-4.033c0-2.2,1.685-4.475,4.504-4.475c2.651,0,5.505,2.051,5.505,6.553c0,6.379-4.722,9.241-7.536,10.379C15.833,31.485,15.697,31.511,15.559,31.511z" opacity=".07" />
				<path fill="#fff" d="M14.994,30.451L14.994,30.451c0-0.23,0.14-0.441,0.356-0.519c1.832-0.653,4.644-3.055,4.644-6.924c0-0.665-0.114-1.001-0.37-1.001c-0.301,0-0.778,0.501-2.132,0.501c-1.646,0-3.504-1.312-3.504-3.533c0-1.944,1.458-3.975,4.004-3.975c2.07,0,5.005,1.543,5.005,6.053c0,6.246-4.703,8.896-7.224,9.916C15.403,31.119,14.994,30.852,14.994,30.451z" />
				<path d="M26.571,32.011c-0.862,0-1.564-0.7-1.564-1.561c0-0.656,0.41-1.243,1.021-1.46c1.553-0.554,3.84-2.514,3.975-5.688c-0.367,0.11-0.859,0.206-1.497,0.206c-2.166,0-4.503-1.733-4.503-4.533c0-2.445,1.872-4.975,5.004-4.975c2.893,0,6.005,2.207,6.005,7.053c0,6.672-4.917,9.658-7.849,10.843C26.976,31.972,26.775,32.011,26.571,32.011z" opacity=".05" />
				<path d="M26.571,31.511c-0.587,0-1.064-0.476-1.064-1.061c0-0.445,0.276-0.842,0.688-0.989c1.733-0.618,4.313-2.846,4.313-6.453c0-0.198-0.012-0.335-0.024-0.427c-0.003,0.001-0.005,0.002-0.008,0.003c-0.353,0.159-0.943,0.423-1.971,0.423c-1.925,0-4.003-1.542-4.003-4.033c0-2.2,1.685-4.475,4.504-4.475c2.651,0,5.505,2.051,5.505,6.553c0,6.379-4.722,9.241-7.536,10.379C26.846,31.485,26.71,31.511,26.571,31.511z" opacity=".07" />
				<path fill="#fff" d="M26.007,30.451L26.007,30.451c0-0.23,0.14-0.441,0.356-0.519c1.832-0.653,4.644-3.055,4.644-6.924c0-0.665-0.114-1.001-0.37-1.001c-0.301,0-0.778,0.501-2.132,0.501c-1.646,0-3.504-1.312-3.504-3.533c0-1.944,1.458-3.975,4.004-3.975c2.07,0,5.005,1.543,5.005,6.053c0,6.246-4.703,8.896-7.224,9.916C26.416,31.119,26.007,30.852,26.007,30.451z" />
			</svg>
			<div>
				<span class="text-dark-blue leading-3">Get a</span>
				<span class="block text-dark-blue font-bold text-xl leading-5">QUOTE</span>
			</div>
		</button>


		<!-- <div
			class="absolute rounded-xl inset-0 bg-saftech-black w-[50px] h-[50px] pointer-events-none animate-pulse"
		></div> -->
	</div>
	<!--  -->
{/if}

<main class="pointer-events-auto">
	<slot />
</main>

<!-- footer bg-base-200-->

<footer class="flex flex-col justify-center items-center bg-deep-blue text-saftech-white">
	<div class="footer py-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="flex flex-col space-y-6">
			<svg
				class=" h-10 w-auto"
				xmlns="http://www.w3.org/2000/svg"
				width="320.809"
				height="73.18"
				viewBox="0 0 320.809 73.18"
				><g transform="translate(3.543 3.546)"
					><path
						d="M654,449.333s-2.734-20.311,9.333-37.333C675.066,395.448,706,383.333,734,408"
						transform="translate(-653.734 -393.979)"
						fill="none"
						stroke="#f5f5f5"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="7"></path><path
						d="M653.9,431.979s-1.58-14.314,5.837-26c7.211-11.363,27.333-18,43.333-6"
						transform="translate(-638.135 -377.959)"
						fill="none"
						stroke="#f5f5f5"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="7"></path><path
						d="M653.816,417.608a21.035,21.035,0,0,1,0-14.667c2.93-7.3,12.863-10.667,19.333-8.667"
						transform="translate(-622.216 -362.921)"
						fill="none"
						stroke="#f5f5f5"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="7"></path><path
						d="M726.224,436.715s-16.489-.4-18.222,6.618,0,18,18.222,16.667,32.17,3.431,32.845-23.285c-2-13.069-12.615-17.312-22.047-14.715C726.534,424.885,726.224,436.715,726.224,436.715Z"
						transform="translate(-653.734 -393.979)"
						fill="none"
						stroke="#f5f5f5"
						stroke-linejoin="round"
						stroke-width="7"></path><g transform="translate(-416.734 -291)"
						><g transform="translate(542 309)"
							><text
								transform="translate(0 24)"
								fill="#f5f5f5"
								font-size="23"
								font-family="Poppins-Bold, Poppins"
								font-weight="700"><tspan x="0" y="0">Saftech Canada</tspan></text
							><text
								transform="translate(2 44)"
								fill="#f5f5f5"
								font-size="13"
								font-family="Poppins-Light, Poppins"
								font-weight="300"><tspan x="0" y="0">More that a tech company</tspan></text
							></g
						></g
					></g
				></svg
			>
			<p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>

			<div class="grid grid-flow-col gap-4">
				<a href="#">
					<svg
						class="fill-saftech-gray hover:fill-sky-400 transition-all duration-500 ease-out"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="40"
						height="40"
					>
						<path
							d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"
						></path>
					</svg>
				</a>
				<a href="#">
					<svg
						class="fill-saftech-gray hover:fill-blue-700 transition-all duration-500 ease-out"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="40"
						height="40"
					>
						<path
							d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"
						></path>
					</svg>
				</a>
				<a href="#">
					<svg
						class="fill-saftech-gray hover:fill-sky-400 transition-all duration-500 ease-out"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="40"
						height="40"
					>
						<path
							d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"
						></path>
					</svg>
				</a>
				<a href="#">
					<svg
						class="fill-saftech-gray hover:fill-red-600 transition-all duration-500 ease-out"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="40"
						height="40"
					>
						<path
							d="M25 2C12.316406 2 2 12.316406 2 25C2 37.683594 12.316406 48 25 48C37.683594 48 48 37.683594 48 25C48 12.316406 37.683594 2 25 2 Z M 19 35L19 15L36 25Z"
						></path>
					</svg>
				</a>
			</div>
		</div>
		<div>
			<span class="font-bold text-2xl text-saftech-white">Solutions</span>
			<a href="#" class="link link-hover fill-saftech-gray">Technology Support</a>
			<a href="#" class="link link-hover fill-saftech-gray">Software Development</a>
			<a href="#" class="link link-hover fill-saftech-gray">Sales Agents</a>
			<a href="#" class="link link-hover fill-saftech-gray">Customer Services</a>
		</div>
		<div>
			<span class="font-bold text-2xl text-saftech-white">Latest News</span>
			<a href="#" class="link link-hover line-clamp-2 max-w-xs fill-saftech-gray"
				>Saftech Canada Celebrates International Women's Day and Embraces Equity</a
			>
			<a href="#" class="link link-hover line-clamp-2 max-w-xs fill-saftech-gray"
				>Top 3 Ways to Grow and Retain Tech Talent in 2024</a
			>
			<a href="#" class="link link-hover line-clamp-2 max-w-xs fill-saftech-gray"
				>Providing reliable tech since 1992 Providing reliable tech since 1992Providing reliable
				tech since 1992Providing reliable tech since 1992</a
			>
		</div>
		<div>
			<span class="font-bold text-2xl text-saftech-white">About Us</span>
			<p class="max-w-[200px] fill-saftech-gray">
				This is a simple text made to replace with any text
			</p>

			<div class="py-5 space-y-2">
				<div class="flex justify-start items-center space-x-4">
					<svg
						class="fill-saftech-white"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="20"
						height="20"
					>
						<path
							d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z"
						></path>
					</svg>
					<div class="max-w-[180px] fill-saftech-gray">{@html address.location.string}</div>
				</div>
				<div class="flex justify-start items-center space-x-4">
					<svg
						class="fill-saftech-white"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="20"
						height="20"
					>
						<path
							d="M11.316406 3.007813C10.707031 3.046875 10.050781 3.265625 9.425781 3.703125C9.359375 3.746094 2.917969 8.414063 3 11.035156C3.238281 18.519531 10.523438 27.328125 16.59375 33.402344C22.664063 39.46875 31.46875 46.753906 38.984375 47L39.03125 47C41.632813 47 46.242188 40.636719 46.285156 40.574219C46.808594 39.828125 47.058594 38.972656 46.984375 38.164063C46.914063 37.363281 46.546875 36.675781 45.976563 36.277344C45.296875 35.800781 37.917969 30.894531 37.019531 30.34375C36.140625 29.804688 34.851563 29.890625 33.570313 30.566406C32.847656 30.949219 30.636719 32.207031 29.605469 32.796875C28.695313 32.160156 26.476563 30.472656 23 26.996094C19.519531 23.519531 17.832031 21.296875 17.199219 20.390625C17.789063 19.359375 19.046875 17.148438 19.425781 16.425781C20.113281 15.125 20.195313 13.824219 19.640625 12.957031C19.113281 12.117188 14.230469 4.71875 13.714844 4.003906C13.238281 3.34375 12.335938 2.933594 11.316406 3.007813 Z M 25 5L25 7C34.925781 7 43 15.074219 43 25L45 25C45 13.972656 36.027344 5 25 5 Z M 25 10.542969L25 12.542969C31.871094 12.542969 37.457031 18.132813 37.457031 25L39.457031 25C39.457031 17.027344 32.972656 10.542969 25 10.542969 Z M 25 16L25 18C28.859375 18 32 21.140625 32 25L34 25C34 20.035156 29.960938 16 25 16Z"
						></path>
					</svg>
					<div class="max-w-[180px] fill-saftech-gray">Telephone: {address.phone.string}</div>
				</div>
				<div class="flex justify-start items-center space-x-4">
					<svg
						class="fill-saftech-white"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="20"
						height="20"
					>
						<path
							d="M21 2L21 5L23 5L23 6.0976562C12.355663 7.1082736 4 16.095631 4 27C4 38.579 13.421 48 25 48C36.579 48 46 38.579 46 27C46 16.095631 37.644337 7.1082736 27 6.0976562L27 5L29 5L29 2L21 2 z M 40.236328 5.1464844L38.230469 7.1523438L42.845703 11.767578L44.851562 9.7617188L40.236328 5.1464844 z M 15 16C15.25575 16 15.511531 16.097469 15.707031 16.292969L24.488281 25.074219C24.653281 25.031219 24.822 25 25 25C26.105 25 27 25.895 27 27C27 27.178 26.968781 27.346719 26.925781 27.511719L28.707031 29.292969C29.098031 29.683969 29.098031 30.316031 28.707031 30.707031C28.512031 30.902031 28.256 31 28 31C27.744 31 27.487969 30.902031 27.292969 30.707031L25.511719 28.925781C25.346719 28.968781 25.178 29 25 29C23.895 29 23 28.105 23 27C23 26.822 23.031219 26.653281 23.074219 26.488281L14.292969 17.707031C13.901969 17.316031 13.901969 16.683969 14.292969 16.292969C14.488469 16.097469 14.74425 16 15 16 z"
						></path>
					</svg>
					<div class="max-w-[180px] fill-saftech-gray">{address.time.string}</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="mx-auto py-5 px-2 sm:px-6 lg:px-8 bg-dark-blue flex justify-between items-center w-full"
	>
		<div class="items-center grid-flow-col font-normal tracking-wide text-xs text-saftech-gray">
			<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
		</div>
		<div
			class="flex space-x-3 justify-center items-center font-normal tracking-wide text-xs text-saftech-gray"
		>
			<a href="#" class="link link-hover">Terms of use</a>
			<a href="#" class="link link-hover border-x-[1px] border-solid px-5 border-x-slate-300/20"
				>Privacy policy</a
			>
			<a href="#" class="link link-hover">Cookie policy</a>
		</div>
		<div class=" h-full flex justify-center items-center">
			<div class=" h-full flex space-x-4 font-normal tracking-wide text-xs text-saftech-gray">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a href="#" class="link link-hover">Home</a>
				<a href="#" class="link link-hover">Solution</a>
				<a href="#" class="link link-hover">News</a>
				<a href="#" class="link link-hover">Career</a>
				<a href="#" class="link link-hover">Who We Are</a>
			</div>

			<a on:click|preventDefault="{scrollToTop}" href="#top" class="ml-10">
				<svg
					class=" -rotate-90 fill-saftech-white cursor-pointer transition-all duration-40 ease-in-out"
					width="30"
					height="30"
					viewBox="0 0 42 42"
					><path
						d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
						transform="translate(0 0)"></path></svg
				>
			</a>
			<!-- links container-->
		</div>
	</div>
</footer>

<style>
	*::-webkit-scrollbar {
		display: none;
	}

	* {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
