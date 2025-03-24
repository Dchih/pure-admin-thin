<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "AccessRecords"
});

const dateRange = ref<[string, string]>(["", ""]);
const device = ref<string>("");
const deviceList = ref<any[]>([]);

const handleSearch = () => {
  console.log(dateRange.value, device.value);
};

const handleReset = () => {
  dateRange.value = ["", ""];
  device.value = "";
};

const tableData = ref<any[]>([{}]);
</script>

<template>
  <div class="main">
    <div
      class="w-full text-18px font-500 inline-flex items-center border-b border-gray-200 pb-12px mb-12px"
    >
      通行记录
    </div>
    <div class="flex gap-20px">
      <div class="flex items-center w-440px">
        <span class="text-16px font-500">出现时间：</span>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          class="w-300px"
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
      <div class="flex items-center w-300px">
        <span class="text-16px font-500 whitespace-nowrap">设备：</span>
        <el-select v-model="device" placeholder="请选择设备" class="w-300px">
          <el-option
            v-for="item in deviceList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="flex items-center w-300px">
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </div>
    </div>
    <div class="flex gap-20px mt-20px">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="name" label="照片" width="180px" align="center">
          <template #default="scope">
            <img :src="scope.row.photo" alt="" class="w-100px h-100px" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center" width="120px">
          <template #default="scope">
            <span>{{ scope.row.name || "/" }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="电话" align="center" width="300px">
          <template #default="scope">
            <span>{{ scope.row.phone || "/" }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="通行时间"
          align="center"
          width="300px"
        >
          <template #default="scope">
            <span>{{ scope.row.time || "/" }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="device" label="设备" align="center">
          <template #default="scope">
            <span>{{ scope.row.device || "/" }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="居住地址" align="center">
          <template #default="scope">
            <span>{{ scope.row.address || "/" }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
}
</style>
