import {writable} from 'svelte/store'

export let workExperiences = writable({

    "bdd6047b-e6c1-4ead-a8ae-aed3c2bb022b": {
        "job": { "id": 111, "jobInputValue": "store value", "error": false, "message": "This field is requied" },
        "company": { "id": 111, "companyInputValue": "", "error": false, "message": "This field is requied" },
        "duration": { "id": 111, "durationInputValue": "", "error": false, "message": "This field is requied" },
        "experience": { "id": 111, "experienceInputValue": "", "error": false, "message": "This field is requied" },

    },
    "805e7979-f998-4df6-849f-136fe90322e5": {
        "job": { "id": 222, "jobInputValue": "", "error": false, "message": "This field is requied" },
        "company": { "id": 222, "companyInputValue": "", "error": false, "message": "This field is requied" },
        "duration": { "id": 222, "durationInputValue": "", "error": false, "message": "This field is requied" },
        "experience": { "id": 222, "experienceInputValue": "", "error": false, "message": "This field is requied" }
    },
    "b1319378-12a0-432e-b116-2be98cdb2953": {
        "job": { "id": 333, "jobInputValue": "", "error": false, "message": "This field is requied" },
        "company": { "id": 333, "companyInputValue": "", "error": false, "message": "This field is requied" },
        "duration": { "id": 333, "durationInputValue": "", "error": false, "message": "This field is requied" },
        "experience": { "id": 333, "experienceInputValue": "", "error": false, "message": "This field is requied" }
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