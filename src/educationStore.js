import {writable} from 'svelte/store'

export let educationCollection = writable({

    "bdd6047b-e6c1-4ead-a8ae-aed3c2bb022b": {
        "job": { "id": 111, "jobInputValue": "store value", "error": false, "message": "This field is requied" },
        "company": { "id": 111, "companyInputValue": "", "error": false, "message": "This field is requied" },
        "duration": { "id": 111, "durationInputValue": "", "error": false, "message": "This field is requied" },
        "experience": { "id": 111, "experienceInputValue": "", "error": false, "message": "This field is requied" }
    }
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