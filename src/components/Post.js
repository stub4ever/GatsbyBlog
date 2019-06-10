import React from 'react';
import { Link } from 'gatsby';
import {
    Card,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
    Badge
} from 'reactstrap';
import Img from 'gatsby-image';
import { slugify } from '../utils/utilityFunctions';

const Post = ({ title, author, post, date, body, fluid, tags }) => {
    return (
        <Card>
            <Link to={post}>
                <Img className="card-image-top" fluid={fluid} />
            </Link>
            <CardBody>
                <CardTitle>
                    <Link to={post}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span>
                    <span className="text-info"> By {author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                    {tags.map(tag => (
                        <li>
                            <Link to={`/tag/${slugify(tag)}`}>
                                <Badge color="primary">{tag}</Badge>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link className="btn btn-outline-primary float-right text-uppercase">
                    Read More
                </Link>
            </CardBody>
        </Card>
    );
};
export default Post;
