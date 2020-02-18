<template>
  <div>
    <div>Users list</div>
    <nuxt-link :to="{ name:'users-id', params: {id:1, test:2} }" no-prefetch>
      User id
    </nuxt-link>
    <nuxt-link :to="{ name:'users-id', params: {id:2, test:2} }" no-prefetch>
      User id
    </nuxt-link>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  export default {
    layout: 'users'
  }
</script>
