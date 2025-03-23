<script setup lang="ts">
defineOptions({
  name: "AccessRecords"
});
</script>

<template>
  <div class="main">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>通行记录</span>
        </div>
      </template>
      <div class="card-content">通行记录页面内容</div>
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
