// Write your code here
import './index.css'

const EventItem = props => {
  const {details, onChangeEvent} = props
  const {name, imageUrl, location, registrationStatus} = details

  const onClickEvent = () => {
    onChangeEvent(registrationStatus)
  }

  return (
    <li className="list-item">
      <button type="button" className="list-buttons" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-img" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
