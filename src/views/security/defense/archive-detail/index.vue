<script setup lang="ts">
import { ref, computed } from "vue";

defineOptions({
  name: "ArchiveDetail"
});

const date = ref<[string, string]>(["", ""]);

// 按日期分组的抓拍记录数据
const groupedList = ref(new Map<string, any[]>());

// 初始化模拟数据
groupedList.value = new Map([
  [
    "2024-01-01",
    [
      {
        captureTime: "2024-01-01 10:00:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      },
      {
        captureTime: "2024-01-01 12:30:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      }
    ]
  ],
  [
    "2024-01-02",
    [
      {
        captureTime: "2024-01-02 09:15:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      },
      {
        captureTime: "2024-01-02 14:20:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      },
      {
        captureTime: "2024-01-02 16:45:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      }
    ]
  ],
  [
    "2024-01-03",
    [
      {
        captureTime: "2024-01-03 11:10:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      }
    ]
  ],
  [
    "2024-01-04",
    [
      {
        captureTime: "2024-01-04 11:10:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      }
    ]
  ],
  [
    "2024-01-05",
    [
      {
        captureTime: "2024-01-05 11:10:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      }
    ]
  ],
  [
    "2024-01-06",
    [
      {
        captureTime: "2024-01-06 11:10:00",
        captureImage: "https://img.yzcdn.cn/vant/ipad.png",
        captureAddress: "北京市顺义区X小区X栋X单元X室"
      }
    ]
  ]
]);

// 将Map转换为按日期排序的数组，从近到远
const sortedGroupList = computed(() => {
  const entries = Array.from(groupedList.value.entries());
  // 按日期从近到远排序
  return entries.sort(
    (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime()
  );
});

// 格式化时间
const formatTime = (timeStr: string) => {
  const date = new Date(timeStr);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

// 按日期格式化展示名称
const formatDateDisplay = (dateStr: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const date = new Date(dateStr);
  date.setHours(0, 0, 0, 0);

  if (date.getTime() === today.getTime()) {
    return "今天";
  } else if (date.getTime() === yesterday.getTime()) {
    return "昨天";
  } else {
    return dateStr;
  }
};

const handleDateChange = (value: any) => {
  console.log(value);
};
</script>

<template>
  <div class="main">
    <div
      class="w-full text-18px font-500 inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      档案详情
    </div>
    <div class="flex gap-20px h-calc-container">
      <!-- 左侧档案信息 -->
      <div
        class="flex flex-col gap-12px w-350px border border-gray-200 rounded-md shadow-md p-16px overflow-y-auto"
      >
        <div class="flex items-center gap-10px">
          <span class="inline-block h-18px w-4px bg-[#267FEB] rounded-b" />
          <span class="text-18px font-500">档案信息</span>
        </div>
        <div class="flex flex-col items-center mt-10px">
          <div
            class="w-160px h-160px border border-gray-100 rounded-md overflow-hidden shadow-sm"
          >
            <img src="" alt="" class="w-160px h-160px object-cover" />
          </div>
          <span
            class="inline-flex justify-center h-24px leading-24px w-full text-16px font-500 mt-8px"
            >{{ "张之维" }}</span
          >
        </div>
        <div
          class="flex flex-col gap-12px mt-10px p-12px bg-gray-50 rounded-md border border-gray-100"
        >
          <div class="flex gap-12px">
            <span class="w-90px text-left text-gray-600">档案编号：</span>
            <span class="font-500">1234567890</span>
          </div>
          <div class="flex gap-12px">
            <span class="w-90px text-left text-gray-600">建档时间：</span>
            <span>2024-01-01</span>
          </div>
          <div class="flex gap-12px">
            <span class="w-90px text-left text-gray-600">建档地点：</span>
            <span class="inline-block w-180px truncate"
              >北京市顺义区X小区X栋X单元X室</span
            >
          </div>
          <div class="flex gap-12px">
            <span class="w-90px text-left text-gray-600">所属派出所：</span>
            <span class="inline-block w-180px truncate"
              >北京市顺义区X派出所</span
            >
          </div>
          <div class="flex gap-12px">
            <span class="w-90px text-left text-gray-600">所属小区：</span>
            <span class="inline-block w-180px truncate">北京市顺义区X小区</span>
          </div>
          <div class="flex gap-12px">
            <span class="w-90px text-left text-gray-600">抓拍次数：</span>
            <span>10</span>
          </div>
          <div class="flex gap-12px">
            <span class="w-90px text-left text-gray-600">出现天数：</span>
            <span>10</span>
          </div>
        </div>
      </div>

      <!-- 右侧内容区域 -->
      <div
        class="flex flex-col flex-1 border border-gray-200 rounded-md shadow-md p-16px"
      >
        <span
          class="w-full text-18px font-500 border-b border-gray-200 pb-10px mb-20px inline-block"
          >抓拍记录</span
        >
        <div class="flex items-center gap-12px mb-16px w-440px!">
          <span class="w-90px text-left text-gray-600">抓拍时间：</span>
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            @change="handleDateChange"
          />
        </div>

        <!-- 按时间聚合的抓拍记录列表 -->
        <div class="flex-1 overflow-y-auto pr-10px">
          <!-- 为每个日期分组创建一个区块 -->
          <div
            v-for="[dateKey, captureList] in sortedGroupList"
            :key="dateKey"
            class="mb-24px"
          >
            <!-- 日期标题与记录数量 -->
            <div class="flex items-center mb-12px">
              <div class="w-12px h-12px rounded-full bg-[#267FEB] mr-8px" />
              <span class="text-16px font-500"
                >{{ formatDateDisplay(dateKey) }}（{{ dateKey }}）</span
              >
              <span class="ml-8px text-14px text-gray-500"
                >{{ captureList.length }}条记录</span
              >
            </div>

            <!-- 该日期下的所有抓拍记录 -->
            <div class="pl-20px">
              <div class="flex flex-wrap gap-16px">
                <div
                  v-for="(capture, index) in captureList.sort(
                    (a, b) =>
                      new Date(b.captureTime).getTime() -
                      new Date(a.captureTime).getTime()
                  )"
                  :key="index"
                  class="w-160px h-160px border border-gray-100 rounded-md overflow-hidden shadow-sm relative"
                >
                  <img
                    :src="capture.captureImage"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                  <div
                    class="absolute bottom-0 left-0 w-full bg-black/50 text-white text-12px p-4px"
                  >
                    {{ formatTime(capture.captureTime) }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 无数据时的提示 -->
          <div
            v-if="sortedGroupList.length === 0"
            class="text-center text-gray-500 py-50px"
          >
            暂无抓拍记录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 计算容器高度，减去标题和边距的高度 */
.h-calc-container {
  height: calc(
    100vh - 48px - 50px - 34px - 40px - 52px - 16px - 38px - 20px - 48px
  ); /* 60px 是标题和它的 margin 总高度 */
  min-height: 600px; /* 设置最小高度确保内容显示 */
  overflow: hidden; /* 防止整体滚动 */
}
</style>
