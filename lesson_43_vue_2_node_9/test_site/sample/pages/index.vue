<template>
  <div>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    <h1>pages/index.vue</h1>
    <nuxt-link :to="{ name:'index' }">
      pages/index.vue
    </nuxt-link>
    <nuxt-link :to="{ name:'team' }" no-prefetch>
      pages/team/index.vue
    </nuxt-link>
    <nuxt-link :to="{ name:'team-about' }" no-prefetch>
      pages/team/about.vue
    </nuxt-link>
    <nuxt-link :to="{ name:'users-id', params: {id:1, test:2} }" no-prefetch>
      User id link
    </nuxt-link>
  </div>
</template>
