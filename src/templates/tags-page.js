import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button, Badge } from 'reactstrap';
import { slugify } from '../utils/utilityFunctions';

const TagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext;

    return (
        <Layout pageTitle="App tags">
            <SEO title="All Tags" keywords={['tags', 'topics']} />
            <ul>
                {tags.map(tag => (
                    <li key={tag} style={{ marginBottom: '10px' }}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag}{' '}
                            <Badge color="light">{tagPostCounts[tag]}</Badge>
                        </Button>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default TagsPage;
