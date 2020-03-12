<template>
 <NavLayout>
  <ul class="tags">
   <li>衣</li>
   <li>食</li>
   <li>住</li>
   <li>行</li>
  </ul>
  <button class="addTag">新增标签</button>
  <div class="notes">
   <label>
    <span>备注:</span>
    <input type="text" value="" placeholder="在这里添加备注">
   </label>
  </div>
  <div class="options">
   <div>支出</div>
   <div>收入</div>
  </div>
  <div class="view">100</div>
  <ul>
   <li>1</li>
   <li>2</li>
   <li>3</li>
   <li>删除</li>
   <li>4</li>
   <li>5</li>
   <li>6</li>
   <li>清空</li>
   <li>7</li>
   <li>8</li>
   <li>9</li>
   <li>OK</li>
   <li>0</li>
   <li>.</li>
  </ul>
 </NavLayout>
</template>

<script lang="ts">
  export default {
    name: 'Money'
  };
</script>

<style lang="scss" scoped>
 .tags {
  display: flex;
  text-align: center;
  padding: 8px 16px;
  font-size: 16px;

  > li {
   background-color: #c4c4c4;
   $h: 24px;
   height: $h;
   padding: 0 8px;
   border-radius: $h/2;
   margin-right: 16px;


  }
 }
</style>