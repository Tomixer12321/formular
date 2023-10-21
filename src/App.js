import { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();

    if(fullName && email){
      const oneUser={fullName:fullName, email:email}
      setUsers((users)=>{
        return [...users,oneUser]
      })
    }else{
      console.log("napis neco")
    }
    setFullName("")
    setEmail("")
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          className="userinfo"
          type="text"
          placeholder="jmeno"
          value={fullName}
          onChange={(event)=>setFullName(event.target.value)}
        />
        <input
          className="userinfo"
          type="email"
          placeholder="email"
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
        />
        <input type="submit" />
      </form>
    </article>
  );
};

export default App;
