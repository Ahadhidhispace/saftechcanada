<script>
// @ts-nocheck

	import { accessStore } from "../../accessStore.js"
	import { openAlert } from "../../alertStore.js"
	import { z } from "zod"
	import { writable } from "svelte/store"
	import { enhance, applyAction, deserialize } from '$app/forms'

	// @ts-ignore
	import { invalidateAll, goto } from '$app/navigation'
	import { page } from '$app/stores'

	import authErrorImage from '$lib/assets/images/authorize.png'


	// @ts-ignore
	import InputAccess from '$lib/components/InputAccess.svelte'
	import InputEmailAccess from '$lib/components/InputEmailAccess.svelte'
	import InputPasswordAccess from '$lib/components/InputPasswordAccess.svelte'
	import { onMount } from 'svelte'


	// @ts-ignore
	// let email = writable('')
	// let password = writable('')
	// let userAccessKey = writable('')

	// $: console.log(`email: ${$email}, password: ${$password}, userAccessKey: ${$userAccessKey}`)



  	// @ts-ignore
  	export let data
	export let form

	// let regiserForm

	// $: form.body = {
	// 		email: email,
	// 		password: password,
	// 		userAccessKey: userAccessKey
	// }

// 	$: new FormData([
		
// 		{"email": $accessStore.email.value},
// 		{"password": $accessStore.password.value},
// 		{"userAccessKey": $accessStore.userAccessKey.value},
		
		
// ])

	// $: email = $accessStore.email.value
	// $: password = $accessStore.password.value
	// $: userAccessKey = $accessStore.userAccessKey.value

	// const formData = new FormData(regiserForm)


	// $: formData.set('email', email)
	// $: formData.set('password', password)
	// $: formData.set('userAccessKey', userAccessKey)
	
	// @ts-ignore
	let { accesskey, accessKeyError, session } = data
	// @ts-ignore
	$: ({ accesskey, accessKeyError, session } = data)

    $: console.log($page.data)

	

   // @ts-ignore
     $: showAccessLoginForm = JSON.parse($page.url.searchParams.get('user_has_accesskey')) || false
     $: showingLoginPortal = JSON.parse($page.url.searchParams.get('login_portal')) || false


    //$: console.log('User has access key: ' +accesskey)
    //$: goto(`?user_has_accesskey=${accesskey}`)
    //$: console.log(data.)

	//$: type = down === true ? 'text':'password' 

	let presentRegisterSheet = false
	let accessKeyIsAuthenticating = false


		// Define certificate zod schema

	const accessSchema = z.object({
		email: z.string().email(),
		password: z.string().min(6).max(15),
		userAccessKey: z.string().uuid(), // user_ahadhi db21d28f-6cac-4e2b-a6fc-bc00ced5599f // ahadhiamanijonathan@gmail.com // bdd6047b-e6c1-4ead-a8ae-aed3c2bb022b // UN-REGISTERED d6e29ddd-b519-4157-b81b-5e2d1c8d0f6e
	})

	// f6eddd98-735a-4e9e-9a06-dd93a90c8aad
	// 53d16025-d3c8-402b-80f2-2feed075b91a
	// 33dcfb26-e745-4847-9f2a-c1600a63bff2
	// 7ff9168b-78da-4663-8ebb-e0054bfd1ec6
	// 7651a380-1f38-460d-8b68-ce7e3ae653c1
	// f348d323-68d0-4b4a-9e69-5cf02a761ce3

    $: try {
		$accessStore.userAccessKey.value = $accessStore.userAccessKey.value
		const result = accessSchema.parse({
			email: $accessStore.email.value,
			password: $accessStore.password.value,
			userAccessKey: $accessStore.userAccessKey.value
		})

	} catch (err) {
		//console.log(err)
		const { fieldErrors: errors } = err.flatten()
		console.log(errors)

			if (Object.keys(errors).includes('email') && $accessStore.email.value)
			{
				$accessStore.email.error = true
				$accessStore.email.message = errors.email

			}else{
				$accessStore.email.error = false
				$accessStore.email.message = ''

			}
			
			if (Object.keys(errors).includes('password') && $accessStore.password.value)
			{
				$accessStore.password.error = true
				$accessStore.password.message = errors.password

			}else{
				$accessStore.password.error = false
				$accessStore.password.message = ''

			}

			if (Object.keys(errors).includes('userAccessKey') &&  $accessStore.userAccessKey.value)
			{
				$accessStore.userAccessKey.error = true
				$accessStore.userAccessKey.message = errors.userAccessKey

			}else{
				$accessStore.userAccessKey.error = false
				$accessStore.userAccessKey.message = ''

			}

		}

		$: console.log($accessStore)

		// $: console.log(`email: ${$email}, password: ${$password}, userAccessKey: ${$userAccessKey}`)


	// $: isFormReady = !$emailError && !$passwordError && !$userAccessKeyError && !accessKeyIsAuthenticating
	$: isLoginFormReady = !session && !$accessStore.email.error && !$accessStore.password.error && $accessStore.email.value.length > 1 && $accessStore.password.value.length > 1 && !accessKeyIsAuthenticating
	$: isFormReady = !session && !$accessStore.email.error && !$accessStore.password.error && !$accessStore.userAccessKey.error && $accessStore.email.value.length > 1 && $accessStore.password.value.length > 1 && $accessStore.userAccessKey.value.length > 1 && !accessKeyIsAuthenticating
	$: console.log(isFormReady)
	// $: console.log($emailErrorMessage[0])

	$: canSubmit = isFormReady && presentRegisterSheet
	$: canSubmitLogin = isLoginFormReady && presentRegisterSheet
	$: console.log(`Can submit form: ${canSubmit}`)
	// validating certificate with zod ends

	$: isEmailInputRefReady = $accessStore.email.error || $accessStore.email.value.length <= 0 

	let emailResend

	onMount(() => {
		// emailInputRef.focus()
		const timeoutId = setTimeout(() => {
			showingLoginPortal === true ? presentRegisterSheet = true : presentRegisterSheet = false
			console.log(emailInputRef)
			return clearTimeout(timeoutId)
		}, 1000)
	})

	let emailInputRef

	async function handleSubmit(event) {
        const formData = new FormData();

		formData.set('email', $accessStore.email.value)
		formData.set('password', $accessStore.password.value)
		formData.set('userAccessKey', $accessStore.userAccessKey.value)

		console.log(formData)

        const response = await fetch('/access?/register', {
            method: 'POST',
            body: formData
        });

        /** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await response.text());

		// result.type = 'dehjdfh'
		console.log(result)
		console.log(form)

		switch(result.type){
				case "success":
					// await invalidateAll();
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = 'Congrats and Welcome!'//result.error.message
					$openAlert.trableshoot = 'Access Key authentication passed. Now you can verify your email before opening the login portal. Good luck'
					$openAlert.btnText = 'Got it'
					$openAlert.state = true
					await invalidateAll();

				break;
				case "error":
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = result.error.message ?? 'Oops, Something went wrong'
					$openAlert.trableshoot = 'Internal server error. It appears like you\'re offline'
					$openAlert.btnText = 'Try again'
					$openAlert.state = true
				break;
				case "failure": 
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = result.data?.error ?? 'Oops, Something went wrong'
					$openAlert.trableshoot = result.data?.trableshoot
					$openAlert.btnText = 'Try again'
					$openAlert.state = true
				break;

				default: 
					// result.type = 'fallback'
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false

					$openAlert.type = 'fallback' //result.type
					$openAlert.statusCode = result.status
					$openAlert.message = result.data?.error || 'Oops, Something went wrong' //result.data.error
					$openAlert.trableshoot = 'Make sure you\'re not offline and provide accurate information.'
					$openAlert.btnText = 'Try again'
					$openAlert.state = true
				break;

				}

        // if (result.type === 'success') {
        //     // re-run all `load` functions, following the successful update 
		// 	await invalidateAll();
        // }

        applyAction(result);
    }
	async function handleLogin(event) {
        const formData = new FormData();

		formData.set('email', $accessStore.email.value)
		formData.set('password', $accessStore.password.value)
		// formData.set('userAccessKey', $accessStore.userAccessKey.value)

		console.log(formData)

        const response = await fetch('/access?/login', {
            method: 'POST',
            body: formData
        });

        /** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await response.text());

		// result.type = 'dehjdfh'
		console.log(result)
		console.log(form)

		switch(result.type){
				case "success":
					// await invalidateAll();
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = 'Welcome back!'//result.error.message
					$openAlert.trableshoot = 'You have been authenticated successfully.'
					$openAlert.btnText = 'It\s my pleasure'
					$openAlert.state = true
					await invalidateAll();

				break;
				case "error":
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = result.error.message ?? 'Oops, Something went wrong'
					$openAlert.trableshoot = 'Internal server error. It appears like you\'re offline'
					$openAlert.btnText = 'Try again'
					$openAlert.state = true
				break;
				case "failure": 
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = result.data?.error ?? 'Oops, Something went wrong'
					$openAlert.trableshoot = result.data?.trableshoot ?? 'Make sure you\'re not offline and provide accurate information.'
					$openAlert.btnText = 'Try again'
					$openAlert.state = true
				break;

				default: 
					// result.type = 'fallback'
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false
					await invalidateAll();

					// $openAlert.type = 'fallback' //result.type
					// $openAlert.statusCode = result.status
					// $openAlert.message = result.data?.error || 'Oops, Something went wrong' //result.data.error
					// $openAlert.trableshoot = 'Make sure you\'re not offline and provide accurate information.'
					// $openAlert.btnText = 'Try again'
					// $openAlert.state = true
				break;

				}

        // if (result.type === 'success') {
        //     // re-run all `load` functions, following the successful update 
		// 	await invalidateAll();
        // }

        applyAction(result);
    }

	async function handleResendEmailVerification(event) {

		if ($accessStore.email.error || $accessStore.email.value.length <= 0 ) {

			$openAlert.type = ''
			$openAlert.message = 'Email is missing!'
			$openAlert.trableshoot = 'You have to provide your registration email that you will be able to verify your credentials.'
			$openAlert.btnText = 'Got it'
			$openAlert.state = true

			// !$openAlert.state ? emailInputRef.focus() : ''

		} else {
			const formData = new FormData();

			formData.set('email', $accessStore.email.value)

			const response = await fetch('/access?/resendEmailVerification', {
				method: 'POST',
				body: formData
			});

			/** @type {import('@sveltejs/kit').ActionResult} */
			const result = deserialize(await response.text());

			// result.type = 'dehjdfh'
			console.log(result)
			console.log(form)

			switch(result.type){
					case "success":
						// await invalidateAll();
						accessKeyIsAuthenticating = false

						$openAlert.type = result.type
						$openAlert.statusCode = result.status
						$openAlert.message = 'Verification sent successfully!'//result.error.message
						$openAlert.trableshoot = 'You can now open your mail inbox to confirm.'
						$openAlert.btnText = 'Sounds great!'
						$openAlert.state = true

					break;
					case "error":
						// alert(`${result.status}: ${result.error.message}`)
						accessKeyIsAuthenticating = false

						$openAlert.type = result.type
						$openAlert.statusCode = result.status
						$openAlert.message = result.error.message ?? 'Oops, Something went wrong'
						$openAlert.trableshoot = 'Internal server error. It appears like you\'re offline'
						$openAlert.btnText = 'Try again'
						$openAlert.state = true
					break;
					case "failure": 
						// alert(`${result.status}: ${result.error.message}`)
						accessKeyIsAuthenticating = false

						$openAlert.type = result.type
						$openAlert.statusCode = result.status
						$openAlert.message = result.data?.error ?? 'Oops, Something went wrong'
						$openAlert.trableshoot = result.data?.trableshoot ?? 'Make sure you\'re not offline and provide accurate information.'
						$openAlert.btnText = 'Try again'
						$openAlert.state = true
					break;

					default: 
						// result.type = 'fallback'
						// alert(`${result.status}: ${result.error.message}`)
						accessKeyIsAuthenticating = false

						$openAlert.type = 'fallback' //result.type
						$openAlert.statusCode = result.status
						$openAlert.message = result.data?.error || 'Oops, Something went wrong' //result.data.error
						$openAlert.trableshoot = 'Make sure you\'re not offline and provide accurate information.'
						$openAlert.btnText = 'Try again'
						$openAlert.state = true
					break;

					}

				// if (result.type === 'success') {
				//     // re-run all `load` functions, following the successful update 
				// 	await invalidateAll();
				// }

				applyAction(result);
			}
		
        
    }

	const submitAccessKey = async ({ form, data, action, cancel }) => {
		data.email = $accessStore.email.value
		data.password = $accessStore.password.value
		data.userAccessKey = $accessStore.userAccessKey.value
		// get formData
		// const { email, password, userAccessKey } = await Object.fromEntries(data)

		console.log(data)
		//cancel()

		return async ({ result, update }) => {
			await update()
			console.log(result)

			switch(result.type){
				case "error": 
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = result.error.message
					$openAlert.trableshoot = 'Internal server error. It appears like you\'re offline'
					$openAlert.btnText = 'Try again'
					$openAlert.state = true
				break;

				case "failure": 
					// alert(`${result.status}: ${result.error.message}`)
					accessKeyIsAuthenticating = false

					$openAlert.type = result.type
					$openAlert.statusCode = result.status
					$openAlert.message = result.data.error
					$openAlert.trableshoot = 'Internal server error. It appears like you\'re offline'
					$openAlert.btnText = 'Try again'
					$openAlert.state = true
				}
		}
	}
	
