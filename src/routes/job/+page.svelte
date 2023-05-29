<script>
	import { queryParameters } from 'sveltekit-search-params'

	$: store = queryParameters()
	$: console.log($store)

	import { page } from '$app/stores'
	import { setContext } from 'svelte'
	import { fade, fly, slide } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	import PageHero from '$lib/components/PageHero.svelte'
	import JobCard from '$lib/components/JobCard.svelte'
	import JobsearchTabItemCard, { activeTabId } from '$lib/components/JobsearchTabItemCard.svelte'
	import JobsearchTabSelectionLocationItemCard from '$lib/components/JobsearchTabSelectionLocationItemCard.svelte'
	import JobsearchTabSelectionWorkTypeItemCard from '$lib/components/JobsearchTabSelectionWorkTypeItemCard.svelte'
	import JobsearchTabSelectionCategoryItemCard from '$lib/components/JobsearchTabSelectionCategoryItemCard.svelte'
	import JobSearchFilterNotifier from '$lib/components/JobSearchFilterNotifier.svelte'

	//import icons
	import addressLocation from '$lib/assets/icons/icons8_card_file_box.svg'

	// importing page hero images
	import heroCute from '$lib/assets/images/page_hero_cute.jpg'
	import heroCoding from '$lib/assets/images/page_hero_coding.jpg'
	import heroCelebration from '$lib/assets/images/page_hero_celebration.jpg'
	import heroYellow from '$lib/assets/images/page_hero_yellow.jpg'
	import heroGirls from '$lib/assets/images/page_hero_girls.jpg'
	import heroStaff from '$lib/assets/images/page_hero_staff.jpg'
	import heroLatino from '$lib/assets/images/page_hero_latino.jpg'
	import heroGood from '$lib/assets/images/page_hero_good.jpg'
	import heroObserve from '$lib/assets/images/page_hero_observe.jpg'
	import heroService from '$lib/assets/images/page_hero_service.jpg'

	let filtered = false
	let filterResults = 0
	let fetching = false

	let timeoutID = 0

	const results = [0, 1, 2]

	$: headerComp = filterResults === 1 ? 'Job' : filterResults <= 0 ? 'Match' : 'Jobs'
	$: setContext('header', headerComp)

	$: console.log(headerComp)

	let jobs = [
		{
			applicationUrl: '/job',
			readAllUrl: 'job/',
			reqID: '10551',
			title: 'Tech Support Engineer - M365',
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, placeat maxime porro enim ut beatae earum vel corporis aliquid velit cumque, debitis, nisi ipsum sit magni quam. Praesentium soluta vero consectetur perferendis illum porro nemo rerum earum perspiciatis beatae expedita sed eum, id aliquam sint voluptate eius tenetur a dolore, fugit nobis sequi temporibus maxime. Sint voluptatum suscipit eos nemo impedit sed architecto modi nihil temporibus est! Perferendis facilis labore neque consequatur debitis, corrupti rerum voluptatum deserunt? Quos voluptas deleniti vitae dolor corporis officiis omnis temporibus cum eaque quisquam. Excepturi provident assumenda aspernatur sapiente voluptatem dolores rerum vero laborum rem vitae omnis enim est, eius minima sunt eveniet, molestiae voluptatum accusamus id possimus ipsum dignissimos esse! Et, facilis? Illum consectetur expedita atque? Rem quaerat dignissimos iure minima aspernatur, nam doloremque quis officiis suscipit illo delectus perspiciatis sapiente, aut iusto! Voluptatum hic iste ut similique autem excepturi assumenda suscipit neque commodi ipsum, odit laudantium cumque enim quaerat repudiandae repellat. Ipsa sequi quas vero nemo voluptatibus iste reprehenderit quod animi cumque adipisci earum unde totam suscipit ex, harum sapiente laudantium ratione natus labore inventore omnis! Distinctio nobis magni cumque, repellat atque, est nostrum ullam nesciunt tempore ea eos odit laboriosam provident! Nisi maxime aspernatur itaque vitae alias optio hic veniam, impedit similique delectus cum dignissimos! Quod quo porro, et iste hic animi nulla sint quas rerum ducimus. Neque reiciendis dolor pariatur quisquam autem provident, asperiores nesciunt voluptatibus assumenda architecto mollitia ipsum aut officiis amet. Magnam incidunt sunt voluptatum, sed vero, culpa quas amet molestias exercitationem, commodi debitis rem. Maxime, laborum sunt. Aperiam odit sint fugit corporis? Magnam vel officia saepe esse iusto perspiciatis aliquam sed qui sequi! Architecto distinctio error recusandae aliquid ipsam eum, facilis culpa, praesentium omnis mollitia temporibus! Quam, minima facere repudiandae temporibus aliquam asperiores optio delectus! Provident tenetur fugit maxime non earum ex similique itaque obcaecati deserunt animi error vero, natus delectus perspiciatis nesciunt odit, quod vel eveniet minima! Itaque, optio officiis distinctio odio aspernatur nesciunt quos deserunt, esse doloribus molestias consequuntur, illo non? Culpa aperiam amet, debitis assumenda corporis nihil laudantium incidunt ipsam ratione rem dolore accusamus commodi quisquam, explicabo eius velit quos tenetur tempore dolores reprehenderit officia dicta. Quos enim sed blanditiis quas harum quasi officia ducimus debitis velit. Voluptas dignissimos architecto aliquid modi voluptatibus quos quasi impedit? Natus fuga animi facilis at reprehenderit nam odit suscipit et, dolorem, earum pariatur, laborum molestias vitae illum sapiente ab nisi ex totam ea! Sit doloribus inventore natus exercitationem ipsam dolore, doloremque esse repudiandae eaque eius cumque fuga vero aut repellat suscipit laudantium ea quidem quo rerum vitae rem voluptatibus laborum? Natus obcaecati modi explicabo accusamus distinctio ipsum esse assumenda nobis quaerat eaque consequatur, fugit ea id aliquam quam dolorem? Dolores, dolor autem reiciendis omnis cumque maiores velit impedit aspernatur debitis ipsum, dolorem voluptate nihil commodi officiis. Officia molestiae quis corporis animi minima tempora veniam architecto earum libero non odit velit temporibus provident, rem deleniti nisi reiciendis, perspiciatis suscipit asperiores quod eos? Beatae fugit assumenda culpa dicta illo totam odio.',
			workingLocations: 'KN 64 St, Kigali - Rwanda',
			workingTypes: 'Remotely, Hybrid',
			workingCategories: 'Technical Support'
		},
		{
			applicationUrl: '/job',
			readAllUrl: 'job/',
			reqID: '109983',
			title: 'Technical Support Engineer 2 - Dynamics ERP/CRM',
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, placeat maxime porro enim ut beatae earum vel corporis aliquid velit cumque, debitis, nisi ipsum sit magni quam. Praesentium soluta vero consectetur perferendis illum porro nemo rerum earum perspiciatis beatae expedita sed eum, id aliquam sint voluptate eius tenetur a dolore, fugit nobis sequi temporibus maxime. Sint voluptatum suscipit eos nemo impedit sed architecto modi nihil temporibus est! Perferendis facilis labore neque consequatur debitis, corrupti rerum voluptatum deserunt? Quos voluptas deleniti vitae dolor corporis officiis omnis temporibus cum eaque quisquam. Excepturi provident assumenda aspernatur sapiente voluptatem dolores rerum vero laborum rem vitae omnis enim est, eius minima sunt eveniet, molestiae voluptatum accusamus id possimus ipsum dignissimos esse! Et, facilis? Illum consectetur expedita atque? Rem quaerat dignissimos iure minima aspernatur, nam doloremque quis officiis suscipit illo delectus perspiciatis sapiente, aut iusto! Voluptatum hic iste ut similique autem excepturi assumenda suscipit neque commodi ipsum, odit laudantium cumque enim quaerat repudiandae repellat. Ipsa sequi quas vero nemo voluptatibus iste reprehenderit quod animi cumque adipisci earum unde totam suscipit ex, harum sapiente laudantium ratione natus labore inventore omnis! Distinctio nobis magni cumque, repellat atque, est nostrum ullam nesciunt tempore ea eos odit laboriosam provident! Nisi maxime aspernatur itaque vitae alias optio hic veniam, impedit similique delectus cum dignissimos! Quod quo porro, et iste hic animi nulla sint quas rerum ducimus. Neque reiciendis dolor pariatur quisquam autem provident, asperiores nesciunt voluptatibus assumenda architecto mollitia ipsum aut officiis amet. Magnam incidunt sunt voluptatum, sed vero, culpa quas amet molestias exercitationem, commodi debitis rem. Maxime, laborum sunt. Aperiam odit sint fugit corporis? Magnam vel officia saepe esse iusto perspiciatis aliquam sed qui sequi! Architecto distinctio error recusandae aliquid ipsam eum, facilis culpa, praesentium omnis mollitia temporibus! Quam, minima facere repudiandae temporibus aliquam asperiores optio delectus! Provident tenetur fugit maxime non earum ex similique itaque obcaecati deserunt animi error vero, natus delectus perspiciatis nesciunt odit, quod vel eveniet minima! Itaque, optio officiis distinctio odio aspernatur nesciunt quos deserunt, esse doloribus molestias consequuntur, illo non? Culpa aperiam amet, debitis assumenda corporis nihil laudantium incidunt ipsam ratione rem dolore accusamus commodi quisquam, explicabo eius velit quos tenetur tempore dolores reprehenderit officia dicta. Quos enim sed blanditiis quas harum quasi officia ducimus debitis velit. Voluptas dignissimos architecto aliquid modi voluptatibus quos quasi impedit? Natus fuga animi facilis at reprehenderit nam odit suscipit et, dolorem, earum pariatur, laborum molestias vitae illum sapiente ab nisi ex totam ea! Sit doloribus inventore natus exercitationem ipsam dolore, doloremque esse repudiandae eaque eius cumque fuga vero aut repellat suscipit laudantium ea quidem quo rerum vitae rem voluptatibus laborum? Natus obcaecati modi explicabo accusamus distinctio ipsum esse assumenda nobis quaerat eaque consequatur, fugit ea id aliquam quam dolorem? Dolores, dolor autem reiciendis omnis cumque maiores velit impedit aspernatur debitis ipsum, dolorem voluptate nihil commodi officiis. Officia molestiae quis corporis animi minima tempora veniam architecto earum libero non odit velit temporibus provident, rem deleniti nisi reiciendis, perspiciatis suscipit asperiores quod eos? Beatae fugit assumenda culpa dicta illo totam odio.',
			workingLocations: 'KN 64 St, Kigali - Rwanda',
			workingTypes: 'Remotely, Hybrid',
			workingCategories: 'Technology Support'
		},
		{
			applicationUrl: '/job',
			readAllUrl: 'job/',
			reqID: '109983',
			title: 'Microsoft Dynamics Technical Engineer - Sofia and Varna',
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, placeat maxime porro enim ut beatae earum vel corporis aliquid velit cumque, debitis, nisi ipsum sit magni quam. Praesentium soluta vero consectetur perferendis illum porro nemo rerum earum perspiciatis beatae expedita sed eum, id aliquam sint voluptate eius tenetur a dolore, fugit nobis sequi temporibus maxime. Sint voluptatum suscipit eos nemo impedit sed architecto modi nihil temporibus est! Perferendis facilis labore neque consequatur debitis, corrupti rerum voluptatum deserunt? Quos voluptas deleniti vitae dolor corporis officiis omnis temporibus cum eaque quisquam. Excepturi provident assumenda aspernatur sapiente voluptatem dolores rerum vero laborum rem vitae omnis enim est, eius minima sunt eveniet, molestiae voluptatum accusamus id possimus ipsum dignissimos esse! Et, facilis? Illum consectetur expedita atque? Rem quaerat dignissimos iure minima aspernatur, nam doloremque quis officiis suscipit illo delectus perspiciatis sapiente, aut iusto! Voluptatum hic iste ut similique autem excepturi assumenda suscipit neque commodi ipsum, odit laudantium cumque enim quaerat repudiandae repellat. Ipsa sequi quas vero nemo voluptatibus iste reprehenderit quod animi cumque adipisci earum unde totam suscipit ex, harum sapiente laudantium ratione natus labore inventore omnis! Distinctio nobis magni cumque, repellat atque, est nostrum ullam nesciunt tempore ea eos odit laboriosam provident! Nisi maxime aspernatur itaque vitae alias optio hic veniam, impedit similique delectus cum dignissimos! Quod quo porro, et iste hic animi nulla sint quas rerum ducimus. Neque reiciendis dolor pariatur quisquam autem provident, asperiores nesciunt voluptatibus assumenda architecto mollitia ipsum aut officiis amet. Magnam incidunt sunt voluptatum, sed vero, culpa quas amet molestias exercitationem, commodi debitis rem. Maxime, laborum sunt. Aperiam odit sint fugit corporis? Magnam vel officia saepe esse iusto perspiciatis aliquam sed qui sequi! Architecto distinctio error recusandae aliquid ipsam eum, facilis culpa, praesentium omnis mollitia temporibus! Quam, minima facere repudiandae temporibus aliquam asperiores optio delectus! Provident tenetur fugit maxime non earum ex similique itaque obcaecati deserunt animi error vero, natus delectus perspiciatis nesciunt odit, quod vel eveniet minima! Itaque, optio officiis distinctio odio aspernatur nesciunt quos deserunt, esse doloribus molestias consequuntur, illo non? Culpa aperiam amet, debitis assumenda corporis nihil laudantium incidunt ipsam ratione rem dolore accusamus commodi quisquam, explicabo eius velit quos tenetur tempore dolores reprehenderit officia dicta. Quos enim sed blanditiis quas harum quasi officia ducimus debitis velit. Voluptas dignissimos architecto aliquid modi voluptatibus quos quasi impedit? Natus fuga animi facilis at reprehenderit nam odit suscipit et, dolorem, earum pariatur, laborum molestias vitae illum sapiente ab nisi ex totam ea! Sit doloribus inventore natus exercitationem ipsam dolore, doloremque esse repudiandae eaque eius cumque fuga vero aut repellat suscipit laudantium ea quidem quo rerum vitae rem voluptatibus laborum? Natus obcaecati modi explicabo accusamus distinctio ipsum esse assumenda nobis quaerat eaque consequatur, fugit ea id aliquam quam dolorem? Dolores, dolor autem reiciendis omnis cumque maiores velit impedit aspernatur debitis ipsum, dolorem voluptate nihil commodi officiis. Officia molestiae quis corporis animi minima tempora veniam architecto earum libero non odit velit temporibus provident, rem deleniti nisi reiciendis, perspiciatis suscipit asperiores quod eos? Beatae fugit assumenda culpa dicta illo totam odio.',
			workingLocations: 'KN 64 St, Kigali - Rwanda',
			workingTypes: 'Remotely, Hybrid',
			workingCategories: 'Information Technology'
		},
		{
			applicationUrl: '/job',
			readAllUrl: 'job/',
			reqID: '109983',
			title: 'Customer Services Specialist - Sofia and Varna',
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, placeat maxime porro enim ut beatae earum vel corporis aliquid velit cumque, debitis, nisi ipsum sit magni quam. Praesentium soluta vero consectetur perferendis illum porro nemo rerum earum perspiciatis beatae expedita sed eum, id aliquam sint voluptate eius tenetur a dolore, fugit nobis sequi temporibus maxime. Sint voluptatum suscipit eos nemo impedit sed architecto modi nihil temporibus est! Perferendis facilis labore neque consequatur debitis, corrupti rerum voluptatum deserunt? Quos voluptas deleniti vitae dolor corporis officiis omnis temporibus cum eaque quisquam. Excepturi provident assumenda aspernatur sapiente voluptatem dolores rerum vero laborum rem vitae omnis enim est, eius minima sunt eveniet, molestiae voluptatum accusamus id possimus ipsum dignissimos esse! Et, facilis? Illum consectetur expedita atque? Rem quaerat dignissimos iure minima aspernatur, nam doloremque quis officiis suscipit illo delectus perspiciatis sapiente, aut iusto! Voluptatum hic iste ut similique autem excepturi assumenda suscipit neque commodi ipsum, odit laudantium cumque enim quaerat repudiandae repellat. Ipsa sequi quas vero nemo voluptatibus iste reprehenderit quod animi cumque adipisci earum unde totam suscipit ex, harum sapiente laudantium ratione natus labore inventore omnis! Distinctio nobis magni cumque, repellat atque, est nostrum ullam nesciunt tempore ea eos odit laboriosam provident! Nisi maxime aspernatur itaque vitae alias optio hic veniam, impedit similique delectus cum dignissimos! Quod quo porro, et iste hic animi nulla sint quas rerum ducimus. Neque reiciendis dolor pariatur quisquam autem provident, asperiores nesciunt voluptatibus assumenda architecto mollitia ipsum aut officiis amet. Magnam incidunt sunt voluptatum, sed vero, culpa quas amet molestias exercitationem, commodi debitis rem. Maxime, laborum sunt. Aperiam odit sint fugit corporis? Magnam vel officia saepe esse iusto perspiciatis aliquam sed qui sequi! Architecto distinctio error recusandae aliquid ipsam eum, facilis culpa, praesentium omnis mollitia temporibus! Quam, minima facere repudiandae temporibus aliquam asperiores optio delectus! Provident tenetur fugit maxime non earum ex similique itaque obcaecati deserunt animi error vero, natus delectus perspiciatis nesciunt odit, quod vel eveniet minima! Itaque, optio officiis distinctio odio aspernatur nesciunt quos deserunt, esse doloribus molestias consequuntur, illo non? Culpa aperiam amet, debitis assumenda corporis nihil laudantium incidunt ipsam ratione rem dolore accusamus commodi quisquam, explicabo eius velit quos tenetur tempore dolores reprehenderit officia dicta. Quos enim sed blanditiis quas harum quasi officia ducimus debitis velit. Voluptas dignissimos architecto aliquid modi voluptatibus quos quasi impedit? Natus fuga animi facilis at reprehenderit nam odit suscipit et, dolorem, earum pariatur, laborum molestias vitae illum sapiente ab nisi ex totam ea! Sit doloribus inventore natus exercitationem ipsam dolore, doloremque esse repudiandae eaque eius cumque fuga vero aut repellat suscipit laudantium ea quidem quo rerum vitae rem voluptatibus laborum? Natus obcaecati modi explicabo accusamus distinctio ipsum esse assumenda nobis quaerat eaque consequatur, fugit ea id aliquam quam dolorem? Dolores, dolor autem reiciendis omnis cumque maiores velit impedit aspernatur debitis ipsum, dolorem voluptate nihil commodi officiis. Officia molestiae quis corporis animi minima tempora veniam architecto earum libero non odit velit temporibus provident, rem deleniti nisi reiciendis, perspiciatis suscipit asperiores quod eos? Beatae fugit assumenda culpa dicta illo totam odio.',
			workingLocations: 'KN 64 St, Kigali - Rwanda',
			workingTypes: 'Remotely, Hybrid',
			workingCategories: 'Customer'
		}
	]
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

