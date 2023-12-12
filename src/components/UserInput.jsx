import Input from "./Input.jsx";

export default function UserInput({
  userInput,
  onChangeUserInput,
  ...props
}) {
  return <section id="user-input">
    <div className="input-group">
      <Input name={"Initial investiment"} value={userInput.initialInvestment} identifier={"initialInvestment"} onChangeUserInput={onChangeUserInput}/>
      <Input name={"Anual Investiment"} value={userInput.annualInvestment} identifier={"annualInvestment"} onChangeUserInput={onChangeUserInput}/>
    </div>
    <div className="input-group">
      <Input name={"Expected return"} value={userInput.expectedReturn} identifier={"expectedReturn"} onChangeUserInput={onChangeUserInput}/>
      <Input name={"Duration"} value={userInput.duration} identifier={"duration"} onChangeUserInput={onChangeUserInput}/>
    </div>
  </section>
}
