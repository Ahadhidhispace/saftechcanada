// @ts-nocheck
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        
        // eslint-disable-next-line no-unused-vars
        const { data, error: err } = await locals.supabase.auth.signInWithPassword({
            email: body.email,
            password: body.password
        })

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid Credentials'
                })
            }
            return fail(500, {
                message: 'Server error. Please try again later.'
            })
        }

        throw redirect(303, "/")
    },
}