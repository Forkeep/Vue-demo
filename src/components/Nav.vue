<template>
  <div>
    <router-link to="/money">
      <icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels">
      <icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics">
     <icon name="statistics"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>

</style>