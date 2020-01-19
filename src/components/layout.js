/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import Navigation from "./navigation/NavigationMain";
import 'src/scss/styles.scss';

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation title={data.site.siteMetadata.title} navActive={true} />

        <main className={props.product ? 'page-product' : 'page-static'}>{props.children}</main>

        <footer className="layout_footer">
          © {new Date().getFullYear()}
          {` `}
          {data.site.siteMetadata.title}
        </footer>

      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  bigHeader: false,
  product: false
};

export default Layout
