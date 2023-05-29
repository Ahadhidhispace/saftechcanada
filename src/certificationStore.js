import {writable} from 'svelte/store'

export let certificates = writable({

    "d6e29ddd-b519-4157-b81b-5e2d1c8d0f6e": {
        "name": { "id": 111, "certNameInputValue": "store value", "error": false, "message": "This field is requied" },
        "provider": { "id": 111, "certProviderInputValue": "", "error": false, "message": "This field is requied" },
        "start": { "id": 111, "certStartInputValue": "", "error": false, "message": "This field is requied" },
        "end": { "id": 111, "certEndInputValue": "", "error": false, "message": "This field is requied" },
        "description": { "id": 111, "certDescriptionInputValue": "", "error": false, "message": "This field is requied" }
    },
    })


	// Step 2: Work Experience
	// let job = { error: false, message: 'This field is requied' }
	// let jobInputValue = ''

	// let company = { error: false, message: 'This field is requied' }
	// let companyInputValue = ''

	// let duration = { error: false, message: 'This field is requied' }
	// let durationInputValue = ''

	// //Textarea
	// let experience = { error: false, message: 'This field is requied' }
	// let experienceInputValue = ''