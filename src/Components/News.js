import React from 'react'
import { Card, Col } from 'react-bootstrap'

function News(props) {
    const {title, description, urlToImage, url }= props.news;
    const sliceTitle = title.slice(0,30);
    const slicedesc = description.slice(0,80)+"...";
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img 
                    style={{width:"100%", height:'300px', objectFit:'cover'}} 
                    variant="top" 
                    src={urlToImage === "" ? "not found" : urlToImage} 
                    />
                    <Card.Body>
                        <Card.Title>{sliceTitle}</Card.Title>
                        <Card.Text>
                            {slicedesc}
                        </Card.Text>
                        <a href={url} className="btn btn-success" target="_blank" rel="noreferrer">Click</a>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default News