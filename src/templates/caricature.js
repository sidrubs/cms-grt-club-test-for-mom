import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ArtifactImage from "../components/ArtifactImage";
import Metadata from "../components/Metadata";

// eslint-disable-next-line
export const CaricatureTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
  born,
  died,
  artist
}) => {
  const CaricatureContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <ArtifactImage img={image} title={title} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Metadata born={born} died={died} artist={artist} />
            <CaricatureContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

CaricatureTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const CaricaturePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CaricatureTemplate
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
        born={post.frontmatter.born}
        died={post.frontmatter.died}
        artist={post.frontmatter.artist}
      />
    </Layout>
  );
};

CaricaturePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CaricaturePost;

export const pageQuery = graphql`
  query CaricaturePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        born
        died
        artist
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
