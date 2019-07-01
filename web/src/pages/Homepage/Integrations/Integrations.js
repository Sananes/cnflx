import React from "react";
import Image from "gatsby-image";
import Button from "../../../components/Button";
import styles from "./Integrations.module.scss";

// SVG's
import gmail from "../../../assets/svg/integrations/gmail.svg";
import jira from "../../../assets/svg/integrations/jira.svg";
import slack from "../../../assets/svg/integrations/slack.svg";
import intercom from "../../../assets/svg/integrations/intercom.svg";
import zendesk from "../../../assets/svg/integrations/zendesk.svg";
import twitter from "../../../assets/svg/integrations/twitter.svg";
import steam from "../../../assets/svg/integrations/steam.svg";
import chrome from "../../../assets/svg/integrations/chrome.svg";
import zapier from "../../../assets/svg/integrations/zapier.svg";

const integrationsList = [
  {
    name: "gmail",
    image: gmail
  },
  {
    name: "twitter",
    image: twitter
  },
  {
    name: "zapier",
    image: zapier
  },
  {
    name: "slack",
    image: slack
  },
  {
    name: "intercom",
    image: intercom
  },
  {
    name: "chrome",
    image: chrome
  },
  {
    name: "jira",
    image: jira
  },
  {
    name: "steam",
    image: steam
  },
  {
    name: "zendesk",
    image: zendesk
  }
];

const IntegrationItem = ({ data, key }) => (
  <li
    key={key}
    className={`${styles["integrations__item"]} ${
      styles["integrations__item--" + `${data.name}`]
    }`}
  >
    <img
      className={styles["integrations__item-image"]}
      src={data.image}
      alt={data.name}
    />
  </li>
);

const IntegrationIndex = () => {
  return (
    <section className={styles["integrations"]}>
      <div className={styles["integrations__header"]}>
        <h3 className={styles["integrations__title"]}>
          Designed to fit your workflow
        </h3>
        <p className={styles["integrations__subtitle"]}>
          A better feedback management platform means not rebuilding your
          current workflow. <br />
          Since Conflux stores all your users feedback, you have the choice to
          distribute it over many services.
        </p>
      </div>

      <ul className={styles["integrations__list"]}>
        {integrationsList.map((integration, index) => (
          <React.Fragment>
            <IntegrationItem key={index} data={integration} />
            {index === 4 ? (
              <div className={styles["integrations__split"]} />
            ) : null}
          </React.Fragment>
        ))}
      </ul>
      <Button
        className={styles["integrations__button"]}
        text="View all integrations &rarr;"
        link="/integrations"
      />
    </section>
  );
};

export default IntegrationIndex;
