<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import tcComponents from "@/components/tc";
import TCComponentsSidebar from "./common/TI-Components--Sidebar.vue";

@Component
export default class TCComponentHelper extends Vue {
  public tcComponents: TCComponent[] = tcComponents;

  get compQuery(): string {
    const comp = this.$route.params.comp;
    if (comp) return comp.toLowerCase();
    return "";
  }

  getTCComponent(): TCComponent {
    return this.tcComponents.filter(x =>
      this.compQuery.startsWith(x.name.toLowerCase())
    )[0];
  }

  getHeaderTitle(): string {
    if (!this.isComponent()) return "Timo's Components";
    const name = this.$route.params.comp.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  isComponent(): boolean {
    return this.compQuery.length > 0;
  }

  getComponent(): string {
    return this.compQuery.charAt(0).toUpperCase() + this.compQuery.slice(1);
  }
}
</script>
