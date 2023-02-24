import { useState } from "react";
import { Button } from "./component/Button/Button";
import { Button1 } from "./component/Button/Button";
import Card from "./component/Cards/Card";
import { Container } from "./component/Container/Container";
import { Content } from "./component/Content/Content";
import { Description } from "./component/description/Description";
import { Header } from "./component/Header/Header";
import Input from "./component/Input/Input";
import { Sidebar } from "./component/Sidebar/Sidebar";
import Step from "./component/Step/Step";


function App() {
  const [step, setStep] = useState(2);

  const handleStepChange = (step) => {
    setStep(step);
  };

  const steps = (step) => {
    if (step === 1) {
      return (
        <>
          <div>
            <Header>Personal info</Header>
            <Description>
              Please provide your name, email, address, and phone number.
            </Description>
            <Input type="text" inputName="Name" placeHolder="Hamood" />
            <Input
              type="email"
              inputName="Email Address"
              placeHolder="email@email.com"
            />
            <Input
              type="password"
              inputName="Password"
              placeHolder="e.g +1 234 567 890"
              errorMessage="This field is required"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button>Next Step</Button>
          </div>
        </>
      );
    } else if (step === 2) {
      return(
      <>
      <div>
      <Header>Select your plane</Header>
       <Description>
             you have the option for monthely or yearly billing.
            </Description>
            <Card />
            <Button>Next Step</Button>
            <Button1>Go Back</Button1>

     
        </div>
      </>
      );
    } else if (step === 3) {
      return <div>Step 3</div>;
    } else if (step === 4) {
      return <div>Step 4</div>;
    } else {
      return <div>Null</div>;
    }
  };

  return (
    <div>
      <Container>
        <Sidebar>
          <Step
            stepNumber={1}
            stepDescription="YOUR INFO"
            onClick={() => {
              handleStepChange(1);
            }}
          />
          <Step
            stepNumber={2}
            stepDescription="SELECT PLAN"
            onClick={() => {
              handleStepChange(2);
            }}
          />
          <Step
            stepNumber={3}
            stepDescription="ADD-ONS"
            onClick={() => {
              handleStepChange(3);
            }}
          />
          <Step
            stepNumber={4}
            stepDescription="SUMMARY"
            onClick={() => {
              handleStepChange(4);
            }}
          />
        </Sidebar>
        <Content>
          {steps(step)}
        </Content>
      </Container>
    </div>
  );
}

export default App;