</script>

<section class="group bg-saftech-white/50 relative h-screen max-h-screen min-h-fit w-screen min-w-full overflow-hidden scrollbar-none lg:max-w-7xl lg:mx-auto">
	
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img class="z-0 absolute {presentRegisterSheet ? '-top-10 lg:-top-52':'-top-32 lg:-top-56'} left-1/2 -translate-x-1/2  scale-150 opacity-90 blur-xl mix-blend-multiply transition-all duration-500 ease-[cubic-bezier(0,1.3,.19,.94)]" loading="lazy" src="{authErrorImage}" alt="Access denied image">
	
	<!-- removed-from-here {!showAccessLoginForm === true ? 'opacity-100 pointer-events-auto cursor-auto' : 'opacity-10 pointer-events-none cursor-not-allowed'} -->
	<div  class="z-20 shadow-2xl shadow-deep-blue/30 absolute left-1/2 -translate-x-1/2 {presentRegisterSheet ? 'top-[5%]':'top-[105%]'} w-[90%] removed-from-here flex flex-col lg:flex-row lg:justify-center lg:items-center h-screen min-h-screen justify-center items-center space-y-1 bg-gradient-to-b from-deep-blue/30 to-transparent backdrop-blur-lg border border-saftech-white/60 border-solid rounded-lg transition-all duration-500 ease-[cubic-bezier(0,1.3,.19,.94)] ">
		
		<div class="z-20 lg:flex lg:flex-col lg:justify-center text-center lg:text-left w-[90%] lg:w-1/2 lg:h-full">	
			<div class=" hidden lg:block relative">
				<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" height="100">
					<path fill="#03A9F4" d="M45,35c0,2.208-1.791,4-4,4H7c-2.209,0-4-1.792-4-4V13c0-2.21,1.791-4,4-4h34c2.209,0,4,1.79,4,4V35z" />
					<path fill="#E3F2FD" d="M19,21c0,2.208-1.791,4-4,4s-4-1.792-4-4c0-2.209,1.791-4,4-4S19,18.791,19,21 M22,30c0,0-1.938-3-7-3c-5.064,0-7,3-7,3v2h14V30z M40,18H25v2h15V18z M40,23H25v2h15V23z M33,28h-8v2h8V28z" />
				</svg> -->
				{#if showingLoginPortal}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="200" height="200">
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKa" x1="23.128" x2="24.915" y1="10.022" y2="40.711" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#33bef0" />
						<stop offset="1" stop-color="#0a85d9" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKa)" d="M42,10H6c-1.105,0-2,0.895-2,2v26c0,1.105,0.895,2,2,2h36c1.105,0,2-0.895,2-2V12C44,10.895,43.105,10,42,10z M28,14h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1C29,13.552,28.552,14,28,14z" />
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKb" x1="28" x2="40" y1="22" y2="22" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#0370c8" />
						<stop offset=".484" stop-color="#036fc5" />
						<stop offset=".775" stop-color="#036abd" />
						<stop offset="1" stop-color="#0362b0" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKb)" d="M28.5,21h11c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-11c-0.276,0-0.5-0.224-0.5-0.5v-1C28,21.224,28.224,21,28.5,21z" />
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKc" x1="28" x2="40" y1="26" y2="26" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#0370c8" />
						<stop offset=".484" stop-color="#036fc5" />
						<stop offset=".775" stop-color="#036abd" />
						<stop offset="1" stop-color="#0362b0" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKc)" d="M28.5,25h11c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-11c-0.276,0-0.5-0.224-0.5-0.5v-1C28,25.224,28.224,25,28.5,25z" />
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKd" x1="28" x2="36" y1="30" y2="30" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#0370c8" />
						<stop offset=".484" stop-color="#036fc5" />
						<stop offset=".775" stop-color="#036abd" />
						<stop offset="1" stop-color="#0362b0" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKd)" d="M28.5,29h7c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-7c-0.276,0-0.5-0.224-0.5-0.5v-1C28,29.224,28.224,29,28.5,29z" />
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKe" x1="16.406" x2="17.15" y1="28.018" y2="35.085" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#0370c8" />
						<stop offset=".484" stop-color="#036fc5" />
						<stop offset=".775" stop-color="#036abd" />
						<stop offset="1" stop-color="#0362b0" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKe)" d="M17,28.286c-4.418,0-8,2.46-8,5.143V34c0,0.552,0.448,1,1,1h14c0.552,0,1-0.448,1-1v-0.571C25,30.746,21.418,28.286,17,28.286z" />
					<path fill="#d6a121" d="M19,29.4c0,0.759-1.132,1.6-2,1.6s-2-0.841-2-1.6c0-1.055,0-2.814,0-2.814h4C19,26.586,19,28.345,19,29.4z" />
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKf" x1="20.94" x2="21.97" y1="23.75" y2="23.75" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#c48f0c" />
						<stop offset=".251" stop-color="#d19b16" />
						<stop offset=".619" stop-color="#dca51f" />
						<stop offset="1" stop-color="#e0a922" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKf)" d="M21.208,22.5h-0.264V25h0.352c0.257,0,0.477-0.195,0.52-0.462l0.172-1.064C22.071,22.964,21.698,22.5,21.208,22.5z" />
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKg" x1="13.072" x2="12.027" y1="23.75" y2="23.75" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#c48f0c" />
						<stop offset=".251" stop-color="#d19b16" />
						<stop offset=".619" stop-color="#dca51f" />
						<stop offset="1" stop-color="#e0a922" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKg)" d="M12.792,22.5h0.264V25h-0.352c-0.257,0-0.477-0.195-0.52-0.462l-0.172-1.064C11.929,22.964,12.302,22.5,12.792,22.5z" />
					<radialGradient id="UWcLkPH_s2sZoDNodiSWKh" cx="63.274" cy="59.032" r="6.112" gradientTransform="translate(-32.586 -23.228) scale(.7837)" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#ffcf54" />
						<stop offset=".261" stop-color="#fdcb4d" />
						<stop offset=".639" stop-color="#f7c13a" />
						<stop offset="1" stop-color="#f0b421" />
					</radialGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKh)" d="M17,17.567c-1.974,0-4,0.3-4,4.567c0,0.342,0,2.612,0,2.977c0,1.523,2.4,3.39,4,3.39s4-1.867,4-3.39c0-0.365,0-2.635,0-2.977C21,17.867,18.974,17.567,17,17.567z" />
					<radialGradient id="UWcLkPH_s2sZoDNodiSWKi" cx="11.209" cy="42.748" r="15.002" gradientTransform="translate(2.84 -21.07) scale(.8816)" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#c26715" />
						<stop offset=".508" stop-color="#b85515" />
						<stop offset="1" stop-color="#ad3f16" />
					</radialGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKi)" d="M17,16c-2.177,0-2.5,0.818-2.5,0.818C13.615,16.949,12,17.499,12,20c0,0.827,0.407,2.89,1,4c0.273-3.273,0.624-5,1.5-5c0.633,0,1.136-1,2.5-1c1.151,0,1.437,1,2.5,1c1.5,0,1.5,4.484,1.5,5c0.644-1.153,1-3.278,1-4C22,17.477,20.105,16,17,16z" />
					<radialGradient id="UWcLkPH_s2sZoDNodiSWKj" cx="14.244" cy="43.958" r="19.272" gradientTransform="matrix(.8431 0 0 .8816 4.07 -21.07)" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#c26715" />
						<stop offset=".508" stop-color="#b85515" />
						<stop offset="1" stop-color="#ad3f16" />
					</radialGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKj)" d="M16,16c-1.996,0-2,2-2,2c-0.024,0.676,0.469,1,3,1c1.528,0,4-0.454,4-3C21,16,19.464,16,16,16z" />
					<linearGradient id="UWcLkPH_s2sZoDNodiSWKk" x1="23.799" x2="24.208" y1="4.96" y2="13.191" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#c3cdd9" />
						<stop offset="1" stop-color="#9fa7b0" />
					</linearGradient>
					<path fill="url(#UWcLkPH_s2sZoDNodiSWKk)" d="M26,13h-4c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v6C27,12.552,26.552,13,26,13z" />
					</svg>
				{:else}
					<svg class="z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="150" height="150">
						<path fill="#424242" d="M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z" />
						<path fill="#FB8C00" d="M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z" />
						<path fill="#C76E00" d="M24 28A3 3 0 1 0 24 34A3 3 0 1 0 24 28Z" />
					</svg>
				{/if}
				<!-- {#if showingLoginPortal}
				{/if} -->


			</div>
			

			<pre class=" hidden font-semibold pointer-events-none">
				{ JSON.stringify($accessStore, null, 2) }
			</pre>
			
			<h2 class=" degub:sr-only text-4xl lg:text-6xl font-bold lg:w-[6ch]">
				<span class=" mb-5 bg-gradient-to-b from-saftech-white to-white text-transparent bg-clip-text font-poppins lg:bg-gradient-to-b lg:from-saftech-black/80 lg:to-black/50 lg:text-transparent lg:bg-clip-text">
					{ showingLoginPortal ? 'Welcome':'Access Key Authentication'} 
				</span>
			</h2>
			<p class=" debug:sr-only mt-5 text-sm md:max-w-md mx-auto lg:mx-0 lg:w-[40ch] font-normal bg-gradient-to-b from-saftech-white/70 to-white/90 lg:from-saftech-black lg:to-black/80 text-transparent bg-clip-text font-poppins">
				{ showingLoginPortal ?
				'If you are on this page that means you\'ve got access rights, good for you! However only verified email can make your key work. so make sure you verified it after access key authentication. '
				:
				'You will need an active email and password to set your access key up. This in the future, allows you to authenticate just by email. All fields are required.'
				}
			</p>

			<form on:submit|preventDefault={handleResendEmailVerification} method="POST" action="?/resendEmailVerification" >
				<input bind:this={emailResend} type="hidden" bind:value={$accessStore.email.value} />
				<button type="submit" class="border-none bg-transparent text-left font-normal text-sm text-normal-blue" >Resend Email Verification</button>
			</form>
		</div>

		{#if showingLoginPortal}
			<form on:submit|preventDefault={handleLogin}  method="post" action="?/login" class="z-20 flex flex-col w-full md:max-w-md h-fit type space-y-5 pt-10 lg:pt-0 px-10 justify-center items-center">


				<InputEmailAccess
				bind:emailInputRef={emailInputRef}
				bind:emailInputValue={$accessStore.email.value}
					error={$accessStore.email.error}
					placeholder="{!$accessStore.email.error && $accessStore.email.value.length > 0 ? 'Email provided' : 'Fill in your email'}"
					guidePlaceholder="johndoe@example.com"
					message={$accessStore.email.message[0]}
					accessKeyIsAuthenticating = {accessKeyIsAuthenticating}
				>
					<path
						slot="icon"
						d="M10 8C6.86 8 4.2795313 10.42 4.0195312 13.5L24 24.289062L43.980469 13.5C43.720469 10.42 41.14 8 38 8L10 8 z M 4 16.890625L4 34C4 37.31 6.69 40 10 40L38 40C41.31 40 44 37.31 44 34L44 16.890625L24.710938 27.320312C24.490938 27.440312 24.25 27.5 24 27.5C23.75 27.5 23.509062 27.440313 23.289062 27.320312L4 16.890625 z"
					/>
				</InputEmailAccess>

				<InputPasswordAccess
				bind:passwordInputValue={$accessStore.password.value}
				error={$accessStore.password.error}
				placeholder="{!$accessStore.password.error && $accessStore.password.value.length > 0 ? 'Password provided' : 'Create a strong password'}"
				guidePlaceholder="Your password"
				message={$accessStore.password.message[0]}
				accessKeyIsAuthenticating = {accessKeyIsAuthenticating}
				>
					<path
						slot="icon"
						d="M24 4C19.599415 4 16 7.599415 16 12L16 16L12.5 16C10.019 16 8 18.019 8 20.5L8 39.5C8 41.981 10.019 44 12.5 44L35.5 44C37.981 44 40 41.981 40 39.5L40 20.5C40 18.019 37.981 16 35.5 16L32 16L32 12C32 7.599415 28.400585 4 24 4 z M 24 7C26.779415 7 29 9.220585 29 12L29 16L19 16L19 12C19 9.220585 21.220585 7 24 7 z M 24 27C25.657 27 27 28.343 27 30C27 31.657 25.657 33 24 33C22.343 33 21 31.657 21 30C21 28.343 22.343 27 24 27 z"
					/>
				</InputPasswordAccess>

				<div class="w-full ">
					<!-- remember to disable button when accessKeyIsAuthenticating state is true -->
					<button on:click={() => { accessKeyIsAuthenticating = true}} type="submit" disabled="{!canSubmitLogin}" aria-disabled="{!canSubmitLogin}" class="z-10 flex justify-center items-center mt-10 bg-gradient-to-r from-dark-blue to-normal-blue backdrop-blur-sm bg-saftech-white px-6 py-5 rounded-lg font-bold text-xs text-saftech-white w-full min-w-full">
						<svg class="fill-current w-5 h-5{ accessKeyIsAuthenticating	 ? 'opacity-100 animate-pulse scale-100 mr-3':'mr-0 opacity-0 scale-0 animate-none'} transition-all duration-500 ease-[cubic-bezier(0,1.3,.19,.94)] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
							<path d="M23.972656 3.9726562 A 2.0002 2.0002 0 0 0 22.001953 6L22 11 A 2.0002 2.0002 0 1 0 26 11L26.001953 6 A 2.0002 2.0002 0 0 0 23.972656 3.9726562 z M 14.910156 6.3867188 A 2.0002 2.0002 0 0 0 13.269531 9.4101562L15.767578 13.740234 A 2.0002 2.0002 0 1 0 19.232422 11.742188L16.732422 7.4101562 A 2.0002 2.0002 0 0 0 14.910156 6.3867188 z M 33.033203 6.3886719 A 2.0002 2.0002 0 0 0 31.269531 7.4121094L28.767578 11.742188 A 2.0003215 2.0003215 0 1 0 32.232422 13.742188L34.732422 9.4140625 A 2.0002 2.0002 0 0 0 33.033203 6.3886719 z M 8.4648438 12.984375 A 2.0002 2.0002 0 0 0 7.4121094 16.728516L11.740234 19.230469 A 2.0002 2.0002 0 1 0 13.742188 15.767578L9.4121094 13.265625 A 2.0002 2.0002 0 0 0 8.4648438 12.984375 z M 39.677734 12.990234 A 2.0002 2.0002 0 0 0 38.587891 13.271484L34.257812 15.769531 A 2.0002 2.0002 0 1 0 36.257812 19.232422L40.587891 16.736328 A 2.0002 2.0002 0 0 0 39.677734 12.990234 z M 5.9980469 21.996094 A 2.0002 2.0002 0 1 0 5.9980469 25.996094L10.998047 25.998047 A 2.0002 2.0002 0 1 0 10.998047 21.998047L5.9980469 21.996094 z M 36.998047 22.001953 A 2.0002 2.0002 0 1 0 36.998047 26.001953L41.998047 26.003906 A 2.0002 2.0002 0 1 0 41.998047 22.003906L36.998047 22.001953 z M 12.828125 28.486328 A 2.0002 2.0002 0 0 0 11.740234 28.765625L7.4082031 31.263672 A 2.0003215 2.0003215 0 1 0 9.4082031 34.728516L13.738281 32.232422 A 2.0002 2.0002 0 0 0 12.828125 28.486328 z M 35.308594 28.488281 A 2.0002 2.0002 0 0 0 34.255859 32.232422L38.583984 34.734375 A 2.0002 2.0002 0 1 0 40.585938 31.271484L36.255859 28.769531 A 2.0002 2.0002 0 0 0 35.308594 28.488281 z M 17.529297 33.232422 A 2.0002 2.0002 0 0 0 15.765625 34.257812L13.263672 38.585938 A 2.0008098 2.0008098 0 1 0 16.728516 40.587891L19.228516 36.257812 A 2.0002 2.0002 0 0 0 17.529297 33.232422 z M 30.40625 33.236328 A 2.0002 2.0002 0 0 0 28.765625 36.257812L31.263672 40.589844 A 2.0003215 2.0003215 0 1 0 34.728516 38.589844L32.228516 34.259766 A 2.0002 2.0002 0 0 0 30.40625 33.236328 z M 23.966797 34.972656 A 2.0002 2.0002 0 0 0 21.996094 37L21.994141 42 A 2.0002 2.0002 0 1 0 25.994141 42L25.996094 37 A 2.0002 2.0002 0 0 0 23.966797 34.972656 z" />
						</svg>
						{ accessKeyIsAuthenticating ? 'Opening now...':'ENTER THE WEBSITE'} </button>
				</div>

			</form>

		{:else }
			<form on:submit|preventDefault={handleSubmit} action="?/register" method="POST"
				class="z-20 flex flex-col w-full md:max-w-md h-fit type space-y-5 pt-10 lg:pt-0 px-10 justify-center items-center">


				<InputEmailAccess
				bind:emailInputValue={$accessStore.email.value}
					error={$accessStore.email.error}
					placeholder="{!$accessStore.email.error && $accessStore.email.value.length > 0 ? 'Email provided' : 'Fill in your email'}"
					guidePlaceholder="johndoe@example.com"
					message={$accessStore.email.message[0]}
					accessKeyIsAuthenticating = {accessKeyIsAuthenticating}
				>
					<path
						slot="icon"
						d="M10 8C6.86 8 4.2795313 10.42 4.0195312 13.5L24 24.289062L43.980469 13.5C43.720469 10.42 41.14 8 38 8L10 8 z M 4 16.890625L4 34C4 37.31 6.69 40 10 40L38 40C41.31 40 44 37.31 44 34L44 16.890625L24.710938 27.320312C24.490938 27.440312 24.25 27.5 24 27.5C23.75 27.5 23.509062 27.440313 23.289062 27.320312L4 16.890625 z"
					/>
				</InputEmailAccess>

				<InputPasswordAccess
				bind:passwordInputValue={$accessStore.password.value}
				error={$accessStore.password.error}
				placeholder="{!$accessStore.password.error && $accessStore.password.value.length > 0 ? 'Password provided' : 'Create a strong password'}"
				guidePlaceholder="Your password"
				message={$accessStore.password.message[0]}
				accessKeyIsAuthenticating = {accessKeyIsAuthenticating}
				>
					<path
						slot="icon"
						d="M24 4C19.599415 4 16 7.599415 16 12L16 16L12.5 16C10.019 16 8 18.019 8 20.5L8 39.5C8 41.981 10.019 44 12.5 44L35.5 44C37.981 44 40 41.981 40 39.5L40 20.5C40 18.019 37.981 16 35.5 16L32 16L32 12C32 7.599415 28.400585 4 24 4 z M 24 7C26.779415 7 29 9.220585 29 12L29 16L19 16L19 12C19 9.220585 21.220585 7 24 7 z M 24 27C25.657 27 27 28.343 27 30C27 31.657 25.657 33 24 33C22.343 33 21 31.657 21 30C21 28.343 22.343 27 24 27 z"
					/>
				</InputPasswordAccess>

				<InputAccess
				bind:accessInputValue={$accessStore.userAccessKey.value}
				error={$accessStore.userAccessKey.error}
				placeholder="{!$accessStore.userAccessKey.error && $accessStore.userAccessKey.value.length > 0 ? 'Access Key provided' : 'What is your access key?'}"
				guidePlaceholder="ACCESS KEY"
				message={$accessStore.userAccessKey.message[0] === 'Invalid uuid' ? 'Invalid Access Key' : $accessStore.userAccessKey.message[0]}
				accessKeyIsAuthenticating = {accessKeyIsAuthenticating}
				>
					<path
						slot="icon"
						d="M13 6C7.477 6 3 10.477 3 16C3 19.699792 5.0132932 22.922738 8 24.652344L8 39.5C8 39.897 8.1584531 40.278547 8.4394531 40.560547L11.439453 43.560547C11.732453 43.853547 12.116 44 12.5 44C12.884 44 13.267547 43.853547 13.560547 43.560547L17.560547 39.560547C18.146547 38.974547 18.146547 38.025453 17.560547 37.439453L15.621094 35.5L17.560547 33.560547C18.146547 32.974547 18.146547 32.025453 17.560547 31.439453L15.621094 29.5L17.560547 27.560547C17.842547 27.278547 18 26.897 18 26.5L18 24.652344C20.986707 22.922738 23 19.699792 23 16C23 10.477 18.523 6 13 6 z M 13 12C14.105 12 15 12.895 15 14C15 15.105 14.105 16 13 16C11.895 16 11 15.105 11 14C11 12.895 11.895 12 13 12 z M 25.650391 13C25.880391 13.96 26 14.97 26 16C26 19.38 24.659375 22.600234 22.359375 24.990234C22.409375 25.000234 22.45 25 22.5 25L41.5 25C43.43 25 45 23.43 45 21.5L45 16.5C45 14.57 43.43 13 41.5 13L25.650391 13 z M 20.740234 28C20.550234 28.55 20.249609 29.06 19.849609 29.5C21.379609 31.2 21.379609 33.8 19.849609 35.5C20.969609 36.75 21.270234 38.49 20.740234 40L41.5 40C43.43 40 45 38.43 45 36.5L45 31.5C45 29.57 43.43 28 41.5 28L20.740234 28 z"
					/>
				</InputAccess>

				<!-- ######################################################################### -->





				<!-- <div class="relative max-h-fit transition-all min-w-full duration-500 ease-out">
					<input
					on:keyup={() => { $accessStore = $accessStore}}
					type="text"
					name="userAccessKey"
						disabled={accessKeyIsAuthenticating}
						aria-disabled="{accessKeyIsAuthenticating}"
						bind:value={$accessStore.userAccessKey.value}
						
						class="peer m-0 block h-[60px] w-full rounded-lg bg-saftech-white/80 backdrop-blur-sm focus:ring-0 px-4 pr-16 py-4 text-base font-bold leading-tight text-saftech-black/70 placeholder:text-saftech-black/80 placeholder:font-bold focus:placeholder:opacity-10 border-none focus:border-none pb-[0.600rem] focus:pb-[0.625rem] pt-[1.300rem] focus:pt-[1.625rem] focus:text-saftech-black/70 {$accessStore.userAccessKey.error
							? 'focus:outline-red-600'
							: 'focus:outline-normal-blue'}  focus:outline-4 focus:border-8 focus:outline-offset-3 outline-none peer-focus:text-normal-blue transition-all duration-500 ease-out"
						id="access"
						placeholder={$accessStore.userAccessKey.error ? !$accessStore.userAccessKey.error && $accessStore.userAccessKey.value.length > 0 ? 'Access Key provided' : 'What is your access key?' : 'ACCESS KEY'}
					/>
					<label
						for="access"
						class="pointer-events-none flex items-center absolute left-0 top-0 origin-[0_0] border-none px-4 py-4 text-saftech-black/60 transition-all duration-200 ease-out -translate-y-2 text-xs peer-focus:-translate-y-2.5 peer-focus:translate-x-[0.15rem] scale-[1] peer-focus:scale-[0.9] {$accessStore.userAccessKey.error
							? 'peer-focus:text-red-600 text-red-600'
							: 'peer-focus:text-normal-blue'}  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] transition-all duration-500 ease-out"
						><span
							class="{$accessStore.userAccessKey.error
								? 'text-red-600 before:scale-100 opacity-100 before:animate-pulse before:mt-0.5 before:mr-2 before:w-3 before:h-3 '
								: ' before:scale-0 before:opacity-0 -ml-3  before:w-0 before:h-0 '} before:p-1.5 flex before:flex before:shrink-0 before:bg-current before:items-center before:rounded-full transition-all duration-500 ease-in-out before:transition-all before:duration-500 before:ease-out"
							>{$accessStore.userAccessKey.error ? $accessStore.userAccessKey.message[0] === 'Invalid uuid' ? 'Invalid Access Key' : $accessStore.userAccessKey.message[0] : !$accessStore.userAccessKey.error && $accessStore.userAccessKey.value.length > 0 ? 'Access Key provided' : 'What is your access key?'}</span
						></label
					>
					<svg
						class="absolute top-1/2 -translate-y-1/2 left-[85%] lg:left-[87%] md:left-[87%] fill-saftech-black/10 scale-90 lg:scale-100 {$accessStore.userAccessKey.error
							? 'peer-focus:fill-red-600 fill-red-600'
							: 'peer-focus:fill-normal-blue'}  transition-all duration-500 ease-out"
						viewBox="0 0 48 48"
						width="30"
						height="30"
					>
						<path
						d="M13 6C7.477 6 3 10.477 3 16C3 19.699792 5.0132932 22.922738 8 24.652344L8 39.5C8 39.897 8.1584531 40.278547 8.4394531 40.560547L11.439453 43.560547C11.732453 43.853547 12.116 44 12.5 44C12.884 44 13.267547 43.853547 13.560547 43.560547L17.560547 39.560547C18.146547 38.974547 18.146547 38.025453 17.560547 37.439453L15.621094 35.5L17.560547 33.560547C18.146547 32.974547 18.146547 32.025453 17.560547 31.439453L15.621094 29.5L17.560547 27.560547C17.842547 27.278547 18 26.897 18 26.5L18 24.652344C20.986707 22.922738 23 19.699792 23 16C23 10.477 18.523 6 13 6 z M 13 12C14.105 12 15 12.895 15 14C15 15.105 14.105 16 13 16C11.895 16 11 15.105 11 14C11 12.895 11.895 12 13 12 z M 25.650391 13C25.880391 13.96 26 14.97 26 16C26 19.38 24.659375 22.600234 22.359375 24.990234C22.409375 25.000234 22.45 25 22.5 25L41.5 25C43.43 25 45 23.43 45 21.5L45 16.5C45 14.57 43.43 13 41.5 13L25.650391 13 z M 20.740234 28C20.550234 28.55 20.249609 29.06 19.849609 29.5C21.379609 31.2 21.379609 33.8 19.849609 35.5C20.969609 36.75 21.270234 38.49 20.740234 40L41.5 40C43.43 40 45 38.43 45 36.5L45 31.5C45 29.57 43.43 28 41.5 28L20.740234 28 z"
					/>
					</svg>
				</div> -->





				<!-- ######################################################################### -->

				<div class="w-full ">
					<!-- remember to disable button when accessKeyIsAuthenticating state is true -->
					<button on:click={() => { 
						// new FormData(regiserForm)
						
						accessKeyIsAuthenticating = true

						// disabled="{!canSubmit}" aria-disabled="{!canSubmit}"
						}} type="submit" disabled="{!canSubmit}" aria-disabled="{!canSubmit}" class="z-10 flex justify-center items-center mt-10 bg-gradient-to-r from-dark-blue to-normal-blue backdrop-blur-sm bg-saftech-white px-6 py-5 rounded-lg font-bold text-xs text-saftech-white w-full min-w-full">
						<svg class="fill-current w-5 h-5{ accessKeyIsAuthenticating	 ? 'opacity-100 animate-pulse scale-100 mr-3':'mr-0 opacity-0 scale-0 animate-none'} transition-all duration-500 ease-[cubic-bezier(0,1.3,.19,.94)] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
							<path d="M23.972656 3.9726562 A 2.0002 2.0002 0 0 0 22.001953 6L22 11 A 2.0002 2.0002 0 1 0 26 11L26.001953 6 A 2.0002 2.0002 0 0 0 23.972656 3.9726562 z M 14.910156 6.3867188 A 2.0002 2.0002 0 0 0 13.269531 9.4101562L15.767578 13.740234 A 2.0002 2.0002 0 1 0 19.232422 11.742188L16.732422 7.4101562 A 2.0002 2.0002 0 0 0 14.910156 6.3867188 z M 33.033203 6.3886719 A 2.0002 2.0002 0 0 0 31.269531 7.4121094L28.767578 11.742188 A 2.0003215 2.0003215 0 1 0 32.232422 13.742188L34.732422 9.4140625 A 2.0002 2.0002 0 0 0 33.033203 6.3886719 z M 8.4648438 12.984375 A 2.0002 2.0002 0 0 0 7.4121094 16.728516L11.740234 19.230469 A 2.0002 2.0002 0 1 0 13.742188 15.767578L9.4121094 13.265625 A 2.0002 2.0002 0 0 0 8.4648438 12.984375 z M 39.677734 12.990234 A 2.0002 2.0002 0 0 0 38.587891 13.271484L34.257812 15.769531 A 2.0002 2.0002 0 1 0 36.257812 19.232422L40.587891 16.736328 A 2.0002 2.0002 0 0 0 39.677734 12.990234 z M 5.9980469 21.996094 A 2.0002 2.0002 0 1 0 5.9980469 25.996094L10.998047 25.998047 A 2.0002 2.0002 0 1 0 10.998047 21.998047L5.9980469 21.996094 z M 36.998047 22.001953 A 2.0002 2.0002 0 1 0 36.998047 26.001953L41.998047 26.003906 A 2.0002 2.0002 0 1 0 41.998047 22.003906L36.998047 22.001953 z M 12.828125 28.486328 A 2.0002 2.0002 0 0 0 11.740234 28.765625L7.4082031 31.263672 A 2.0003215 2.0003215 0 1 0 9.4082031 34.728516L13.738281 32.232422 A 2.0002 2.0002 0 0 0 12.828125 28.486328 z M 35.308594 28.488281 A 2.0002 2.0002 0 0 0 34.255859 32.232422L38.583984 34.734375 A 2.0002 2.0002 0 1 0 40.585938 31.271484L36.255859 28.769531 A 2.0002 2.0002 0 0 0 35.308594 28.488281 z M 17.529297 33.232422 A 2.0002 2.0002 0 0 0 15.765625 34.257812L13.263672 38.585938 A 2.0008098 2.0008098 0 1 0 16.728516 40.587891L19.228516 36.257812 A 2.0002 2.0002 0 0 0 17.529297 33.232422 z M 30.40625 33.236328 A 2.0002 2.0002 0 0 0 28.765625 36.257812L31.263672 40.589844 A 2.0003215 2.0003215 0 1 0 34.728516 38.589844L32.228516 34.259766 A 2.0002 2.0002 0 0 0 30.40625 33.236328 z M 23.966797 34.972656 A 2.0002 2.0002 0 0 0 21.996094 37L21.994141 42 A 2.0002 2.0002 0 1 0 25.994141 42L25.996094 37 A 2.0002 2.0002 0 0 0 23.966797 34.972656 z" />
						</svg>
						{ accessKeyIsAuthenticating ? 'Authenticating...':'AUTHENTICATE KEY'} </button>
				</div>



				<!-- <div>		
					<label for=""> Email </label>
					<input class="rounded-sm bg-saftech-white border-none  transition-all duration-500 ease-out" type="email" name="email" />
				</div>
				<div class="relative">		
					<label for=""> Password </label>
					<input class="rounded-sm bg-saftech-white border-none  transition-all duration-500 ease-out" type="{type}" name="password" />
					<button on:click|preventDefault={ () => { down = !down }} class=" {down ? 'bg-normal-blue scale-90':'bg-saftech-gray scale-70'} text-saftech-white font-bold text-sm absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-sm transition-all duration-500 ease-out"></button>
				</div>
				<div >		
					<label for=""> Access Key </label>
					<input class="rounded-sm bg-saftech-white border-none  transition-all duration-500 ease-out" type="text" name="userAccessKey" />
				</div>
				<div>
					<button type="submit" class="btn btn-primary">Validate Key</button>
					{#if accessKeyError}
						<p class="text-red-600">{accessKeyError}</p>
					{/if}
				</div> -->
			</form>
		{/if}


		<div class="z-0 opacity-0 hidden lg:block lg:opacity-100 w-1/2 h-[102%] absolute -inset-1 rounded-lg bg-gradient-to-r from-saftech-white via-saftech-white to-transparent">
				<svg class="z-0 absolute top-5 left-5 opacity-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="480" height="480">
					<path fill="#546E7A" d="M33,10.5c0.5-0.7,1.4-0.9,2.1-0.4c3.5,2.3,6.8,7.8,7.4,13.4c0.1,0.8-0.5,1.6-1.3,1.7c-0.1,0-0.1,0-0.2,0c-0.8,0-1.4-0.6-1.5-1.3c-0.5-4.6-3.4-9.4-6-11.2C32.7,12.1,32.5,11.2,33,10.5z M19.1,9.6c3.1-1,7.4-0.8,10.7,0.6c0.2,0.1,0.4,0.1,0.6,0.1c0.6,0,1.1-0.3,1.4-0.9c0.3-0.8,0-1.6-0.8-2c-4-1.7-9-2-12.9-0.7c-0.8,0.3-1.2,1.1-0.9,1.9C17.4,9.5,18.3,9.9,19.1,9.6z M7.7,17.8C8,17.9,8.2,18,8.5,18c0.5,0,1-0.3,1.3-0.7c1.5-2.4,3.6-4.2,5.6-5.5c0.7-0.5,0.9-1.4,0.4-2.1c-0.5-0.7-1.4-0.9-2.1-0.4c-2.4,1.6-4.8,3.6-6.5,6.5C6.8,16.4,7,17.4,7.7,17.8z M24.7,27.1c0.2-0.8-0.2-1.6-1-1.9c-0.8-0.2-1.6,0.2-1.9,1c-2.1,6.9-6.2,9.3-9.5,10.8l-0.4,0.2c-0.8,0.3-1.1,1.2-0.7,2c0.3,0.6,0.8,0.9,1.4,0.9c0.2,0,0.4,0,0.6-0.1l0.4-0.2C17.1,38.1,22.2,35.3,24.7,27.1z M18.9,29.1c0.5-0.7,0.3-1.6-0.3-2.1c-0.7-0.5-1.6-0.4-2.1,0.3c-2.1,2.9-5.9,4.8-8.2,4.8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5C11.4,35.1,16.2,32.8,18.9,29.1z M23.2,19.8c-3.2,0-4.3,2.6-5.1,4c-0.4,0.7-0.1,1.6,0.7,2c0.7,0.4,1.6,0.1,2-0.7c0.9-1.7,1.2-2.4,2.4-2.4c1.6,0,2.2,1.6,2.5,2.3c0.2,0.6,0.8,1,1.4,1c0.2,0,0.3,0,0.5-0.1c0.8-0.3,1.2-1.1,0.9-1.9C27.6,21.4,25.6,19.8,23.2,19.8z M27.4,27.5c-0.8-0.1-1.6,0.5-1.7,1.3c-1.1,7.7-6.7,10.2-7,10.4c-0.8,0.3-1.1,1.2-0.8,2c0.2,0.6,0.8,0.9,1.4,0.9c0.2,0,0.4,0,0.6-0.1c0.3-0.1,7.4-3.2,8.8-12.7C28.7,28.4,28.2,27.6,27.4,27.5z M17.6,21.8c0.3-0.8-0.1-1.6-0.9-1.9c-0.8-0.3-1.6,0.1-1.9,0.9c-0.3,1-2.3,6.2-7.2,6.2C6.7,27,6,27.7,6,28.5S6.7,30,7.5,30C12.9,30,16.2,25.6,17.6,21.8z M25,15.1c-3.3-0.3-5.4,0.9-6.6,1.9c-0.7,0.5-0.8,1.5-0.3,2.1c0.3,0.4,0.7,0.6,1.2,0.6c0.3,0,0.6-0.1,0.9-0.3c1-0.7,2.2-1.5,4.5-1.3c0.8,0.1,1.6-0.5,1.6-1.4C26.4,15.9,25.8,15.2,25,15.1z M31.7,32c0,0,0.1,0,0.1,0c0.8,0,1.4-0.6,1.5-1.4c0.2-2.3,0.5-10-3.7-13.6c-0.6-0.5-1.6-0.5-2.1,0.2c-0.5,0.6-0.5,1.6,0.2,2.1c2.4,2.1,2.9,7.2,2.6,11C30.3,31.2,30.9,31.9,31.7,32z M30.9,34.1c-0.8-0.2-1.6,0.3-1.8,1.1c-0.8,3.1-2.5,4-2.6,4.1c-0.7,0.4-1,1.3-0.6,2c0.3,0.5,0.8,0.8,1.3,0.8c0.2,0,0.5-0.1,0.7-0.2c0.1-0.1,2.9-1.5,4.1-5.9C32.2,35.1,31.7,34.3,30.9,34.1z M7.4,25c0.1,0,0.2,0,0.3,0c1.8,0,3.7-1,4.3-2.3c0.3-0.8,0-1.7-0.7-2c-0.8-0.3-1.6,0-2,0.7c-0.2,0.2-1,0.7-1.7,0.6c-0.8-0.1-1.5,0.6-1.6,1.4C6,24.2,6.6,24.9,7.4,25z M19.7,11.1c-3.9,1.3-6.5,4.1-7.9,6.3c-0.5,0.7-0.3,1.6,0.4,2.1c0.3,0.2,0.6,0.3,0.8,0.3c0.5,0,1-0.2,1.2-0.7c1.2-1.8,3.3-4.1,6.4-5.1c0.8-0.3,1.2-1.1,0.9-1.9S20.5,10.8,19.7,11.1z M34.8,16.2c-2.4-3.3-6-5-10.6-5.3c-0.8,0-1.5,0.6-1.6,1.4c0,0.8,0.6,1.5,1.4,1.6c3.7,0.2,6.5,1.6,8.4,4.1c3.6,4.8,3,12.7,2.1,16.2c0,0,0,0,0,0c-0.2,0.8-0.9,3.2-2.3,5.6c-0.4,0.7-0.2,1.6,0.5,2.1C33,42,33.2,42,33.5,42c0.5,0,1-0.3,1.3-0.7c2-3.3,2.7-6.6,2.7-6.7c0,0,0-0.1,0-0.1C38.5,30.1,39,21.8,34.8,16.2z M41.5,27C41.5,27,41.5,27,41.5,27c-0.8,0-1.5,0.6-1.5,1.5c0,0.1-0.1,5-1.4,8.4c-0.3,0.8,0.1,1.6,0.9,1.9c0.2,0.1,0.4,0.1,0.5,0.1c0.6,0,1.2-0.4,1.4-1c1.5-3.9,1.6-9.2,1.6-9.4C43,27.7,42.3,27.1,41.5,27z" />
				</svg>
		</div>

		<h2 class="hidden absolute top-full left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:top-[86%] lg:left-16 lg:flex flex-col justify-center scale-75 opacity-30">
			<span class="text-xs">System protection by</span>
			<span><span class="font-bold">DHispace<sup class="">&trade;</sup></span><span class="font-light ml-2"> Labs</span></span>
		</h2>
	</div>


	<!-- removed-from-here {!showAccessLoginForm === true ? 'opacity-100 pointer-events-auto cursor-auto' : 'opacity-10 pointer-events-none cursor-not-allowed'} -->
	<div on:mousedown={() => { presentRegisterSheet = false }} class=" removed-from-here flex flex-col w-full h-screen min-h-screen justify-center items-center space-y-1 lg:max-w-7xl lg:mx-auto">
		
		<div
			class="flex flex-col lg:flex-row w-[80%] h-fit py-5 justify-center items-center space-y-3">
			<section class=" ">
				<div class=" flex justify-center md:max-w-md lg:justify-start items-center lg:max-w-xl">		
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img class="pointer-events-none lg:z-0 lg:scale-[1.4] mix-blend-multiply" loading="lazy" src="{authErrorImage}" alt="Access denied image">
				</div>
			</section>

			<section class="flex flex-col items-center justify-center lg:justify-start lg:items-start lg:w-fit lg:ml-10 ">
				<div class=" text-center lg:text-left font-poppins lg:w-full">		
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold">
						<span class="bg-gradient-to-b from-dark-blue to-normal-blue text-transparent bg-clip-text">Restricted Access</span>
						<span class="block font-normal md:font-semibold lg:font-semibold lg:mx-0 w-[30ch] text-base md:text-lg lg:text-lg leading-tight pb-5 pt-1 bg-gradient-to-r from-purple-950 to-purple-900 text-transparent bg-clip-text opacity-90">Failure to Comply with Terms and Conditions</span></h2>
				</div>
				<div class="text-center lg:text-left lg:max-w-[50ch] font-poppins">		
					<p class="max-w-sm md:max-w-md  text-xs md:text-sm lg:text-sm font-normal bg-gradient-to-r from-purple-950 to-purple-900 text-transparent bg-clip-text">
						This website you're trying to access has now restricted access. and it is nolonger publically available. You will need an access key to enter the website.<br/><br/>
						You have been denied access to this website due to non-compliance with the agreed terms and conditions.
						Please review the terms and make any necessary adjustments to regain access. Thank you for your cooperation.
					</p>
				</div>

				<div>
					<button on:click={() => { presentRegisterSheet = true }} type="submit" class="font-poppins mt-10 bg-gradient-to-r from-dark-blue to-normal-blue bg-saftech-white px-6 py-3 rounded-lg font-bold text-xs text-saftech-white">{ showingLoginPortal ? 'CONTINUE HERE':'ENTER ACCESS KEY'}</button>
				</div>
			</section>
			


		</div>
	</div>
</section>

