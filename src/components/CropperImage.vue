<script lang="ts">
import { h, defineComponent, type PropType } from "vue";
import { CropperImage } from "cropperjs";

export default defineComponent({
  name: "CropperImage",
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    initialCenterSize: { type: String as PropType<"contain" | "cover">, default: "contain" },
    rotatable: { type: Boolean, default: false },
    scalable: { type: Boolean, default: false },
    skewable: { type: Boolean, default: false },
    slottable: { type: Boolean, default: false },
    translatable: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    CropperImage.$define();
    return () => h("cropper-image", props, slots.default?.());
  },
});
</script>
