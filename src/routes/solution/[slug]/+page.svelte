<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data;

	import TestimonialCard from '$lib/components/TestimonialCard.svelte';

	import PageHero from '$lib/components/PageHero.svelte';
	import heroCoding from '$lib/assets/images/page_hero_coding.jpg';

	// import team images
	import adaCute from '$lib/assets/images/team_ada_cute.jpg';
	import evaCute from '$lib/assets/images/team_eva_cute.jpg';
	import eyeGrace from '$lib/assets/images/team_eye_grace.jpg';
	import johnDoe from '$lib/assets/images/team_john_doe.jpg';
	import mrWilson from '$lib/assets/images/team_mr_wilson.jpg';
	import otileBrown from '$lib/assets/images/team_otile_brown.jpg';

	import tickIcon from '$lib/assets/icons/icons8_tiktok_verified_account.svg';

	let slug = '';
	$: slug = $page.params.slug.replace('-', ' ');

	let review = {
		featured: true,
		witness: 'Grace Makala',
		photo: eyeGrace,
		proffesion: 'Entrepreneur',
		organization: 'Afromark. Co',
		detail:
			'Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the Over 25 years working in IT services developing software and mobile apps for clients all over the world. From its dieval origins to the'
	};
</script>

<PageHero
	heading={slug}
	sub="This page helps you to seach for the Job by selecting the Job title, location and working type."
	background={heroCoding}
>
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
</PageHero>

<!-- Testimonials section -->
<section
	class="flex justify-between items-center w-full h-fit bg-saftech-white py-16 mx-auto max-w-full px-2 sm:px-6 lg:px-8"
>
	<div
		class="w-full h-fit min-h-full flex flex-col justify-center items-start rounded-md px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-3 flex-col w-full h-auto py-100">
			<h4 class="text-sm font-bold text-saftech-black w-full -mt-4 mb-4">CATEGORY</h4>
			<span class=" block text-4xl font-bold w-full lg:w-3/4 text-saftech-black">
				From enterprise technical support to critical case management, we are here to help</span
			>
			<span class=" block text-sm lg:text-base w-3/4 text-saftech-black">
				Gorgeous people we interacted with say this... Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Voluptatibus magni cum iure minus aut fugiat omnis iste sit reprehenderit
				accusantium quisquam alias repellendus eaque dolorem facere quos architecto, sapiente velit.
			</span>

			<!-- <button type="button" class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100">
          <span class="sr-only">More testimonials here</span>
          More testimonials here
          <span class="">
            <svg class=" fill-dark-blue" width="15" height="15" viewBox="0 0 42 42"><path d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z" transform="translate(0 0)"/></svg>

          </span>
        </button> -->
		</div>

		<div class="flex justify-normal items-center space-x-48">
			<TestimonialCard
				witness={review.witness}
				photo={review.photo}
				proffesion={review.proffesion}
				organization={review.organization}
				detail={review.detail}
			/>
		</div>
	</div>

	<div class="bg-saftech-gray/10 w-2/5 text-saftech-black rounded-lg lg:max-w-md p-10 self-stretch">
		<h2 class="font-bold text-4xl mb-5">Benefits</h2>

		<div class="block pl-8 w-full h-full">
			<ul class="flex flex-col space-y-5">
				<li class="relative before:absolute before:-left-8 before:top-1 before:content-ticky">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit
					obcaecati incidunt accusamus nam.
				</li>
				<li class="relative before:absolute before:-left-8 before:top-1 before:content-ticky">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit
					obcaecati incidunt accusamus nam.
				</li>
				<li class="relative before:absolute before:-left-8 before:top-1 before:content-ticky">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit
					obcaecati incidunt accusamus nam.
				</li>
				<li class="relative before:absolute before:-left-8 before:top-1 before:content-ticky">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore consequuntur sit
					obcaecati incidunt accusamus nam.
				</li>
			</ul>
		</div>
	</div>
</section>
<!-- The end of Testimonials section -->
