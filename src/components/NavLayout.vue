<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot>插槽</slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NavLayout'
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    flex-grow: 1;
    overflow: auto;
  }
</style>