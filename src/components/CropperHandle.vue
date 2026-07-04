<script lang="ts">
import { h, defineComponent, type PropType } from "vue";
import { CropperHandle } from "cropperjs";

type HandleAction =
  | "select"
  | "move"
  | "n-resize"
  | "e-resize"
  | "s-resize"
  | "w-resize"
  | "ne-resize"
  | "nw-resize"
  | "se-resize"
  | "sw-resize"
  | "none";

export default defineComponent({
  name: "CropperHandle",
  props: {
    action: { type: String as PropType<HandleAction>, default: "none" },
    plain: { type: Boolean, default: false },
    slottable: { type: Boolean, default: false },
    themeColor: { type: String, default: "rgba(51, 153, 255, 0.5)" },
  },
  setup(props, { slots }) {
    CropperHandle.$define();
    return () => h("cropper-handle", props, slots.default?.());
  },
});
</script>
