import { createContext } from "react";
import * as React from "react";
function noop() {
  return [];
}
function noop1(id) {}
export const HeaderContext = createContext({
  basket: null,
  add: noop1,
  get: noop,
  removeById: noop1,
  storageLength: 0,
  addDynamicRefs: noop1,
});
