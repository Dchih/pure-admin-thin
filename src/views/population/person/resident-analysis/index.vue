<template>
  <div class="main">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>住户分析</span>
        </div>
      </template>
      <div class="card-content">住户分析页面内容</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ResidentAnalysis"
});
</script>

<style scoped>
.main {
  padding: 15px;
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
