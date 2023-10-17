import { useState } from "react";


const App = () => {
  const [firstName, setFirstName] = useState("");
  const [names,setnames]=useState([])


  const forSubmit = (event) => {
    event.preventDefault();

    if(firstName){
      setnames((names)=>{
        return [...names,firstName]
      })
    }else{
      console.log("napis neco")
    }

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
      {names.map((onenames,index)=>{
          return <p key={index}>{onenames}</p>
      })}

    </article>
  );
};

export default App;
