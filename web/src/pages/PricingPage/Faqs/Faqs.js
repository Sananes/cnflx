import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./Faqs.module.scss";
type Props = {
  className?: string
};
const FaqTemplate = ({ className }: Props) => (
  <StaticQuery
    query={graphql`
      query FaqQuery {
        sanityPricing {
          _rawFaqs(resolveReferences: { maxDepth: 10 })
        }
      }
    `}
    render={data => (
      <section className={`${className} ${styles["faq"]}`}>
        <h3 className={styles["faq__title"]}>Frequently Asked Questions</h3>
        <ul className={styles["faq__list"]}>
          {data.sanityPricing._rawFaqs &&
            data.sanityPricing._rawFaqs.map(faq => (
              <li key={faq._key} className={styles["faq__item"]}>
                <h4 className={styles["faq__item-title"]}>
                  {faq.title && faq.title}
                </h4>
                <p className={styles["faq__item-body"]}>
                  {faq.description && faq.description}
                </p>
              </li>
            ))}
        </ul>
      </section>
    )}
  />
);

export default FaqTemplate;
