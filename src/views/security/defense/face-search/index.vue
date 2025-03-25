<script setup lang="ts">
import { ref } from "vue";
import FaceSearchCard from "./card.vue";
import type { ArchiveCardProps } from "./type";

defineOptions({
  name: "FaceSearch"
});

const handleSelect = (e: Event) => {
  console.log(e);
};

const queryParams = ref({
  startTime: "",
  endTime: "",
  similarity: 0,
  archiveNumber: "",
  identity: ""
});

const timeRange = ref<[string, string]>(["", ""]);

const handleTimeChange = (value: [string, string]) => {
  queryParams.value.startTime = value[0];
  queryParams.value.endTime = value[1];
};

// 创建测试数据
const cardData = ref<ArchiveCardProps>({
  personName: "张三",
  personNumber: "P20240601001",
  movedOutTime: "2024-06-01",
  appearTime: "2024-06-05 14:30",
  appearAddress: "小区大门口",
  address: "1栋2单元303室",
  tagList: [],
  identity: "业主",
  similarity: 0.8
});

const handleFaceSearch = () => {
  console.log("进行人脸搜索");
};
</script>

<template>
  <div class="main">
    <div
      class="w-full text-18px inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      人脸检索
    </div>
    <div class="flex gap-12px shadow-md pb-4 mb-2 border-b border-gray-100">
      <div
        class="w-400px h-250px flex items-center justify-center border-r border-gray-200"
      >
        <div
          class="flex items-center justify-center border-2 border-dashed border-gray-200 rounded-md w-50% h-70% cursor-pointer"
        >
          <IconifyIconOnline
            icon="material-symbols:add"
            width="100"
            height="100"
          />
        </div>
        <el-input type="file" style="display: none" @select="handleSelect" />
      </div>
      <div class="flex flex-col gap-12px flex-1 ml-20px">
        <div class="text-20px font-500">档案检索</div>
        <div class="flex items-center gap-12px w-600px ml-20px">
          <span class="w-100px">相似度：</span>
          <el-slider v-model="queryParams.similarity" show-input size="small" />
        </div>
        <div class="flex items-center gap-12px w-600px ml-20px">
          <span class="w-100px">出现时间：</span>
          <el-date-picker
            v-model="timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            @change="handleTimeChange"
          />
        </div>
        <div class="flex items-center gap-12px w-600px ml-20px">
          <span class="w-100px">编号：</span>
          <el-input v-model="queryParams.archiveNumber" />
        </div>
        <div class="flex items-center gap-12px w-600px ml-20px">
          <span class="w-100px">小区身份：</span>
          <el-select v-model="queryParams.identity" placeholder="请选择">
            <el-option label="全部" value="" />
            <el-option label="业主" value="1" />
            <el-option label="租户" value="2" />
            <el-option label="其他" value="3" />
          </el-select>
        </div>
        <div class="flex items-center gap-12px w-600px justify-end">
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">重置</el-button>
        </div>
      </div>
    </div>
    <div>
      <div class="text-18px font-medium mb-4 mt-4">检索结果</div>
      <div class="flex flex-wrap content-start items-start gap-4">
        <FaceSearchCard :data="cardData" />
      </div>
    </div>
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
