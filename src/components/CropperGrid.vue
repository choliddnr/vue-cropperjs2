<script lang="ts">
import { h, defineComponent, type PropType } from "vue";
import { CropperGrid } from "cropperjs";

export default defineComponent({
  name: "CropperGrid",
  props: {
    role: { type: String as PropType<"grid">, default: "grid" },
    covered: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    CropperGrid.$define();
    return () => h("cropper-grid", props, slots.default?.());
  },
});
</script>
