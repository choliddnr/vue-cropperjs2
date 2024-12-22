<script setup lang="ts">
// import { ref } from "vue";
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

// const handleRef = useTemplateRef("handleRef");
// onMounted(() => {
// console.log(handleRef.value?.handleRef?.action);
// });
</script>

<template>
  <CropperCanvas :background="true">
    <CropperImage
      src="http://localhost:8090/api/files/kqsl9ce7d20tynj/x66966zmzugrkt9/whats_app_image_2024_10_05_at_8_40_NT9JtCG744.36AM1.jpeg?token="
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
</template>

<style scoped></style>
