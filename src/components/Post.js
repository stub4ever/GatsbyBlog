import React from 'react';
import { Link } from 'gatsby';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

const Post = ({ title, author, post, date, body }) => {
    console.log(post);
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <Link to={post}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span>
                    <span className="text-info"> By {author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link className="btn btn-outline-primary float right">
                    Read More
                </Link>
            </CardBody>
        </Card>
    );
};
export default Post;
