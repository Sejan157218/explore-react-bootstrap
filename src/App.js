import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './Component/News/News';

function App() {
  const [news,SetNews] =useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=839ad78f6a9641949bbde3b084af417f')
      .then(res=>res.json())
      .then(data=>SetNews(data.articles))
  },[])

  return (
    <div className='App container'>
      {news.length===0 ? 
        <Spinner animation="border" variant="success mt-5" />
        : 
        <Row xs={1} md={4} className="g-4">
      {
        news.map(nw=><News news={nw}></News>)
      }
      </Row>
      }
    </div>
  );
}

export default App;
