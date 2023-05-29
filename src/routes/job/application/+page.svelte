<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte'

	
	// importing stores
	import { workExperiences } from '../../../workExperienceStore'
	import { educationCollection } from '../../../educationStore'
	import { certificates } from '../../../certificationStore'

	import { crossfade, fade, fly, scale, slide } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	import JobCard from '$lib/components/JobCard.svelte'
	import MultistepFormTabItem, {
		activeFormTabId
	} from '$lib/components/MultistepFormTabItem.svelte'
	import JobsearchTabSelectionLocationItemCard from '$lib/components/JobsearchTabSelectionLocationItemCard.svelte'
	
	import { z } from "zod"

	import { enhance } from '$app/forms'

	// removed upload file type icons

	import Input from '$lib/components/Input.svelte'
	import InputEmail from '$lib/components/InputEmail.svelte'
	import InputTextarea from '$lib/components/InputTextarea.svelte'
	import InputDate from '$lib/components/InputDate.svelte'

	import { onMount } from 'svelte'

	let guideText = ''
	let stepCounter = 0

	$: step1 = $activeFormTabId === 0
	$: step2 = $activeFormTabId === 1
	$: step3 = $activeFormTabId === 2

	$: if (step1) {
		guideText = 'Educational Background & Certifications'
		stepCounter = $activeFormTabId + 1
	}
	$: if (step2) {
		guideText = 'Work Experience'
		stepCounter = $activeFormTabId + 1
	}
	$: if (step3) {
		guideText = 'Personal Information'
		stepCounter = $activeFormTabId + 1
	}

	// removed upload files here
	import InputFileUploadDocument from '$lib/components/InputFileUploadDocument.svelte'

	// end

	/**
	 * @type {any}
	 */
	let certificate
	// let experience
	let resumee
	let letter

	// $: certificateExt
	// $: console.log(certificateExt)

	// Step 1: Educational Background
	let degree = { error: false, message: 'This field is requied' }
	let degreeInputValue = ''

	let course = { error: false, message: 'This field is requied' }
	let courseInputValue = ''

	let college = { error: false, message: 'This field is requied' }
	let collegeInputValue = ''

	// Step 2: Work Experience
	let job = { error: false, message: 'This field is requied' }
	let jobInputValue = ''

	let company = { error: false, message: 'This field is requied' }
	let companyInputValue = ''

	let duration = { error: false, message: 'This field is requied' }
	let durationInputValue = ''

	//Textarea
	let experience = { error: false, message: 'This field is requied' }
	let experienceInputValue = ''

	let activeWorkExperienceID = '805e7979-f998-4df6-849f-136fe90322e5'
	let activeCertificateID = 'd6e29ddd-b519-4157-b81b-5e2d1c8d0f6e'

	// console.log(activeWorkExperienceID)

	// $: console.log($workExperiences[activeWorkExperienceID])
	// $: console.log(Object.keys($workExperiences))

	//#########################################################################################

	// working with certificates

	// Define certificate zod schema

	const certificateSchema = z.object({
		name: z.string().min(3).trim(),
		provider: z.string().min(6).max(15).trim(),
		start: z.string(),
		end: z.string(),
		description: z.string().min(6).max(15).trim()
	})

	$: try {
		const result = certificateSchema.parse({
			name: $certificates[activeCertificateID].name.certNameInputValue,
			provider: $certificates[activeCertificateID].provider.certProviderInputValue,
			start: $certificates[activeCertificateID].start.certStartInputValue,
			end: $certificates[activeCertificateID].end.certEndInputValue,
			description: $certificates[activeCertificateID].description.certDescriptionInputValue
		})

	} catch (err) {
		const { fieldErrors: errors } = err.flatten()

			if (Object.keys(errors).includes('description'))
			{
				$certificates[activeCertificateID].description.error = true
				$certificates[activeCertificateID].description.message = errors.description
			}else{
				$certificates[activeCertificateID].description.error = false
			}
			
			if (Object.keys(errors).includes('name'))
			{
				$certificates[activeCertificateID].name.error = true
				$certificates[activeCertificateID].name.message = errors.name
			}else{
				$certificates[activeCertificateID].name.error = false
			}

			if (Object.keys(errors).includes('provider'))
			{
				$certificates[activeCertificateID].provider.error = true
				$certificates[activeCertificateID].provider.message = errors.provider
			}else{
				$certificates[activeCertificateID].provider.error = false
			}

			if (Object.keys(errors).includes('start'))
			{
				$certificates[activeCertificateID].start.error = true
				$certificates[activeCertificateID].start.message = errors.start
			}else{
				$certificates[activeCertificateID].start.error = false
			}

			if (Object.keys(errors).includes('end'))
			{
				$certificates[activeCertificateID].end.error = true
				$certificates[activeCertificateID].end.message = errors.end
			}else{
				$certificates[activeCertificateID].end.error = false
			}
		}


	// validating certificate with zod ends

	let isCertificationActive = false
	let isEducationActive = true
	

	// $: if (isCertificationActive === true)  isEducationActive = false
	// $: if (isEducationActive === true)  isCertificationActive = false
	// $: isEducationActive === true ? isCertificationActive = false : isCertificationActive = true
	
	//##########################################################################################
	// Certficate

	$: console.log(activeCertificateID)

	let activeCertificate
	let certificateID

	onMount(() => {
		//activeCertificateID = 'd6e29ddd-b519-4157-b81b-5e2d1c8d0f6e'
		setActiveCertificate(activeCertificateID)
	})

	function setActiveCertificate(certId) {
		// let certificateIDs = Object.keys($certificates)
		// let randomId = Math.round(Math.random() * certificateIDs.length)
		// console.log(randomId)

		activeCertificateID = certId
		activeCertificate = $certificates[activeCertificateID]

		$certificates = $certificates

		//console.log(activeCertificate.job)
		// console.log($certificates[activeCertificateID].job.jobInputValue)
	}

	// Delete a certificate
	function deletecertificate(id) {
		delete $certificates[id]
	}

	// Add a new certificate
	function addNewcertificate() {
		// Generate new certificate key
		// When creating new certificate
		const NewCertificateKey = crypto.randomUUID()

		$certificates[NewCertificateKey] = {
			name: {
				id: NewCertificateKey,
				certNameInputValue: 'New Dynamic Record',
				error: false,
				message: 'This field is requied'
			},
			provider: {
				id: NewCertificateKey,
				certProviderInputValue: '',
				error: false,
				message: 'This field is requied'
			},
			start: {
				id: NewCertificateKey,
				certStartInputValue: '',
				error: false,
				message: 'This field is requied'
			},
			end: {
				id: NewCertificateKey,
				certEndInputValue: '',
				error: false,
				message: 'This field is requied'
			},
			description: {
				id: NewCertificateKey,
				certDescriptionInputValue: '',
				error: false,
				message: 'This field is requied'
			}
		}

		// Make newly created certificate - active certificate
		// Right after creating it
		setActiveCertificate(NewCertificateKey)

		// Use custom popper or alerts
		// Notify user about action result
		alert('Certificate just added!')

		// Update store
		$certificates = $certificates
	}




	//##########################################################################################

	let activeWorkExperience
	let workExperienceID

	onMount(() => {
		activeWorkExperienceID = '805e7979-f998-4df6-849f-136fe90322e5'
		setActive(activeWorkExperienceID)
	})

	function setActive(id) {
		// let workExperienceIDs = Object.keys($workExperiences)
		// let randomId = Math.round(Math.random() * workExperienceIDs.length)
		// console.log(randomId)

		activeWorkExperienceID = id
		activeWorkExperience = $workExperiences[activeWorkExperienceID]

		$workExperiences = $workExperiences

		//console.log(activeWorkExperience.job)
		// console.log($workExperiences[activeWorkExperienceID].job.jobInputValue)
	}

	// Delete a work experience
	function deleteWorkExperience(id) {
		delete $workExperiences[id]
	}

	// Add a new work experience
	function addNewWorkExperience() {
		// Generate new work experience key
		// When creating new work experience
		const NewWorkExperienceKey = crypto.randomUUID()

		$workExperiences[NewWorkExperienceKey] = {
			job: {
				id: NewWorkExperienceKey,
				jobInputValue: 'New Dynamic Record',
				error: false,
				message: 'This field is requied'
			},
			company: {
				id: NewWorkExperienceKey,
				companyInputValue: '',
				error: false,
				message: 'This field is requied'
			},
			duration: {
				id: NewWorkExperienceKey,
				durationInputValue: '',
				error: false,
				message: 'This field is requied'
			},
			experience: {
				id: NewWorkExperienceKey,
				experienceInputValue: '',
				error: false,
				message: 'This field is requied'
			}
		}

		// Make newly created work experience - active work experience
		// Right after creating it
		setActive(NewWorkExperienceKey)

		// Use custom popper or alerts
		// Notify user about action result
		alert('New work experience just added!')

		// Update store
		$workExperiences = $workExperiences
	}

	let useFileUploads = false

	// const uuid = crypto.randomUUID()

	// Step 3: Personal Information
	let name = { error: false, message: 'This field is requied' }
	let nameInputValue = ''

	let email = { error: false, message: 'This field is requied' }
	let emailInputValue = ''

	let birth = { error: false, message: 'This field is requied' }
	let birthInputValue = ''

	// $: console.log($certificates[activeCertificateID].description.certDescriptionInputValue.length)

	// $: if ($certificates[activeCertificateID].description.certDescriptionInputValue.length >= 10) {
	// 	$certificates[activeCertificateID].description.error = true
	// 	$certificates[activeCertificateID].description.message = 'Sorry, that\'s too long description'
	// } else {
	// 	$certificates[activeCertificateID].description.error = false
	// }

	// $: if ($workExperiences[activeWorkExperienceID].job.jobInputValue != 'Jonathan') {
	// 	$workExperiences[activeWorkExperienceID].job.error = true
	// 	$workExperiences[activeWorkExperienceID].job.message = 'Sorry, that name is taken'
	// } else {
	// 	$workExperiences[activeWorkExperienceID].job.error = false
	// }

	// $: if (courseInputValue != 'Vestine') {
	// 	course.error = true
	// 	course.message = 'Izina ntiribashije kuboneka'
	// } else {
	// 	course.error = false
	// }
</script>

<!-- {@debug step1, step2, step3} -->

