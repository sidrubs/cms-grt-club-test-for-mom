import * as React from "react";

import Layout from "../../components/Layout";
import ArtifactList from "../../components/ArtifactList";

export default class ArtifactIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #8B2121, -0.5rem 0 0 #8B2121",
              backgroundColor: "#8B2121",
              color: "white",
              padding: "1rem",
            }}
          >
            Artifacts
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ArtifactList />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
