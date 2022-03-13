
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from './Components/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-13&sortBy=publishedAt&apiKey=6f6485e043d749b88eabfec870af251b')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])


  const Mystyle = {
    position:'absolute',
    left:'50%',
    top:"50%",
    transform:'translate(-50%,-50%)'
  }

  return (
    <>
      {news.length === 0 ?
        <div style={Mystyle}>
          <Spinner animation="grow" variant="danger" />
        </div>
        :
        <Row xs={1} md={2} lg={3} className="g-4">
          {
            news.map(nw => <News news={nw} ></News>)
          }
        </Row>

      }
    </>
  );
}

export default App;
