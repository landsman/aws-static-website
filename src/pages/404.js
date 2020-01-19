import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "reactstrap/es/Container"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>

      <h1 className={'headline text-center'}>404</h1>

      <p style={{
        textAlign: "center",
      }}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>

    </Container>

  </Layout>
);

export default NotFoundPage
