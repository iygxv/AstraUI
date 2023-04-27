import "../styles/src/index.scss.mjs";
import n from "./button/index.mjs";
const a = [n], s = (o) => {
  a.forEach((t) => {
    o.component(t.name, t);
  });
}, e = {
  install: s
};
export {
  e as default
};
