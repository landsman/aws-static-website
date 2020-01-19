import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Container from "reactstrap/es/Container"

const Page = () => (
    <Layout>
        <SEO title="Page 2" />

        <Container>

            <h1 className={'headline text-center'}>Page 2</h1>

            <p>
                Hello world 2
            </p>

        </Container>

    </Layout>
);

export default Page;
