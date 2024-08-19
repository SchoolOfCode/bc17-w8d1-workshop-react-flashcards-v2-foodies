import './form.css'

export function Form() {
  return (
    <form>
      <label htmlFor="fname" className="qLabel">Question:</label>
      <input type="text" className="inputBox" name="Q" />
      <label htmlFor="lname" className="aLabel">Answer:</label>
      <input type="text" className="inputBox" name="A" />
      <button>Add</button>
    </form>
  );
}
