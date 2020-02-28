<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCComponent extends Vue {
  @Prop({ default: 0, type: Number }) percent!: number;
}
</script>
