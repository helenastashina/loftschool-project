import skillAddLine from "./skillAddLine.vue";

export default {
  title: "skillAddLine",
  components: { skillAddLine },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { skillAddLine },
  template: `
  <skill-add-line/>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}