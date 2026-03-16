import axios from 'axios'
import React, { useState } from 'react'



const News = () => {

    const [data, setData] = useState([])

    const getNews=async()=>{
       const news=await axios.get('https://newsapi.org/v2/everything?q=apple&from=2026-02-04&to=2026-02-04&sortBy=popularity&apiKey=f973daf9b0ad469f8ddc623a35cbb783')
    console.log(news.data);
     setData(news.data.articles)
    }

  return (
    <div className='m-3'>
         <h1>Daily News</h1>
         <button className='bg-red-700' onClick={getNews}>get News</button>

        {data.map(function(elem,idx){
            return <div>
                <h3 className='font-bold'>{elem.title}</h3>
                <img src={elem.urlToImage} alt="" />
                <h2>{elem.description}</h2>
                <a href={elem.url} className='bg-blue-600 rounded-3xl p-1 items-center' >view more</a>
                
            </div>
            
        })}       
   
    </div>
  )
}

export default News