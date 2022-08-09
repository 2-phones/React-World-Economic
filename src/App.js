import React, { userRef , useEffect, useState } from "react";
import { SerachStyle,Background,DropDownStyle,SelectStyle, } from "./style";
import Header from "./header";
import Chart from "./chart";
import axios from "axios";
import { countryName } from "./data";





function App() {
  return (
      <>
        <Main />
      </>
  )
}


export const Main = () => {
const [ countryInfo , setCountryInfo ] = useState('');
const [ dropDownValue , setDropDownValue] = useState('Choose Country');
const [ isClick , setIsClick]  = useState(false);

// 검색
  const serachValue = (e) => {
    const data = e.target.value;
    // 검색창에 입력한 값을 서버에 요청하고, state에 저장하여서 chart 컴포넌트 props로 주어 차트가 표시되도록 한다.
    if(e.key === 'Enter' && data !== '' ) {
      e.target.value = '';
      return axios.get('http://localhost:4848/economy',{params:{data}})
      .then(res => {
        if(!res.data.currentCount) return alert('국가명을 제대로 입력해주세요!')
        return setCountryInfo(res.data.data[0]);
      })
      .catch( err => console.log(err) )
    } 

    
  }
  // 드롭다운
  const dropDownChooes = (e) => { 
    setDropDownValue(e.target.textContent);
    setIsClick(!isClick);
    const data = e.target.textContent;
    console.log(data)
    return axios.get('http://localhost:4848/economy',{params:{ data }})
      .then(res => {
        setCountryInfo(res.data.data[0]);
      })
      .catch( err => console.log(err) )
  }

  return(
        <>
        <Header/>
        <Background>
          <SerachStyle  
          onChange={serachValue}
          onKeyUp={serachValue}
          id="serach" 
          type="text" 
          placeholder="Serach.."
          />
          <DropDownStyle>
          <div 
          className="dropDown" 
          onClick={ () => setIsClick(!isClick) }>
            {dropDownValue} ▾</div>
          {isClick ? <div className="countryModal" onClick={dropDownChooes} > {countryName.map( li => <li>{li.name}</li>)} </div> : null }
          </DropDownStyle>
          <Chart countryInfo={countryInfo} setDropDownValue={setDropDownValue}/>
          
        </Background>
        </>
  )

}


export default App
