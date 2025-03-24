<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import RoomCard from "./card.vue";
defineOptions({
  name: "HouseManage"
});

const router = useRouter();
const activeFloor = ref(1); // 默认第一层为活动状态

const setActiveFloor = (floor: number) => {
  activeFloor.value = floor;
};

const checkRealResident = () => {
  router.push({ name: "HouseDetail" });
};

const checkUnRealResident = () => {
  router.push({ name: "HouseDetail" });
};

// 假设有10层楼
const floors = Array.from({ length: 10 }, (_, i) => i + 1);
</script>

<template>
  <div class="main">
    <div
      class="w-full text-18px inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      房间管理
    </div>
    <div
      class="w-full h-150px border-2 border-dashed border-gray-200 p-[12px_16px] flex flex-col gap-12px"
    >
      <h4 class="font-500 text-16px">{{ "XXXX楼栋" }}</h4>
      <div class="flex gap-20px">
        <div class="font-400 text-14px">
          楼层数：<span>{{ 10 }}</span>
        </div>
        <div class="font-400 text-14px">
          房间数：<span>{{ 10 }}</span>
        </div>
        <div class="font-400 text-14px">
          空置数：<span>{{ 10 }}</span>
        </div>
        <div class="font-400 text-14px">
          使用数：<span>{{ 10 }}</span>
        </div>
      </div>
      <div class="flex gap-20px">
        <div class="font-400 text-14px">
          住户数：<span>{{ 10 }}</span>
        </div>
        <div class="font-400 text-14px">
          常住人口：<span>{{ 10 }}</span>
        </div>
        <div class="font-400 text-14px">
          实名：<span>{{ 10 }}</span>
        </div>
      </div>
      <div class="flex justify-between w-full">
        <div class="font-400 text-14px">
          详细地址：<span>{{ "北京市海淀区中关村大街1号" }}</span>
        </div>
        <div class="flex gap-10px">
          <div
            class="inline-flex p-[0px_6px] h-22px leading-22px font-500 text-12px text-[#267FEB] border-1 border-[#267FEB] rounded-[5px] bg-[#fff] hover:bg-[#267FEB] hover:text-[#fff] transition-colors duration-300 cursor-pointer"
            @click="checkRealResident"
          >
            实名住户
          </div>
          <div
            class="inline-flex p-[0px_6px] h-22px leading-22px font-500 text-12px text-[#267FEB] border-1 border-[#267FEB] rounded-[5px] bg-[#fff] hover:bg-[#267FEB] hover:text-[#fff] transition-colors duration-300 cursor-pointer"
            @click="checkUnRealResident"
          >
            未实名住户
          </div>
        </div>
      </div>
    </div>
    <!-- 楼层按钮和房间卡片的布局 -->
    <div class="flex mt-15px gap-20px">
      <!-- 左侧楼层按钮列表 -->
      <div
        data-name="floor-list"
        class="w-120px p-10px bg-white rounded-md shadow-lg border-1 border-gray-100"
      >
        <div class="grid grid-cols-2 gap-10px">
          <div
            v-for="floor in floors"
            :key="floor"
            class="relative flex items-center justify-center w-40px h-40px rounded-full bg-white border-1 border-[#e0e0e0] cursor-pointer hover:shadow-lg transition-all duration-300"
            @click="setActiveFloor(floor)"
          >
            <div
              class="absolute w-36px h-36px rounded-full flex items-center justify-center"
              :class="[activeFloor === floor ? 'bg-[#267FEB]' : 'bg-white']"
            >
              <span
                class="text-14px font-500"
                :class="[activeFloor === floor ? 'text-white' : 'text-[#333]']"
                >{{ floor }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧房间卡片列表（占位，待实现） -->
      <div
        class="flex-1 min-h-[calc(100vh-460px)] bg-gray-50 rounded-md p-15px"
      >
        <RoomCard />
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
