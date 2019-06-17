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
                  url
                }
              }
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
