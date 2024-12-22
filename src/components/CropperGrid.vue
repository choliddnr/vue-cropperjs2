<script setup lang="ts">
import { h } from "vue";
import { CropperGrid } from "cropperjs";
type CropperGridProps = { role?: "grid"; covered?: boolean };
CropperGrid.$define();

const { role = "grid", covered = false } = defineProps<CropperGridProps>();

const el = h("cropper-grid", { role, covered });
</script>
<template>
  <component :is="el" />
</template>
