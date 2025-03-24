<template>
  <div class="main">
    <div
      class="w-full text-18px inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      实时抓拍
    </div>
    <div class="flex gap-12px">
      <div class="flex items-center gap-12px">
        <span>出现时间：</span>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
      <div class="flex items-center gap-12px">
        <span>出现地点：</span>
        <el-input v-model="location" placeholder="请输入地点" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "RealTimeCapture"
});

const dateRange = ref<[string, string]>(["", ""]);
const location = ref("");
</script>

<style scoped>
.main {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
}
.box-card {
  width: 100%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-content {
  padding: 10px 0;
}
</style>
