import { defineConfig as defineTanStackConfig } from '@lovable.dev/vite-tanstack-config'
import { defineConfig } from 'vite'

export default defineConfig((env) =>
  defineTanStackConfig({
    tanstackStart: { server: { entry: 'server' } },
  })(env),
)
