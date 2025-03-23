<script setup lang="ts">
import { ref } from "vue";
import PersonCard from "../card/index.vue";

defineOptions({
  name: "SuspectedMovedOut"
});

const queryParams = ref({
  movedOutTime: null,
  movedOutDaysMin: "",
  movedOutDaysMax: "",
  isRealName: ""
});
</script>

<template>
  <div>
    <div class="flex items-center">
      <div class="flex items-center mr-20px">
        <span class="inline-block w-80px text-right">搬离时间：</span>
        <el-date-picker
          v-model="queryParams.movedOutTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[
            new Date(2000, 1, 1, 0, 0, 0),
            new Date(2000, 1, 1, 23, 59, 59)
          ]"
        />
      </div>
      <div class="flex items-center mr-20px">
        <span class="inline-block w-80px text-right">出现天数：</span>
        <el-input
          v-model="queryParams.movedOutDaysMin"
          placeholder="最小天数"
          class="w-100px"
        />
        ~
        <el-input
          v-model="queryParams.movedOutDaysMax"
          placeholder="最大天数"
          class="w-100px"
        />
      </div>
      <div class="flex items-center mr-20px">
        <span class="inline-block w-80px text-right">实名：</span>
        <el-select
          v-model="queryParams.isRealName"
          placeholder="请选择"
          class="w-200px"
        >
          <el-option label="全部" value="" />
          <el-option label="实名" value="1" />
          <el-option label="未实名" value="0" />
        </el-select>
      </div>
      <div class="flex items-center">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
    <div class="mt-20px w-full h-[calc(100vh-400px)]">
      <PersonCard
        :data="{
          personName: '张之维',
          personNumber: '102456789',
          movedOutTime: '155天',
          appearTime: '2023-05-15',
          appearAddress: '北京市朝阳区建国路89号',
          address: '北京市海淀区中关村南大街5号',
          tagList: [
            { tagId: 1, tagName: '高危人员' },
            { tagId: 2, tagName: '重点关注' }
          ]
        }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
