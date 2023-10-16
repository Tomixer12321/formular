import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");

  const forSubmit = (event) => {
    event.preventDefault();
    console.log(firstName)
  };

  return (
    <article>
      <form onSubmit={forSubmit}>
        <input
          className="userName"
          type="text"
          placeholder="jmeno"
          value={firstName}
          onChange={(event)=> setFirstName(event.target.value)}
        />
        <input type="submit" />
      </form>
    </article>
  );
};

export default App;
