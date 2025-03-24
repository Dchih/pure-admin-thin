<script setup lang="ts">
import { useRouter } from "vue-router";

defineOptions({
  name: "HouseDetailCard"
});

const router = useRouter();

const emit = defineEmits(["checkResidentDetail"]);

const checkResidentDetail = () => {
  // emit("checkResidentDetail");
  router.push({ name: "ResidentManage" });
};
</script>

<template>
  <div
    class="w-646px h-200px rounded-[5px] bg-[#f5f5f5] shadow-md flex overflow-hidden"
  >
    <img src="" alt="" class="w-150px h-full object-cover rounded-[5px]" />
    <div class="flex flex-col justify-between flex-1 p-15px pl-25px">
      <div class="grid grid-cols-2 gap-x-20px gap-y-0 text-14px">
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">姓名：</span>
          <span>张三</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">性别：</span>
          <span>男</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">民族：</span>
          <span>汉族</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">国籍：</span>
          <span>中国</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">出生年月：</span>
          <span>1990-01-01</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">婚姻状况：</span>
          <span>已婚</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">文化程度：</span>
          <span>本科</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">联系电话：</span>
          <span>13800138000</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">证件类型：</span>
          <span>身份证</span>
        </div>
        <div class="flex items-center h-24px">
          <span class="w-80px text-left">证件号码：</span>
          <span>123456789012345678</span>
        </div>
      </div>

      <div class="flex items-center text-14px h-24px">
        <span class="w-80px text-left">户籍地址：</span>
        <span class="flex-1 break-all">北京市海淀区中关村大街1号</span>
      </div>
      <div class="flex justify-between items-center text-14px h-24px">
        <div class="flex items-center">
          <span class="w-80px text-left">居住时间：</span>
          <span>2020-01-01</span>
        </div>
        <div
          class="inline-flex p-[0px_6px] h-22px leading-22px font-500 text-12px text-[#267FEB] border-1 border-[#267FEB] rounded-[5px] bg-[#fff] hover:bg-[#267FEB] hover:text-[#fff] transition-colors duration-300 cursor-pointer"
          @click="checkResidentDetail"
        >
          查看住户详情
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
