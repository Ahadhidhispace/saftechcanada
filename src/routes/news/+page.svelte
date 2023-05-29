<script>
	import { page } from '$app/stores';

	// $page.url.searchParams.set('nav_background_optimize', 'true')

	import PageHero from '$lib/components/PageHero.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';

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

	// import slides images
	import slide from '$lib/assets/images/services_02.png';
	import slideOne from '$lib/assets/images/slide_01.jpg';
	import slideTwo from '$lib/assets/images/slide_02.jpg';
	import slideThree from '$lib/assets/images/slide_03.jpg';
	import slideFour from '$lib/assets/images/slide_04.jpg';
	import slideFive from '$lib/assets/images/services.jpg';
	import slideSix from '$lib/assets/images/services_01.jpg';

	let news = [
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: heroCelebration,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: heroGood,
			specialClass: 'col-span-2'
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: heroLatino,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: heroStaff,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: heroCute,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slide,
			specialClass: 'col-span-2'
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideSix,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideOne,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideFive,
			specialClass: 'col-span-2'
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideThree,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideFour,
			specialClass: ''
		},
		{
			title: 'Top 3 Ways to Grow and Retain Tech Talent in 2024',
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideTwo,
			specialClass: ''
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slide,
			specialClass: 'col-span-2'
		},
		{
			title: "Saftech Canada Celebrates International Women's Day and Embraces Equity",
			publisher: 'Saftech Canada',
			readTime: '10 min read',
			articleImage: slideSix,
			specialClass: ''
		}
	];
</script>

<PageHero
	heading="Welcome to Our News"
	sub="The Official News Page. A Way to Know and Stay Updated About What is happening at Saftech Canada."
	background={heroObserve}
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

<!-- News insights section -->
<section class="w-full h-fit bg-saftech-gray/5 py-16">
	<div
		class="w-full h-full flex flex-col justify-center items-start rounded-md bg-saftech-gray/0 mb-10 py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
	>
		<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto py-100">
			<h4 class=" text-sm font-bold text-saftech-black w-full -mt-4 mb-4">BROWSING ARTICLES</h4>
			<div class="flex justify-between items-center w-full">
				<div>
					<span class=" block text-4xl font-bold lg:w-full text-saftech-black">
						Behold, Our Latest News!</span
					>
					<span class=" block text-sm lg:text-base w-full text-saftech-black">
						Trusted way to know what is happening at saftech canada.
					</span>
				</div>
				{#if $page.url.pathname != '/news'}
					<button
						type="button"
						class=" group flex justify-between items-center border border-solid border-dark-blue space-x-3 rounded-md bg-dark-blue hover:bg-saftech-white py-2 px-3 text-sm text-bold text-saftech-white hover:text-dark-blue hover:text-deep-blue/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100 transition-all ease-in-out"
					>
						<span class="sr-only">Browse for more</span>
						BROWSE FOR MORE
						<span class="">
							<svg
								class=" fill-saftech-white group-hover:fill-dark-blue"
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
				{/if}
			</div>
		</div>
	</div>

	<div class="grid grid-cols-3 gap-8 items-center w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		{#each news as article}
			<NewsCard
				name={article.title}
				position={article.publisher}
				background={article.articleImage}
				specialClass={article.specialClass}
				readTime={article.readTime}
			/>
		{/each}
	</div>
</section>
<!-- The end of news insights section -->
