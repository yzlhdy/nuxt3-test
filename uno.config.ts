import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
    presetWebFonts
} from 'unocss'

export default defineConfig({
    shortcuts: [
        [
            'btn',
            'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
        [
            'icon-btn',
            'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
        ],
        [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-4 px-4 rounded-lg border-none`],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: 'DM Serif Display',
                mono: 'DM Mono',
            }
        })
    ],
    rules: [
        ['p-c',
            {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%)`
            },
        ]
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    theme: {
        colors: {
            dark: '#18181c',
            primary: "var(--primary)",
            success: "var(--success)"
        },
        breakpoints: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1300px',
        }
    },
})