import * as React from "react"
import MultiStepForm from "../containers/multiStepForm";

const FormPage = () => {
  return (
    <main className="main">
      <MultiStepForm/>
    </main>
  )
};

export default FormPage;

export const Head = () => <title>Multi Step Form</title>;