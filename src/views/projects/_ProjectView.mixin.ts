import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';
import { Project } from '@/models';
import { getProject } from '@/utils';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    'portfolio-big-heading': PortfolioBigHeading,
  },
})
export default class ProjectView extends Vue {
  get project(): Project {
    return getProject(this.$route.name);
  }
}
