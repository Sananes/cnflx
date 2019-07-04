// @flow
import { useStaticQuery, graphql } from "gatsby";

const useIntegrationList = () => {
  const { allSanityIntegration } = useStaticQuery(
    graphql`
      query IntegraitonListQuery {
        allSanityIntegration {
          edges {
            node {
              name
              description
              image {
                asset {
                  fluid(maxWidth: 1000) {
                    ...GatsbySanityImageFluid_noBase64
                  }
                }
              }
              _key
              slug {
                current
              }
            }
          }
        }
        sanitySiteIntegration {
          title
          subtitle
        }
      }
    `
  );

  return allSanityIntegration.edges;
};

export default useIntegrationList;
