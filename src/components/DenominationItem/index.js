import './index.css'

const DenominationItem = props => {
  const {buttonValue, buttonClicked} = props
  const {value} = buttonValue
  const stateChange = () => {
    buttonClicked(value)
  }
  return (
    <li>
      <button type="button" onClick={stateChange}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
