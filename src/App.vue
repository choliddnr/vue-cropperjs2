<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import CropperCanvas from "./components/CropperCanvas.vue";
import CropperHandle from "./components/CropperHandle.vue";
import CropperImage from "./components/CropperImage.vue";
import CropperShade from "./components/CropperShade.vue";
import CropperSelection from "./components/CropperSelection.vue";
import CropperGrid from "./components/CropperGrid.vue";
import CropperCrosshair from "./components/CropperCrosshair.vue";
import CropperViewer from "./components/CropperViewer.vue";

const selectionRef = useTemplateRef("selectionRef");
const target = useTemplateRef("target");

// --- Reactive Props ---

// Canvas
const canvasBackground = ref(true);

// Image
const imageRotatable = ref(true);
const imageScalable = ref(true);
const imageSkewable = ref(true);
const imageTranslatable = ref(true);
const imageInitialCenterSize = ref<"contain" | "cover">("contain");
const imageSlottable = ref(false);

// Shade
const shadeHidden = ref(true);
const shadeX = ref(0);
const shadeY = ref(0);
const shadeWidth = ref(0);
const shadeHeight = ref(0);
const shadeSlottable = ref(false);
const shadeThemeColor = ref("rgba(0, 0, 0, 0.65)");

// Selection
const selectionMovable = ref(true);
const selectionResizable = ref(true);
const selectionInitialCoverage = ref(0.5);
const selectionAspectRatio = ref(1);
const selectionX = ref(0);
const selectionY = ref(0);
const selectionWidth = ref(0);
const selectionHeight = ref(0);
const selectionInitialAspectRatio = ref<number>();
const selectionDynamic = ref(false);
const selectionZoomable = ref(false);
const selectionMultiple = ref(false);
const selectionKeyboard = ref(false);
const selectionOutlined = ref(false);
const selectionPrecise = ref(false);

// Grid
const gridCovered = ref(true);

// Crosshair
const crosshairCentered = ref(true);

// Viewer
const viewerResize = ref<"both" | "horizontal" | "vertical" | "none">("vertical");

const onChange = (_e: any) => {
  // console.log("changed", _e.detail);
};

const toCanvas = async () => {
  const selectionComp = selectionRef.value as any;
  if (target.value && selectionComp?.selection) {
    target.value.innerHTML = ''; // clear previous image
    const canvas = await selectionComp.selection.$toCanvas();
    target.value.appendChild(canvas);
  }
};
</script>

