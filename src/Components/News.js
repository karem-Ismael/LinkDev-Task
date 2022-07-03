import { Container } from "@mui/material"
import { useEffect,useState } from "react"
import Card from "./Card"
import NewsFilters from "./NewsFilters"
import "../Styles/_news.scss"

const News =()=>{
    const [News,setNews]=useState([])
    const[AllNews,setAllNews]=useState([])
    const [category,setCategory]=useState([])
    const [CategoryId,setCategoryId]=useState(-1)
    useEffect(()=>{
        fetch("https://api.npoint.io/d275425a434e02acf2f7").
        then((res)=>res.json())
        .then((data)=>{
            setNews(data.News)
            setAllNews(data.News)
        })

        fetch("https://api.npoint.io/91298d970c27e9a06518")
        .then((res)=>res.json())
        .then((data)=>{
            setCategory([{id:-1,name:"All News"},...data.newsCategory])
        })
    },[])
  

return (
    <Container>
    <h2 className="text-center news-header">Top News</h2>
    <NewsFilters category={category} AllNews={AllNews} 
    setNews={setNews}
    CategoryId={CategoryId} setCategoryId={setCategoryId}/>

    
        <div className="row">
            {
                 News.slice(0,6).map((oneNews,index)=>(
                    <Card item={oneNews} key={index} CatergoryName={category.filter(cat=>+cat.id == +oneNews.id)}/>
                ))
            }

        </div>
        <div className="row">
            <div className="text-center">
            <button  className="more">
                view All News
            </button>
            </div>
          

        </div>
        <div>
            
        </div>
       
    
  
    </Container>
    
)
}
export default News