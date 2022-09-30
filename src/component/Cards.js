import React from "react";
import { Button , Card } from "react-bootstrap";

const Cards= ({el}) => {
    return(<div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.date} |
          {el.type}
        
        </Card.Text>
        <Card.Text>
          {el.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>)
}
export default Cards