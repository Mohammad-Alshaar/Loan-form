import "./App.css";
import { informations } from "./contexts/PersonalInformations";
import LoanForm from "./LoanForm";

function App() {
  return (
    <informations.Provider
      value={{
        name: "Muhammad",
        email: "mo@gmail.com",
      }}
    >
      <LoanForm />
    </informations.Provider>
  );
}

export default App;
