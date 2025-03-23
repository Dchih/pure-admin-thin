<script setup lang="ts">
defineOptions({
  name: "BuildingCard"
});

const emit = defineEmits(["routeToResident", "routeToRoom"]);

const routeToResident = () => {
  emit("routeToResident");
};

const routeToRoom = () => {
  emit("routeToRoom");
};
</script>

<template>
  <div
    class="w-368px flex flex-col p-15px bg-[#f5f5f5] rounded-[5px] shadow-md hover:shadow-xl hover:shadow-[rgba(38,127,235,0.15)] transition-shadow duration-300"
  >
    <div class="text-16px font-bold text-[#000] mb-10px">{{ "楼栋" }}</div>
    <div class="grid grid-cols-2 gap-6px mb-15px text-14px">
      <div class="text-left">房屋：{{ 101 }}间</div>
      <div />
      <div class="text-left">空置：{{ 11 }}间</div>
      <div class="text-left">使用：{{ 99 }}间</div>
      <div class="text-left">住户：{{ 110 }}户</div>
      <div class="text-left">常住人口：{{ 220 }}人</div>
      <div class="text-left">实名：{{ 220 }}人</div>
      <div class="text-left">未实名：{{ 220 }}人</div>
    </div>
    <div class="flex gap-10px mt-5px justify-end">
      <div
        class="inline-flex p-[0px_6px] h-22px leading-22px font-500 text-12px text-[#267FEB] border-1 border-[#267FEB] rounded-[5px] bg-[#fff] hover:bg-[#267FEB] hover:text-[#fff] transition-colors duration-300 cursor-pointer"
        @click="routeToResident"
      >
        住户管理
      </div>
      <div
        class="inline-flex p-[0px_6px] h-22px leading-22px font-500 text-12px text-[#267FEB] border-1 border-[#267FEB] rounded-[5px] bg-[#fff] hover:bg-[#267FEB] hover:text-[#fff] transition-colors duration-300 cursor-pointer"
        @click="routeToRoom"
      >
        房间管理
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
