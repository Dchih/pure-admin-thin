<template>
  <div class="main">
    <div
      class="w-full text-18px inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      一标三实
    </div>
    <div class="flex mb-12px">请选择所属楼栋</div>
    <div>
      <BuildingCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import BuildingCard from "../buildingCard.vue";
defineOptions({
  name: "ThreeReal"
});
</script>

<style scoped>
.main {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
}
</style>
