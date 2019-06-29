import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./Partners.module.scss";

const IndexPartners = ({ className }) => (
  <StaticQuery
    query={graphql`
      query IndexPartnersQuery {
        sanityHomepage {
          partnersList {
            name
            _key
            url
            image {
              asset {
                fluid(maxWidth: 1000) {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className={styles["companies"]}>
        <div className={styles["companies__inner"]}>
          <h3 className={styles["companies__title"]}>
            Trusted by forward-thinking software teams around the world
          </h3>
          <ul className={styles["companies__list"]}>
            {data.sanityHomepage.partnersList.map(partner => (
              <li key={partner._key} className={styles["companies__list-item"]}>
                <a
                  className={styles["companies__list-item-link"]}
                  href={partner.url}
                >
                  <Image
                    fluid={partner.image.asset.fluid}
                    title={partner.name}
                    className={styles["companies__list-item-logo"]}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )}
  />
);

export default IndexPartners;
