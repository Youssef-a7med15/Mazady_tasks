export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        head: {
            title:`Mazaady`,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: "theme-color", content: "#d20653" }
            ],
            link: [
                { rel: `icon`, href: `/favicon.png` },
                { rel: `pple-touch-icon`, href: `/favicon.png` },
            ],
        },
    },

    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css",
        "~/assets/scss/main.scss",
    ],

    plugins: [
        { src: '~/plugins/bootstrap.ts', mode: 'client' },
    ],

    runtimeConfig: {
        public: {
            private_key: process.env.PRIVATE_KEY,
        }
    }
});