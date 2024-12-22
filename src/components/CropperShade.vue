<script setup lang="ts">
import { h } from "vue";
import { CropperShade } from "cropperjs";
type CropperShadeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  slottable?: boolean;
  themeColor?: string;
  hidden?: boolean;
};

CropperShade.$define();

const {
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  slottable = false,
  themeColor = "rgba(0, 0, 0, 0.65)",
  hidden = false,
} = defineProps<CropperShadeProps>();

const el = h("cropper-shade", {
  x,
  y,
  width,
  height,
  slottable,
  themeColor,
  hidden,
});
</script>
<template>
  <component :is="el" />
</template>
