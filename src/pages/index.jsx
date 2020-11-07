import React from 'react';
import { graphql } from 'gatsby';
import slugify from 'slugify';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import { Layout, CategoryCard, RecentLinks } from '../components';

export default ({ data }) => {
  const categories = data.allMarkdownRemark.edges.map((edge) => ({
    ...edge.node.frontmatter,
    slug: edge.node.fields.slug,
  }));

  return (
    <>
      <Layout title="Home">
        <Jumbotron
          style={{
            minHeight: '45vh',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1532408840957-031d8034aeef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80)',
          }}
        >
          <Container>
            <Row>
              <Col xs={8} className="bg-dark text-white p-4">
                <h1 className="mb-2">Start saving the planet today</h1>
                <p>
                  We are faced with a global existential crisis but together our
                  personal choices can create huge systematic change.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <Col xs={6}>
              <h2>What can we do?</h2>
              <p>
                We all need to improve our carbon footprint. Everyone. Most
                footprints in developed countries are 10-20 tonnes, but the
                sustainable target for each person is 5 tonnes by 2030, 2 tonnes
                by 2050. We are not on target, but we could be.
              </p>
              <ul>
                <li>
                  <a href="/tags/track">track</a> your carbon footprint
                </li>
                <li>
                  identify ways to <a href="/tags/reduce">reduce</a> footprint
                  and waste
                </li>
                <li>
                  <a href="/tags/shift">shift</a> to sustainable alternatives
                  for things you currently do
                </li>
                <li>
                  <a href="/tags/refuse">refuse</a> pointless trips and waste
                </li>
                <li>
                  choose second hand and <a href="/tags/reuse">reuse</a> instead
                  of buying new
                </li>
                <li>
                  save cash learning to <a href="/tags/repair">repair</a> things
                </li>
                <li>
                  <a href="/tags/recycle">recycle</a> as little as possible
                </li>
                <li>
                  as a last resort <a href="/tags/offset">offset</a> what you
                  cannot avoid any other way
                </li>
                <li>
                  <a href="/tags/vote">vote</a> for politicians who will take
                  drastic immediate action
                </li>
                <li>
                  <a href="/tags/choose">choose</a> the companies we patronize,
                  to encourage positive trends
                </li>
                <li>
                  <a href="/tags/inspire">inspire</a> others to understand the
                  gravity of the problems we're solving
                </li>
              </ul>
            </Col>
            <Col xs={6}>
              <RecentLinks links={data.allAirtable.nodes} showAmount={3} />
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="card-grid">
                {categories.map((category) => (
                  <CategoryCard
                    category={category}
                    key={slugify(category.title)}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            intro
            image {
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allAirtable(filter: {data: {status: {eq: "Completed"}}}) {
      nodes {
        data {
          categories
          countries
          description
          featured
          title
          url
          tags
        }
      }
    }
  }
`;
