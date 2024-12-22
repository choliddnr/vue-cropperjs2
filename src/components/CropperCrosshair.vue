<script setup lang="ts">
import { h } from "vue";
import { CropperCrosshair } from "cropperjs";
type CropperCrosshairProperty = { centered: boolean };
CropperCrosshair.$define();

const { centered = false } = defineProps<CropperCrosshairProperty>();

const el = h("cropper-crosshair", { centered });
</script>
<template>
  <component :is="el" />
</template>
