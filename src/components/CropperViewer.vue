<script setup lang="ts">
import { CropperViewer } from "cropperjs";
import { h } from "vue";

CropperViewer.$define();
const { resize = "vertical", selection = "" } = defineProps<{
  resize?: "both" | "horizontal" | "vertical" | "none";
  selection?: string;
}>();

const el = h("cropper-viewer", { resize, selection });
</script>
<template>
  <component :is="el" />
</template>
