import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const HistoryPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
  description,
  fullImage,
}) => {
  const heroImage = getImage(image) || image;
  const HistoryContent = contentComponent || Content;

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <p>{description}</p>
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
  description: PropTypes.string,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const HistoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  console.log("History data: ", post)

  return (
    <Layout>
      <HistoryPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}
        main={post.frontmatter.main}
        testimonials={post.frontmatter.testimonials}
        fullImage={post.frontmatter.full_image}
        pricing={post.frontmatter.pricing}
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
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        description
      }
    }
  }
`;
