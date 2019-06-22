import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import authors from '../utils/authors';
import { Row, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import JohnImage from '../images/john.jpg';
import janeImage from '../images/jane.jpg';
import { slugify } from '../utils/utilityFunctions';

const TeamPage = () => (
    <Layout pageTitle="Our Team">
        <SEO title="Our Team" keywords={['gatsby', 'application', 'react']} />
        <Row className="mb-4">
            <div className="col-md-3">
                <img
                    src={JohnImage}
                    style={{ maxWidth: '100%' }}
                    alt="John Profile"
                />
            </div>
            <div className="col-md-8">
                <Card style={{ minHeight: '100%' }}>
                    <CardBody>
                        <CardTitle>{authors[0].name}</CardTitle>
                        <CardText>{authors[0].bio}</CardText>
                    </CardBody>
                </Card>
            </div>
        </Row>
        <Row className="mb-4">
            <div className="col-md-3">
                <img
                    src={janeImage}
                    style={{ maxWidth: '100%' }}
                    alt="Jane Profile"
                />
            </div>
            <div className="col-md-8">
                <Card style={{ minHeight: '100%' }}>
                    <CardBody>
                        <CardTitle>{authors[1].name}</CardTitle>
                        <CardText>{authors[1].bio}</CardText>
                    </CardBody>
                </Card>
            </div>
        </Row>
    </Layout>
);

export default TeamPage;
