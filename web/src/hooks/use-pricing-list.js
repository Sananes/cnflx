// @flow
import { useStaticQuery, graphql } from "gatsby";

const usePricingList = () => {
  const { sanityPricing } = useStaticQuery(
    graphql`
      query PricingListQuery {
        sanityPricing {
          _rawPackage(resolveReferences: { maxDepth: 4 })
        }
      }
    `
  );

  return sanityPricing._rawPackage;
};

export default usePricingList;
