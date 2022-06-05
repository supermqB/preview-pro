<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :loading="loading"
    :menu-data="menuData"
    :breadcrumb="{ routes: breadcrumb }"
    disable-content-margin
    style="min-height: 100vh"
    iconfont-url="//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js"
    v-bind="proConfig"
  >
    <template #menuHeaderRender>
      <router-link :to="{ path: '/' }">
        <img src="https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg" />
        <h1>Preview Pro</h1>
      </router-link>
    </template>
    <template #rightContentRender>
      <RightContent :current-user="currentUser" />
    </template>
    <!-- custom breadcrumb itemRender  -->
    <template #breadcrumbRender="{ route, params, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="{ path: route.path, params }">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
    <SettingDrawer v-model="proConfig" />
    <RouterView v-slot="{ Component, route }">
      <transition name="slide-left" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
    <template #footerRender>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </template>
    <!--GlobalFooter
      :links="[
        { title: 'Link 1', href: '#' },
        { title: 'Link 2', href: '#' },
      ]"
      copyright="Pro Layout &copy; 2021 Sendya."
    /-->
  </pro-layout>
</template>

<script setup lang="ts">
import { useRouter, RouterView, RouterLink } from 'vue-router';
import {
  getMenuData,
  clearMenuItem,
  type RouteContextProps,
  GlobalFooter,
} from '@ant-design-vue/pro-layout';

const router = useRouter();
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));

const state = reactive<Omit<RouteContextProps, 'menuData'>>({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [], // default selectedKeys
});
const loading = ref(false);
const proConfig = ref({
  layout: 'top',
  navTheme: 'light',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: true,
});
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map(item => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title || '',
    };
  }),
);
const currentUser = reactive({
  nickname: 'Admin',
  avatar: 'A',
});

watch(
  router.currentRoute,
  () => {
    const matched = router.currentRoute.value.matched.concat();
    state.selectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path);
    state.openKeys = matched
      .filter(r => r.path !== router.currentRoute.value.path)
      .map(r => r.path);
  },
  {
    immediate: true,
  },
);
</script>
<style lang="scss">
@mixin flex-column-fullexpand {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.ant-layout main {
  @include flex-column-fullexpand;
  .ant-pro-page-container {
    @include flex-column-fullexpand;
    .ant-pro-grid-content {
      @include flex-column-fullexpand;
      .ant-pro-grid-content-children {
        @include flex-column-fullexpand;
        > div {
          @include flex-column-fullexpand;
          .ant-pro-page-container-children-content {
            @include flex-column-fullexpand;
            > div {
              @include flex-column-fullexpand;
            }
          }
        }
      }
    }
  }
}
</style>
