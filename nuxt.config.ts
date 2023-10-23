// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@bg-dev/nuxt-naiveui",
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/image',
        'nuxt-icon',
        '@vee-validate/nuxt',
    ],
    srcDir: 'src/',
    css: ['@/assets/css/style.css'],

    image: {
        dir: 'assets/images',
        screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
            '2xl': 1536
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        layoutTransition: { name: "layout", mode: "out-in" },
    },
})