<template>
  <main class="app-container">
    <header class="app-header">
      <h1>Vue Cropper.js 2</h1>
      <p>A modern Vue 3 wrapper for Cropper.js Web Components</p>
    </header>

    <div class="workspace">
      <!-- Left side: Settings -->
      <aside class="sidebar left-sidebar">
        <div class="settings-panel glass-card">
          <h2>Settings</h2>
          <div class="settings-content">
            
            <div class="setting-group">
              <h3>Canvas</h3>
              <label class="toggle-label"><input type="checkbox" v-model="canvasBackground" /> Background</label>
            </div>
            
            <div class="setting-group">
              <h3>Image</h3>
              <label class="toggle-label"><input type="checkbox" v-model="imageRotatable" /> Rotatable</label>
              <label class="toggle-label"><input type="checkbox" v-model="imageScalable" /> Scalable</label>
              <label class="toggle-label"><input type="checkbox" v-model="imageSkewable" /> Skewable</label>
              <label class="toggle-label"><input type="checkbox" v-model="imageTranslatable" /> Translatable</label>
              <label class="toggle-label"><input type="checkbox" v-model="imageSlottable" /> Slottable</label>
              <div class="input-field">
                <label>Initial Center Size</label>
                <select v-model="imageInitialCenterSize">
                  <option value="contain">Contain</option>
                  <option value="cover">Cover</option>
                </select>
              </div>
            </div>

            <div class="setting-group">
              <h3>Shade</h3>
              <label class="toggle-label"><input type="checkbox" v-model="shadeHidden" /> Hidden</label>
              <label class="toggle-label"><input type="checkbox" v-model="shadeSlottable" /> Slottable</label>
              <div class="input-field">
                <label>X</label>
                <input type="number" v-model.number="shadeX" />
              </div>
              <div class="input-field">
                <label>Y</label>
                <input type="number" v-model.number="shadeY" />
              </div>
              <div class="input-field">
                <label>Width</label>
                <input type="number" v-model.number="shadeWidth" />
              </div>
              <div class="input-field">
                <label>Height</label>
                <input type="number" v-model.number="shadeHeight" />
              </div>
              <div class="input-field">
                <label>Theme Color</label>
                <input type="text" v-model="shadeThemeColor" />
              </div>
            </div>

            <div class="setting-group">
              <h3>Selection</h3>
              <label class="toggle-label"><input type="checkbox" v-model="selectionMovable" /> Movable</label>
              <label class="toggle-label"><input type="checkbox" v-model="selectionResizable" /> Resizable</label>
              <label class="toggle-label"><input type="checkbox" v-model="selectionDynamic" /> Dynamic</label>
              <label class="toggle-label"><input type="checkbox" v-model="selectionZoomable" /> Zoomable</label>
              <label class="toggle-label"><input type="checkbox" v-model="selectionMultiple" /> Multiple</label>
              <label class="toggle-label"><input type="checkbox" v-model="selectionKeyboard" /> Keyboard</label>
              <label class="toggle-label"><input type="checkbox" v-model="selectionOutlined" /> Outlined</label>
              <label class="toggle-label"><input type="checkbox" v-model="selectionPrecise" /> Precise</label>
              
              <div class="input-field">
                <label>Coverage</label>
                <input type="number" step="0.1" min="0" max="1" v-model.number="selectionInitialCoverage" />
              </div>
              <div class="input-field">
                <label>Aspect Ratio</label>
                <input type="number" step="0.1" v-model.number="selectionAspectRatio" />
              </div>
              <div class="input-field">
                <label>Initial Aspect Ratio</label>
                <input type="number" step="0.1" v-model.number="selectionInitialAspectRatio" />
              </div>
              <div class="input-field">
                <label>X</label>
                <input type="number" v-model.number="selectionX" />
              </div>
              <div class="input-field">
                <label>Y</label>
                <input type="number" v-model.number="selectionY" />
              </div>
              <div class="input-field">
                <label>Width</label>
                <input type="number" v-model.number="selectionWidth" />
              </div>
              <div class="input-field">
                <label>Height</label>
                <input type="number" v-model.number="selectionHeight" />
              </div>
            </div>

            <div class="setting-group">
              <h3>Grid</h3>
              <label class="toggle-label"><input type="checkbox" v-model="gridCovered" /> Covered</label>
            </div>

            <div class="setting-group">
              <h3>Crosshair</h3>
              <label class="toggle-label"><input type="checkbox" v-model="crosshairCentered" /> Centered</label>
            </div>

            <div class="setting-group">
              <h3>Viewer</h3>
              <div class="input-field">
                <label>Resize</label>
                <select v-model="viewerResize">
                  <option value="vertical">Vertical</option>
                  <option value="horizontal">Horizontal</option>
                  <option value="both">Both</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </aside>

      <!-- Center: The Cropper -->
      <div class="editor-panel glass-card">
        <CropperCanvas :background="canvasBackground" class="cropper-canvas">
          <CropperImage
            src="/user-5.png"
            alt="Picture"
            :rotatable="imageRotatable"
            :scalable="imageScalable"
            :skewable="imageSkewable"
            :translatable="imageTranslatable"
            :initialCenterSize="imageInitialCenterSize"
            :slottable="imageSlottable"
          />
          <CropperShade 
            :hidden="shadeHidden"
            :x="shadeX"
            :y="shadeY"
            :width="shadeWidth"
            :height="shadeHeight"
            :slottable="shadeSlottable"
            :themeColor="shadeThemeColor"
          />
          <CropperHandle action="select" :plain="true" />
          <CropperSelection
            :movable="selectionMovable"
            :resizable="selectionResizable"
            :initial-coverage="selectionInitialCoverage"
            :aspect-ratio="selectionAspectRatio"
            :x="selectionX"
            :y="selectionY"
            :width="selectionWidth"
            :height="selectionHeight"
            :initialAspectRatio="selectionInitialAspectRatio"
            :dynamic="selectionDynamic"
            :zoomable="selectionZoomable"
            :multiple="selectionMultiple"
            :keyboard="selectionKeyboard"
            :outlined="selectionOutlined"
            :precise="selectionPrecise"
            id="Sel"
            @change="onChange"
            ref="selectionRef"
          >
            <CropperGrid role="grid" :covered="gridCovered" />
            <CropperCrosshair :centered="crosshairCentered" />
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
      </div>

      <!-- Right side: Controls and Output -->
      <aside class="sidebar right-sidebar">
        <div class="preview-panel glass-card">
          <h2>Live Preview</h2>
          <div class="viewer-wrapper">
            <CropperViewer selection="#Sel" class="cropper-viewer" :resize="viewerResize" />
          </div>
        </div>

        <div class="actions-panel glass-card">
          <h2>Actions</h2>
          <button class="primary-btn" @click="toCanvas">
            Extract Cropped Image
          </button>
        </div>

        <div class="output-panel glass-card">
          <h2>Output</h2>
          <div class="output-container" ref="target">
            <span class="placeholder-text" v-if="!target?.innerHTML">No image extracted yet</span>
          </div>
        </div>
      </aside>
    </div>
  </main>
