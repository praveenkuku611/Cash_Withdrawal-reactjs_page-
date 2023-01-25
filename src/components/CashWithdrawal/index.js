import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  buttonClicked = value => {
    const {rupees} = this.state
    if (rupees > 0) {
      this.setState(prevState => ({
        rupees: prevState.rupees - value,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {rupees} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="profile-section">
            <div className="logo">
              <p>S</p>
            </div>
            <div className="profile-name">
              <p>Sarah Williams</p>
            </div>
          </div>
          <div className="balance-section">
            <div className="your-balance">
              <p>Your Balance</p>
            </div>
            <div className="digit">
              <p className="p1">{rupees}</p>
              <p className="p2"> In rupees</p>
            </div>
          </div>
          <div className="withdraw-section">
            <div className="withdraw">
              <p className="p3">Withdraw</p>
            </div>
            <div>
              <p className="p4">CHOOSE SUM (IN RUPEES)</p>
            </div>
          </div>
          <ul className="button-section">
            {denominationsList.map(eachButton => (
              <DenominationItem
                buttonValue={eachButton}
                key={eachButton.id}
                buttonClicked={this.buttonClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
