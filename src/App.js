import { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();

    if (fullName && email) {
      const oneUser = { fullName: fullName, email: email, age: age };
      setUsers((users) => {
        return [...users, oneUser];
      });
    } else {
      console.log("napis neco");
    }
    setFullName("");
    setEmail("");
    setAge("");
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          className="userinfo"
          type="text"
          placeholder="jmeno"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <input
          className="userinfo"
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="userinfo"
          type="text"
          placeholder="vek"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <input type="submit" />
      </form>
      {users.map((oneUser, index) => {
        const { fullName, email, age } = oneUser;
        return (
          <div key={index} className="item">
            <h2>{fullName}</h2>
            <h2>{email}</h2>
            <h2>{age}</h2>
          </div>
        );
      })}
    </article>
  );
};

export default App;
