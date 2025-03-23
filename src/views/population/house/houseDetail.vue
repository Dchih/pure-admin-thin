<script setup lang="ts">
import { useRouter } from "vue-router";
defineOptions({
  name: "HouseDetail"
});

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="main">
    <el-button type="primary" @click="goBack">返回</el-button>
    <div
      class="w-full text-18px inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      一标三实
    </div>
    <div
      class="w-full border-1 border-dashed border-gray-200 rounded-[5px] p-12px"
    >
      <h4 class="font-500 text-16px">房间信息</h4>
      <div class="flex gap-12px">
        <div class="w-1/2">楼栋房间</div>
        <div class="w-1/2">楼栋房间</div>
      </div>
      <div>
        <span>详细地址：</span>
        <span>{{ "北京市海淀区中关村大街1号" }}</span>
      </div>
    </div>
    <div>
      <div class="w-full text-16px font-500 bg-[#E9F2FD] h-42px leading-42px">
        现住人员
      </div>
      <div class="flex gap-10px content-start items-start flex-wrap">
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
}
</style>
