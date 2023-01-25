import { createContext, useState } from "react";
function noop() {}
function noop1(id) {}
function noop2(token, refresh) {
  return;
}
const token: unknown = null;
export const AuthContext = createContext({
  token,
  login: noop2,
  logout: noop,
});
