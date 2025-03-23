<template>
  <div class="main">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>实时抓拍</span>
        </div>
      </template>
      <div class="card-content">实时抓拍页面内容</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "RealTimeCapture"
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
