import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "BaseButtons",
  props: {
    noWrap: Boolean,
    type: {
      type: String,
      default: "justify-start",
    },
    classAddon: {
      type: String,
      default: "mr-3 last:mr-0 mb-3",
    },
    mb: {
      type: String,
      default: "-mb-3",
    },
  },
  setup(props, { slots }) {
    const hasSlot = slots && slots.default;

    const componentClass = computed(() => {
      const parentClass = [
        "flex",
        "items-center",
        props.type,
        props.noWrap ? "flex-nowrap" : "flex-wrap",
      ];

      if (props.mb) {
        parentClass.push(props.mb);
      }

      return parentClass;
    });

    return () => {
      return (
        <div class={componentClass}>
          {hasSlot &&
            slots.default?.().map((element) => {
              if (
                element &&
                element.children &&
                typeof element.children === "object"
              ) {
                <element>
                  {Array.isArray(element.children) &&
                    element.children?.map((child) => {
                      return <child class={props.classAddon} />;
                    })}
                </element>;
              }

              return <element class={props.classAddon} />;
            })}
        </div>
      );
    };
  },
});
