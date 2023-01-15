import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLevel",

  props: {
    mobile: Boolean,
    type: {
      type: String,
      default: "justify-between",
    },
  },

  setup(props, { slots }) {
    const parentClass = [props.type, "items-center"];

    const parentMobileClass = ["flex"];

    const parentBaseClass = ["block", "md:flex"];

    const childBaseClass = ["flex", "items-center", "justify-center"];

    return () => {
      return (
        <div
          class={parentClass.concat(
            props.mobile ? parentMobileClass : parentBaseClass
          )}
        >
          {slots.default?.().map((element, index) => {
            const childClass =
              props.mobile &&
              slots.default &&
              slots.default?.() &&
              slots.default?.().length > index + 1
                ? childBaseClass.concat(["mb-6", "md:mb-0"])
                : childBaseClass;

            return <div class={childClass}>{element}</div>;
          })}
        </div>
      );
    };
  },
});
