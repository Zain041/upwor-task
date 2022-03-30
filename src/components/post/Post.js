import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Post = ({ image, content, Button }) => {
    return (
        <Container>
            <Row>
                <Col sm='12' md='12' lg='12'>
                    <div className='post'>
                        <div className='post-img-wrapper'>
                            <img src={image} alt="" />

                        </div>
                        <div className='post-content'>
                            <p className='post-content-text'>{content}</p>
                            {Button && <Button />}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Post
