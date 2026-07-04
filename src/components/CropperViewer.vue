<script lang="ts">
import { h, defineComponent, type PropType } from "vue";
import { CropperViewer } from "cropperjs";

export default defineComponent({
  name: "CropperViewer",
  props: {
    resize: { type: String as PropType<"both" | "horizontal" | "vertical" | "none">, default: "vertical" },
    selection: { type: String, default: "" },
  },
  setup(props, { slots }) {
    CropperViewer.$define();
    return () => h("cropper-viewer", props, slots.default?.());
  },
});
</script>
