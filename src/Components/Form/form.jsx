export function Form() {
  return (
    <form>
      <label htmlFor="fname">Question:</label>
      <input type="text" id="fname" name="fname" />
      <label htmlFor="lname">Answer:</label>
      <input type="text" id="lname" name="lname" />
      <button>Add</button>
    </form>
  );
}
