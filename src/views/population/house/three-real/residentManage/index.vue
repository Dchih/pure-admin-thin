<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import PersonCard from "@/views/population/person/components/index.vue";
defineOptions({
  name: "ResidentManage"
});

const router = useRouter();

const goBack = () => {
  router.back();
};

const activeTab = ref("realResident");

// 定义实名住户数据
const realResidentData = [
  {
    personName: "张三",
    personNumber: "R2023001",
    movedOutTime: "2年3个月",
    appearTime: "2021-06-15",
    appearAddress: "北京市海淀区中关村南大街5号",
    address: "北京市海淀区中关村南大街5号2单元601",
    tagList: [
      { tagId: 1, tagName: "常住人口" },
      { tagId: 3, tagName: "业主" }
    ]
  },
  {
    personName: "李四",
    personNumber: "R2023002",
    movedOutTime: "1年8个月",
    appearTime: "2022-01-20",
    appearAddress: "北京市海淀区中关村南大街5号",
    address: "北京市海淀区中关村南大街5号2单元602",
    tagList: [
      { tagId: 1, tagName: "常住人口" },
      { tagId: 4, tagName: "租户" }
    ]
  }
];

// 定义未实名住户数据
const unRealResidentData = [
  {
    personName: "王五",
    personNumber: "U2023003",
    movedOutTime: "6个月",
    appearTime: "2023-03-02",
    appearAddress: "北京市朝阳区建国路89号",
    address: "北京市海淀区中关村南大街5号2单元603",
    tagList: [{ tagId: 2, tagName: "流动人口" }]
  },
  {
    personName: "赵六",
    personNumber: "U2023004",
    movedOutTime: "3个月",
    appearTime: "2023-06-10",
    appearAddress: "河北省石家庄市桥西区水源街12号",
    address: "北京市海淀区中关村南大街5号2单元604",
    tagList: [
      { tagId: 2, tagName: "流动人口" },
      { tagId: 5, tagName: "暂住人口" }
    ]
  }
];
</script>

<template>
  <div class="main">
    <div
      class="w-full text-18px inline-flex items-center gap-12px border-b border-gray-200 pb-12px mb-12px"
    >
      <el-button type="primary" @click="goBack">返回>></el-button>
      住户管理
    </div>
    <div
      class="w-full h-150px border-2 border-dashed border-gray-200 p-[12px_16px] flex flex-col gap-12px"
    >
      <h4 class="font-500 text-16px">{{ "XXXX楼栋" }}</h4>
      <div class="flex gap-32px">
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
      </div>
    </div>
    <el-tabs v-model="activeTab" class="mt-12px">
      <el-tab-pane label="实名住户" name="realResident">
        <div data-name="real-resident" class="flex flex-wrap gap-15px mt-15px">
          <PersonCard
            v-for="(resident, index) in realResidentData"
            :key="index"
            :data="resident"
            @face-search="() => {}"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="未实名住户" name="unRealResident">
        <div
          data-name="un-real-resident"
          class="flex flex-wrap gap-15px mt-15px"
        >
          <PersonCard
            v-for="(resident, index) in unRealResidentData"
            :key="index"
            :data="resident"
            @face-search="() => {}"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
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
