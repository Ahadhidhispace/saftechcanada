// @ts-nocheck
import { error, redirect } from "@sveltejs/kit"

export const POST = async ({ locals }) => {
    const { error: err } = await locals.supabase.auth.signOut()
    
    if (err) {
        throw error(500, "Something went wrong logging you out.")
    }


    // url.searchParams.set('user_has_accesskey', true)
    // url.searchParams.set('login_portal', true)
    throw redirect(303, "/access?user_has_accesskey=true&login_portal=true")
}