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
            }
          }
        }
      }
    `
  );

  return allSanityIntegration.edges;
};

export default useIntegrationList;
