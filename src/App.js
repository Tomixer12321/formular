import {useState} from "react"

const App = () => {
  const[fullName,setFullName]=useState("")
  const[email,seEmail]=useState("")
  const[users,setUsers]=useState([])

  const formSubmit=(event)=>{
    event.preventDefault()
    console.log("form")
  }

  return <article>
    <form onSubmit={formSubmit}>
      <input className="userinfo" type="text" placeholder="jmeno" />
      <input className="userinfo" type="email" placeholder="email" />
      <input type="submit" />
    </form>
  </article>
}

export default App