import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ArtifactImage from "../components/ArtifactImage";
import Metadata from "../components/Metadata";

// eslint-disable-next-line
export const ArtifactTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
  donor,
  donationDate,
}) => {
  const ArtifactContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <ArtifactImage img={image} title={title} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Metadata donor={donor} donationDate={donationDate} />
            <ArtifactContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

ArtifactTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const ArtifactPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArtifactTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Caricature">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
        donor={post.frontmatter.donor}
        donationDate={post.frontmatter.donationDate}
      />
    </Layout>
  );
};

ArtifactPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ArtifactPost;

export const pageQuery = graphql`
  query ArtifactPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        donor
        donationDate
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 100
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;
