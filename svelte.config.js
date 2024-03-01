
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    },
    preprocess: preprocess(),
    vite: {
        resolve: {
            alias: {
                $lib: path.resolve('./src/lib'),
            },
        },
    },
};

export default config;


// //YRS: Hieronder vind je de code die werkt voordat ik TailwindCSS heb geinstalleerd. Hierboven staat de code die ik heb aangepast nadat ik TailwindCSS heb geinstalleerd.

// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//     kit: {
//      // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
//      // If your environment is not supported or you settled on a specific environment, switch out the adapter.
//      // See https://kit.svelte.dev/docs/adapters for more information about adapters.
//         adapter: adapter(),
//     },
//     preprocess: preprocess()
// };

// export default config;

