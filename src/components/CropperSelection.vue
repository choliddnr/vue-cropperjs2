<script setup lang="ts">
import { CropperSelection } from "cropperjs";
import { h, useTemplateRef } from "vue";
CropperSelection.$define();
type SelectionProperty = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  aspectRatio?: number;
  initialAspectRatio?: number;
  initialCoverage?: number;
  dynamic?: boolean;
  movable?: boolean;
  resizable?: boolean;
  zoomable?: boolean;
  multiple?: boolean;
  keyboard?: boolean;
  outlined?: boolean;
  precise?: boolean;
};

const {
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  aspectRatio,
  initialAspectRatio,
  initialCoverage,
  dynamic = false,
  movable = false,
  resizable = false,
  zoomable = false,
  multiple = false,
  keyboard = false,
  outlined = false,
  precise = false,
  //   movable = false,
  //   resizable = false,
  //   initialCoverage,
  //   style = "height: 500px",
} = defineProps<SelectionProperty>();

const el = h("cropper-selection", {
  x,
  y,
  width,
  height,
  aspectRatio,
  initialAspectRatio,
  initialCoverage,
  dynamic,
  movable,
  resizable,
  zoomable,
  multiple,
  keyboard,
  outlined,
  precise,
  //
});

const selection = useTemplateRef("sel") as any;
defineExpose({ selection });
</script>
<template>
  <component :is="el" ref="sel">
    <slot />
  </component>
</template>
