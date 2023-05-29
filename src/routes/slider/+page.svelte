<script>
	import PageHero from '$lib/components/PageHero.svelte';

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
</script>

<PageHero
	heading="Welcome to Saftech Canada"
	sub="This page helps you to seach for the Job by selecting the Job title, location and working type."
	background={heroCute}
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
