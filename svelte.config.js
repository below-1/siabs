import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-auto';
// import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		prerender: {
			enabled: false
		}
	}
};

export default config;
