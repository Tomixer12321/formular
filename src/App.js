import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const forSubmit = (event) => {
    event.preventDefault();
    console.log("form");
  };

  return (
    <article>
      <form onSubmit={forSubmit}>
        <input
          className="userName"
          type="text"
          placeholder="jmeno"
          value={firstName}
        />
        <input type="submit" />
      </form>
    </article>
  );
};

export default App;
