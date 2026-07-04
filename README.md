# vue-cropperjs2

A modern Vue 3 wrapper for [Cropper.js v2](https://github.com/fengyuanchen/cropperjs) using Web Components. This library provides a seamless way to integrate Cropper.js v2 features directly into your Vue 3 applications.

## Features
- Fully compatible with Vue 3 (Composition API / `<script setup>`)
- Wraps all standard `cropperjs` Web Components as native Vue components
- Full TypeScript support

## Installation

Install `vue-cropperjs2` alongside its peer dependency `cropperjs`:

```bash
npm install vue-cropperjs2 cropperjs
# or using yarn
yarn add vue-cropperjs2 cropperjs
# or using pnpm
pnpm add vue-cropperjs2 cropperjs
```

## Available Components

The library exports the following components mapping to `cropperjs` custom elements:

- `CropperCanvas`
- `CropperImage`
- `CropperShade`
- `CropperHandle`
- `CropperSelection`
- `CropperCrosshair`
- `CropperGrid`
- `CropperViewer`

## Usage

### 1. Global Registration (Optional)

If you want to make all components available globally throughout your application without needing to import them in every file, register the library as a plugin in your main entry file (e.g. `main.ts`):

```ts
import { createApp } from "vue";
import App from "./App.vue";
import VueCropperJs from "vue-cropperjs2";

const app = createApp(App);

// Registers all cropper components globally
app.use(VueCropperJs);

app.mount("#app");
```

### 2. Local Usage / `<script setup>`

If you prefer to import components locally, you can import them directly from `vue-cropperjs2`.

Here is a full example of a basic image cropping interface:

```vue
<script setup lang="ts">
import { useTemplateRef } from "vue";
import {
  CropperCanvas,
  CropperImage,
  CropperShade,
  CropperHandle,
  CropperSelection,
  CropperGrid,
  CropperCrosshair,
  CropperViewer
} from "vue-cropperjs2";

// Access the selection component to trigger cropping actions
const selectionRef = useTemplateRef("selectionRef");
const target = useTemplateRef("target");

const onChange = (e: Event) => {
  console.log("Selection changed", e);
};

const toCanvas = async () => {
  // Extract the cropped image canvas and append it to the DOM
  if (selectionRef.value?.selection) {
    const canvas = await selectionRef.value.selection.$toCanvas();
    target.value?.appendChild(canvas);
  }
};
</script>

<template>
  <!-- Main Cropping Area -->
  <CropperCanvas :background="true">
    <CropperImage
      src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      alt="Picture"
      :rotatable="true"
      :scalable="true"
      :skewable="true"
      :translatable="true"
    />
    <CropperShade :hidden="true" />
    <CropperHandle action="select" :plain="true" />
    <CropperSelection
      id="Sel"
      :movable="true"
      :resizable="true"
      :initial-coverage="0.5"
      :aspect-ratio="1"
      @change="onChange"
      ref="selectionRef"
    >
      <CropperGrid role="grid" :covered="true" />
      <CropperCrosshair :centered="true" />
      <CropperHandle action="move" theme-color="rgba(255, 255, 255, 0.1)" />
      
      <!-- Resize Handles -->
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

  <div class="actions">
    <!-- Preview Viewer -->
    <CropperViewer selection="#Sel" style="width: 200px; height: 200px;" />
    
    <!-- Action Button -->
    <button @click="toCanvas">Get Cropped Image</button>
  </div>

  <!-- Container for the exported cropped image -->
  <div ref="target" />
</template>

<style scoped>
.actions {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-top: 20px;
}
</style>
```

## Props and Events
Because `vue-cropperjs2` components are direct wrappers over Cropper.js Web Components, all native properties and events of Cropper.js v2 are supported. Please refer to the [official Cropper.js v2 documentation](https://github.com/fengyuanchen/cropperjs) for a complete list of properties, methods, and events for each element.

## License

MIT