<section class="w-full h-full py-[72px] pb-0 min-h-screen bg-saftech-white">
	<div
		class="flex-none flex justify-center items-start bg-saftech-black min-h-full mx-auto transition-all ease-in-out"
	>
		<!-- multi-step form heder -->
		<div class=" flex items-center w-full h-[120px] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex flex-shrink-0 justify-center items-center w-1/5">
				<p
					class="absolute flex justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-6xl text-saftech-white text-center"
				>
					{#key $activeFormTabId}
						<h2
							in:fade={{ duration: 300, delay: 300 }}
							out:fade={{ duration: 250 }}
							class=" fixed mr-28 font-bold text-6xl text-saftech-white"
						>
							{stepCounter}
						</h2>
					{/key}
					<span class=" opacity-70 font-bold text-6xl text-saftech-white">/3</span>
				</p>
			</div>
			<div class="relative flex flex-col items-center space-y-2">
				{#key $activeFormTabId}
					<h2
						in:fade={{ duration: 500, delay: 500 }}
						out:fade={{ duration: 250 }}
						class=" absolute inset-0 min-w-[50ch] -mt-4 font-bold text-xl text-saftech-white"
					>
						{guideText}
					</h2>
				{/key}

				<p
					class="font-normal text-xs {step1
						? 'w-[50ch]'
						: 'w-[35ch]'}  leading-4 text-saftech-white/70 pt-3 transition-all duration-500 ease-out"
				>
					Please fill out the form with accurate information to be abble to submit your application.
					GoodLuck!
				</p>
			</div>
		</div>
	</div>

	<section class="w-full h-full bg-gradient-to-r from-saftech-gray/5 via-white to-white">
		<div
			class="flex justify-between items-start mx-auto h-full max-w-7xl px-2 sm:px-6 lg:px-8 transition-all ease-in-out"
		>
			<div
				class="flex justify-center rounded-none overflow-hidden items-start bg-saftech-tranparent w-full min-h-full"
			>
				<div
					class="bg-transparent flex flex-shrink-0 py-10 justify-center items-center w-1/5 h-full"
				>
					<!-- filters header -->

					<div
						class=" flex flex-col justify-center items-end self-stretch space-y-5 transition-all duration-500 ease-in-out"
					>
						<MultistepFormTabItem>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/60'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 64 64"
								width="25"
								height="25"
							>
								<path
									d="M32,4C16.561,4,4,16.561,4,32s12.561,28,28,28s28-12.561,28-28S47.439,4,32,4z M33.892,44h-3.544V25.449h-2.24v-3.276c1.505-0.067,2.674-0.902,2.942-2.173h2.841V44z"
								/>
							</svg>
						</MultistepFormTabItem>
						<MultistepFormTabItem>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/60'} transition-all duration-500 ease-in-out"
								viewBox="0 0 64 64"
								width="25"
								height="25"
							>
								<path
									d="M32,4C16.561,4,4,16.561,4,32s12.561,28,28,28s28-12.561,28-28S47.439,4,32,4z M39,40.6v3.534H25v-1.9c0-5.4,1.732-8.2,5.499-10.367c2.532-1.433,4.899-1.767,4.899-5.034c0-2-1.067-3.134-3.233-3.134c-1.9,0-3.366,0.501-4.601,2.5l-2.399-3.1c1.699-2.167,3.966-3.234,7.201-3.234c3.865,0,6.634,2.467,6.634,6.768c0,4.533-2.633,6.334-6.001,8.067c-2.834,1.467-3.933,3.333-3.933,5.899H39z"
								/>
							</svg>
						</MultistepFormTabItem>
						<MultistepFormTabItem>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/60'} transition-all duration-500 ease-in-out"
								viewBox="0 0 64 64"
								width="25"
								height="25"
							>
								<path
									d="M32,4C16.561,4,4,16.561,4,32s12.561,28,28,28s28-12.561,28-28S47.439,4,32,4z M31.724,44c-3.09,0-5.203-1.107-6.406-3.318l2.959-2.113c0.618,1.268,1.756,2.016,3.479,2.016c1.951,0,3.448-1.561,3.448-3.74c0-2.862-1.496-4.064-3.675-4.064h-1.365v-3.447h1.365c1.789,0,2.699-1.009,2.699-3.122c0-1.659-0.878-2.764-2.57-2.764c-1.43,0-1.885,0.52-2.504,1.398l-2.894-1.137C26.682,22.081,28.732,20,31.724,20c3.154,0,5.657,2.081,5.657,5.984c0,2.407-0.78,3.968-2.374,4.877c1.789,0.585,3.675,2.862,3.675,5.951C38.682,41.008,36.113,44,31.724,44z"
								/>
							</svg>
						</MultistepFormTabItem>
					</div>
				</div>

				<form
					method="POST"
					action=""
					enctype="multipart/form-data"
					class="bg-white w-full overflow-hidden py-010 h-full"
					use:enhance
				>
					<div class="bg-white w-full overflow-hidden h-full">
						<!-- filters container -->
						<div
							class="flex {$activeFormTabId === 1
								? '-translate-x-[100%]'
								: ''} {$activeFormTabId === 1 ? '-translate-x-[100%]' : ''} {$activeFormTabId === 2
								? '-translate-x-[200%]'
								: ''} transition-all duration-700 ease-in-out"
						>
							<div
								id="#tab0"
								class="flex flex-col space-x-0 flex-nowrap min-w-full {$activeFormTabId === 0
									? 'opacity-100 w-full'
									: 'opacity-0'} transition-all delay-100 duration-500 ease-out"
							>
								
								<section class="flex {isEducationActive ? 'order-1':'order-2'} flex-nowrap "><!-- left side document -->
									<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="flex flex-col flex-1 min-w-fit shrink-0 justify-self-start">
										<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="shrink-0 w-full h-fit bg-transparent">
											<button
												type="button"
												on:click={addNewWorkExperience}
												class=" flex flex-col items-center w-full text-left space-x-1 rounded-none {isEducationActive ? 'bg-normal-blue ':'bg-saftech-gray'} py-3 px-2 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
											>
												<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 48 48"
														width="32"
														height="32"
														class="fill-saftech-white m-0 p-0"
													>
														<path
															d="M12.5 4C10.019 4 8 6.019 8 8.5L8 39.5C8 41.981 10.019 44 12.5 44L25.632812 44C24.778813 43.111 24.049609 42.103 23.474609 41L12.5 41C11.673 41 11 40.327 11 39.5L11 39L22.634766 39C22.226766 37.739 22 36.397 22 35C22 27.82 27.82 22 35 22C36.772 22 38.46 22.357 40 23L40 8.5C40 6.019 37.981 4 35.5 4L12.5 4 z M 17.5 13L30.5 13C31.328 13 32 13.672 32 14.5C32 15.328 31.328 16 30.5 16L17.5 16C16.672 16 16 15.328 16 14.5C16 13.672 16.672 13 17.5 13 z M 35 24C28.925 24 24 28.925 24 35C24 41.075 28.925 46 35 46C41.075 46 46 41.075 46 35C46 28.925 41.075 24 35 24 z M 35 27C35.552 27 36 27.448 36 28L36 34L42 34C42.552 34 43 34.448 43 35C43 35.552 42.552 36 42 36L36 36L36 42C36 42.552 35.552 43 35 43C34.448 43 34 42.552 34 42L34 36L28 36C27.448 36 27 35.552 27 35C27 34.448 27.448 34 28 34L34 34L34 28C34 27.448 34.448 27 35 27 z"
														/>
													</svg>
													<div class="flex flex-col">
														<h2
															class="font-bold text-md text-left leading-3 mb-[2px] text-saftech-white"
														>
															Add New
														</h2>
														<p
															class="block font-normal text-xs text-left leading-3 w-fit text-saftech-white/70"
														>
															Education
														</p>
													</div>
												</div>

												<!-- <p class="block font-normal text-xs w-fit text-saftech-white/70">
													Click to add experience
												</p> -->
											</button>
										</div>

										{#if isEducationActive}
										<div
											transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
											class="flex-1 w-full bg-saftech-white/50 space-y-[4px]"
										>
											<!-- divide divide-y-2 divide-red-950 -->
											{#each Object.keys($workExperiences) as workExperienceID, index}
												<div
													transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
													class={activeWorkExperienceID === workExperienceID
														? 'bg-saftech-white'
														: 'bg-saftech-white/20'}
												>
													<div
														transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
														class=""
													>
														<button
															type="button"
															on:click={() => {
																setActive(workExperienceID)
															}}
															disabled={Object.keys($workExperiences).length <= 1 ? true : false}
															class=" flex flex-col items-center w-full text-left space-x-1 rounded-none bg-saftech-transparent py-3 px-2 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none transition-all duration-500 ease-out"
														>
															<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
																class="flex items-center space-x-2 transition-all duration-500 ease-out"
															>
																
																
																	<svg class=" {activeWorkExperienceID === workExperienceID ? 'fill-normal-blue':'fill-saftech-black/60'} transition-all duration-500 ease-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" height="30">
																		<path d="M12.5 4C10.019 4 8 6.019 8 8.5L8 39.5C8 41.981 10.019 44 12.5 44L35.5 44C37.981 44 40 41.981 40 39.5L40 20L28.5 20C26.019 20 24 17.981 24 15.5L24 4L12.5 4 z M 27 4.8789062L27 15.5C27 16.327 27.673 17 28.5 17L39.121094 17L27 4.8789062 z" />
																	</svg>

																

																<div class="flex flex-col">
																	<h2
																		class="font-bold text-sm text-left leading-3 mb-[2px] text-saftech-black/60 transition-all duration-500 ease-out"
																	>
																		{`Experience  ${index < 9 ? '0' : ''}${index + 1}`}
																	</h2>
																	<!-- {#key activeWorkExperienceID} -->
																	<p
																		transition:fade={{
																			duration: 500,
																			delay: 300,
																			easing: quintOut
																		}}
																		class="block font-normal text-[10px] text-left leading-3 w-fit {activeWorkExperienceID ===
																		workExperienceID
																			? 'text-cyan-500'
																			: 'text-saftech-black/50'} transition-all duration-500 ease-out"
																	>
																		{activeWorkExperienceID === workExperienceID
																			? 'Editing...'
																			: 'Edit this document'}
																	</p>
																	<!-- {/key} -->
																</div>
															</div>
														</button>
													</div>
													{#if Object.keys($workExperiences).length > 1 && activeWorkExperienceID === workExperienceID}
														<div
															transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
															class="bg-transparent pb-3 px-3"
														>
															<button
																transition:scale={{ duration: 500, delay: 250, easing: quintOut }}
																type="button"
																on:click={() => {
																	if (workExperienceID === Object.keys($workExperiences)[0]) {
																		setActive(Object.keys($workExperiences)[1])
																		$workExperiences = $workExperiences
																		deleteWorkExperience(workExperienceID)
																		$workExperiences = $workExperiences
																	} else {
																		setActive(Object.keys($workExperiences)[0])
																		$workExperiences = $workExperiences
																		deleteWorkExperience(workExperienceID)
																		$workExperiences = $workExperiences
																	}
																}}
																class=" mx-auto flex justify-evenly items-center min-w-[70%] rounded-md bg-saftech-black/5 py-3 px-3 text-sm font-semibold text-saftech-black hover:text-current/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-500 ease-out"
															>
																<span class="sr-only">Checkout All Job Listings</span>
																Delete
																<span class="">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 48 48"
																		width="20"
																		height="20"
																		class="fill-current"
																	>
																		<path
																			d="M20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6L14.640625 6C12.796625 6 11.086453 6.9162188 10.064453 8.4492188L7.6972656 12L7.5 12 A 1.50015 1.50015 0 1 0 7.5 15L40.5 15 A 1.50015 1.50015 0 1 0 40.5 12L40.302734 12L37.935547 8.4492188C36.913547 6.9162187 35.202375 6 33.359375 6L28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4L20.5 4 z M 8.9726562 18L11.125 38.085938C11.425 40.887937 13.77575 43 16.59375 43L31.40625 43C34.22325 43 36.574 40.887938 36.875 38.085938L39.027344 18L8.9726562 18 z"
																		/>
																	</svg>
																</span>
															</button>
														</div>{/if}
												</div>
											{/each}
										</div>
										{/if}
									</div>
									<!-- trying left side documents -->
									<div
										class="flex flex-col ml-0 space-y-8 w-[80%] pt-0 transition-all duration-500 ease-out"
									>
										<div class="max-h-[50px] bg-red-600">
											<!-- insert header -->
											<div class="shrink-0 w-full h-fit bg-transparent">
												<div
													class=" flex flex-col items-center w-full text-left space-x-1 rounded-none bg-saftech-white py-3 px-10 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
												>
													<div class="w-full flex flex-row-reverse justify-between items-center">
														<button
															on:click={() => {
																isEducationActive = !isEducationActive
																isCertificationActive = !isCertificationActive
															}}
															type="button"
															class="p-1.5 rounded-lg {isEducationActive ? 'bg-normal-blue/20 ':'bg-saftech-black/5' } transition-all duration-500 ease-out"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 48 48"
																width="20"
																height="20"
																class="  {isEducationActive ? '-rotate-180 fill-normal-blue':'rotate-0 fill-saftech-black'} m-0 p-0 transition-all duration-500 ease-out"
															>
																<path d="M41.586,12.586L24,30.172L6.414,12.586c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l19,19 C22.977,34.805,23.488,35,24,35s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828S42.367,11.805,41.586,12.586z"
																/>
															</svg>
														</button>
														<div class="flex flex-col">
															<h2
																class="font-bold text-md text-left leading-3 mb-[2px] {!isEducationActive ? 'text-saftech-black':'text-normal-blue' } transition-all duration-500 ease-out"
															>
																Education
															</h2>
															<p
																class="block font-normal text-xs text-left leading-3 w-fit {!isEducationActive ? 'text-saftech-black/70':'text-normal-blue/70' } transition-all duration-500 ease-out"
															>
																You have added 4 documents
															</p>
														</div>
													</div>

													<!-- <p class="block font-normal text-xs w-fit text-saftech-white/70">
													Click to add experience
												</p> -->
												</div>
											</div>
											<!-- end insert header -->
										</div>

										{#if isEducationActive}
										<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="w-full grid grid-cols-2 gap-5 px-10 pb-10">


										<Input
											bind:inputValue={collegeInputValue}
											error={college.error}
											placeholder="School Name"
											guidePlaceholder="Green Hills Accademy"
											message={college.message}
										>
											<path
												slot="icon"
												d="M23.958984 2 A 1.50015 1.50015 0 0 0 23.455078 2.1035156L2.9550781 10.103516 A 1.50015 1.50015 0 1 0 4.0449219 12.896484L24 5.109375L43.955078 12.896484 A 1.50015 1.50015 0 1 0 45.044922 10.103516L24.544922 2.1035156 A 1.50015 1.50015 0 0 0 23.958984 2 z M 9 15C7.343 15 6 16.343 6 18L6 39C6 40.657 7.343 42 9 42L20.554688 42C21.247688 43.191 22.523 44 24 44C25.477 44 26.752312 43.191 27.445312 42L39 42C40.657 42 42 40.657 42 39L42 18C42 16.343 40.657 15 39 15L30 15C27.515 15 25.5 17.015 25.5 19.5L25.5 38.5C25.5 39.328 24.828 40 24 40C23.172 40 22.5 39.328 22.5 38.5L22.5 19.5C22.5 17.015 20.485 15 18 15L9 15 z"
											/>
										</Input>

									<InputDate
										bind:inputValue={$certificates[activeCertificateID].end.certEndInputValue}
										error={$certificates[activeCertificateID].end.error}
										placeholder="End Date"
										guidePlaceholder="30 / 02 / 2025"
										message={$certificates[activeCertificateID].end.message}
									>
										<path
											slot="icon"
											d="M33.974 29.144L18.857 14.026c-.851-.851-2.062-1.205-3.238-.941-1.176.262-2.122 1.095-2.53 2.228l-10 27.678c-.197.547-.061 1.159.351 1.57C3.726 44.847 4.109 45 4.5 45c.171 0 .344-.029.51-.089l27.677-10c1.134-.408 1.967-1.354 2.229-2.53C35.178 31.205 34.825 29.994 33.974 29.144zM42.62 9.62c-1.64 1.64-3.22 1.77-4.5 1.88-1.06.08-1.76.14-2.62 1s-.92 1.56-1.01 2.62c-.1 1.28-.23 2.86-1.87 4.5-1.15 1.15-2.27 1.56-3.27 1.73l-2.69-2.69c.43-.09.84-.12 1.22-.15 1.06-.09 1.76-.15 2.62-1.01s.92-1.56 1-2.62c.11-1.27.24-2.86 1.88-4.5 1.64-1.64 3.22-1.77 4.5-1.87 1.06-.09 1.76-.15 2.62-1.01.59-.59 1.54-.59 2.12 0C43.21 8.08 43.21 9.04 42.62 9.62zM23.4 15.4l-2.14-2.14c2.05-2.9 2.2-5.49.83-9.25-.28-.78.12-1.64.9-1.92.78-.28 1.64.12 1.92.9C26.69 7.9 26.32 11.52 23.4 15.4zM45.91 25c-.28.77-1.15 1.18-1.92.89-3.78-1.37-6.36-1.22-9.26.84l-2.14-2.14c3.89-2.93 7.51-3.3 12.42-1.52C45.79 23.36 46.19 24.22 45.91 25zM30.108 7.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C31.399 8.123 30.601 8.123 30.108 7.631zM8.108 15.131l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C9.399 15.623 8.601 15.623 8.108 15.131zM39.108 19.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 20.123 39.601 20.123 39.108 19.631zM39.108 32.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 33.123 39.601 33.123 39.108 32.631zM36.108 39.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C37.399 40.123 36.601 40.123 36.108 39.631zM14.108 10.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C15.399 11.123 14.601 11.123 14.108 10.631z"
										/>
									</InputDate>
										
										<Input
											bind:inputValue={courseInputValue}
											error={course.error}
											placeholder="Courses Studied"
											guidePlaceholder="Computer Scinces"
											message={course.message}
										>
											<path
												slot="icon"
												d="M10.5 5C8.019 5 6 7.019 6 9.5L6 31.5C6 33.981 8.019 36 10.5 36L16 36L16 33L10.5 33C9.673 33 9 32.327 9 31.5L9 31L16 31L16 16.5C16 16.331 16.013391 16.166 16.025391 16L13.5 16C12.671 16 12 15.329 12 14.5C12 13.671 12.671 13 13.5 13L17.03125 13C18.18825 11.199 20.205 10 22.5 10L30 10L30 9.5C30 7.019 27.981 5 25.5 5L10.5 5 z M 22.5 12C20.019 12 18 14.019 18 16.5L18 38.5C18 40.981 20.019 43 22.5 43L40.5 43C41.329 43 42 42.329 42 41.5C42 40.671 41.329 40 40.5 40L22.5 40C21.673 40 21 39.327 21 38.5L21 38L40.5 38C41.329 38 42 37.329 42 36.5L42 16.5C42 14.019 39.981 12 37.5 12L22.5 12 z M 25.5 20L34.5 20C35.329 20 36 20.671 36 21.5C36 22.329 35.329 23 34.5 23L25.5 23C24.671 23 24 22.329 24 21.5C24 20.671 24.671 20 25.5 20 z"
											/>
										</Input>
										<!-- {courseInputValue} -->


									<InputDate
										bind:inputValue={$certificates[activeCertificateID].end.certEndInputValue}
										error={$certificates[activeCertificateID].end.error}
										placeholder="End Date"
										guidePlaceholder="30 / 02 / 2025"
										message={$certificates[activeCertificateID].end.message}
									>
										<path
											slot="icon"
											d="M33.974 29.144L18.857 14.026c-.851-.851-2.062-1.205-3.238-.941-1.176.262-2.122 1.095-2.53 2.228l-10 27.678c-.197.547-.061 1.159.351 1.57C3.726 44.847 4.109 45 4.5 45c.171 0 .344-.029.51-.089l27.677-10c1.134-.408 1.967-1.354 2.229-2.53C35.178 31.205 34.825 29.994 33.974 29.144zM42.62 9.62c-1.64 1.64-3.22 1.77-4.5 1.88-1.06.08-1.76.14-2.62 1s-.92 1.56-1.01 2.62c-.1 1.28-.23 2.86-1.87 4.5-1.15 1.15-2.27 1.56-3.27 1.73l-2.69-2.69c.43-.09.84-.12 1.22-.15 1.06-.09 1.76-.15 2.62-1.01s.92-1.56 1-2.62c.11-1.27.24-2.86 1.88-4.5 1.64-1.64 3.22-1.77 4.5-1.87 1.06-.09 1.76-.15 2.62-1.01.59-.59 1.54-.59 2.12 0C43.21 8.08 43.21 9.04 42.62 9.62zM23.4 15.4l-2.14-2.14c2.05-2.9 2.2-5.49.83-9.25-.28-.78.12-1.64.9-1.92.78-.28 1.64.12 1.92.9C26.69 7.9 26.32 11.52 23.4 15.4zM45.91 25c-.28.77-1.15 1.18-1.92.89-3.78-1.37-6.36-1.22-9.26.84l-2.14-2.14c3.89-2.93 7.51-3.3 12.42-1.52C45.79 23.36 46.19 24.22 45.91 25zM30.108 7.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C31.399 8.123 30.601 8.123 30.108 7.631zM8.108 15.131l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C9.399 15.623 8.601 15.623 8.108 15.131zM39.108 19.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 20.123 39.601 20.123 39.108 19.631zM39.108 32.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 33.123 39.601 33.123 39.108 32.631zM36.108 39.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C37.399 40.123 36.601 40.123 36.108 39.631zM14.108 10.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C15.399 11.123 14.601 11.123 14.108 10.631z"
										/>
									</InputDate>

										<Input
											bind:inputValue={degreeInputValue}
											error={degree.error}
											placeholder="Degree Obtained"
											message={degree.message}
										>
											<path
												slot="icon"
												d="M24 6.0117188C22.96575 6.0117188 21.932156 6.2355937 20.972656 6.6835938L2.8652344 15.138672C2.3372344 15.384672 2 15.916047 2 16.498047C2 17.080047 2.3372344 17.611422 2.8652344 17.857422L20.972656 26.3125C21.949656 26.7685 22.974 26.996094 24 26.996094C25.026 26.996094 26.051344 26.7685 27.027344 26.3125L34 23.056641L34 35.503906 A 2.5 2.5 0 0 0 35.5 40 A 2.5 2.5 0 0 0 37 35.501953L37 21.835938 A 1.50015 1.50015 0 0 0 36.759766 20.765625 A 1.50015 1.50015 0 0 0 36.685547 20.664062 A 1.50015 1.50015 0 0 0 35.914062 20.138672 A 1.50015 1.50015 0 0 0 35.910156 20.136719L26.267578 15.666016C26.100483 15.481771 26 15.245683 26 14.998047C26 14.857047 26.03075 14.715078 26.09375 14.580078C26.32475 14.078078 26.921875 13.86175 27.421875 14.09375L37.857422 18.931641C38.554422 19.254641 39 19.953656 39 20.722656L45.134766 17.857422C45.154766 17.848422 45.160734 17.839078 45.177734 17.830078C45.465734 17.683078 45.712375 17.448813 45.859375 17.132812C46.209375 16.381813 45.884766 15.488672 45.134766 15.138672L27.027344 6.6835938C26.067844 6.2355937 25.03425 6.0117187 24 6.0117188 z M 10 24.396484L10 34.529297C10 36.678297 11.243969 38.636625 13.167969 39.515625C16.826969 41.186625 20.345875 42 23.921875 42L24 42L24.005859 42C26.723859 41.99 29.523422 41.503125 32.232422 40.578125C31.473422 39.773125 31 38.694 31 37.5C31 36.437 31.384 35.473125 32 34.703125L32 27.197266L27.873047 29.123047C26.635047 29.702047 25.332 29.996094 24 29.996094C22.668 29.996094 21.365953 29.702047 20.126953 29.123047L10 24.396484 z"
											/>
										</Input>
										<!-- {degreeInputValue} -->



									
									</div>
									{/if}
									</div>

									{#if useFileUploads}
										<InputFileUploadDocument bind:bindFile={certificate} docName="certificate" />
									{/if}
								</section>
								

							
								<section class="flex  {isCertificationActive ? 'order-1':'order-2'} flex-nowrap ">
									<!-- left side document -->
									<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="flex flex-col flex-1 min-w-fit shrink-0 justify-self-start">
										<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="shrink-0 w-full h-fit bg-transparent">
											<button
												type="button"
												on:click={addNewcertificate}
												class=" flex flex-col items-center w-full text-left space-x-1 rounded-none {isCertificationActive ? 'bg-normal-blue ':'bg-saftech-gray'} py-3 px-2 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
											>
												<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 48 48"
														width="32"
														height="32"
														class="fill-saftech-white m-0 p-0"
													>
														<path
															d="M12.5 4C10.019 4 8 6.019 8 8.5L8 39.5C8 41.981 10.019 44 12.5 44L25.632812 44C24.778813 43.111 24.049609 42.103 23.474609 41L12.5 41C11.673 41 11 40.327 11 39.5L11 39L22.634766 39C22.226766 37.739 22 36.397 22 35C22 27.82 27.82 22 35 22C36.772 22 38.46 22.357 40 23L40 8.5C40 6.019 37.981 4 35.5 4L12.5 4 z M 17.5 13L30.5 13C31.328 13 32 13.672 32 14.5C32 15.328 31.328 16 30.5 16L17.5 16C16.672 16 16 15.328 16 14.5C16 13.672 16.672 13 17.5 13 z M 35 24C28.925 24 24 28.925 24 35C24 41.075 28.925 46 35 46C41.075 46 46 41.075 46 35C46 28.925 41.075 24 35 24 z M 35 27C35.552 27 36 27.448 36 28L36 34L42 34C42.552 34 43 34.448 43 35C43 35.552 42.552 36 42 36L36 36L36 42C36 42.552 35.552 43 35 43C34.448 43 34 42.552 34 42L34 36L28 36C27.448 36 27 35.552 27 35C27 34.448 27.448 34 28 34L34 34L34 28C34 27.448 34.448 27 35 27 z"
														/>
													</svg>
													<div class="flex flex-col">
														<h2
															class="font-bold text-md text-left leading-3 mb-[2px] text-saftech-white"
														>
															Add New
														</h2>
														<p
															class="block font-normal text-xs text-left leading-3 w-fit text-saftech-white/70"
														>
															Certificate
														</p>
													</div>
												</div>

												<!-- <p class="block font-normal text-xs w-fit text-saftech-white/70">
													Click to add certificate
												</p> -->
											</button>
										</div>

										{#if isCertificationActive}
										<div
											transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
											class="flex-1 w-full bg-saftech-white/50 space-y-[4px]"
										>
											<!-- divide divide-y-2 divide-red-950 -->
											{#each Object.keys($certificates) as certificateID, index}
												<div
													transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
													class={activeCertificateID === certificateID
														? 'bg-saftech-white'
														: 'bg-saftech-white/20'}
												>
													<div
														transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
														class=""
													>
														<button
															type="button"
															on:click={() => {
																setActiveCertificate(certificateID)
															}}
															disabled={Object.keys($certificates).length <= 1 ? true : false}
															class=" flex flex-col items-center w-full text-left space-x-1 rounded-none bg-saftech-transparent py-3 px-2 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none transition-all duration-500 ease-out"
														>
															<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
																class="flex items-center space-x-2 transition-all duration-500 ease-out"
															>
																
																
																	<svg class=" {activeCertificateID === certificateID ? 'fill-normal-blue':'fill-saftech-black/60'} transition-all duration-500 ease-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" height="30">
																		<path d="M12.5 4C10.019 4 8 6.019 8 8.5L8 39.5C8 41.981 10.019 44 12.5 44L35.5 44C37.981 44 40 41.981 40 39.5L40 20L28.5 20C26.019 20 24 17.981 24 15.5L24 4L12.5 4 z M 27 4.8789062L27 15.5C27 16.327 27.673 17 28.5 17L39.121094 17L27 4.8789062 z" />
																	</svg>

																

																<div class="flex flex-col">
																	<h2
																		class="font-bold text-sm text-left leading-3 mb-[2px] text-saftech-black/60 transition-all duration-500 ease-out"
																	>
																		{`Certificate  ${index < 9 ? '0' : ''}${index + 1}`}
																	</h2>
																	<!-- {#key activeCertificateID} -->
																	<p
																		transition:fade={{
																			duration: 500,
																			delay: 300,
																			easing: quintOut
																		}}
																		class="block font-normal text-[10px] text-left leading-3 w-fit {activeCertificateID ===
																		certificateID
																			? 'text-cyan-500'
																			: 'text-saftech-black/50'} transition-all duration-500 ease-out"
																	>
																		{activeCertificateID === certificateID
																			? 'Editing...'
																			: 'Edit this document'}
																	</p>
																	<!-- {/key} -->
																</div>
															</div>
														</button>
													</div>
													{#if Object.keys($certificates).length > 1 && activeCertificateID === certificateID}
														<div
															transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
															class="bg-transparent pb-3 px-3"
														>
															<button
																transition:scale={{ duration: 500, delay: 250, easing: quintOut }}
																type="button"
																on:click={() => {
																	if (certificateID === Object.keys($certificates)[0]) {
																		setActiveCertificate(Object.keys($certificates)[1])
																		$certificates = $certificates
																		deletecertificate(certificateID)
																		$certificates = $certificates
																	} else {
																		setActiveCertificate(Object.keys($certificates)[0])
																		$certificates = $certificates
																		deletecertificate(certificateID)
																		$certificates = $certificates
																}
																}}
																class=" mx-auto flex justify-evenly items-center min-w-[70%] rounded-md bg-saftech-black/5 py-3 px-3 text-sm font-semibold text-saftech-black hover:text-current/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-500 ease-out"
															>
																<span class="sr-only">Checkout All Job Listings</span>
																Delete
																<span class="">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 48 48"
																		width="20"
																		height="20"
																		class="fill-current"
																	>
																		<path
																			d="M20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6L14.640625 6C12.796625 6 11.086453 6.9162188 10.064453 8.4492188L7.6972656 12L7.5 12 A 1.50015 1.50015 0 1 0 7.5 15L40.5 15 A 1.50015 1.50015 0 1 0 40.5 12L40.302734 12L37.935547 8.4492188C36.913547 6.9162187 35.202375 6 33.359375 6L28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4L20.5 4 z M 8.9726562 18L11.125 38.085938C11.425 40.887937 13.77575 43 16.59375 43L31.40625 43C34.22325 43 36.574 40.887938 36.875 38.085938L39.027344 18L8.9726562 18 z"
																		/>
																	</svg>
																</span>
															</button>
														</div>{/if}
												</div>
											{/each}
										</div>
										{/if}
									</div>
									<!-- trying left side documents -->
									<div
										class="flex flex-col ml-0 space-y-8 w-[80%] pt-0 transition-all duration-500 ease-out"
									>
										<div class="max-h-[50px] bg-red-600">
											<!-- insert header -->
											<div class="shrink-0 w-full h-fit bg-transparent">
												<div
													class=" flex flex-col items-center w-full text-left space-x-1 rounded-none bg-saftech-white py-3 px-10 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
												>
													<div class="w-full flex flex-row-reverse justify-between items-center">
														<button
															on:click={() => {
																isCertificationActive = !isCertificationActive
																isEducationActive = !isEducationActive
															}}
															type="button"
															class="p-1.5 rounded-lg {isCertificationActive ? 'bg-normal-blue/20 ':'bg-saftech-black/5' } transition-all duration-500 ease-out"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 48 48"
																width="20"
																height="20"
																class="  {isCertificationActive ? '-rotate-180 fill-normal-blue':'rotate-0 fill-saftech-black'} m-0 p-0 transition-all duration-500 ease-out"
															>
																<path d="M41.586,12.586L24,30.172L6.414,12.586c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l19,19 C22.977,34.805,23.488,35,24,35s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828S42.367,11.805,41.586,12.586z"
																/>
															</svg>
														</button>
														<div class="flex flex-col">
															<h2
																class="font-bold text-md text-left leading-3 mb-[2px] {!isCertificationActive ? 'text-saftech-black':'text-normal-blue' } transition-all duration-500 ease-out"
															>
																Certifications
															</h2>
															<p
																class="block font-normal text-xs text-left leading-3 w-fit {!isCertificationActive ? 'text-saftech-black/70':'text-normal-blue/70' } transition-all duration-500 ease-out"
															>
																You have added {Object.keys($certificates).length} {Object.keys($certificates).length === 1 ? 'document' : 'documents'}
															</p>
														</div>
													</div>

													<!-- <p class="block font-normal text-xs w-fit text-saftech-white/70">
													Click to add certificate
												</p> -->
												</div>
											</div>
											<!-- end insert header -->
										</div>

										{#if isCertificationActive}
										<div transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }} class="w-full grid grid-cols-2 gap-5 px-10 pb-10">
									
											<Input
											bind:inputValue={$certificates[activeCertificateID].name.certNameInputValue}
											error={$certificates[activeCertificateID].name.error}
											placeholder="Certificate name"
											message={$certificates[activeCertificateID].name.message}
										>
											<path
												slot="icon"
												d="M24 6.0117188C22.96575 6.0117188 21.932156 6.2355937 20.972656 6.6835938L2.8652344 15.138672C2.3372344 15.384672 2 15.916047 2 16.498047C2 17.080047 2.3372344 17.611422 2.8652344 17.857422L20.972656 26.3125C21.949656 26.7685 22.974 26.996094 24 26.996094C25.026 26.996094 26.051344 26.7685 27.027344 26.3125L34 23.056641L34 35.503906 A 2.5 2.5 0 0 0 35.5 40 A 2.5 2.5 0 0 0 37 35.501953L37 21.835938 A 1.50015 1.50015 0 0 0 36.759766 20.765625 A 1.50015 1.50015 0 0 0 36.685547 20.664062 A 1.50015 1.50015 0 0 0 35.914062 20.138672 A 1.50015 1.50015 0 0 0 35.910156 20.136719L26.267578 15.666016C26.100483 15.481771 26 15.245683 26 14.998047C26 14.857047 26.03075 14.715078 26.09375 14.580078C26.32475 14.078078 26.921875 13.86175 27.421875 14.09375L37.857422 18.931641C38.554422 19.254641 39 19.953656 39 20.722656L45.134766 17.857422C45.154766 17.848422 45.160734 17.839078 45.177734 17.830078C45.465734 17.683078 45.712375 17.448813 45.859375 17.132812C46.209375 16.381813 45.884766 15.488672 45.134766 15.138672L27.027344 6.6835938C26.067844 6.2355937 25.03425 6.0117187 24 6.0117188 z M 10 24.396484L10 34.529297C10 36.678297 11.243969 38.636625 13.167969 39.515625C16.826969 41.186625 20.345875 42 23.921875 42L24 42L24.005859 42C26.723859 41.99 29.523422 41.503125 32.232422 40.578125C31.473422 39.773125 31 38.694 31 37.5C31 36.437 31.384 35.473125 32 34.703125L32 27.197266L27.873047 29.123047C26.635047 29.702047 25.332 29.996094 24 29.996094C22.668 29.996094 21.365953 29.702047 20.126953 29.123047L10 24.396484 z"
											/>
										</Input>
										<!-- {degreeInputValue} -->

										<div class="row-span-2">
										<InputTextarea
										bind:inputValue={$certificates[activeCertificateID].description
											.certDescriptionInputValue}
										error={$certificates[activeCertificateID].description
											.error}
										placeholder="Description"
										guidePlaceholder="Describe your experience in short"
										message={$certificates[activeCertificateID].description
											.message}
									>
										<path
											slot="icon"
											d="M21 2L21 5L23 5L23 6.0976562C12.355663 7.1082736 4 16.095631 4 27C4 38.579 13.421 48 25 48C36.579 48 46 38.579 46 27C46 16.095631 37.644337 7.1082736 27 6.0976562L27 5L29 5L29 2L21 2 z M 40.236328 5.1464844L38.230469 7.1523438L42.845703 11.767578L44.851562 9.7617188L40.236328 5.1464844 z M 15 16C15.25575 16 15.511531 16.097469 15.707031 16.292969L24.488281 25.074219C24.653281 25.031219 24.822 25 25 25C26.105 25 27 25.895 27 27C27 27.178 26.968781 27.346719 26.925781 27.511719L28.707031 29.292969C29.098031 29.683969 29.098031 30.316031 28.707031 30.707031C28.512031 30.902031 28.256 31 28 31C27.744 31 27.487969 30.902031 27.292969 30.707031L25.511719 28.925781C25.346719 28.968781 25.178 29 25 29C23.895 29 23 28.105 23 27C23 26.822 23.031219 26.653281 23.074219 26.488281L14.292969 17.707031C13.901969 17.316031 13.901969 16.683969 14.292969 16.292969C14.488469 16.097469 14.74425 16 15 16 z"
										/>
									</InputTextarea>
									
									</div>

										<Input
											bind:inputValue={$certificates[activeCertificateID].provider.certProviderInputValue}
											error={$certificates[activeCertificateID].provider.error}
											placeholder="Provider"
											guidePlaceholder="CISCO"
											message={$certificates[activeCertificateID].provider.message}
										>
											<path
												slot="icon"
												d="M10.5 5C8.019 5 6 7.019 6 9.5L6 31.5C6 33.981 8.019 36 10.5 36L16 36L16 33L10.5 33C9.673 33 9 32.327 9 31.5L9 31L16 31L16 16.5C16 16.331 16.013391 16.166 16.025391 16L13.5 16C12.671 16 12 15.329 12 14.5C12 13.671 12.671 13 13.5 13L17.03125 13C18.18825 11.199 20.205 10 22.5 10L30 10L30 9.5C30 7.019 27.981 5 25.5 5L10.5 5 z M 22.5 12C20.019 12 18 14.019 18 16.5L18 38.5C18 40.981 20.019 43 22.5 43L40.5 43C41.329 43 42 42.329 42 41.5C42 40.671 41.329 40 40.5 40L22.5 40C21.673 40 21 39.327 21 38.5L21 38L40.5 38C41.329 38 42 37.329 42 36.5L42 16.5C42 14.019 39.981 12 37.5 12L22.5 12 z M 25.5 20L34.5 20C35.329 20 36 20.671 36 21.5C36 22.329 35.329 23 34.5 23L25.5 23C24.671 23 24 22.329 24 21.5C24 20.671 24.671 20 25.5 20 z"
											/>
										</Input>
										<!-- {courseInputValue} -->

									<InputDate
										bind:inputValue={$certificates[activeCertificateID].start.certStartInputValue}
										error={$certificates[activeCertificateID].start.error}
										placeholder="Start Date"
										guidePlaceholder="30 / 02 / 2024"
										message={$certificates[activeCertificateID].start.message}
									>
										<path
											slot="icon"
											d="M33.974 29.144L18.857 14.026c-.851-.851-2.062-1.205-3.238-.941-1.176.262-2.122 1.095-2.53 2.228l-10 27.678c-.197.547-.061 1.159.351 1.57C3.726 44.847 4.109 45 4.5 45c.171 0 .344-.029.51-.089l27.677-10c1.134-.408 1.967-1.354 2.229-2.53C35.178 31.205 34.825 29.994 33.974 29.144zM42.62 9.62c-1.64 1.64-3.22 1.77-4.5 1.88-1.06.08-1.76.14-2.62 1s-.92 1.56-1.01 2.62c-.1 1.28-.23 2.86-1.87 4.5-1.15 1.15-2.27 1.56-3.27 1.73l-2.69-2.69c.43-.09.84-.12 1.22-.15 1.06-.09 1.76-.15 2.62-1.01s.92-1.56 1-2.62c.11-1.27.24-2.86 1.88-4.5 1.64-1.64 3.22-1.77 4.5-1.87 1.06-.09 1.76-.15 2.62-1.01.59-.59 1.54-.59 2.12 0C43.21 8.08 43.21 9.04 42.62 9.62zM23.4 15.4l-2.14-2.14c2.05-2.9 2.2-5.49.83-9.25-.28-.78.12-1.64.9-1.92.78-.28 1.64.12 1.92.9C26.69 7.9 26.32 11.52 23.4 15.4zM45.91 25c-.28.77-1.15 1.18-1.92.89-3.78-1.37-6.36-1.22-9.26.84l-2.14-2.14c3.89-2.93 7.51-3.3 12.42-1.52C45.79 23.36 46.19 24.22 45.91 25zM30.108 7.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C31.399 8.123 30.601 8.123 30.108 7.631zM8.108 15.131l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C9.399 15.623 8.601 15.623 8.108 15.131zM39.108 19.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 20.123 39.601 20.123 39.108 19.631zM39.108 32.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 33.123 39.601 33.123 39.108 32.631zM36.108 39.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C37.399 40.123 36.601 40.123 36.108 39.631zM14.108 10.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C15.399 11.123 14.601 11.123 14.108 10.631z"
										/>
									</InputDate>


									<InputDate
										bind:inputValue={$certificates[activeCertificateID].end.certEndInputValue}
										error={$certificates[activeCertificateID].end.error}
										placeholder="End Date"
										guidePlaceholder="30 / 02 / 2025"
										message={$certificates[activeCertificateID].end.message}
									>
										<path
											slot="icon"
											d="M33.974 29.144L18.857 14.026c-.851-.851-2.062-1.205-3.238-.941-1.176.262-2.122 1.095-2.53 2.228l-10 27.678c-.197.547-.061 1.159.351 1.57C3.726 44.847 4.109 45 4.5 45c.171 0 .344-.029.51-.089l27.677-10c1.134-.408 1.967-1.354 2.229-2.53C35.178 31.205 34.825 29.994 33.974 29.144zM42.62 9.62c-1.64 1.64-3.22 1.77-4.5 1.88-1.06.08-1.76.14-2.62 1s-.92 1.56-1.01 2.62c-.1 1.28-.23 2.86-1.87 4.5-1.15 1.15-2.27 1.56-3.27 1.73l-2.69-2.69c.43-.09.84-.12 1.22-.15 1.06-.09 1.76-.15 2.62-1.01s.92-1.56 1-2.62c.11-1.27.24-2.86 1.88-4.5 1.64-1.64 3.22-1.77 4.5-1.87 1.06-.09 1.76-.15 2.62-1.01.59-.59 1.54-.59 2.12 0C43.21 8.08 43.21 9.04 42.62 9.62zM23.4 15.4l-2.14-2.14c2.05-2.9 2.2-5.49.83-9.25-.28-.78.12-1.64.9-1.92.78-.28 1.64.12 1.92.9C26.69 7.9 26.32 11.52 23.4 15.4zM45.91 25c-.28.77-1.15 1.18-1.92.89-3.78-1.37-6.36-1.22-9.26.84l-2.14-2.14c3.89-2.93 7.51-3.3 12.42-1.52C45.79 23.36 46.19 24.22 45.91 25zM30.108 7.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C31.399 8.123 30.601 8.123 30.108 7.631zM8.108 15.131l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C9.399 15.623 8.601 15.623 8.108 15.131zM39.108 19.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 20.123 39.601 20.123 39.108 19.631zM39.108 32.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 33.123 39.601 33.123 39.108 32.631zM36.108 39.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C37.399 40.123 36.601 40.123 36.108 39.631zM14.108 10.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C15.399 11.123 14.601 11.123 14.108 10.631z"
										/>
									</InputDate>
									</div>
									{/if}
									</div>

									{#if useFileUploads}
										<InputFileUploadDocument bind:bindFile={certificate} docName="certificate" />
									{/if}
								</section>

								<!-- <pre>
									{ JSON.stringify($certificates[activeCertificateID], null, 2) }
									{ $certificates[activeCertificateID].description
											.certDescriptionInputValue.length }
								</pre> -->
							
								


							</div>
							<!-- Tab 2 -->

							<div
								id="#tab1"
								class="flex justify-end space-x-6 flex-nowrap min-w-full {$activeFormTabId === 1
									? 'opacity-100'
									: 'opacity-0'} w-full transition-all delay-300 duration-500 ease-out"
							>
								<div class="flex flex-col flex-1 min-w-fit shrink-0 justify-self-start">
									<div class="shrink-0 w-full h-fit bg-transparent">
										<button
											type="button"
											on:click={addNewWorkExperience}
											class=" flex flex-col items-center w-full text-left space-x-1 rounded-none bg-normal-blue py-3 px-2 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
										>
											<div class="flex items-center space-x-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 48 48"
													width="32"
													height="32"
													class="fill-saftech-white m-0 p-0"
												>
													<path
														d="M12.5 4C10.019 4 8 6.019 8 8.5L8 39.5C8 41.981 10.019 44 12.5 44L25.632812 44C24.778813 43.111 24.049609 42.103 23.474609 41L12.5 41C11.673 41 11 40.327 11 39.5L11 39L22.634766 39C22.226766 37.739 22 36.397 22 35C22 27.82 27.82 22 35 22C36.772 22 38.46 22.357 40 23L40 8.5C40 6.019 37.981 4 35.5 4L12.5 4 z M 17.5 13L30.5 13C31.328 13 32 13.672 32 14.5C32 15.328 31.328 16 30.5 16L17.5 16C16.672 16 16 15.328 16 14.5C16 13.672 16.672 13 17.5 13 z M 35 24C28.925 24 24 28.925 24 35C24 41.075 28.925 46 35 46C41.075 46 46 41.075 46 35C46 28.925 41.075 24 35 24 z M 35 27C35.552 27 36 27.448 36 28L36 34L42 34C42.552 34 43 34.448 43 35C43 35.552 42.552 36 42 36L36 36L36 42C36 42.552 35.552 43 35 43C34.448 43 34 42.552 34 42L34 36L28 36C27.448 36 27 35.552 27 35C27 34.448 27.448 34 28 34L34 34L34 28C34 27.448 34.448 27 35 27 z"
													/>
												</svg>
												<div class="flex flex-col">
													<h2
														class="font-bold text-md text-left leading-3 mb-[2px] text-saftech-white"
													>
														Add New
													</h2>
													<p
														class="block font-normal text-xs text-left leading-3 w-fit text-saftech-white/70"
													>
														Work Experience
													</p>
												</div>
											</div>

											<!-- <p class="block font-normal text-xs w-fit text-saftech-white/70">
												Click to add experience
											</p> -->
										</button>
									</div>

									<div
										transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
										class="flex-1 w-full bg-saftech-white/50 space-y-[4px]"
									>
										<!-- divide divide-y-2 divide-red-950 -->
										{#each Object.keys($workExperiences) as workExperienceID, index}
											<div
												transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
												class={activeWorkExperienceID === workExperienceID
													? 'bg-saftech-white'
													: 'bg-saftech-white/20'}
											>
												<div
													transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
													class=""
												>
													<button
														type="button"
														on:click={() => {
															setActive(workExperienceID)
														}}
														disabled={Object.keys($workExperiences).length <= 1 ? true : false}
														class=" flex flex-col items-center w-full text-left space-x-1 rounded-none bg-saftech-transparent py-3 px-2 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none transition-all duration-500 ease-out"
													>
														<div
															class="flex items-center space-x-2 transition-all duration-500 ease-out"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 48 48"
																width="30"
																height="30"
															>
																<path
																	fill="#50e6ff"
																	d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"
																/>
																<linearGradient
																	id="_kEeDraea4YIsmYS50SoDa"
																	x1="28.529"
																	x2="33.6"
																	y1="15.472"
																	y2="10.4"
																	gradientUnits="userSpaceOnUse"
																>
																	<stop offset="0" stop-color="#3079d6" />
																	<stop offset="1" stop-color="#297cd2" />
																</linearGradient>
																<path
																	fill="url(#_kEeDraea4YIsmYS50SoDa)"
																	d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"
																/>
																<path
																	d="M39,18.602L23.101,34.504L21.868,39.4c-0.111,0.442,0.29,0.843,0.732,0.732l4.897-1.233L39,27.394V18.602z"
																	opacity=".05"
																/>
																<path
																	d="M39,19.309L23.941,34.371l-0.547,1.017l0,0l-0.001,0l-0.864,3.434c-0.099,0.392,0.256,0.746,0.648,0.648l3.446-0.868l0,0l0,0l1.006-0.543L39,26.663V19.309z"
																	opacity=".07"
																/>
																<path
																	fill="#c94f60"
																	d="M42.781,21.141l-1.922-1.921c-0.292-0.293-0.768-0.293-1.061,0l-0.904,0.905l2.981,2.981l0.905-0.904C43.073,21.908,43.073,21.434,42.781,21.141"
																/>
																<path
																	fill="#f0f0f0"
																	d="M24.003,35.016L23,39l3.985-1.003l0.418-3.456L24.003,35.016z"
																/>
																<path
																	fill="#edbe00"
																	d="M39.333,25.648L26.985,37.996l-2.981-2.981l12.348-12.348L39.333,25.648z"
																/>
																<linearGradient
																	id="_kEeDraea4YIsmYS50SoDb"
																	x1="39.112"
																	x2="39.112"
																	y1="20.312"
																	y2="25.801"
																	gradientUnits="userSpaceOnUse"
																>
																	<stop offset="0" stop-color="#dedede" />
																	<stop offset="1" stop-color="#d6d6d6" />
																</linearGradient>
																<path
																	fill="url(#_kEeDraea4YIsmYS50SoDb)"
																	d="M36.349,22.667l2.543-2.544l2.983,2.981l-2.543,2.544L36.349,22.667z"
																/>
																<path
																	fill="#787878"
																	d="M23.508,36.985L23,39l2.014-0.508L23.508,36.985z"
																/>
															</svg>
															<div class="flex flex-col">
																<h2
																	class="font-bold text-sm text-left leading-3 mb-[2px] text-saftech-black/60 transition-all duration-500 ease-out"
																>
																	{`Experience  ${index < 9 ? '0' : ''}${index + 1}`}
																</h2>
																<!-- {#key activeWorkExperienceID} -->
																<p
																	transition:fade={{
																		duration: 500,
																		delay: 300,
																		easing: quintOut
																	}}
																	class="block font-normal text-[10px] text-left leading-3 w-fit {activeWorkExperienceID ===
																	workExperienceID
																		? 'text-cyan-500'
																		: 'text-saftech-black/50'} transition-all duration-500 ease-out"
																>
																	{activeWorkExperienceID === workExperienceID
																		? 'Editing...'
																		: 'Edit this document'}
																</p>
																<!-- {/key} -->
															</div>
														</div>
													</button>
												</div>
												{#if Object.keys($workExperiences).length > 1 && activeWorkExperienceID === workExperienceID}
													<div
														transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
														class="bg-transparent pb-3 px-3"
													>
														<button
															transition:scale={{ duration: 500, delay: 250, easing: quintOut }}
															type="button"
															on:click={() => {
																if (workExperienceID === Object.keys($workExperiences)[0]) {
																	setActive(Object.keys($workExperiences)[1])
																	$workExperiences = $workExperiences
																	deleteWorkExperience(workExperienceID)
																	$workExperiences = $workExperiences
																} else {
																	setActive(Object.keys($workExperiences)[0])
																	$workExperiences = $workExperiences
																	deleteWorkExperience(workExperienceID)
																	$workExperiences = $workExperiences
																}
															}}
															class=" flex justify-evenly items-center min-w-full rounded-md bg-red-600/10 py-3 px-3 text-sm font-semibold text-red-600 hover:text-current/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all duration-500 ease-out"
														>
															<span class="sr-only">Checkout All Job Listings</span>
															Delete
															<span class="">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 48 48"
																	width="20"
																	height="20"
																	class="fill-current"
																>
																	<path
																		d="M20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6L14.640625 6C12.796625 6 11.086453 6.9162188 10.064453 8.4492188L7.6972656 12L7.5 12 A 1.50015 1.50015 0 1 0 7.5 15L40.5 15 A 1.50015 1.50015 0 1 0 40.5 12L40.302734 12L37.935547 8.4492188C36.913547 6.9162187 35.202375 6 33.359375 6L28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4L20.5 4 z M 8.9726562 18L11.125 38.085938C11.425 40.887937 13.77575 43 16.59375 43L31.40625 43C34.22325 43 36.574 40.887938 36.875 38.085938L39.027344 18L8.9726562 18 z"
																	/>
																</svg>
															</span>
														</button>
													</div>{/if}
											</div>
										{/each}
									</div>
								</div>
								<div
									class="flex flex-col w-[40%] space-y-8 pt-10 transition-all duration-500 ease-out"
								>
									<Input
										bind:inputValue={$workExperiences[activeWorkExperienceID].job.jobInputValue}
										error={job.error}
										placeholder="Job Title"
										guidePlaceholder="Technical Engeneer"
										message={job.message}
									>
										<path
											slot="icon"
											d="M16.5 5 A 1.50015 1.50015 0 0 0 15 6.5L15 14L11.5 14C7.364 14 4 17.364 4 21.5L4 35.5C4 39.636 7.364 43 11.5 43L24.767578 43C23.039578 40.793 22 38.02 22 35C22 27.82 27.82 22 35 22C38.496 22 41.664 23.386813 44 25.632812L44 21.5C44 17.364 40.636 14 36.5 14L33 14L33 6.5 A 1.50015 1.50015 0 0 0 31.5 5L16.5 5 z M 18 8L30 8L30 14L18 14L18 8 z M 31.644531 24.513672C30.936992 24.598018 30.292891 25.091875 30.087891 25.859375L29.757812 27.091797C29.558813 27.834797 28.915437 28.374406 28.148438 28.441406L26.878906 28.552734C25.611906 28.662734 24.840906 29.996437 25.378906 31.148438L25.917969 32.304688C26.242969 33.002688 26.097734 33.829047 25.552734 34.373047L24.650391 35.275391C23.751391 36.174391 24.019875 37.693469 25.171875 38.230469L26.328125 38.769531C27.026125 39.094531 27.445906 39.820891 27.378906 40.587891L27.265625 41.859375C27.154625 43.125375 28.337453 44.116109 29.564453 43.787109L30.796875 43.455078C31.540875 43.255078 32.328531 43.542828 32.769531 44.173828L33.501953 45.21875C34.229953 46.25975 35.771 46.25975 36.5 45.21875L37.230469 44.173828C37.671469 43.543828 38.461078 43.255078 39.205078 43.455078L40.4375 43.787109C41.6655 44.116109 42.845375 43.125375 42.734375 41.859375L42.623047 40.587891C42.555047 39.820891 42.975828 39.094531 43.673828 38.769531L44.828125 38.230469C45.980125 37.693469 46.248609 36.173391 45.349609 35.275391L44.447266 34.373047C43.902266 33.829047 43.756031 33.002688 44.082031 32.304688L44.623047 31.148438C45.160047 29.997438 44.389047 28.662734 43.123047 28.552734L41.851562 28.441406C41.084563 28.374406 40.441187 27.835797 40.242188 27.091797L39.912109 25.859375C39.584109 24.631375 38.136703 24.103031 37.095703 24.832031L36.050781 25.564453C35.420781 26.006453 34.580172 26.006453 33.951172 25.564453L32.90625 24.832031C32.51625 24.558656 32.069055 24.463064 31.644531 24.513672 z"
										/>
									</Input>
									<!-- {jobInputValue} -->

									<Input
										bind:inputValue={$workExperiences[activeWorkExperienceID].company
											.companyInputValue}
										error={company.error}
										placeholder="Company Name"
										guidePlaceholder="Saftech Canada"
										message={company.message}
									>
										<path
											slot="icon"
											d="M4.5 5 A 1.50015 1.50015 0 1 0 4.5 8L5 8L5 28.035156C3.306 28.278156 2 29.74 2 31.5L2 41.5C2 42.328 2.672 43 3.5 43L13 43C13.552 43 14 42.552 14 42L14 35C14 34.448 14.448 34 15 34L18 34C18.552 34 19 34.448 19 35L19 42C19 42.552 19.448 43 20 43L29.5 43C30.328 43 31 42.328 31 41.5L31 31.5C31 29.74 29.694 28.278156 28 28.035156L28 8L28.5 8 A 1.50015 1.50015 0 1 0 28.5 5L4.5 5 z M 12 12L14 12C14.552 12 15 12.448 15 13L15 15C15 15.552 14.552 16 14 16L12 16C11.448 16 11 15.552 11 15L11 13C11 12.448 11.448 12 12 12 z M 19 12L21 12C21.552 12 22 12.448 22 13L22 15C22 15.552 21.552 16 21 16L19 16C18.448 16 18 15.552 18 15L18 13C18 12.448 18.448 12 19 12 z M 30 12L30 26.603516C31.79 27.525516 33 29.4 33 31.5L33 41.5C33 42.039 32.866437 42.544 32.648438 43L44.5 43C45.33 43 46 42.33 46 41.5L46 17.5C46 14.47 43.53 12 40.5 12L30 12 z M 12 19L14 19C14.552 19 15 19.448 15 20L15 22C15 22.552 14.552 23 14 23L12 23C11.448 23 11 22.552 11 22L11 20C11 19.448 11.448 19 12 19 z M 19 19L21 19C21.552 19 22 19.448 22 20L22 22C22 22.552 21.552 23 21 23L19 23C18.448 23 18 22.552 18 22L18 20C18 19.448 18.448 19 19 19 z M 37 19L39 19C39.552 19 40 19.448 40 20L40 22C40 22.552 39.552 23 39 23L37 23C36.448 23 36 22.552 36 22L36 20C36 19.448 36.448 19 37 19 z M 12 26L14 26C14.552 26 15 26.448 15 27L15 29C15 29.552 14.552 30 14 30L12 30C11.448 30 11 29.552 11 29L11 27C11 26.448 11.448 26 12 26 z M 19 26L21 26C21.552 26 22 26.448 22 27L22 29C22 29.552 21.552 30 21 30L19 30C18.448 30 18 29.552 18 29L18 27C18 26.448 18.448 26 19 26 z M 37 26L39 26C39.552 26 40 26.448 40 27L40 29C40 29.552 39.552 30 39 30L37 30C36.448 30 36 29.552 36 29L36 27C36 26.448 36.448 26 37 26 z M 37 33L39 33C39.552 33 40 33.448 40 34L40 36C40 36.552 39.552 37 39 37L37 37C36.448 37 36 36.552 36 36L36 34C36 33.448 36.448 33 37 33 z M 7 34L9 34C9.552 34 10 34.448 10 35L10 37C10 37.552 9.552 38 9 38L7 38C6.448 38 6 37.552 6 37L6 35C6 34.448 6.448 34 7 34 z M 24 34L26 34C26.552 34 27 34.448 27 35L27 37C27 37.552 26.552 38 26 38L24 38C23.448 38 23 37.552 23 37L23 35C23 34.448 23.448 34 24 34 z"
										/>
									</Input>
									<!-- {companyInputValue} -->

									<Input
										bind:inputValue={$workExperiences[activeWorkExperienceID].duration
											.durationInputValue}
										error={duration.error}
										placeholder="Period Employed"
										guidePlaceholder="3 Years"
										message={duration.message}
									>
										<path
											slot="icon"
											d="M21 2L21 5L23 5L23 6.0976562C12.355663 7.1082736 4 16.095631 4 27C4 38.579 13.421 48 25 48C36.579 48 46 38.579 46 27C46 16.095631 37.644337 7.1082736 27 6.0976562L27 5L29 5L29 2L21 2 z M 40.236328 5.1464844L38.230469 7.1523438L42.845703 11.767578L44.851562 9.7617188L40.236328 5.1464844 z M 15 16C15.25575 16 15.511531 16.097469 15.707031 16.292969L24.488281 25.074219C24.653281 25.031219 24.822 25 25 25C26.105 25 27 25.895 27 27C27 27.178 26.968781 27.346719 26.925781 27.511719L28.707031 29.292969C29.098031 29.683969 29.098031 30.316031 28.707031 30.707031C28.512031 30.902031 28.256 31 28 31C27.744 31 27.487969 30.902031 27.292969 30.707031L25.511719 28.925781C25.346719 28.968781 25.178 29 25 29C23.895 29 23 28.105 23 27C23 26.822 23.031219 26.653281 23.074219 26.488281L14.292969 17.707031C13.901969 17.316031 13.901969 16.683969 14.292969 16.292969C14.488469 16.097469 14.74425 16 15 16 z"
										/>
									</Input>
									<!-- {durationInputValue} -->
								</div>

								<div class="flex flex-col space-y-4 mr-12 w-[40%]">
									<InputTextarea
										bind:inputValue={$workExperiences[activeWorkExperienceID].experience
											.experienceInputValue}
										error={experience.error}
										placeholder="Company Name"
										guidePlaceholder="Saftech Canada"
										message={experience.message}
									>
										<path
											slot="icon"
											d="M21 2L21 5L23 5L23 6.0976562C12.355663 7.1082736 4 16.095631 4 27C4 38.579 13.421 48 25 48C36.579 48 46 38.579 46 27C46 16.095631 37.644337 7.1082736 27 6.0976562L27 5L29 5L29 2L21 2 z M 40.236328 5.1464844L38.230469 7.1523438L42.845703 11.767578L44.851562 9.7617188L40.236328 5.1464844 z M 15 16C15.25575 16 15.511531 16.097469 15.707031 16.292969L24.488281 25.074219C24.653281 25.031219 24.822 25 25 25C26.105 25 27 25.895 27 27C27 27.178 26.968781 27.346719 26.925781 27.511719L28.707031 29.292969C29.098031 29.683969 29.098031 30.316031 28.707031 30.707031C28.512031 30.902031 28.256 31 28 31C27.744 31 27.487969 30.902031 27.292969 30.707031L25.511719 28.925781C25.346719 28.968781 25.178 29 25 29C23.895 29 23 28.105 23 27C23 26.822 23.031219 26.653281 23.074219 26.488281L14.292969 17.707031C13.901969 17.316031 13.901969 16.683969 14.292969 16.292969C14.488469 16.097469 14.74425 16 15 16 z"
										/>
									</InputTextarea>
								</div>
							</div>
							<!-- Tab 3 -->
							<div
								id="#tab2"
								class="flex justify-center space-x-4 flex-nowrap min-w-full {$activeFormTabId === 2
									? 'opacity-100 w-full'
									: 'opacity-0'} transition-all delay-300 duration-500 ease-out"
							>
								<div
									class="flex flex-col w-[40%] space-y-8 pt-10 transition-all duration-500 ease-out"
								>
									<Input
										bind:inputValue={nameInputValue}
										error={name.error}
										placeholder="Full Name"
										guidePlaceholder="John Doe"
										message={name.message}
									>
										<path
											slot="icon"
											d="M24 4A10 10 0 1024 24 10 10 0 1024 4zM36.021 28H11.979C9.785 28 8 29.785 8 31.979V33.5c0 3.312 1.885 6.176 5.307 8.063C16.154 43.135 19.952 44 24 44c7.706 0 16-3.286 16-10.5v-1.521C40 29.785 38.215 28 36.021 28z"
										/>
									</Input>
									<!-- {nameInputValue} -->

									<InputEmail
										bind:inputValue={emailInputValue}
										error={email.error}
										placeholder="Your Email"
										guidePlaceholder="johndoe@example.com"
										message={email.message}
									>
										<path
											slot="icon"
											d="M10 8C6.86 8 4.2795313 10.42 4.0195312 13.5L24 24.289062L43.980469 13.5C43.720469 10.42 41.14 8 38 8L10 8 z M 4 16.890625L4 34C4 37.31 6.69 40 10 40L38 40C41.31 40 44 37.31 44 34L44 16.890625L24.710938 27.320312C24.490938 27.440312 24.25 27.5 24 27.5C23.75 27.5 23.509062 27.440313 23.289062 27.320312L4 16.890625 z"
										/>
									</InputEmail>
									<!-- {emailInputValue} -->

									<InputDate
										bind:inputValue={birthInputValue}
										error={birth.error}
										placeholder="Birth Date"
										guidePlaceholder="30 / 02 / 2024"
										message={birth.message}
									>
										<path
											slot="icon"
											d="M33.974 29.144L18.857 14.026c-.851-.851-2.062-1.205-3.238-.941-1.176.262-2.122 1.095-2.53 2.228l-10 27.678c-.197.547-.061 1.159.351 1.57C3.726 44.847 4.109 45 4.5 45c.171 0 .344-.029.51-.089l27.677-10c1.134-.408 1.967-1.354 2.229-2.53C35.178 31.205 34.825 29.994 33.974 29.144zM42.62 9.62c-1.64 1.64-3.22 1.77-4.5 1.88-1.06.08-1.76.14-2.62 1s-.92 1.56-1.01 2.62c-.1 1.28-.23 2.86-1.87 4.5-1.15 1.15-2.27 1.56-3.27 1.73l-2.69-2.69c.43-.09.84-.12 1.22-.15 1.06-.09 1.76-.15 2.62-1.01s.92-1.56 1-2.62c.11-1.27.24-2.86 1.88-4.5 1.64-1.64 3.22-1.77 4.5-1.87 1.06-.09 1.76-.15 2.62-1.01.59-.59 1.54-.59 2.12 0C43.21 8.08 43.21 9.04 42.62 9.62zM23.4 15.4l-2.14-2.14c2.05-2.9 2.2-5.49.83-9.25-.28-.78.12-1.64.9-1.92.78-.28 1.64.12 1.92.9C26.69 7.9 26.32 11.52 23.4 15.4zM45.91 25c-.28.77-1.15 1.18-1.92.89-3.78-1.37-6.36-1.22-9.26.84l-2.14-2.14c3.89-2.93 7.51-3.3 12.42-1.52C45.79 23.36 46.19 24.22 45.91 25zM30.108 7.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C31.399 8.123 30.601 8.123 30.108 7.631zM8.108 15.131l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C9.399 15.623 8.601 15.623 8.108 15.131zM39.108 19.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 20.123 39.601 20.123 39.108 19.631zM39.108 32.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 33.123 39.601 33.123 39.108 32.631zM36.108 39.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C37.399 40.123 36.601 40.123 36.108 39.631zM14.108 10.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C15.399 11.123 14.601 11.123 14.108 10.631z"
										/>
									</InputDate>
									<!-- {birthInputValue} -->
								</div>
								<div
									class="flex flex-col w-[40%] space-y-8 pt-10 transition-all duration-500 ease-out"
								>
									<Input
										bind:inputValue={nameInputValue}
										error={name.error}
										placeholder="Full Name"
										guidePlaceholder="John Doe"
										message={name.message}
									>
										<path
											slot="icon"
											d="M24 4A10 10 0 1024 24 10 10 0 1024 4zM36.021 28H11.979C9.785 28 8 29.785 8 31.979V33.5c0 3.312 1.885 6.176 5.307 8.063C16.154 43.135 19.952 44 24 44c7.706 0 16-3.286 16-10.5v-1.521C40 29.785 38.215 28 36.021 28z"
										/>
									</Input>
									<!-- {nameInputValue} -->

									<InputEmail
										bind:inputValue={emailInputValue}
										error={email.error}
										placeholder="Your Email"
										guidePlaceholder="johndoe@example.com"
										message={email.message}
									>
										<path
											slot="icon"
											d="M10 8C6.86 8 4.2795313 10.42 4.0195312 13.5L24 24.289062L43.980469 13.5C43.720469 10.42 41.14 8 38 8L10 8 z M 4 16.890625L4 34C4 37.31 6.69 40 10 40L38 40C41.31 40 44 37.31 44 34L44 16.890625L24.710938 27.320312C24.490938 27.440312 24.25 27.5 24 27.5C23.75 27.5 23.509062 27.440313 23.289062 27.320312L4 16.890625 z"
										/>
									</InputEmail>
									<!-- {emailInputValue} -->

									<InputDate
										bind:inputValue={birthInputValue}
										error={birth.error}
										placeholder="Birth Date"
										guidePlaceholder="30 / 02 / 2024"
										message={birth.message}
									>
										<path
											slot="icon"
											d="M33.974 29.144L18.857 14.026c-.851-.851-2.062-1.205-3.238-.941-1.176.262-2.122 1.095-2.53 2.228l-10 27.678c-.197.547-.061 1.159.351 1.57C3.726 44.847 4.109 45 4.5 45c.171 0 .344-.029.51-.089l27.677-10c1.134-.408 1.967-1.354 2.229-2.53C35.178 31.205 34.825 29.994 33.974 29.144zM42.62 9.62c-1.64 1.64-3.22 1.77-4.5 1.88-1.06.08-1.76.14-2.62 1s-.92 1.56-1.01 2.62c-.1 1.28-.23 2.86-1.87 4.5-1.15 1.15-2.27 1.56-3.27 1.73l-2.69-2.69c.43-.09.84-.12 1.22-.15 1.06-.09 1.76-.15 2.62-1.01s.92-1.56 1-2.62c.11-1.27.24-2.86 1.88-4.5 1.64-1.64 3.22-1.77 4.5-1.87 1.06-.09 1.76-.15 2.62-1.01.59-.59 1.54-.59 2.12 0C43.21 8.08 43.21 9.04 42.62 9.62zM23.4 15.4l-2.14-2.14c2.05-2.9 2.2-5.49.83-9.25-.28-.78.12-1.64.9-1.92.78-.28 1.64.12 1.92.9C26.69 7.9 26.32 11.52 23.4 15.4zM45.91 25c-.28.77-1.15 1.18-1.92.89-3.78-1.37-6.36-1.22-9.26.84l-2.14-2.14c3.89-2.93 7.51-3.3 12.42-1.52C45.79 23.36 46.19 24.22 45.91 25zM30.108 7.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C31.399 8.123 30.601 8.123 30.108 7.631zM8.108 15.131l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C9.399 15.623 8.601 15.623 8.108 15.131zM39.108 19.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 20.123 39.601 20.123 39.108 19.631zM39.108 32.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C40.399 33.123 39.601 33.123 39.108 32.631zM36.108 39.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C37.399 40.123 36.601 40.123 36.108 39.631zM14.108 10.631l-.739-.739c-.493-.493-.493-1.291 0-1.784l.739-.739c.493-.493 1.291-.493 1.784 0l.739.739c.493.493.493 1.291 0 1.784l-.739.739C15.399 11.123 14.601 11.123 14.108 10.631z"
										/>
									</InputDate>
									<!-- {birthInputValue} -->
								</div>

								{#if useFileUploads}
									<div class="flex flex-col space-y-4 w-[50%] h-full">
										<div class="h-[37%]">
											<InputFileUploadDocument
												bind:bindFile={resumee}
												docName="resumee"
												square={false}
											/>
										</div>
										<div class="h-[37%]">
											<InputFileUploadDocument
												bind:bindFile={letter}
												docName="letter"
												square={false}
											/>
										</div>
									</div>{/if}
							</div>
						</div>

						<div class="flex pl-10 py-2 flex-nowrap overflow-hidden">
							<!-- testing -->

							<!-- <div class="">
								{#each Object.keys($workExperiences) as workExperienceID}
									<button
										type="button"
										on:click={() => {
											setActive(workExperienceID)
										}}
										disabled={Object.keys($workExperiences).length <= 1 ? true : false}
										class=" flex justify-between items-center space-x-5 rounded-md bg-normal-blue py-3 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 disabled:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
									>
										<span class="sr-only">Checkout All Job Listings</span>
										Edit This Work Experience
										<span class="">
											<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
												><path
													d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
													transform="translate(0 0)"
												/></svg
											>
										</span>
									</button>

									{#if Object.keys($workExperiences).length > 1}
										<button
											type="button"
											on:click={() => {
												if (workExperienceID === Object.keys($workExperiences)[0]) {
													setActive(Object.keys($workExperiences)[1])
													$workExperiences = $workExperiences
													deleteWorkExperience(workExperienceID)
													$workExperiences = $workExperiences
												} else {
													setActive(Object.keys($workExperiences)[0])
													$workExperiences = $workExperiences
													deleteWorkExperience(workExperienceID)
													$workExperiences = $workExperiences
												}
											}}
											class=" flex justify-between items-center space-x-5 rounded-md bg-red-600 py-3 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
										>
											<span class="sr-only">Checkout All Job Listings</span>
											Delete
											<span class="">
												<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
													><path
														d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
														transform="translate(0 0)"
													/></svg
												>
											</span>
										</button>
									{/if}
								{/each}
								<button
									type="button"
									on:click={addNewWorkExperience}
									class=" flex justify-between items-center space-x-5 rounded-md bg-lime-600 py-3 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
								>
									<span class="sr-only">Checkout All Job Listings</span>
									Add New work Experience
									<span class="">
										<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
											><path
												d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
												transform="translate(0 0)"
											/></svg
										>
									</span>
								</button>
							</div> -->
							<div class="">
								<!-- {uuid} -->
								<!-- <pre>
									{JSON.stringify($workExperiences[activeWorkExperienceID].job.jobInputValue, null, 2)}
									{JSON.stringify($workExperiences, null, 2)}
								</pre> -->
							</div>

							<!-- testing -->

							<!-- <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<defs>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6g"
										x1="23"
										x2="23"
										y1="13.221"
										y2="10.491"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stop-color="#3965e3" />
										<stop offset=".692" stop-color="#4f9bf6" />
										<stop offset="1" stop-color="#59b4ff" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6b"
										x1="24"
										x2="24"
										y1="12"
										y2="41"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset=".011" stop-color="#b3b3b3" />
										<stop offset=".013" stop-color="#b5b5b5" stop-opacity=".868" />
										<stop offset=".015" stop-color="#b9b9b9" stop-opacity=".665" />
										<stop offset=".019" stop-color="#bcbcbc" stop-opacity=".484" />
										<stop offset=".022" stop-color="#bebebe" stop-opacity=".332" />
										<stop offset=".026" stop-color="silver" stop-opacity=".209" />
										<stop offset=".031" stop-color="#c2c2c2" stop-opacity=".114" />
										<stop offset=".036" stop-color="#c3c3c3" stop-opacity=".048" />
										<stop offset=".044" stop-color="#c4c4c4" stop-opacity=".01" />
										<stop offset=".066" stop-color="#c4c4c4" stop-opacity="0" />
										<stop offset="1" stop-color="#c4c4c4" stop-opacity="0" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6c"
										x1="42.777"
										x2="19.49"
										y1="18.254"
										y2="34.559"
										gradientTransform="matrix(-1 0 0 1 48 0)"
										xlink:href="#Gq7ZuXOiiL83JSLL__tY6a"
									/>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6d"
										x1="386"
										x2="386"
										y1="33"
										y2="10"
										gradientTransform="matrix(-1 0 0 1 410 0)"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset=".839" stop-color="#cf6c00" />
										<stop offset=".858" stop-color="#d67f10" />
										<stop offset=".898" stop-color="#e3a12e" />
										<stop offset=".937" stop-color="#edbb43" />
										<stop offset=".972" stop-color="#f3ca50" />
										<stop offset="1" stop-color="#f5cf55" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6e"
										x1="24"
										x2="24"
										y1="35"
										y2="13"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset=".787" stop-color="#cf6c00" />
										<stop offset=".812" stop-color="#d67f10" />
										<stop offset=".866" stop-color="#e3a12e" />
										<stop offset=".916" stop-color="#edbb43" />
										<stop offset=".963" stop-color="#f3ca50" />
										<stop offset="1" stop-color="#f5cf55" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6f"
										x1="24"
										x2="24"
										y1="37"
										y2="16"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stop-color="#ecbe29" />
										<stop offset=".142" stop-color="#f1c940" />
										<stop offset=".361" stop-color="#f7d85d" />
										<stop offset=".578" stop-color="#fbe271" />
										<stop offset=".793" stop-color="#fee87e" />
										<stop offset="1" stop-color="#ffea82" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6a"
										x1="42.777"
										x2="19.49"
										y1="18.254"
										y2="34.559"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset=".022" stop-color="#b3b3b3" />
										<stop offset=".023" stop-color="#b5b5b5" stop-opacity=".868" />
										<stop offset=".026" stop-color="#b9b9b9" stop-opacity=".665" />
										<stop offset=".029" stop-color="#bcbcbc" stop-opacity=".484" />
										<stop offset=".032" stop-color="#bebebe" stop-opacity=".332" />
										<stop offset=".035" stop-color="silver" stop-opacity=".209" />
										<stop offset=".039" stop-color="#c2c2c2" stop-opacity=".114" />
										<stop offset=".044" stop-color="#c3c3c3" stop-opacity=".048" />
										<stop offset=".051" stop-color="#c4c4c4" stop-opacity=".01" />
										<stop offset=".07" stop-color="#c4c4c4" stop-opacity="0" />
										<stop offset="1" stop-color="#c4c4c4" stop-opacity="0" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6h"
										x1="17"
										x2="17"
										y1="18.162"
										y2="12.464"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset=".181" stop-color="#a33100" />
										<stop offset=".573" stop-color="#d9451a" />
										<stop offset=".816" stop-color="#fc522b" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6i"
										x1="20"
										x2="20"
										y1="12.162"
										y2="6.464"
										gradientTransform="matrix(-1 0 0 1 48 0)"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stop-color="#6da60a" />
										<stop offset=".663" stop-color="#78d22a" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6l"
										x1="24"
										x2="24"
										y1="35"
										y2="27"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stop-color="#666" />
										<stop offset="1" stop-color="#c4c4c4" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6k"
										x1="24"
										x2="24"
										y1="20.414"
										y2="21.823"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset=".092" stop-color="#b3b3b3" />
										<stop offset=".118" stop-color="#b5b5b5" stop-opacity=".868" />
										<stop offset=".164" stop-color="#b9b9b9" stop-opacity=".665" />
										<stop offset=".216" stop-color="#bcbcbc" stop-opacity=".484" />
										<stop offset=".273" stop-color="#bebebe" stop-opacity=".332" />
										<stop offset=".337" stop-color="silver" stop-opacity=".209" />
										<stop offset=".413" stop-color="#c2c2c2" stop-opacity=".114" />
										<stop offset=".506" stop-color="#c3c3c3" stop-opacity=".048" />
										<stop offset=".637" stop-color="#c4c4c4" stop-opacity=".01" />
										<stop offset="1" stop-color="#c4c4c4" stop-opacity="0" />
									</linearGradient>
									<linearGradient
										id="Gq7ZuXOiiL83JSLL__tY6m"
										x1="24"
										x2="24"
										y1="34"
										y2="28"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stop-color="#a6a6a6" />
										<stop offset="1" stop-color="#f2f2f2" />
									</linearGradient>
									<radialGradient
										id="Gq7ZuXOiiL83JSLL__tY6j"
										cx="23.237"
										cy="13.25"
										r="48.98"
										gradientTransform="matrix(1 0 0 .937 0 .832)"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stop-color="#d1d1d1" />
										<stop offset=".266" stop-color="#8b8b8b" />
										<stop offset=".52" stop-color="#4f4f4f" />
										<stop offset=".734" stop-color="#242424" />
										<stop offset=".901" stop-color="#0a0a0a" />
										<stop offset="1" />
									</radialGradient>
								</defs>
								<g data-name="card file box">
									<polygon fill="#242424" points="4 20 10 12 38 12 44 20 24 41 4 20" />
									<polygon fill="url(#Gq7ZuXOiiL83JSLL__tY6b)" points="10 12 38 12 24 41 10 12" />
									<polygon fill="url(#Gq7ZuXOiiL83JSLL__tY6a)" points="38 12 44 20 24 41 38 12" />
									<polygon fill="url(#Gq7ZuXOiiL83JSLL__tY6c)" points="10 12 4 20 24 41 10 12" />
									<rect
										width="24"
										height="23"
										x="12"
										y="10"
										fill="url(#Gq7ZuXOiiL83JSLL__tY6d)"
										rx="2"
									/>
									<rect
										width="28"
										height="22"
										x="10"
										y="13"
										fill="url(#Gq7ZuXOiiL83JSLL__tY6e)"
										rx="2"
									/>
									<rect
										width="32"
										height="21"
										x="8"
										y="16"
										fill="url(#Gq7ZuXOiiL83JSLL__tY6f)"
										rx="2"
									/>
									<path
										fill="url(#Gq7ZuXOiiL83JSLL__tY6g)"
										d="M18,13l1.41-2.11A1.981,1.981,0,0,1,21.07,10h3.87a2.007,2.007,0,0,1,1.67.9L28,13Z"
									/>
									<path
										fill="url(#Gq7ZuXOiiL83JSLL__tY6h)"
										d="M12,16l1.41-2.11A1.981,1.981,0,0,1,15.07,13h3.87a2.007,2.007,0,0,1,1.67.9L22,16Z"
									/>
									<path
										fill="url(#Gq7ZuXOiiL83JSLL__tY6i)"
										d="M33,10,31.59,7.89A1.981,1.981,0,0,0,29.93,7H26.06a2.007,2.007,0,0,0-1.67.9L23,10Z"
									/>
									<path
										fill="url(#Gq7ZuXOiiL83JSLL__tY6j)"
										d="M42,41H6a2,2,0,0,1-2-2V20H44V39A2,2,0,0,1,42,41Z"
									/>
									<path
										fill="url(#Gq7ZuXOiiL83JSLL__tY6k)"
										d="M42,41H6a2,2,0,0,1-2-2V20H44V39A2,2,0,0,1,42,41Z"
									/>
									<rect width="16" height="10" x="16" y="26" opacity=".05" rx="2" />
									<rect width="15" height="9" x="16.5" y="26.5" opacity=".07" rx="1.5" />
									<rect
										width="14"
										height="8"
										x="17"
										y="27"
										fill="url(#Gq7ZuXOiiL83JSLL__tY6l)"
										rx="1"
									/>
									<rect
										width="12"
										height="6"
										x="18"
										y="28"
										fill="url(#Gq7ZuXOiiL83JSLL__tY6m)"
										rx=".5"
									/>
								</g>
							</svg>
							<h2>
								<span class="font-bold text-xl text-saftech-black/60">Terms & Conditions</span>
								<span class=" block text-xs font-normal max-w-[40ch] text-saftech-black/50"
									>I agree to Saftech Canada's terms and conditions</span
								>
							</h2> -->
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
</section>
