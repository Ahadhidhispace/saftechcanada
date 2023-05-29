<script>
	import { page } from '$app/stores';
	import PageHero from '$lib/components/PageHero.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';

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

	// import team images
	import adaCute from '$lib/assets/images/team_ada_cute.jpg';
	import evaCute from '$lib/assets/images/team_eva_cute.jpg';
	import eyeGrace from '$lib/assets/images/team_eye_grace.jpg';
	import johnDoe from '$lib/assets/images/team_john_doe.jpg';
	import mrWilson from '$lib/assets/images/team_mr_wilson.jpg';
	import otileBrown from '$lib/assets/images/team_otile_brown.jpg';

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
</script>

<PageHero
	heading="Meet Our Incredible Leadership"
	sub="A Team of Experienced and Passionate Leaders."
	background={heroStaff}
>
	<!-- <button type="button" class=" group opacity-90 hover:opacity-100 flex justify-between items-center space-x-3 rounded-md hover:bg-dark-blue bg-saftech-white py-2 px-3 text-sm text-bold hover:text-saftech-white text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all ease-in-out">
      <span class="sr-only">Read this article</span>
        READ FULL ARTICLE
      <span class="">
      <svg class=" fill-dark-blue  group-hover:fill-saftech-white" width="15" height="15" viewBox="0 0 42 42"><path d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z" transform="translate(0 0)"/></svg>

      </span>
  </button> -->
</PageHero>

<!-- Team section -->
<section class="w-full h-fit bg-saftech-white py-16">
	<div
		class="w-full h-full flex flex-col justify-center items-start rounded-md bg-saftech-gray/0 py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto py-100">
			<h4 class=" opacity-0 text-sm font-bold text-saftech-black w-full -mt-4 mb-4">
				OUR LEADERSHIP
			</h4>
			<span class=" block text-4xl font-bold lg:w-2/5 text-saftech-black">
				We are always working hard and together to make your dream real.</span
			>
			<span class=" block text-sm lg:text-base w-full text-saftech-black">
				We are always working together to make your dream real.
			</span>
			{#if $page.url.pathname != '/leadership'}
				<button
					type="button"
					class="flex justify-between items-center border-0 border-solid border-transparent space-x-3 mt-4 rounded-md bg-transparent py-2 px-0 text-sm text-bold text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
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
				</button>
			{/if}
		</div>

		<div class="grid grid-cols-5 gap-8 place-content-center w-auto h-fit">
			{#each team as article}
				<TeamCard
					name={article.name}
					position={article.position}
					background={article.profileImage}
				/>
				<TeamCard
					name={article.name}
					position={article.position}
					background={article.profileImage}
				/>
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
