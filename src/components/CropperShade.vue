<script lang="ts">
import { h, defineComponent } from "vue";
import { CropperShade } from "cropperjs";

export default defineComponent({
  name: "CropperShade",
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    slottable: { type: Boolean, default: false },
    themeColor: { type: String, default: "rgba(0, 0, 0, 0.65)" },
    hidden: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    CropperShade.$define();
    return () => h("cropper-shade", props, slots.default?.());
  },
});
</script>