</template>

<style>
/* Global Resets */
:root {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-border: rgba(255, 255, 255, 0.1);
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --accent: #6366f1;
  --accent-hover: #4f46e5;
  --input-bg: rgba(0, 0, 0, 0.2);
  color-scheme: dark;
}

body {
  margin: 0;
  padding: 0;
  background: var(--bg-gradient);
  color: var(--text-primary);
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

/* App Layout */
.app-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.app-header {
  text-align: center;
  margin-bottom: 2rem;
}

.app-header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(to right, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: 0;
}

.workspace {
  display: grid;
  grid-template-columns: 280px 1fr 320px;
  gap: 1.5rem;
  align-items: start;
}

@media (max-width: 1200px) {
  .workspace {
    grid-template-columns: 1fr 320px;
  }
  .left-sidebar {
    grid-column: 1 / -1;
  }
  .settings-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 800px) {
  .workspace {
    grid-template-columns: 1fr;
  }
}

/* Glassmorphism Cards */
.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.glass-card h2 {
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  color: var(--text-primary);
  font-weight: 600;
}

/* Sidebar & Settings */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.settings-panel {
  max-height: 80vh;
  overflow-y: auto;
}
/* custom scrollbar for settings */
.settings-panel::-webkit-scrollbar {
  width: 6px;
}
.settings-panel::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
}

.setting-group {
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--card-border);
}
.setting-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.setting-group h3 {
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 0.8rem 0;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  cursor: pointer;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.input-field input[type="number"],
.input-field input[type="text"],
.input-field select {
  background: var(--input-bg);
  border: 1px solid var(--card-border);
  color: var(--text-primary);
  padding: 0.5rem;
  border-radius: 6px;
  width: 100%;
}
.input-field select option {
  background: var(--bg-gradient); /* Ensure option list is legible on dark mode */
  color: #fff;
}

/* Editor Panel */
.editor-panel {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.cropper-canvas {
  width: 100%;
  max-width: 800px;
  height: 500px !important;
  border-radius: 8px;
  overflow: hidden;
}

/* Preview Viewer */
.viewer-wrapper {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cropper-viewer {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--card-border);
}

/* Button */
.primary-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.primary-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.primary-btn:active {
  transform: translateY(0);
}

/* Output Panel */
.output-container {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.output-container canvas {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.placeholder-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
