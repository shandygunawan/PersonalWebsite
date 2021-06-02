<template>
  <router-view v-slot="slotProps">
    <transition name="scale" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.7s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
