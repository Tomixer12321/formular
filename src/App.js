
const App = () => {
  const forSubmit=(event)=>{
    event.preventDefault()
    console.log("form")
  }

  return <article>
    <form>
        <input className="userName" type="text" placeholder="jmeno" />
        <input type="submit" onClick={forSubmit}/>
    </form>
  </article>
  
}

export default App