import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./Partners.module.scss";

const IndexPartners = () => (
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
                url
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
                  <img
                    src={partner.image.asset.url}
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
