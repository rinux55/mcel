import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                mono: ['VT323', 'monospace']
            },
            colors: {
                black: '#161519'
            }
        }
    }
}
