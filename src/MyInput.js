import { useContext } from "react";
import { loanInputContext } from "./contexts/LoanFormInputContext";
export default function MyInput() {
  let inputContext = useContext(loanInputContext);
  return (
    <>
      <label>{inputContext.label}</label>
      <input
        value={inputContext.value}
        onChange={(e) => inputContext.changeHandler(e.target.value)}
      />
    </>
  );
}
