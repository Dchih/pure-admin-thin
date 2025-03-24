<script setup lang="ts">
import User from "@iconify-icons/ri/user-3-fill";

defineOptions({
  name: "HouseManageCard"
});

// 定义标签类型
type StatusType = "at-home" | "out";

// 示例数据
const residents = [
  { name: "张三", status: "at-home" as StatusType },
  { name: "李四", status: "out" as StatusType },
  { name: "王五", status: "at-home" as StatusType }
];
</script>

<template>
  <div class="bg-white rounded-md p-15px shadow-md mb-15px w-328px">
    <div class="text-16px font-500 mb-10px">{{ "房间号101" }}</div>
    <div class="text-14px mb-10px">
      住户数：<span>{{ residents.length }}</span>
    </div>
    <div class="flex gap-8px">
      <div
        v-for="(resident, index) in residents"
        :key="index"
        class="flex items-center text-14px"
      >
        <IconifyIconOffline :icon="User" class="mr-5px text-[#267FEB]" />
        <span class="mr-10px">{{ resident.name }}</span>
        <span
          class="text-10px px-8px py-2px rounded-full text-white"
          :class="[
            resident.status === 'at-home' ? 'bg-[#267FEB]' : 'bg-[#FF4D4F]'
          ]"
        >
          {{ resident.status === "at-home" ? "居家" : "外出" }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
