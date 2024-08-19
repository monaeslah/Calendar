


const TimeControler = () => {
    return (

<div className="time-inputs">
  <div className="time-input">
    <label>Time:</label>
    <input type="checkbox" />
  </div>
  <div className="time-input">
    <label>Hour:</label>
    <input type="number" min="1" max="12" defaultValue="12" />
  </div>
  <div className="time-input">
    <label>Min:</label>
    <input type="number" min="0" max="59" defaultValue="00" />
  </div>
  <div className="time-input">
    <label>AM/PM:</label>
    <select>
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </select>
  </div>
</div>
    )
}
export default TimeControler