<script setup lang="ts">
import User from "@iconify-icons/ep/user";
import type { PersonCardProps } from "../type";

defineOptions({
  name: "PersonCard"
});

const emit = defineEmits(["faceSearch"]);

const faceSearch = () => {
  emit("faceSearch");
};

defineProps<{ data: PersonCardProps }>();
</script>
<template>
  <div
    class="flex gap-6px w-388px h-160px hover:shadow-xl hover:shadow-[rgba(38,127,235,0.15)] transition-shadow duration-300 bg-[#f5f5f5] rounded-[5px]"
  >
    <div class="relative">
      <img
        src=""
        alt=""
        class="w-110px h-140px rounded-[5px] rounded-tl-[10px] rounded-tr-[10px]"
      />
      <div
        class="absolute bottom-20px text-left text-white bg-[#000] p-[0px_4px] flex items-center text-[14px]"
      >
        <IconifyIconOffline :icon="User" class="mr-1" />{{ data.personName }}
      </div>
      <div
        class="absolute bottom-0 w-full h-20px leading-20px text-[#fff] text-center bg-[rgba(0,0,0,.5)] text-[14px] rounded-bl-[10px] rounded-br-[10px]"
      >
        {{ data.movedOutTime }}
      </div>
    </div>
    <div
      class="flex flex-col justify-around p-[10px_0] text-[14px] text-[#000]"
    >
      <div class="flex items-center">
        <span class="w-70px text-left">编号：</span>
        <span class="">{{ data.personNumber || "/" }}</span>
      </div>
      <div class="flex items-center">
        <span class="w-70px text-left">出现时间：</span>
        <span class="">{{ data.appearTime || "/" }}</span>
      </div>
      <div class="flex items-center" :title="data.appearAddress">
        <span class="w-70px text-left">出现地点：</span>
        <span class="max-w-190px truncate">{{
          data.appearAddress || "/"
        }}</span>
      </div>
      <div class="flex items-center" :title="data.address">
        <span class="w-70px text-left">住址：</span>
        <span class="max-w-190px truncate">{{ data.address || "/" }}</span>
      </div>
      <div class="flex items-center">
        <span class="w-70px text-left">档案标签：</span>
        <div
          class="max-w-190px truncate inline-flex items-center"
          :title="data.tagList?.map(item => item.tagName).join('、')"
        >
          <template v-if="data.tagList && data.tagList.length > 0">
            <span>{{ data.tagList.map(item => item.tagName).join("、") }}</span>
            <img
              src="@/assets/svg/card/add.svg"
              alt=""
              class="w-14px h-14px ml-4px"
            />
          </template>
        </div>
      </div>
      <div class="flex justify-end items-center w-full mt-4px">
        <div
          class="inline-flex p-[0px_6px] h-22px leading-22px font-500 text-12px text-[#267FEB] border-1 border-[#267FEB] rounded-[5px] bg-[#fff] hover:bg-[#267FEB] hover:text-[#fff] transition-colors duration-300 cursor-pointer"
          @click="faceSearch"
        >
          人像检索
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
