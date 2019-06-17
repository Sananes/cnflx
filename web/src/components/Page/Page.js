import React, { useRef } from "react";
import styles from "./Page.module.scss";

type Props = {
  title?: string,
  subtitle?: string,
  children: React.Node,
  narrow: Boolean,
  center: Boolean
};

const Page = ({ title, subtitle, center, narrow, children }: Props) => {
  const pageRef = useRef();
  const isNarrow = narrow ? styles["page__title--narrow"] : "";
  const isCenter = center ? styles.page__center : styles.page__inner;

  const isNarrowOrCenter = isNarrow + isCenter;

  // useEffect(() => {
  //   pageRef.current.scrollIntoView();
  // });

  return (
    <div ref={pageRef} className={styles["page"]}>
      <div
        className={
          center ? styles["page__inner--center"] : styles["page__inner"]
        }
      >
        {title && (
          <h1 className={`${styles["page__title"]} ${isNarrow}`}>{title}</h1>
        )}
        {subtitle && <p className={styles.page__subtitle}>{subtitle}</p>}
        <div className={styles["page__body"]}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
