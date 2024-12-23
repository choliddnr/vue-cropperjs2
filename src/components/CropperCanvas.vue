<script setup lang="ts">
import { CropperCanvas } from "cropperjs";
import { h } from "vue";

type CropperCanvasProps = {
  background?: boolean;
  // disabled?: boolean;
  // scaleStep?: number;
  // themeColor?: string;
};

// const canvasRef = useTemplateRef<CropperCanvas>("canvasRef");

CropperCanvas.$define();

const {
  background = false,
  // disabled = false,
  // scaleStep = 0.1,
  // themeColor = "#39f",
} = defineProps<CropperCanvasProps>();

const el = h("cropper-canvas", {
  background,
  // disabled,
  // scaleStep,
  // themeColor,
  style: "height: 500px",
});
// const $setAction = canvasRef.value?.$setAction;
// const $toCanvas = canvasRef.value?.$toCanvas;

// defineExpose({
//   $setAction,
//   $toCanvas,
// });
</script>
<template>
  <component :is="el">
    <slot />
  </component>
</template>
