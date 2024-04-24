import { defineConfig, ConfigEnv } from 'vite';

export default defineConfig((_configEnv: ConfigEnv) => {
    return {
        server: {
            Port: 3000,
            strictPort: true,
            hmr: {
                 protocol: 'ws',
                 host: 'localhost'
            },
        },
        base: './'    
    }
});