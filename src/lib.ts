// import HelloWorld from "./components/HelloWorld.vue";
import type { App } from "vue";

// export { HelloWorld };
import CropperCanvas from "./components/CropperCanvas.vue";
import CropperImage from "./components/CropperImage.vue";
import CropperShade from "./components/CropperShade.vue";
import CropperHandle from "./components/CropperHandle.vue";
import CropperSelection from "./components/CropperSelection.vue";
import CropperCrosshair from "./components/CropperCrosshair.vue";
import CropperGrid from "./components/CropperGrid.vue";
import CropperViewer from "./components/CropperViewer.vue";

export {
  CropperCanvas,
  CropperImage,
  CropperShade,
  CropperHandle,
  CropperSelection,
  CropperCrosshair,
  CropperGrid,
  CropperViewer,
};

export default {
  install: (app: App) => {
    app.component("CropperCanvas", CropperCanvas);
    app.component("CropperImage", CropperImage);
    app.component("CropperShade", CropperShade);
    app.component("CropperHandle", CropperHandle);
    app.component("CropperSelection", CropperSelection);
    app.component("CropperCrosshair", CropperCrosshair);
    app.component("CropperGrid", CropperGrid);
    app.component("CropperViewer", CropperViewer);
  },
};
