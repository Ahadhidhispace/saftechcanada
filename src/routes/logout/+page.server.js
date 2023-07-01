// @ts-nocheck
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    logout: async ({ locals }) => {

    const { error: err } = await locals.supabase.auth.signOut()
    
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

        throw redirect(303, "/access?user_has_accesskey=true&login_portal=true")
        
    }

}