<script setup lang="ts">
import { h } from "vue";
import { CropperHandle } from "cropperjs";
type HandleAction =
  | "select"
  | "move"
  | "n-resize"
  | "e-resize"
  | "s-resize"
  | "w-resize"
  | "ne-resize"
  | "nw-resize"
  | "se-resize"
  | "sw-resize"
  | "none";

type CropperHandleProps = {
  action?: HandleAction;
  plain?: boolean;
  slottable?: boolean;
  themeColor?: string;
};

CropperHandle.$define();

const {
  action = "none",
  plain = false,
  slottable = false,
  themeColor = "rgba(51, 153, 255, 0.5)",
} = defineProps<CropperHandleProps>();

const el = h("cropper-handle", { action, plain, slottable, themeColor });

// const handleRef = useTemplateRef<CropperHandle>("handleRef");
// defineExpose({ handleRef });

// onMounted(() => {
// console.log("handleRef", handleRef.value?.action);
// });
</script>
<template>
  <component :is="el" />
</template>
