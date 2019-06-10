import React, { useRef } from "react";
import styles from "./Page.module.scss";

type Props = {
  title?: string,
  subtitle?: string,
  children: React.Node,
  center: Boolean
};

const Page = ({ title, subtitle, center, children }: Props) => {
  const pageRef = useRef();

  // useEffect(() => {
  //   pageRef.current.scrollIntoView();
  // });

  return (
    <div ref={pageRef} className={styles["page"]}>
      <div
        className={
          !center ? styles[`page__inner`] : styles[`page__inner--center`]
        }
      >
        {title && <h1 className={styles["page__title"]}>{title}</h1>}
        {subtitle && <p className={styles["page__subtitle"]}>{subtitle}</p>}
        <div className={styles["page__body"]}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
