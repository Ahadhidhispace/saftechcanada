<script>
	// @ts-nocheck

	import { fade, fly, slide } from 'svelte/transition'

	import pdf from '$lib/assets/icons/icons8_pdf.svg'
	import doc from '$lib/assets/icons/icons8_word.svg'
	import text from '$lib/assets/icons/icons8_document.svg'
	import bgDefault from '$lib/assets/icons/icons8_upload_to_the_cloud.svg'

	let validFileTypes = ['.pdf', '.PDF', '.doc', '.DOC', '.docx', '.DOCX', '.txt', '.TXT']
	let extension = ''
	let extImage = 'bgDefault'

	$: supportedFileType = validFileTypes.includes(extension) || true
	/**
	 * @type {{ name: string; }[]}
	 */
	export let bindFile
	export let docName = ''
	export let square = true // determine whether upload file component should render in square or landscape

	$: switch (extension) {
		case '.pdf':
			extImage = pdf
			break
		case '.docx':
			extImage = doc
			break
		case '.txt':
			extImage = text
			break

		default:
			extImage = bgDefault

			break
	}
</script>

<input
	bind:files={bindFile}
	on:change={() => {
		//supportedFileType = true
		bindFile
			? validFileTypes.forEach((type) => {
					if (bindFile[0].name.endsWith(type)) {
						extension = type
						//supportedFileType = validFileTypes.includes(extension)
					} else {
						extImage = bgDefault
						//supportedFileType = validFileTypes.includes(extension)
					}
			  })
			: ''
	}}
	type="file"
	name={docName}
	id={docName}
	accept=".pdf, .doc, .docx, .txt"
	class="peer sr-only"
/>
<label
	for={docName}
	tabindex="-1"
	class=" {square === false
		? 'relative flex items-center w-[85%] h-full leading-3'
		: 'relative flex flex-col justify-center items-center h-[80%] w-[40%] '} bg-saftech-white bg-saftech-black/5 rounded-lg space-y-4 mt-4 hover:cursor-pointer peer-focus:outline peer-focus:outline-normal-blue peer-focus:outline-4 peer-focus:border-saftech-white scale-100 peer-focus:scale-95 peer-focus:border-solid outline-4 ring-4 transition-all duration-300 ease-out"
>
	{#key extImage}
		<div
			in:fade={{ duration: 300, delay: 250 }}
			out:fade={{ duration: 250 }}
			style="background-image: url('{extImage}');"
			class="{square === false
				? ' flex-shrink-0 absolute top-1/2 -translate-y-1/2 left-6 w-20 h-20'
				: 'absolute -mt-8 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-24 h-24'}  bg-contain bg-center bg-no-repeat"
		/>
	{/key}
	{#key extImage}
		<h2
			class=" {square === false
				? 'absolute top-6 left-[120px] w-[70%] '
				: 'flex flex-col  justify-center items-center pt-20'}   "
		>
			<span
				class=" {square === false
					? 'text-left block'
					: 'text-center'}  font-bold text-xl text-saftech-black/80"
			>
				{#if supportedFileType}
					{extImage != bgDefault && extImage != 'bgDefault'
						? 'Document Attached!'
						: `Upload ${docName}`}
				{:else}
					Unsupported Type
				{/if}
			</span>
			<span
				class="{square === false
					? 'text-left'
					: 'text-center'}  text-xs font-normal max-w-[40ch] text-saftech-black/50"
			>
				{extImage != bgDefault && extImage != 'bgDefault'
					? `You have chosen a ${extension} file`
					: `Browse for attaching ${docName} file if any`}
			</span>
		</h2>
	{/key}
</label>
