import { defineConfig } from '@velor2012/meta'

export default defineConfig({
  compile: 'swc',
  cssMinify: 'parcelCss',
  jsMinify: 'esbuild',
  singlePack: true,
})
