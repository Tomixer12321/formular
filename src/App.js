import { useState } from "react";

 const names=["david","martin"]
 const names2=["jana","pavla"]
 const newarray1=names.concat(names2)
 console.log(newarray1)
 const newarray2=[...names,...names2]
 newarray2.push("teodor")
 console.log(newarray2)



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

    setFirstName("")
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
          return <p className="item" key={index}>{onenames}</p>
      })}

    </article>
  );
};

export default App;
