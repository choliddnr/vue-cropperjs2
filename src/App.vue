<script setup lang="ts">
// import { ref } from "vue";

import { useTemplateRef } from "vue";
import CropperCanvas from "./components/CropperCanvas.vue";
import CropperHandle from "./components/CropperHandle.vue";
import CropperImage from "./components/CropperImage.vue";
import CropperShade from "./components/CropperShade.vue";

import CropperSelection from "./components/CropperSelection.vue";
import CropperGrid from "./components/CropperGrid.vue";
import CropperCrosshair from "./components/CropperCrosshair.vue";
import CropperViewer from "./components/CropperViewer.vue";
// const rotatable = ref<boolean>(true);
// const scalable = ref<boolean>(true);
// const skewable = ref<boolean>(true);
// const translatable = ref<boolean>(true);
//

const selectionRef = useTemplateRef("selectionRef");
const target = useTemplateRef("target");
// onMounted(() => {
// console.log(handleRef.value?.handleRef?.action
const onChange = (e: any) => {
  console.log(";changed", e.detail, selectionRef.value?.selection.$toCanvas());
};
const toCanvas = async () => {
  target.value?.appendChild(await selectionRef.value?.selection.$toCanvas());
};
</script>

<template>
  <CropperCanvas :background="true">
    <CropperImage
      src="/user-5.png"
      alt="Picture"
      :rotatable="true"
      :scalable="true"
      :skewable="true"
      :translatable="true"
    />
    <CropperShade :hidden="true" />
    <CropperHandle action="select" :plain="true" />
    <CropperSelection
      :movable="true"
      :resizable="true"
      :initial-coverage="0.5"
      id="Sel"
      @change="onChange"
      ref="selectionRef"
    >
      <CropperGrid role="grid" :covered="true" />
      <CropperCrosshair :centered="true" />
      <CropperHandle action="move" theme-color="rgba(255, 255, 255, 0.1)" />
      <CropperHandle action="n-resize" />
      <CropperHandle action="e-resize" />
      <CropperHandle action="s-resize" />
      <CropperHandle action="w-resize" />
      <CropperHandle action="ne-resize" />
      <CropperHandle action="nw-resize" />
      <CropperHandle action="se-resize" />
      <CropperHandle action="sw-resize" />
    </CropperSelection>
  </CropperCanvas>
  <CropperViewer selection="#Sel" style="width: 200px" />
  <button @click="toCanvas">toCanvas</button>

  <div ref="target" />
</template>

<style scoped></style>
