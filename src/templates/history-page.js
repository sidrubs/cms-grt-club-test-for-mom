import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const HistoryPageTemplate = ({
  content,
  contentComponent,
  helmet,
  image,
  title,
  heading,
}) => {
  const heroImage = getImage(image) || image;
  const HistoryContent = contentComponent || Content;

  return (
    <div className="content">
      {helmet || ""}
      <FullWidthImage img={heroImage} title={title} subheading={heading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <HistoryContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

HistoryPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

const HistoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HistoryPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
      />
    </Layout>
  );
};

HistoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HistoryPage;

export const historyPageQuery = graphql`
  query HistoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
      }
    }
  }
`;
