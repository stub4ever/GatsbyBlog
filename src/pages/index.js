import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, StaticQuery } from 'gatsby';
import Post from '../components/Post';
import { Row, Col } from 'reactstrap';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Home Page</h1>
        <Row>
            <Col md="8">
                <StaticQuery
                    query={indexQuery}
                    render={data => {
                        return (
                            <div>
                                {data.allMarkdownRemark.edges.map(
                                    ({ node }) => (
                                        <Post
                                            title={node.frontmatter.title}
                                            author={node.frontmatter.author}
                                            post={node.frontmatter.post}
                                            date={node.frontmatter.date}
                                            body={node.excerpt}
                                            tags={node.frontmatter.tags}
                                            fluid={
                                                node.frontmatter.image
                                                    .childImageSharp.fluid
                                            }
                                        />
                                    )
                                )}
                            </div>
                        );
                    }}
                />
            </Col>
            <Col md="4">
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.4)'
                    }}
                />
            </Col>
        </Row>
    </Layout>
);

const indexQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY")
                        author
                        post
                        tags
                        image {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
`;

export default IndexPage;
