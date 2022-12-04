import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  yetToRegister = () => (
    <div className="events-result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="images"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  toRegister = () => (
    <div className="events-result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image-success"
      />
      <h1 className="success-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  registrationClosed = () => (
    <div className="events-result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="images"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>
        Stay tuned. We will reopen
        <br /> the registrations soon!
      </p>
    </div>
  )

  defaultRender = () => (
    <p className="default-msg">
      Click on an event, to view its registration details
    </p>
  )

  render() {
    const {status} = this.props

    switch (status) {
      case 'YET_TO_REGISTER':
        return this.yetToRegister()

      case 'REGISTERED':
        return this.toRegister()

      case 'REGISTRATIONS_CLOSED':
        return this.registrationClosed()

      default:
        return this.defaultRender()
    }
  }
}

export default ActiveEventRegistrationDetails
