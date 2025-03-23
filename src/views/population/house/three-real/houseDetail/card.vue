<script setup lang="ts">
defineOptions({
  name: "HouseDetailCard"
});
</script>

<template>
  <div class="p-15px rounded-[5px] bg-[#f5f5f5] shadow-md">
    <img src="" alt="" class="mb-10px rounded-[5px] w-full" />
    <div>
      <div class="grid grid-cols-2 gap-x-20px gap-y-10px mb-15px text-14px">
        <div class="flex">
          <span class="w-80px text-left">姓名：</span>
          <span>张三</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">性别：</span>
          <span>男</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">民族：</span>
          <span>汉族</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">国籍：</span>
          <span>中国</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">出生年月：</span>
          <span>1990-01-01</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">婚姻状况：</span>
          <span>已婚</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">文化程度：</span>
          <span>本科</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">联系电话：</span>
          <span>13800138000</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">证件类型：</span>
          <span>身份证</span>
        </div>
        <div class="flex">
          <span class="w-80px text-left">证件号码：</span>
          <span>123456789012345678</span>
        </div>
      </div>

      <div class="flex mb-6px text-14px">
        <span class="w-80px text-left">户籍地址：</span>
        <span class="flex-1 break-all">北京市海淀区中关村大街1号</span>
      </div>
      <div class="flex text-14px">
        <span class="w-80px text-left">居住时间：</span>
        <span>2020-01-01</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
