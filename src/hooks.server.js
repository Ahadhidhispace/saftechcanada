export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/job/application')) {
		console.log('This is the right page');
		event.url.searchParams.set('nav_background_optimize', 'true');
	}
	return await resolve(event);

	// const response =
	// // event.locals.optimize = 'true'

	// return response
}
