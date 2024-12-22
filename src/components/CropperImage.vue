<script setup lang="ts">
import { CropperImage } from "cropperjs";
import { h } from "vue";

type CanvasImageProps = {
  src: string;
  alt?: string;
  initialCenterSize?: "contain" | "cover";
  rotatable?: boolean;
  scalable?: boolean;
  skewable?: boolean;
  slottable?: boolean;
  translatable?: boolean;
};
const {
  src,
  alt,
  initialCenterSize = "contain",
  rotatable = false,
  scalable = false,
  skewable = false,
  slottable = false,
  translatable = false,
} = defineProps<CanvasImageProps>();
CropperImage.$define();
const el = h("cropper-image", {
  src,
  alt,
  initialCenterSize,
  rotatable,
  scalable,
  skewable,
  slottable,
  translatable,
});
</script>
<template>
  <component :is="el" />
</template>
