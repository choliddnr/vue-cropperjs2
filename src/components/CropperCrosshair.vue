<script lang="ts">
import { h, defineComponent } from "vue";
import { CropperCrosshair } from "cropperjs";

export default defineComponent({
  name: "CropperCrosshair",
  props: {
    centered: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    CropperCrosshair.$define();
    return () => h("cropper-crosshair", props, slots.default?.());
  },
});
</script>
