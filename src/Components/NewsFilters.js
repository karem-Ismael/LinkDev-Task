import { Nav } from "react-bootstrap";

const NewsFilters=({category,AllNews,CategoryId,setCategoryId,setNews})=>{
    const FilterByCategory=(id)=>{
      if(id==-1){
        setNews(AllNews)
        return
      }
      const filteredNews=AllNews.filter(oneNew=>oneNew.id == id )
      setCategoryId(id)
      setNews(filteredNews)
    }
  
return(
    
category.length ?
(
    <Nav variant="pills" className="flex-row mt-3 mb-2 justify-content-center" activeKey={CategoryId} >
        {
             category.map((oneCategory,index)=>(
                <Nav.Item key={index} onClick={()=>FilterByCategory(oneCategory.id)}>
                <Nav.Link eventKey={oneCategory.id}>{oneCategory.name}</Nav.Link>
              </Nav.Item>
                ))
        }
</Nav>
)     :null 
       
 
    
    
)
}
export default NewsFilters