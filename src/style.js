import React from "react";
import styled from "styled-components";

const SerachStyle = styled.input`

width : 190px;
height : 30px;
border : 3px solid lightgray;
box-shadow : 1px 1px 3px gray;
border-radius : 10px;
font-size : 15px;
padding-left: 10px;
margin : 25px;

`

const Background = styled.div`
    display : flex;
    justify-content : space-around;
    margin-top : 25px;
    border: 1px solid;
`

const ChartStyle = styled.div`
    margin-top : 250px;
`

const DropDownStyle = styled.div`
    .dropDown{
    display:flex;
    justify-content:space-around;
    align-items : center;
    width :  350px;
    height: 50px;
    margin-top : 20px;
    border: 1px solid #Ffffff ;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 3px #999;
    cursor: pointer;
    }
    .countryModal{
    /* display: flex;
    flex-direction : column; */
    list-style : none;
    width :  350px;
    height: 250px;
    margin-top : 10px;
    border: 1px solid #Ffffff ;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 3px #999;
    overflow: auto;

    
    }
    li {
        padding : 10px;
        cursor: pointer;

    }
    li:hover {
        background-color: lightgray;
    }

    
`
const SelectStyle = styled.div`
    .fruits_select{
        width : 150px;
        margin : 25px;
        height  : 20px;
    }
    option {
        width : 450px;
        height : 30px;
    }
`


export {SerachStyle,Background,ChartStyle,DropDownStyle,SelectStyle}