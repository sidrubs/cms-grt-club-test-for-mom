import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ArtifactImage from "../components/ArtifactImage";

// eslint-disable-next-line
export const CaricatureTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
}) => {
  const CaricatureContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <ArtifactImage img={image} title={title} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{description}</p>
            <CaricatureContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

CaricatureTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
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
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Caricature">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
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
