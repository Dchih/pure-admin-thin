<script setup lang="ts">
import { ref } from "vue";
import SuspectedMovedOut from "./tabs/SuspectedMovedOut.vue";
import ConfirmedMovedOut from "./tabs/ConfirmedMovedOut.vue";
import CancelUser from "./tabs/CancelUser.vue";

defineOptions({
  name: "MovedOut"
});

const activeTab = ref(0);

const tabs = [
  {
    label: "疑似搬离",
    index: 0,
    component: SuspectedMovedOut
  },
  {
    label: "确认搬离",
    index: 1,
    component: ConfirmedMovedOut
  },
  {
    label: "注销用户",
    index: 2,
    component: CancelUser
  }
];
</script>

<template>
  <div class="main">
    <div
      class="w-full text-18px inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      搬离住户
    </div>
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.index"
        :label="tab.label"
        :name="tab.index"
      >
        <component :is="tab.component" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.main {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
}
</style>
