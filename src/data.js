import { Main } from "./App";

 const data = [
    { name: "Canada", values: 27250 },
  { name: "USA", values: 107340},
  { name: "Germany", values: 45360 },
  { name: "UK", values: 66250}
  ];

  

const datas =[ {
    country_eng_nm: 'United States of America',
    country_iso_alp2: 'US',
    country_nm: '미합중국',
    currency_unit: null,
    export_amount: '1431400000000',
    gdp: '20807000000000',
    gdp_desc: '(’20)* 추정치',
    gdp_growth_rate: '-3.5',
    gdp_growth_rate_desc: '(GDP기준) (’20)* 추정치',
    gdp_per_capita: '63416',
    gdp_per_capita_desc: '(’20) 추정치',
    import_amount: '2336600000000',
    inflation_rate: null,
    inflation_rate_desc: null,
    main_resource: null,
    major_industry: '서비스(79.4%), 제조업(19.2%), 농업(1.4%)(’19)',
    unemployment_desc: null,
    unemployment_rate: null
  },
]

const countryName = [
  {
  country_nm : "미합중국",
  name : "미국"
},
  {
  country_nm : "러시아",
  name : "러시아"
},
  {
  country_nm : "영국",
  name : "영국"
},
  {
  country_nm : "독일",
  name : "독일"
},
{
  country_nm : "중국",
  name : "중국"
},
{
  country_nm : "가나",
  name : "가나"
},
{
  country_nm : "이탈리아",
  name : "이탈리아"
},
{
  country_nm : "네덜란드",
  name : "네덜란드"
},
].sort( (a,b) => { // ㄱ-ㅎ 정렬
  var nameA = a.name.toUpperCase(); 
  var nameB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});

const user = [
  {
    id : "abc123",
    password: "12345",
},
{
    id : "kimcoding",
    password: "12345",
},
{
    id : "parkhacker",
    password: "12345",
},
]
export {data, datas , user, countryName}