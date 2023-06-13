export async function load() {
	// if (event.url.pathname.startsWith('/job/application')) {
	// 	event.url.searchParams.set('nav_background_optimize', 'true');
	// }
	// if (event.url.pathname === '/') {
	// 	event.url.searchParams.set('nav_background_optimize', 'false');
	// }
	// if (event.url.pathname.startsWith('/news')) {
	// 	event.url.searchParams.set('nav_background_optimize', 'true');
	// }

	// let optimize = event.url.searchParams.get('nav_background_optimize');
	let optimize = false
	return {
		optimize
	};
}
