<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineOptions({
  name: "CaptureDetail"
});

const props = defineProps<{
  visible: boolean;
  data: any;
}>();

const emit = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();

const dialogVisible = computed({
  get: () => props.visible,
  set: val => emit("update:visible", val)
});

const handleMore = () => {
  router.push({ name: "ArchiveDetail" });
};
</script>

<template>
  <div class="capture-detail">
    <el-dialog v-model="dialogVisible" title="抓拍详情" width="1000px">
      <div class="flex gap-20px relative">
        <div class="flex flex-col h-full">
          <div class="flex gap-10px">
            <div class="relative w-160px h-160px">
              <span
                class="text-12px pl-4px text-white bg-black/50 absolute bottom-0 left-0 w-full flex items-center"
                >抓拍图</span
              >
              <img src="" alt="" class="w-100% h-100%" />
            </div>
            <div class="relative w-160px h-160px">
              <span
                class="text-12px text-white bg-black/50 absolute bottom-0 left-0 w-full flex items-center"
                >底库图</span
              >
              <img src="" alt="" class="w-full h-full" />
            </div>
          </div>
          <div>
            <div class="flex items-center gap-10px mt-24px">
              <span class="inline-block h-18px w-4px bg-[#267FEB] rounded-b" />
              <span class="text-18px"> 抓拍信息 </span>
            </div>
            <div class="flex flex-col gap-6px ml-10px mt-10px">
              <div class="flex items-center">
                <span class="w-70px text-left">姓名：</span>
                <span class="">{{ data.personName || "/" }}</span>
              </div>
              <div class="flex items-center">
                <span class="w-70px text-left">住址：</span>
                <span class="">{{ data.address || "/" }}</span>
              </div>
              <div class="flex items-center">
                <span class="w-70px text-left">出现时间：</span>
                <span class="">{{ data.appearTime || "/" }}</span>
              </div>
              <div class="flex items-center">
                <span class="w-70px text-left">出现地点：</span>
                <span class="">{{ data.appearAddress || "/" }}</span>
              </div>
            </div>
          </div>
          <div class="text-right absolute bottom-50px left-200px">
            <el-button type="primary" @click="handleMore">查看更多</el-button>
          </div>
        </div>
        <div class="flex flex-col flex-1 pl-20px border-l border-[#e5e5e5]">
          <span
            class="w-full text-20px font-500 border-b border-[#e5e5e5] pb-10px mb-20px inline-block"
            >抓拍图片</span
          >
          <div
            class="flex items-center gap-10px mb-50px mt-20px justify-center"
          >
            <img src="" alt="" class="w-350px h-350px" />
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.capture-detail {
  .el-dialog__header {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
  }
}
</style>
