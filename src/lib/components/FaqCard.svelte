<script>
	let faqActive = false;

	export let count = '00';
	export let question = 'How many employees do you have?';
	export let answer =
		'There are locations in the United states of america as well as ationally yguygidh here are locations in the United states of america as well as ationally.';

	function toggleFAQ() {
		faqActive = !faqActive;
	}
</script>

<button
	on:click={toggleFAQ}
	class="w-full h-full flex justify-center items-start cursor-pointer text-left rounded-md {faqActive ===
	true
		? 'bg-normal-blue'
		: 'bg-saftech-white'}  shadow-sm py-6 mr-6 max-w-7xl px-2 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out"
>
	<div class="relative flex justify-center items-start space-y-1 flex-col w-full h-auto">
		<div class="flex items-start w-full mr-6">
			<div class="flex justify-start items-start w-20 h-16 flex-shrink-0">
				<span
					class="text-5xl font-bold {faqActive === true
						? 'text-saftech-white'
						: 'text-saftech-gray'} transition-all duration-500 ease-in-out">{count}</span
				>
			</div>
			<div>
				<div class=" line-clamp-1">
					<span
						class=" block text-2xl font-bold lg:w-full {faqActive === true
							? 'text-saftech-white'
							: 'text-saftech-black/80'} transition-all duration-500 ease-in-out">{question}</span
					>
				</div>
				<div
					class=" {faqActive === true
						? 'line-clamp-none mt-4'
						: 'line-clamp-1'} transition-all duration-500 ease-in-out"
				>
					<span
						class=" block text-sm lg:text-base w-full {faqActive === true
							? 'text-saftech-white'
							: 'text-saftech-black/50'} transition-all duration-500 ease-in-out">{answer}</span
					>
				</div>
			</div>

			<div class=" flex justify-end items-center w-16 h-16 flex-shrink-0">
				<svg
					class=" {faqActive === true
						? '-rotate-90 fill-saftech-white'
						: 'rotate-90 fill-normal-blue'}   cursor-pointer transition-all duration-500 ease-in-out"
					width="30"
					height="30"
					viewBox="0 0 42 42"
					><path
						d="M0,21A21,21,0,1,0,21,0,21,21,0,0,0,0,21Zm19.77,9.926a1.966,1.966,0,0,1-2.781-2.781l7.137-7.137-7.137-7.137a1.966,1.966,0,1,1,2.781-2.781L28.3,19.605a1.961,1.961,0,0,1,0,2.781Z"
						transform="translate(0 0)"
					/></svg
				>
			</div>
		</div>
	</div>
</button>
