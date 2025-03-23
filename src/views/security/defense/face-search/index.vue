<script setup lang="ts">
defineOptions({
  name: "FaceSearch"
});
</script>

<template>
  <div class="main">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>人像检索</span>
        </div>
      </template>
      <div class="card-content">人像检索页面内容</div>
    </el-card>
  </div>
</template>

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
