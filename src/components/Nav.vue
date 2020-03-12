<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  nav {
    @extend %outerShadow;
    padding: 2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .icon {
      width: 2.5em;
      height: 2.5em;
    }
    .selected{
      color: $color-highLight;
    }
  }

</style>