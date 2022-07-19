import React, { userRef , useEffect } from "react";
import { SerachStyle,Background } from "./style";
import Header from "./header";
import Chart from "./chart";





function App() {
  return (
      <>
        <Main/>
      </>
  )
}

// const autoFocus = userRef();

const Main = () => {
  return(
        <>
        <Header/>
        <Background>
          <SerachStyle  id="serach" type="text" placeholder="Serach.."/>
          <Chart/>
        </Background>
        </>
  )

}


export default App
