export default function Data() {
  const counter = 15;
  const addvalue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
  };

  return (
    <div>
      <h1>Code with kaushal</h1>
      <p>Counter value: {counter}</p>
      <button onClick={addvalue}>Add</button>
      <br />
      <br />
      <button>Remove</button>
    </div>
  );
}
