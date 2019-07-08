import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import { useSiteMetadata } from "../../hooks";

const PrivacyIndex = ({ data }) => {
  const { name } = useSiteMetadata();
  return (
    <Layout title={`Privacy Policy | ${name}`}>
      <Page
        title="Privacy Policy"
        subtitle={
          <React.Fragment>
            Something we haven't covered?{" "}
            <a href="mailto: info@cnflx.io">Email us</a> and we'll get back to
            you!
          </React.Fragment>
        }
        center={true}
      >
        <div class="page-narrow-container">
          <p>
            Your privacy is important to us. It is Conflux's policy to respect
            your privacy regarding any information we may collect from you
            across our website,&nbsp;
            <a href="https://getconflux.com">https://getconflux.com</a>, and
            other sites we own and operate.
          </p>
          <h3>Information we collect</h3>
          <h4>Log data</h4>
          <p>
            When you visit our website, our servers may automatically log the
            standard data provided by your web browser. This data is considered
            "non-identifying information", as it does not personally identify
            you on its own. It may include your computer's Internet Protocol
            (IP) address, your browser type and version, the pages you visit,
            the time and date of your visit, the time spent on each page, and
            other details.
          </p>
          <p>
            We may also collect data about the device you are using to access
            our website. This data may include the device type, operating
            system, unique device identifiers, device settings, and geo-location
            data. What we collect can depend on the individual settings of your
            device and software. We recommend checking the policies of your
            device manufacturer or software provider to learn what information
            they make available to us.
          </p>
          <h4>Personal information</h4>
          <p>We may ask for personal information, such as your:</p>
          <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Social media profiles</li>
            <li>Payment information</li>
            <li>Tax number</li>
          </ul>
          <p>
            This data is considered "identifying information", as it can
            personally identify you.
          </p>
          <p>
            We only request this information when you interact with our
            services-like signing up for an account, making use of our platform
            features, paying for access, or subscribing to our newsletter. We
            only use collected personal information in the context of providing
            or improving these services.
          </p>
          <h4>Business data</h4>
          <p>
            Business data refers to data that accumulates over the normal course
            of operation on our platform. This may include transaction records,
            stored files, user profiles, analytics data and other metrics, as
            well as other types of information, created or generated, as users
            interact with our services.
          </p>
          <h3>How we collect information</h3>
          <p>
            We collect information by fair and lawful means, with your knowledge
            and consent. We also let you know why we're collecting it and how it
            will be used. You are free to refuse our request for this
            information, with the understanding that we may be unable to provide
            you with some of your desired services without it.
          </p>
          <h3>Use of information</h3>
          <p>
            We may use a combination of identifying and non-identifying
            information to understand who our visitors are, how they use our
            services, and how we may improve their experience of our website in
            future. We also use this information to gain insights into
            demographics, product and service popularity, and the effectiveness
            of our marketing activity. We do not disclose the specifics of this
            information publicly, but may share aggregated and anonymised
            versions of this information, for example, in website and customer
            usage trend reports.
          </p>
          <p>
            We primarily use your personal information for the purposes of
            granting you access to engage with certain areas of our site, to
            charge you for your subscription, and to notify you of any changes
            to your account and service.
          </p>
          <p>
            We may use your personal details to contact you with updates about
            our website and services, along with promotional content that we
            believe may be of interest to you. If you wish to opt out of
            receiving promotional content, you can follow the "unsubscribe"
            instructions provided alongside any promotional correspondence from
            us.
          </p>
          <h3>Data processing and storage</h3>
          <p>
            The personal information we collect is stored and processed in
            Netherlands, Ireland and United States, or where we or our partners,
            affiliates and third-party providers maintain facilities. We only
            transfer data within jurisdictions subject to data protection laws
            that reflect our commitment to protecting the privacy of our users.
          </p>
          <p>
            We only retain personal information and business data for as long as
            necessary to provide a service, or to improve our services in
            future. While we retain this data, we will protect it within
            commercially acceptable means to prevent loss and theft, as well as
            unauthorised access, disclosure, copying, use or modification. That
            said, we advise that no method of electronic transmission or storage
            is 100% secure, and cannot guarantee absolute data security.
          </p>
          <p>
            If you&nbsp;<Link to="/request-user-data">request</Link> your
            personal information be deleted, or where your personal information
            becomes no longer relevant to our operations, we will erase it from
            our system within a reasonable timeframe.
          </p>
          <h3>Cookies</h3>
          <p>
            We use "cookies" to collect information about you and your activity
            across our site. A cookie is a small piece of data that our website
            stores on your computer, and accesses each time you visit, so we can
            understand how you use our site. This helps us serve you content
            based on preferences you have specified. Please refer to our&nbsp;
            <Link to="/cookie-policy">Cookie Policy</Link> for more information.
          </p>
          <h3>Third-party access to information</h3>
          <p>We use third-party services for:</p>
          <ul>
            <li>Analytics tracking</li>
            <li>User authentication</li>
            <li>Advertising and promotion</li>
            <li>Content marketing</li>
            <li>Email marketing</li>
            <li>Payment processing</li>
          </ul>
          <p>
            These services may access our data solely for the purpose of
            performing specific tasks on our behalf. We do not share any
            personally identifying information with them without your explicit
            consent. We do not give them permission to disclose or use any of
            our data for any other purpose.
          </p>
          <p>
            We may, from time to time, allow limited access to our data by
            external consultants and agencies for the purpose of analysis and
            service improvement. This access is only permitted for as long as
            necessary to perform a specific function. We only work with external
            agencies whose privacy policies align with ours.
          </p>
          <p>
            We will refuse government and law enforcement requests for data if
            we believe a request is too broad or unrelated to its stated
            purpose. However, we may cooperate if we believe the requested
            information is necessary and appropriate to comply with legal
            process, to protect our own rights and property, to protect the
            safety of the public and any person, to prevent a crime, or to
            prevent what we reasonably believe to be illegal, legally
            actionable, or unethical activity.
          </p>
          <p>
            We do not otherwise share or supply personal information to third
            parties. We do not sell or rent your personal information to
            marketers or third parties.
          </p>
          <h4>Use of Intercom Services</h4>
          <p>
            We use third-party analytics services to help understand your usage
            of our services. In particular, we provide a limited amount of your
            information (such as sign-up date and some personal information like
            your email address) to Intercom, Inc. ("Intercom") and utilize
            Intercom to collect data for analytics purposes when you visit our
            website or use our product. As a data processor acting on our
            behalf, Intercom analyzes your use of our website and/or product and
            tracks our relationship by way of cookies and similar technologies
            so that we can improve our service to you. For more information on
            Intercom's use of cookies, please visit&nbsp;
            <a
              href="https://www.intercom.com/terms-and-policies#cookie-policy"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              https://www.intercom.com/terms-and-policies#cookie-policy
            </a>
            . We may also use Intercom as a medium for communications, either
            through email, or through messages within our product(s). As part of
            our service agreements, Intercom collects publicly available contact
            and social information related to you, such as your email address,
            gender, company, job title, photos, website URLs, social network
            handles and physical addresses, to enhance your user experience. For
            more information on the privacy practices of Intercom, please
            visit&nbsp;
            <a
              href="https://protect-eu.mimecast.com/s/zMP6C0glXI29np7TOQGei?domain=intercom.com"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              https://www.intercom.com/terms-and-policies#privacy
            </a>
            . Intercom's services are governed by Intercom's terms of use which
            can be found at&nbsp;
            <a
              href="https://protect-eu.mimecast.com/s/_s9hCg5BQCljvDoc7KDEG?domain=intercom.com"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              https://www.intercom.com/terms-and-policies#terms
            </a>
            . If you would like to opt out of having this information collected
            by or submitted to Intercom, please contact us.
          </p>
          <h3>Children's Privacy</h3>
          <p>
            We are committed to protecting the privacy of children who use our
            services. We encourage parents to engage with us in protecting their
            children's privacy, ensuring a safe and enjoyable online experience.
            Please refer to our&nbsp;
            <a href="/childrens-privacy-policy">
              Children's Privacy Policy
            </a>{" "}
            for more information.
          </p>
          <h3>Limits of our policy</h3>
          <p>
            This privacy policy only covers Conflux's own collecting and
            handling of data. We only work with partners, affiliates and
            third-party providers whose privacy policies align with ours,
            however we cannot accept responsibility or liability for their
            respective privacy practices.
          </p>
          <p>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            policies of those sites, and cannot accept responsibility or
            liability for their respective privacy practices.
          </p>
          <h3>Changes to this policy</h3>
          <p>
            At our discretion, we may change our privacy policy to reflect
            current acceptable practices. We will take reasonable steps to let
            users know about changes via our website. If you are a registered
            user on&nbsp;
            <a href="https://getconflux.com">https://getconflux.com</a>, we will
            notify you using the contact details saved in your account. Your
            continued use of this site after any changes to this policy will be
            regarded as acceptance of our practices around privacy and personal
            information.
          </p>
          <h3>Your rights and responsibilities</h3>
          <p>
            As our user, you have the right to be informed about how your data
            is collected and used. You are entitled to know what data we collect
            about you, and how it is processed. You are entitled to correct and
            update any personal information about you, and to&nbsp;
            <a href="/request-user-data">request</a> this information be
            deleted. You may amend your account information at any time, using
            the tools provided in your account control panel.
          </p>
          <p>
            You are entitled to restrict or object to our use of your data,
            while retaining the right to use your personal information for your
            own purposes. You have the right to opt out of data about you being
            used in decisions based solely on automated processing.
          </p>
          <p>
            Feel free to contact if you have any concerns or questions about how
            we handle your data and personal information.
          </p>
          <p>
            <strong>Conflux Data Controller</strong>
            <br />
            Sijmen Vos
            <br />
            <a href="mailto:sijmen@cnflx.io">sijmen@cnflx.io</a>
          </p>
          <p>
            <strong>Conflux Data Protection Officer</strong>
            <br />
            Vincent te Beek
            <br />
            <a href="mailto:vincent@cnflx.io">vincent@cnflx.io</a>
          </p>
          <p>This policy is effective as of 25 May 2018.</p>
        </div>
      </Page>
    </Layout>
  );
};

export default PrivacyIndex;
