import { createContext } from "react";

export let loanInputContext = createContext({
  label: "",
  value: "",
  changeHandler: null,
});
