// @flow
import { useStaticQuery, graphql } from "gatsby";

const useIntegrationList = () => {
  const { allSanityIntegration } = useStaticQuery(
    graphql`
      query IntegraitonListQuery {
        allSanityIntegration {
          edges {
            node {
              slug {
                current
              }
              name
              image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  return allSanityIntegration.edges;
};

export default useIntegrationList;
