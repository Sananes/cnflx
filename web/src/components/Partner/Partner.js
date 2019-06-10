import { React } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./Partner.module.scss";

const Person = ({ data }) => (
  <li className="partner__list-item">
    <Link to="#" className={styles["partner__list-item-link"]} />
    <Img
      src={data.sanityPartner.image.asset.url}
      alt={data.sanityPartner.title}
    />
  </li>
);

export default Person;

export const query = graphql`
  query PartnerQuery {
    allSanityPartner {
      nodes {
        name
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;
