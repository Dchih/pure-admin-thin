<template>
  <div class="main">
    <div
      class="w-full text-18px inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      实时抓拍
    </div>
    <div class="flex gap-12px">
      <div class="flex items-center gap-12px">
        <span>出现时间：</span>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
      <div class="flex items-center gap-12px">
        <span class="whitespace-nowrap">出现地点：</span>
        <el-input v-model="location" placeholder="请输入地点" class="w-300px" />
      </div>
    </div>
    <div class="flex flex-wrap gap-12px mt-20px">
      <RealTimeCaptureCard
        v-for="(item, index) in captureList"
        :key="index"
        :img-url="item.imgUrl"
        :time="item.time"
        @check-detail="handleCaptureDetail(true)"
      />
    </div>
    <div class="flex justify-end mt-20px absolute bottom-20px right-60px">
      <el-pagination
        v-model="currentPage"
        :page-size="pageSize"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </div>
    <CaptureDetail
      :data="captureDetailData"
      :visible="dialogVisible"
      @update:visible="handleCaptureDetail"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RealTimeCaptureCard from "./card.vue";
import CaptureDetail from "./dialogs/captureDetail.vue";
defineOptions({
  name: "RealTimeCapture"
});

const dateRange = ref<[string, string]>(["", ""]);
const location = ref("");

// 模拟数据，实际项目中可能需要从API获取
const captureList = ref([
  {
    imgUrl: "https://example.com/image1.jpg",
    time: "一分钟前"
  },
  {
    imgUrl: "https://example.com/image2.jpg",
    time: "五分钟前"
  },
  {
    imgUrl: "https://non-existent-domain.com/bad-image.jpg", // 这个链接肯定加载失败
    time: "十分钟前"
  },
  {
    imgUrl: "", // 空链接测试
    time: "二十分钟前"
  }
]);

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(100);

const handleCurrentChange = (page: number) => {
  console.log(page);
};

const dialogVisible = ref(false);

const handleCaptureDetail = (visible: boolean) => {
  dialogVisible.value = visible;
};

// 抓拍详情模拟数据
const captureDetailData = ref({
  id: "CAP202403280001",
  captureTime: "2024-03-28 15:30:45",
  location: "北京市顺义区X小区X栋X单元X室",
  deviceName: "设备A-12号",
  deviceId: "DEV2024001",
  personInfo: {
    name: "张三",
    gender: "男",
    age: 35,
    idNumber: "110101********1234",
    role: "业主",
    status: "正常"
  },
  eventType: "正常通行",
  imageUrl: "https://example.com/image1.jpg",
  similarityScore: 92.5,
  additionalInfo: {
    temperature: "36.5°C",
    wearingMask: false,
    accessGranted: true
  },
  recordHistory: [
    {
      time: "2024-03-27 16:20:32",
      location: "北京市顺义区X小区X栋X单元X室",
      eventType: "正常通行"
    },
    {
      time: "2024-03-26 08:45:10",
      location: "北京市顺义区X小区X栋X单元X室",
      eventType: "正常通行"
    },
    {
      time: "2024-03-25 19:30:28",
      location: "北京市顺义区X小区X栋X单元X室",
      eventType: "正常通行"
    }
  ]
});
</script>

<style scoped>
.main {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  /* position: relative; */
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
