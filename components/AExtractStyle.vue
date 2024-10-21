<script lang="ts" setup>
import {
  createCache,
  extractStyle,
  legacyLogicalPropertiesTransformer,
  px2remTransformer,
  StyleProvider,
} from 'ant-design-vue'

const cache = createCache()
const app = useNuxtApp()
// Real-time style extraction at ssr
// Pre-rendered extraction styles for ssg
app.hook('app:rendered', () => {
  useHead({
    style: [extractStyle(cache, true)],
  })
})

const px2rem = px2remTransformer()
const removeLinkPreflight: typeof px2rem = {
  visit: css => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (css['&']?.a) delete css['&'].a
    return css
  },
}
</script>

<template>
  <StyleProvider
    :transformers="[legacyLogicalPropertiesTransformer, px2rem, removeLinkPreflight]"
    :cache="cache"
  >
    <slot />
  </StyleProvider>
</template>
