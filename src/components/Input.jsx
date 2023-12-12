export default function Input({name, type = "number", value, identifier, onChangeUserInput}) {
  return <p>
    <label>{name}</label>
    <input id={name}
      type={type}
      value={value}
      required
      onChange={(event) => onChangeUserInput(identifier, event.target.value)}/>
  </p>
}
