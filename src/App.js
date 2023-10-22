import { useState } from "react";

const App = () => {
  const [oneUser, setOneUser] = useState({ fullName: "", email: "", age: "" });
  const [users, setUsers] = useState([]);

  const formChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setOneUser({ ...oneUser, [name]: value });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (oneUser.fullName && oneUser.email && oneUser.age) {
      // const newUser = {
      //   fullName: oneUser.fullName,
      //   email: oneUser.email,
      //   age: oneUser.age,
      // };
      const  newUser={...oneUser,id:new Date().getTime()}
      setUsers((users) => {
        return [...users, newUser];
      });
      setOneUser({fullName: "", email: "", age: ""})
    } else {
      console.log("napis neco");
    }
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          className="userinfo"
          type="text"
          placeholder="jmeno"
          value={oneUser.fullName}
          onChange={formChange}
          name="fullName"
        />
        <input
          className="userinfo"
          type="email"
          placeholder="email"
          value={oneUser.email}
          onChange={formChange}
          name="email"
        />
        <input
          className="userinfo"
          type="text"
          placeholder="vek"
          value={oneUser.age}
          onChange={formChange}
          name="age"
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
