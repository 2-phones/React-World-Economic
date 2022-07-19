import React from "react";
import styled from "styled-components";

const SerachStyle = styled.input`

width : 300px;
height : 30px;
border : 3px solid lightgray;
box-shadow : 1px 1px 3px gray;
border-radius : 10px;
font-size : 15px;
padding-left: 10px;

`


const Background = styled.div`
    display : flex;
    justify-content : center;
    margin-top : 25px;
`

const ChartStyle = styled.div`
    margin-top : 250px;
`

export {SerachStyle,Background,ChartStyle}