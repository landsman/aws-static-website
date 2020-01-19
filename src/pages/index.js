import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "reactstrap/es/Container"

const IndexPage = () => (
    <Layout>
        <SEO title="Ahoj člověče" />

        <Container>

            <h1 className={'headline text-center'}>Ahoj</h1>

            <p>
                Tady bude brzy obsah
            </p>

        </Container>

    </Layout>
);

export default IndexPage
