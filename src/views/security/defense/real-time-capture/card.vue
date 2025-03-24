<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const defaultImgUrl = "/src/assets/svg/bad-img.svg";

defineOptions({
  name: "RealTimeCaptureCard"
});

const props = defineProps<{
  imgUrl: string;
  time: string;
}>();

const currentImgUrl = ref(props.imgUrl);

const checkImage = (url: string) => {
  if (!url) {
    currentImgUrl.value = defaultImgUrl;
    return;
  }

  const img = new Image();
  img.src = url;
  img.onerror = () => {
    currentImgUrl.value = defaultImgUrl;
  };
};

onMounted(() => {
  checkImage(props.imgUrl);
});

watch(
  () => props.imgUrl,
  newVal => {
    checkImage(newVal);
  }
);

watch(currentImgUrl, newVal => {
  if (!newVal) {
    currentImgUrl.value = defaultImgUrl;
  }
});

const emit = defineEmits<{
  (e: "check-detail"): void;
}>();

const handleCaptureDetail = () => {
  emit("check-detail");
};
</script>

<template>
  <div
    class="relative w-160px h-160px overflow-hidden"
    @click="handleCaptureDetail"
  >
    <img
      :src="currentImgUrl"
      alt=""
      class="w-full h-full object-cover bg-gray-400"
      style="object-position: center"
      @error="currentImgUrl = defaultImgUrl"
    />
    <div class="absolute top-0 left-0 w-full bg-black/50">
      <div class="flex items-center h-24px pl-4px pr-4px">
        <div class="text-white text-12px font-400">
          {{ time }}
        </div>
      </div>
    </div>
    <div class="w-full absolute bottom-0 bg-black/50 p-[0_4px]">
      <div class="flex items-center justify-between h-24px">
        <div
          class="text-white text-12px font-400 w-1/2 truncate"
          :title="`北京市顺义区X小区X栋X单元X室`"
        >
          {{ "北京市顺义区X小区X栋X单元X室" }}
        </div>
        <div class="text-white text-12px font-400 w-1/2 text-right">
          {{ "身份" }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 图片样式
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
