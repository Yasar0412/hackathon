import { createContext, useState } from "react";
import Header from "./components/header/header";
import Step from "./components/Step/Step";
import Stepper from "./components/Stepper";
export const FormContext = createContext();

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <>
    <Header></Header>
     <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
      <div className="w-screen h-screen flex flex-col items-center justify-start">
        <Stepper />
        <Step />
      </div>
    </FormContext.Provider>
    </>
   
  );
}

export default App;
