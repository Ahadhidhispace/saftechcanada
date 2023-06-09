<script>
	import { Container } from "postcss"

    // @ts-ignore
	import heroBackground from '$lib/assets/images/Hero section bg.jpeg'

	import slideOne from '$lib/assets/images/1_team_working.jpg'
	import slideTwo from '$lib/assets/images/2_saftech_office.jpg'
	import slideThree from '$lib/assets/images/3_safari_family.jpg'
	import slideFour from '$lib/assets/images/4_singapore_of_africa.jpg'
	import slideFive from '$lib/assets/images/5_shema_student_graduation.jpg'
	import { onMount } from "svelte"

    import { fade, slide, scale } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

    let showHeroCarousel = false
    let useNavigateSliderWithNamedButtons = true

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



</script>

<section class="relative overflow-hidden min-w-full bg-saftech-white mt-[70px]">

    <div style="background-image: url('{heroBackground}')" class="w-full h-[450px] bg-center bg-no-repeat bg-cover">
        <h1 class="flex flex-col justify-center items-start space-y-5 h-full font-bold text-6xl mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-w-full">
            <span class="text-transparent bg-gradient-to-r from-deep-blue to-dark-blue bg-clip-text -mt-10" >Outsource your BPO</span>
            <span class="flex justify-center items-stretch">
                <span class="text-7xl font-bold text-dark-blue border-4 p-3 px-6 border-solid border-normal-blue">To</span>
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

<section class="w-full h-fit overflow-hidden bg-black pb-10">
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
            }} id="{ `feature${index}` }" title="{feature.text}" style="background-image: url('{feature.image}');" class="relative flex justify-center overflow-hidden shadow-lg bg-center bg-cover bg-no-repeat items-center max-h-400px[] min-h-[400px] py-4 rounded-xl text-2xl { `feature${index}` === selectedFeatureId ? ' min-w-[700px] bg-lime-600 text-saftech-white mx-7 opacity-100':'opacity-70 mx-2 max-w-[300px] min-w-[300px] bg-white/50 text-saftech-black' } snap-center snap-mandatory origin-center transition-all duration-500 ease-out ">
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

