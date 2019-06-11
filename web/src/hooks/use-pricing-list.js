// @flow
import { useStaticQuery, graphql } from "gatsby";

const usePricingList = () => {
  const { sanityPricing } = useStaticQuery(
    graphql`
      query PricingListQuery {
        sanityPricing {
          packages {
            description
            _key
            endusers
            name
            price
          }
        }
      }
    `
  );

  return sanityPricing.packages;
};

export default usePricingList;
