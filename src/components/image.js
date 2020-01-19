import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 * - This component hack: https://noahgilmore.com/blog/easy-gatsby-image-components/
 */
const Image = (props) => (

    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
    `}

    render={(data) => {

      console.log(data);

      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.fileName);
      });

      if (!image) {
          console.error("Image not found!", props.fileName);
          return null;
      }

      const imageSizes = image.node.childImageSharp.sizes;

      return (
          <Img
              alt={props.alt}
              sizes={imageSizes}
              objectFit="cover"
              objectPosition="50% 50%"
          />
      );
    }}
    />
);

export default Image
