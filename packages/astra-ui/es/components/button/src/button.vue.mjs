import { defineComponent as o, ref as f, openBlock as n, createElementBlock as i, normalizeClass as d, unref as s, createCommentVNode as b, renderSlot as m } from "vue";
const y = ["disabled"], k = o({
  name: "astraButton"
}), B = /* @__PURE__ */ o({
  ...k,
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
  emits: ["click"],
  setup(e, { emit: u }) {
    const t = e;
    f("button");
    let a = () => {
      u("click", {
        type: t.type,
        size: t.size,
        plain: t.plain || !1,
        disabled: t.disabled || !1,
        round: t.round || !1
      });
    };
    return (r, l) => (n(), i("div", {
      class: d(["astra__button", [
        "astra__button--" + e.type,
        { "is-plain": e.plain, "is-disabled": e.disabled, "is-round": e.round },
        "astra__button--size-" + e.size
      ]]),
      disabled: e.disabled,
      onClick: l[0] || (l[0] = //@ts-ignore
      (...c) => s(a) && s(a)(...c))
    }, [
      e.icon !== "" ? (n(), i("i", {
        key: 0,
        class: d(e.icon)
      }, null, 2)) : b("", !0),
      m(r.$slots, "default")
    ], 10, y));
  }
});
export {
  B as default
};
