<script lang="ts">
import { h, defineComponent } from "vue";
import { CropperCanvas } from "cropperjs";

export default defineComponent({
  name: "CropperCanvas",
  props: {
    background: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    CropperCanvas.$define();
    return () =>
      h(
        "cropper-canvas",
        { ...props, style: "height: 500px" },
        slots.default?.()
      );
  },
});
</script>
