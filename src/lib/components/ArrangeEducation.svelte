<script>
    import { certificates } from '../../../certificationStore'

    let activeCertificate
	let certificateID

	onMount(() => {
		activeCertificateID = '805e7979-f998-4df6-849f-136fe90322e5'
		setActiveCertificate(activeCertificateID)
	})

	function setActiveCertificate(id) {
		// let certificateIDs = Object.keys($certificates)
		// let randomId = Math.round(Math.random() * certificateIDs.length)
		// console.log(randomId)

		activeCertificateID = id
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
</script>						
                                
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
            bind:inputValue={degreeInputValue}
            error={degree.error}
            placeholder="Degree"
            message={degree.message}
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
            .certDesriptionInputValue}
        error={$certificates[activeCertificateID].description
            .error}
        placeholder="Company Name"
        guidePlaceholder="Saftech Canada"
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
        <!-- {collegeInputValue} -->


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
    </div>
    {/if}
    </div>

    {#if useFileUploads}
        <InputFileUploadDocument bind:bindFile={certificate} docName="certificate" />
    {/if}
</section>