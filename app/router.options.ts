import type { RouterConfig } from '@nuxt/schema'
import { localizeRoutes, type I18nRoutingOptions } from 'vue-i18n-routing'
import type { RouteRecordRaw } from 'vue-router'
import { nuxtI18nOptions } from '#build/i18n.options.mjs'

declare module 'vue-i18n-routing' {
  export function localizeRoutes(
    routes: RouteRecordRaw[],
    options?: I18nRoutingOptions & {
      includeUprefixedFallback?: boolean
      optionsResolver?: RouteOptionsResolver
    }
  ): RouteRecordRaw[]
}

export default {
  routes: _routes =>
    localizeRoutes(
      [
        {
          name: 'Home',
          path: '/',
          component: () => import('@/pages/home/page.vue'),
        },
        {
          name: 'About',
          path: '/about',
          component: () => import('@/pages/about/page.vue'),
        },
      ],
      nuxtI18nOptions
    ),
} satisfies RouterConfig
