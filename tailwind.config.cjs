/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svg,html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'deep-blue': '#001B48',
				'dark-blue': '#02457A',
				'normal-blue': '#018ABE',
				'light-blue': '#97CADB',
				'weak-blue': '#D6E7EE',
				'saftech-black': '#353A40',
				'saftech-gray': '#ADB6BD',
				'saftech-white': '#F5F5F5'
			},
			content: {
				link: 'url("lib/assets/icons/icons8_sort_down_6.svg")',
				pdf: 'url("lib/assets/icons/icons8_pdf.svg")',
				doc: 'url("lib/assets/icons/icons8_word.svg")',
				text: 'url("lib/assets/icons/icons8_document.svg")',
				default: 'url("lib/assets/icons/icons8_upload_to_the_cloud.svg")',
				ticky: 'url("lib/assets/icons/icons8_tiktok_verified_account.svg")'
			},
			backgroundImage: {
				pdf: 'url("lib/assets/icons/icons8_pdf.svg")',
				doc: 'url("lib/assets/icons/icons8_word.svg")',
				text: 'url("lib/assets/icons/icons8_document.svg")',
				default: 'url("lib/assets/icons/icons8_upload_to_the_cloud.svg")',
				ticky: 'url("lib/assets/icons/icons8_tiktok_verified_account.svg")'
			},
			lineClamp: {
				7: '7'
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('daisyui'),
		require('tailwind-scrollbar')
	]
};
