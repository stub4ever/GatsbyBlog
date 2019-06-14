/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/index.scss';

import Header from './header';
import Footer from './Footer';
import { Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';

const Layout = ({ children, pageTitle }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css"
                    crossOrigin="anonymous"
                />
                <Header siteTitle={data.site.siteMetadata.title} />
                <div className="container" id="content">
                    <h1>{pageTitle}</h1>
                    <Row>
                        <Col md="8">{children}</Col>
                        <Col md="4">
                            <Sidebar />
                        </Col>
                    </Row>
                </div>
                <Footer />
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
