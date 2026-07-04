<script lang="ts">
import { h, defineComponent, useTemplateRef } from "vue";
import { CropperSelection } from "cropperjs";

export default defineComponent({
  name: "CropperSelection",
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    aspectRatio: { type: Number },
    initialAspectRatio: { type: Number },
    initialCoverage: { type: Number },
    dynamic: { type: Boolean, default: false },
    movable: { type: Boolean, default: false },
    resizable: { type: Boolean, default: false },
    zoomable: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    keyboard: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    precise: { type: Boolean, default: false },
  },
  setup(props, { slots, expose }) {
    CropperSelection.$define();
    const selectionRef = useTemplateRef("sel");
    
    expose({ selection: selectionRef });
    
    return () => h("cropper-selection", { ref: "sel", ...props }, slots.default?.());
  },
});
</script>
