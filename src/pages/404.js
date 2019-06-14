import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
    <Layout pageTitle="Oops! Something went wrong!">
        <SEO title="404: Not found" />
        <Link className="btn btn-primary text-upper" to={'/'}>
            Back Home
        </Link>
    </Layout>
);

export default NotFoundPage;