<section class="w-full h-fit pt-20 bg-saftech-white">
	<div
		class="flex justify-between items-start mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 transition-all ease-in-out"
	>
		<div
			class="flex flex-col justify-center rounded-lg overflow-hidden items-start bg-transparent w-1/2"
		>
			<div class="bg-transparent w-full">
				<!-- filters header -->

				<div class=" flex transition-all duration-500 ease-in-out">
					<JobsearchTabItemCard title="Location" round="left" info="Switch by clicking">
						<svg
							slot="tab"
							let:isActive
							class="{isActive
								? 'fill-saftech-white'
								: 'fill-saftech-black/60'} transition-all duration-500 ease-in-out"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="40"
							height="40"
						>
							<path
								d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z"
							/>
						</svg>
					</JobsearchTabItemCard>
					<JobsearchTabItemCard title="Working Type" info="Switch by clicking">
						<svg
							slot="tab"
							let:isActive
							class="{isActive
								? 'fill-saftech-white'
								: 'fill-saftech-black/60'} transition-all duration-500 ease-in-out"
							viewBox="0 0 48 48"
							width="40"
							height="40"
						>
							<path
								d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z"
							/>
						</svg>
					</JobsearchTabItemCard>
					<JobsearchTabItemCard title="Categories" info="Switch by clicking" round="right">
						<svg
							slot="tab"
							let:isActive
							class="{isActive
								? 'fill-saftech-white'
								: 'fill-saftech-black/60'} transition-all duration-500 ease-in-out"
							viewBox="0 0 48 48"
							width="40"
							height="40"
						>
							<path
								d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z"
							/>
						</svg>
					</JobsearchTabItemCard>
				</div>
			</div>
			<div class="bg-white w-full overflow-hidden">
				<!-- filters container -->
				<div class="flex items-center py-4 flex-nowrap overflow-hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 48 48"
						width="200"
						height="100"
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
						<span class="font-bold text-2xl text-saftech-black/60">Search by Filtering</span>
						<span class=" block text-xs font-normal max-w-xs text-saftech-black/50"
							>For applying a filter, please activate tab by clicking on it then select among
							available selection items</span
						>
					</h2>
				</div>
				<div
					class="flex fit {$activeTabId === 1 ? '-translate-x-[100%]' : ''} {$activeTabId === 1
						? '-translate-x-[100%]'
						: ''} {$activeTabId === 2
						? '-translate-x-[200%]'
						: ''} transition-all duration-700 ease-in-out"
				>
					<div
						id="#tab0"
						class="min-w-full {$activeTabId === 0
							? 'opacity-100 w-full'
							: 'opacity-90'} flex flex-col transition-all delay-100 duration-500 ease-out"
					>
						<JobsearchTabSelectionLocationItemCard
							location="1"
							title="Canada - Toronto"
							info="KN 64 St, Kigali - Rwanda"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z"
								/>
							</svg>
						</JobsearchTabSelectionLocationItemCard>
						<JobsearchTabSelectionLocationItemCard
							location="2"
							title="Kigali - Rwanda"
							info="KN 64 St, Kigali - Rwanda"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z"
								/>
							</svg>
						</JobsearchTabSelectionLocationItemCard>
						<JobsearchTabSelectionLocationItemCard
							location="3"
							title="Uganda - Kampala"
							info="KN 64 St, Kigali - Rwanda"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z"
								/>
							</svg>
						</JobsearchTabSelectionLocationItemCard>

						<!-- <JobsearchTabSelectionLocationItemCard title="Working Type" info="click to activate" >
                  <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" viewBox="0 0 48 48" width="40" height="40">
                      <path d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z" />
                  </svg>
              </JobsearchTabSelectionLocationItemCard >
              <JobsearchTabSelectionLocationItemCard title="Categories" info="click to activate" round="right"> 
                  <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" viewBox="0 0 48 48" width="40" height="40">
                      <path d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z" />
                  </svg>
              </JobsearchTabSelectionLocationItemCard> -->
					</div>

					<div
						id="#tab1"
						class="min-w-full {$activeTabId === 1
							? 'opacity-100 w-full'
							: 'opacity-90'} flex flex-col transition-all delay-300 duration-500 ease-out"
					>
						<JobsearchTabSelectionWorkTypeItemCard
							workType="1"
							title="Remotely"
							info="Working from distance"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z"
								/>
							</svg>
						</JobsearchTabSelectionWorkTypeItemCard>
						<JobsearchTabSelectionWorkTypeItemCard
							workType="2"
							title="Hybrid"
							info="Both office - home"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z"
								/>
							</svg>
						</JobsearchTabSelectionWorkTypeItemCard>
						<JobsearchTabSelectionWorkTypeItemCard
							workType="3"
							title="Remote"
							info="Working from anywhere"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z"
								/>
							</svg>
						</JobsearchTabSelectionWorkTypeItemCard>

						<!-- <JobsearchTabSelectionLocationItemCard title="Working Type" info="click to activate" >
                  <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" viewBox="0 0 48 48" width="40" height="40">
                      <path d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z" />
                  </svg>
              </JobsearchTabSelectionLocationItemCard >
              <JobsearchTabSelectionLocationItemCard title="Categories" info="click to activate" round="right"> 
                  <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" viewBox="0 0 48 48" width="40" height="40">
                      <path d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z" />
                  </svg>
              </JobsearchTabSelectionLocationItemCard> -->
					</div>

					<div
						id="#tab2"
						class="min-w-full {$activeTabId === 2
							? 'opacity-100 w-full'
							: 'opacity-90'} flex flex-col transition-all delay-300 duration-500 ease-out"
					>
						<JobsearchTabSelectionCategoryItemCard
							category="1"
							title="Information Technology"
							info="KN 64 St, Kigali - Rwanda"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z"
								/>
							</svg>
						</JobsearchTabSelectionCategoryItemCard>
						<JobsearchTabSelectionCategoryItemCard
							category="2"
							title="Customer Services"
							info="KN 64 St, Kigali - Rwanda"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z"
								/>
							</svg>
						</JobsearchTabSelectionCategoryItemCard>
						<JobsearchTabSelectionCategoryItemCard
							category="3"
							title="Technology Support"
							info="KN 64 St, Kigali - Rwanda"
						>
							<svg
								slot="tab"
								let:isActive
								class="{isActive
									? 'fill-saftech-white'
									: 'fill-saftech-black/5'} transition-all duration-500 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="40"
								height="40"
							>
								<path
									d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z"
								/>
							</svg>
						</JobsearchTabSelectionCategoryItemCard>

						<!-- <JobsearchTabSelectionLocationItemCard title="Working Type" info="click to activate" >
                  <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" viewBox="0 0 48 48" width="40" height="40">
                      <path d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z" />
                  </svg>
              </JobsearchTabSelectionLocationItemCard >
              <JobsearchTabSelectionLocationItemCard title="Categories" info="click to activate" round="right"> 
                  <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" viewBox="0 0 48 48" width="40" height="40">
                      <path d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z" />
                  </svg>
              </JobsearchTabSelectionLocationItemCard> -->
					</div>
				</div>

				<!-- <div class="flex fit {$page.url.hash === '#tab0' && $activeTabId === 1 ? '-translate-x-[100%]':''} {$page.url.hash === '#tab1'  && $activeTabId === 1 ? '-translate-x-[100%]':''} {$page.url.hash === '#tab2'  && $activeTabId === 2 ? '-translate-x-[200%]':''} transition-all duration-700 ease-in-out">
          <div id="#tab0" class="min-w-full {$activeTabId === 0 ? 'opacity-100 w-full':'opacity-90'} flex flex-col transition-all delay-100 duration-500 ease-out">

            <JobsearchTabSelectionLocationItemCard location="1" title="Canada - Toronto" info="KN 64 St, Kigali - Rwanda"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z" />
                </svg>
            </JobsearchTabSelectionLocationItemCard > 
            <JobsearchTabSelectionLocationItemCard location="2" title="Kigali - Rwanda" info="KN 64 St, Kigali - Rwanda"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z" />
                </svg>
            </JobsearchTabSelectionLocationItemCard > 
            <JobsearchTabSelectionLocationItemCard location="3" title="Uganda - Kampala" info="KN 64 St, Kigali - Rwanda"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z" />
                </svg>
            </JobsearchTabSelectionLocationItemCard > 

          </div>     
        
          <div id="#tab1" class="min-w-full {$activeTabId === 1 ? 'opacity-100 w-full':'opacity-90'} flex flex-col transition-all delay-300 duration-500 ease-out">

            <JobsearchTabSelectionWorkTypeItemCard workType="1" title="Remotely" info="Working from distance"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z" />
                </svg>
            </JobsearchTabSelectionWorkTypeItemCard > 
            <JobsearchTabSelectionWorkTypeItemCard workType="2" title="Hybrid" info="Both office - home"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z" />
                </svg>
            </JobsearchTabSelectionWorkTypeItemCard > 
            <JobsearchTabSelectionWorkTypeItemCard workType="3" title="Remote" info="Working from anywhere"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M24 4C19.589 4 16 7.589 16 12C16 16.411 19.589 20 24 20C28.411 20 32 16.411 32 12C32 7.589 28.411 4 24 4 z M 14.5 24C12.019 24 10 26.019 10 28.5L10 39.5C10 40.028301 10.107329 40.528629 10.275391 41L8.5 41 A 1.50015 1.50015 0 1 0 8.5 44L14.5 44L33.5 44L39.5 44 A 1.50015 1.50015 0 1 0 39.5 41L37.724609 41C37.892671 40.528629 38 40.028301 38 39.5L38 28.5C38 26.019 35.981 24 33.5 24L14.5 24 z M 24 32C25.105 32 26 32.896 26 34C26 35.104 25.105 36 24 36C22.895 36 22 35.104 22 34C22 32.896 22.895 32 24 32 z" />
                </svg>
            </JobsearchTabSelectionWorkTypeItemCard > 


          </div>

          <div id="#tab2" class="min-w-full {$activeTabId === 2 ? 'opacity-100 w-full':'opacity-90'} flex flex-col transition-all delay-300 duration-500 ease-out">

            <JobsearchTabSelectionCategoryItemCard category="1" title="Information Technology" info="KN 64 St, Kigali - Rwanda"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z" />
                </svg>
            </JobsearchTabSelectionCategoryItemCard > 
            <JobsearchTabSelectionCategoryItemCard category="2" title="Customer Services" info="KN 64 St, Kigali - Rwanda"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z" />
                </svg>
            </JobsearchTabSelectionCategoryItemCard > 
            <JobsearchTabSelectionCategoryItemCard category="3" title="Technology Support" info="KN 64 St, Kigali - Rwanda"> 
                <svg slot="tab" let:isActive class="{isActive ? 'fill-saftech-white':'fill-saftech-black/5'} transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
                    <path d="M14.5 6C9.813 6 6 9.813 6 14.5C6 19.187 9.813 23 14.5 23C19.187 23 23 19.187 23 14.5C23 9.813 19.187 6 14.5 6 z M 33.5 6C28.823344 6 25 9.8233481 25 14.5C25 19.176652 28.823344 23 33.5 23C38.176656 23 42 19.176652 42 14.5C42 9.8233481 38.176656 6 33.5 6 z M 33.5 9C33.634798 9 33.766174 9.0101718 33.898438 9.0195312L38.980469 14.101562C38.989828 14.233826 39 14.365202 39 14.5C39 15.478433 38.747822 16.392595 38.306641 17.185547L30.814453 9.6933594C31.607405 9.252178 32.521566 9 33.5 9 z M 28.693359 11.814453L36.185547 19.306641C35.392595 19.747822 34.478434 20 33.5 20C33.365202 20 33.233826 19.989828 33.101562 19.980469L28.019531 14.898438C28.010172 14.766174 28 14.634798 28 14.5C28 13.521567 28.252178 12.607405 28.693359 11.814453 z M 14.5 25C9.813 25 6 28.813 6 33.5C6 38.187 9.813 42 14.5 42C19.187 42 23 38.187 23 33.5C23 28.813 19.187 25 14.5 25 z M 33.5 25C28.823344 25 25 28.823348 25 33.5C25 38.176652 28.823344 42 33.5 42C38.176656 42 42 38.176652 42 33.5C42 28.823348 38.176656 25 33.5 25 z M 14.5 27C15.605 27 16.5 27.895 16.5 29C16.5 30.105 15.605 31 14.5 31C13.395 31 12.5 30.105 12.5 29C12.5 27.895 13.395 27 14.5 27 z M 32 28.300781L32 32L28.300781 32C28.819924 30.186503 30.186503 28.819925 32 28.300781 z M 35 28.300781C36.813497 28.819925 38.180076 30.186503 38.699219 32L35 32L35 28.300781 z M 10 31.5C11.105 31.5 12 32.395 12 33.5C12 34.605 11.105 35.5 10 35.5C8.895 35.5 8 34.605 8 33.5C8 32.395 8.895 31.5 10 31.5 z M 19 31.5C20.105 31.5 21 32.395 21 33.5C21 34.605 20.105 35.5 19 35.5C17.895 35.5 17 34.605 17 33.5C17 32.395 17.895 31.5 19 31.5 z M 28.300781 35L32 35L32 38.699219C30.186503 38.180075 28.819924 36.813497 28.300781 35 z M 35 35L38.699219 35C38.180076 36.813497 36.813497 38.180075 35 38.699219L35 35 z M 14.5 36C15.605 36 16.5 36.895 16.5 38C16.5 39.105 15.605 40 14.5 40C13.395 40 12.5 39.105 12.5 38C12.5 36.895 13.395 36 14.5 36 z" />
                </svg>
            </JobsearchTabSelectionCategoryItemCard > 

          </div>

        </div> -->
			</div>
		</div>
		<div
			class="relative flex justify-center items-center bg-white w-[45%] self-center min-h-[390px] rounded-lg"
		>
			{#if fetching}
				<div
					in:fade={{ delay: 300 }}
					out:fly
					class="absolute inset-0 flex flex-col justify-center rounded-xl space-y-6 items-center h-full min-h-full flex-nowrap overflow-hidden"
				>
					<JobSearchFilterNotifier
						header="Fetching..."
						sub="Getting files for you"
						subsub="Your search results will appear bellow"
					>
						<svg
							class="trnsition-all duration-500 ease-in-out"
							slot="icon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 128 128"
							width="100"
							height="100"
						>
							<path
								fill="#fff"
								d="M29,39C18,39,9,48,9,59s9,20,20,20h70c11,0,20-9,20-20s-9-20-20-20h-5v-5C94,17.4,80.6,4,64,4S34,17.4,34,34v5H29z"
							/>
							<path
								fill="#444b54"
								d="M104,81.4c-1.3,0-2.6-0.9-2.9-2.3c-0.4-1.6,0.6-3.2,2.2-3.7c7.5-1.9,12.8-8.7,12.8-16.5c0-9.4-7.6-17-17-17h-5c-1.7,0-3-1.3-3-3v-5C91,19.1,78.9,7,64,7S37,19.1,37,34v5c0,1.7-1.3,3-3,3h-5c-9.4,0-17,7.6-17,17c0,7.8,5.2,14.5,12.7,16.5c1.6,0.4,2.6,2,2.2,3.7c-0.4,1.6-2,2.6-3.7,2.2C13.1,78.7,6,69.5,6,59c0-12.7,10.3-23,23-23h2v-2C31,15.8,45.8,1,64,1s33,14.8,33,33v2h2c12.7,0,23,10.3,23,23c0,10.5-7.1,19.7-17.3,22.3C104.5,81.3,104.2,81.4,104,81.4z"
							/>
							<path
								fill="#fff"
								d="M64 52.8A25 25 0 1 0 64 102.8 25 25 0 1 0 64 52.8zM18.7 122.3L18.7 122.3c-2.3-2.3-2.3-6.1 0-8.5l11.3-11.3c2.3-2.3 6.1-2.3 8.5 0l0 0c2.3 2.3 2.3 6.1 0 8.5l-11.3 11.3C24.9 124.6 21.1 124.6 18.7 122.3z"
							/>
							<path
								fill="#71c2ff"
								d="M64,105.8c-15.4,0-28-12.6-28-28s12.6-28,28-28s28,12.6,28,28S79.4,105.8,64,105.8z M64,55.8c-12.1,0-22,9.9-22,22s9.9,22,22,22s22-9.9,22-22S76.1,55.8,64,55.8z"
							/>
							<path
								fill="#71c2ff"
								d="M38.5,105.5c-0.8,0-1.5-0.3-2.1-0.9c-1.2-1.2-1.2-3.1,0-4.2l7.1-7.1c1.2-1.2,3.1-1.2,4.2,0s1.2,3.1,0,4.2l-7.1,7.1C40.1,105.2,39.3,105.5,38.5,105.5z"
							/>
							<path
								fill="#71c2ff"
								d="M23,127.1c-2.4,0-4.7-0.9-6.4-2.6c-1.7-1.7-2.6-4-2.6-6.4s0.9-4.7,2.6-6.4l11.3-11.3c3.5-3.5,9.2-3.5,12.7,0c1.7,1.7,2.6,4,2.6,6.4c0,2.4-0.9,4.7-2.6,6.4l-11.3,11.3C27.7,126.1,25.4,127.1,23,127.1z M34.3,103.7c-0.8,0-1.5,0.3-2.1,0.9l-11.3,11.3c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0l11.3-11.3c0.6-0.6,0.9-1.3,0.9-2.1s-0.3-1.6-0.9-2.1C35.8,104,35.1,103.7,34.3,103.7z"
							/>
						</svg>
					</JobSearchFilterNotifier>
				</div>
			{:else if !filtered}
				<div
					in:fade={{ delay: 300 }}
					out:fly
					class="absolute inset-0 flex flex-col justify-center rounded-xl space-y-6 items-center h-full min-h-full flex-nowrap overflow-hidden"
				>
					<JobSearchFilterNotifier
						header=""
						sub="No filter results yet"
						subsub="Your search results will appear bellow"
					>
						<svg
							class="trnsition-all duration-500 ease-in-out"
							slot="icon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 128 128"
							width="100"
							height="100"
						>
							<path
								fill="#fff"
								d="M24,104V14c0-5.5,4.5-10,10-10h70c11,0,20,9,20,20v80c0,2.8-2.2,5-5,5H29C26.2,109,24,106.8,24,104z"
							/>
							<path
								fill="#fff"
								d="M124,24h-10c-5.5,0-10-4.5-10-10V4h0C115,4,124,13,124,24L124,24z"
							/>
							<path
								fill="#444b54"
								d="M127,24c0-0.1,0-0.3,0-0.4c-0.1-6-2.5-11.6-6.7-15.9C115.9,3.4,110.2,1,104,1c0,0,0,0,0,0H34c-7.2,0-13,5.8-13,13v7c0,1.7,1.3,3,3,3s3-1.3,3-3v-7c0-3.9,3.1-7,7-7h67v7c0,7.2,5.8,13,13,13h9.6c0.1,0,0.2,0,0.4,0c0,0,0,0,0,0c1.2,0,2.3-0.8,2.8-1.8C126.9,24.8,127,24.4,127,24z M107,14V7.3c3.4,0.6,6.5,2.2,9,4.7c2.5,2.5,4.1,5.6,4.7,9H114C110.1,21,107,17.9,107,14z"
							/>
							<path
								fill="#fff"
								d="M105.7,47H72.2c-5.2,0-10-2.4-13.2-6.5l0,0c-3.2-4.1-8-6.5-13.2-6.5H19c-2.8,0-5,2.2-5,5v65c0,2.8,2.2,5,5,5h91.7V52C110.7,49.2,108.4,47,105.7,47z"
							/>
							<g>
								<path
									fill="#fff"
									d="M56.4 59.099999999999994A25 25 0 1 0 56.4 109.1A25 25 0 1 0 56.4 59.099999999999994Z"
									transform="rotate(-82.484 56.437 84.053)"
								/>
								<path
									fill="#fff"
									d="M5.7,122.3L5.7,122.3c-2-2.6-1.5-6.4,1.1-8.4l12.7-9.7c2.6-2,6.4-1.5,8.4,1.1l0,0c2,2.6,1.5,6.4-1.1,8.4l-12.7,9.7C11.5,125.4,7.8,124.9,5.7,122.3z"
								/>
								<path
									fill="#71c2ff"
									d="M56.5,112.1c-1.2,0-2.5-0.1-3.7-0.2c-15.3-2-26.1-16.1-24.1-31.4c2-15.3,16.1-26.1,31.4-24.1c7.4,1,14,4.8,18.6,10.7c4.6,5.9,6.5,13.3,5.5,20.7l0,0c-1,7.4-4.8,14-10.7,18.6C68.5,110.1,62.6,112.1,56.5,112.1z M56.4,62.1c-10.9,0-20.3,8.1-21.8,19.1c-1.6,12,6.9,23.1,18.9,24.7c5.8,0.8,11.6-0.8,16.3-4.4c4.7-3.6,7.7-8.8,8.4-14.6c0,0,0,0,0,0c0.8-5.8-0.8-11.6-4.4-16.3s-8.8-7.7-14.6-8.4C58.3,62.1,57.4,62.1,56.4,62.1z"
								/>
								<path
									fill="#71c2ff"
									d="M28,108.3c-0.9,0-1.8-0.4-2.4-1.2c-1-1.3-0.8-3.2,0.6-4.2l7.9-6.1c1.3-1,3.2-0.8,4.2,0.6c1,1.3,0.8,3.2-0.6,4.2l-7.9,6.1C29.2,108.1,28.6,108.3,28,108.3z"
								/>
								<path
									fill="#71c2ff"
									d="M10.5,127.6c-0.4,0-0.8,0-1.2-0.1c-2.4-0.3-4.5-1.5-6-3.4l0,0c-3-3.9-2.3-9.6,1.7-12.6l12.7-9.7c1.9-1.5,4.3-2.1,6.7-1.8c2.4,0.3,4.5,1.5,6,3.4s2.1,4.3,1.8,6.7s-1.5,4.5-3.4,6L16,125.8C14.4,127,12.5,127.6,10.5,127.6z M8.1,120.5c0.5,0.6,1.2,1,2,1.1c0.8,0.1,1.6-0.1,2.2-0.6l12.7-9.7c0.6-0.5,1-1.2,1.1-2c0.1-0.8-0.1-1.6-0.6-2.2c-0.5-0.6-1.2-1-2-1.1c-0.8-0.1-1.6,0.1-2.2,0.6l-12.7,9.7C7.4,117.3,7.1,119.2,8.1,120.5L8.1,120.5z"
								/>
							</g>
							<path
								fill="#444b54"
								d="M127,43.7l0-6.7c0-1.7-1.3-3-3-3c0,0,0,0,0,0c-1.7,0-3,1.4-3,3l0,17v48.3c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7V52c0-4.4-3.6-8-8-8H72.2c-4.2,0-8.3-2-10.8-5.3c-3.7-4.8-9.5-7.7-15.6-7.7H19c-4.4,0-8,3.6-8,8v51c0,1.7,1.3,3,3,3s3-1.3,3-3V39c0-1.1,0.9-2,2-2h26.8c4.2,0,8.3,2,10.8,5.3c3.7,4.8,9.5,7.7,15.6,7.7h33.5c1.1,0,2,0.9,2,2v50.3c0,1.3,0.3,2.5,0.7,3.7H87c-1.7,0-3,1.3-3,3s1.3,3,3,3h30c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c5.3,0,9.7-4.3,9.7-9.7V44C127,43.9,127,43.8,127,43.7z"
							/>
						</svg>
					</JobSearchFilterNotifier>
				</div>
			{:else}
				{#if filterResults <= 0}
					<div
						in:fade={{ delay: 300 }}
						out:fly
						class="absolute inset-0 flex flex-col justify-center rounded-xl space-y-6 items-center h-full min-h-full flex-nowrap overflow-hidden"
					>
						<JobSearchFilterNotifier filterMatch="No" header={headerComp}>
							<!-- header="" sub="" subsub="" -->
							<svg
								class="trnsition-all duration-500 ease-in-out"
								slot="icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 128 128"
								width="100"
								height="100"
							>
								<path
									fill="#fff"
									d="M97,109H22c-2.8,0-5-2.2-5-5V24c0-2.8,2.2-5,5-5h80c2.8,0,5,2.2,5,5v75C107,104.5,102.5,109,97,109z"
								/>
								<path
									fill="#444b54"
									d="M80,112H22c-4.4,0-8-3.6-8-8V24c0-4.4,3.6-8,8-8h19c1.7,0,3,1.3,3,3s-1.3,3-3,3H22c-1.1,0-2,0.9-2,2v80c0,1.1,0.9,2,2,2h58c1.7,0,3,1.3,3,3S81.7,112,80,112z"
								/>
								<path
									fill="#444b54"
									d="M102,16H54c-1.7,0-3,1.3-3,3v19c0,1.7,1.3,3,3,3h16c1.7,0,3-1.3,3-3V22h29c1.1,0,2,0.9,2,2v38c0,1.7,1.3,3,3,3s3-1.3,3-3V24C110,19.6,106.4,16,102,16z"
								/>
								<path
									fill="#71c2ff"
									d="M107 72A20 20 0 1 0 107 112A20 20 0 1 0 107 72Z"
									transform="rotate(-45.001 107 92.002)"
								/>
								<path
									fill="#fff"
									d="M120.2,94.4L120.2,94.4c-6.6,8.8-19.8,8.8-26.4,0l0,0c-1.1-1.4-1.1-3.4,0-4.8l0,0c6.6-8.8,19.8-8.8,26.4,0l0,0C121.3,91,121.3,93,120.2,94.4z"
								/>
								<path
									fill="#71c2ff"
									d="M107 87A5 5 0 1 0 107 97A5 5 0 1 0 107 87Z"
									transform="rotate(-45.001 107 92.002)"
								/>
							</svg>
						</JobSearchFilterNotifier>
					</div>
				{/if}

				{#if filterResults > 0}
					<div
						in:fade={{ delay: 300 }}
						out:fly
						class="absolute inset-0 flex flex-col justify-center rounded-xl space-y-6 items-center h-full min-h-full flex-nowrap overflow-hidden"
					>
						<JobSearchFilterNotifier
							header={headerComp}
							filterMatch={filterResults.toString()}
							sub="Get matched files bellow"
							subsub="Also, you can try applying other filters again... or"
						>
							<!-- header="" sub="" subsub="" -->

							<svg
								class="trnsition-all duration-500 ease-in-out"
								slot="icon"
								xmlns="http://www.w3.org/2000/svg"
								x="0"
								y="0"
								viewBox="0 0 128 128"
								width="100"
								height="100"
							>
								<path
									fill="#fff"
									d="M116.8,59l-16.2-38.8C99,16.4,95.4,14,91.3,14H34.8c-4.1,0-7.8,2.5-9.3,6.4L10.5,59L5,74v19v31h118V93V74 L116.8,59z"
								/>
								<path
									fill="#1fd4af"
									d="M86,31c0-11,9-20,20-20c5.2,0,10,2,13.5,5.3c0.4,0.4-0.7,1-0.9,1.6c-0.1,0.6,0.7,1.3,1,1.7 c0.4,0.5,1.5,1.6,2.4,1.8c0.6,0.1,1.1-0.7,1.2-0.4c1.7,2.9,2.7,6.4,2.7,10c0,11-9,20-20,20S86,42,86,31z"
								/>
								<path
									fill="#fff"
									d="M119.5,16.3l-13.4,15l-4.8-6.2c-1-1.3-2.9-1.5-4.2-0.5c-1.3,1-1.5,2.9-0.5,4.2l7,9c0.5,0.7,1.4,1.1,2.3,1.2 c0,0,0.1,0,0.1,0c0.9,0,1.7-0.4,2.2-1l15.1-17C122.3,19.3,121,17.7,119.5,16.3z"
								/>
								<g>
									<path
										fill="#444b54"
										d="M123 127H5c-1.7 0-3-1.3-3-3V74c0-1.7 1.3-3 3-3h20.9c5.4 0 10.4 2.1 14.2 5.9 2.7 2.7 6.2 4.1 10 4.1h25.9c3.8 0 7.3-1.5 10-4.1 3.8-3.8 8.8-5.9 14.2-5.9H123c1.7 0 3 1.3 3 3v50C126 125.7 124.7 127 123 127zM8 121h112V77h-19.9c-3.8 0-7.3 1.5-10 4.1-3.8 3.8-8.8 5.9-14.2 5.9H50.1c-5.4 0-10.4-2.1-14.2-5.9-2.7-2.7-6.2-4.1-10-4.1H8V121zM10.5 62c-.4 0-.7-.1-1.1-.2-1.5-.6-2.3-2.3-1.7-3.9l15-38.6c2-5 6.7-8.3 12.1-8.3H76c1.7 0 3 1.3 3 3s-1.3 3-3 3H34.8c-2.9 0-5.5 1.8-6.5 4.5l-15 38.6C12.8 61.3 11.7 62 10.5 62z"
									/>
								</g>
							</svg>
						</JobSearchFilterNotifier>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</section>

<section class="w-full h-fit py-20 bg-saftech-white">
	<div
		class="flex flex-col justify-center items-start space-y-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 transition-all ease-in-out"
	>
		<button
			type="button"
			on:click={() => {
				filtered = !filtered
				fetching = true
				timeoutID = setTimeout(() => {
					fetching = false

					if (filtered) {
						filterResults = Math.round(Math.random() * 3)

						return clearTimeout(timeoutID)
					}
				}, 3000)
			}}
			class=" flex justify-between items-center space-x-5 rounded-md bg-normal-blue py-3 px-6 text-sm text-bold text-saftech-white hover:text-saftech-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100"
		>
			<span class="sr-only">Checkout All Job Listings</span>
			Simulate filter states
			<span class="">
				<svg class=" fill-saftech-white" width="25" height="25" viewBox="0 0 42 42"
					><path
						d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
						transform="translate(0 0)"
					/></svg
				>
			</span>
		</button>

		<pre>
      {JSON.stringify($store, null, 2)}
    </pre>
	</div>
</section>

<section class="w-full h-fit py-20 bg-saftech-white">
	<div
		class="flex flex-col justify-center items-start space-y-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 transition-all ease-in-out"
	>
		{#each jobs as { title, reqID, applicationUrl, overview, workingLocations, workingTypes, workingCategories, readAllUrl }, index}
			<JobCard
				{title}
				{reqID}
				{applicationUrl}
				{overview}
				{workingLocations}
				{workingTypes}
				{workingCategories}
				{readAllUrl}
			/>
		{/each}
	</div>
</section>
