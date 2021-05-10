import axios from "axios";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const ApiJsonPlaceHolder = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  });

  return (
    <div>
      <Container>
        <Row>
          {posts.map((post) => (
            <Col lg={3} md={4} sm={6} xs={12}>
              <Card class="main-card">
                <Card.Img
                  variant="top"
                  src="https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-center" style={{height: '26px', overflow: 'hidden'}}>{post.title}</Card.Title>
                  <Card.Text className="text-center" style={{height: '44px', overflow: 'hidden'}}>{post.body}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#"><Button>More</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ApiJsonPlaceHolder;
