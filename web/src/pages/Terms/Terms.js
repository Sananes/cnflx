// @flow
import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import { useSiteMetadata } from "../../hooks";

const TermsPage = ({ data }: Props) => {
  const { name } = useSiteMetadata();

  return (
    <Layout title={`Terms &amp; Conditions | ${name}`}>
      <Page title="Terms &amp; Conditions" center={true}>
        <h1>Terms and Conditions</h1>
        <small>Effective Date: June 2, 2016</small>
        <p>Thanks for using Conflux’s products and services (“Services”).</p>
        <p>
          These Terms of Use (“Terms”) contain the terms under which Conflux
          provides their Services to you and describe how the Services may be
          accessed and used. You indicate your agreement to these Terms by
          clicking or tapping on a button indicating your acceptance of these
          Terms, by executing a document that references them, or by using the
          Services. If you will be using the Services on behalf of an
          organization, you agree to these Terms on behalf of that organization
          and you represent that you have the authority to do so. In such case,
          “you” and “your” will refer to that organization.
        </p>
        <h2>1. Fees and Payments</h2>
        1.1. Fees for Services. You agree to pay to Conflux any fees for each
        Service you purchase or use (including any overage fees), in accordance
        with the pricing and payment terms presented to you for that Service.
        Where applicable, you will be billed using the billing method you select
        through your account management page. Fees paid by you are
        non-refundable, except as provided in these Terms or when required by
        law. 1.2. Subscriptions. Some of our Services are billed on a
        subscription basis (we call these “Subscriptions”). This means that you
        will be billed in advance on a recurring, periodic basis (each period is
        called a “billing cycle”). Billing cycles are typically monthly or
        annual, depending on what subscription plan you select when purchasing a
        Subscription. Your Subscription will automatically renew at the end of
        each billing cycle unless you cancel auto-renewal by contacting our
        customer support team. While we will be sad to see you go, you may
        cancel auto-renewal on your Subscription at any time, in which case your
        Subscription will continue until the end of that billing cycle before
        terminating. You may cancel auto-renewal on your Subscription
        immediately after the Subscription starts if you do not want it to
        renew. 1.3. Taxes. Unless otherwise stated, you are responsible for any
        taxes (other than Conflux’s income tax) or duties associated with the
        sale of the Services, including any related penalties or interest
        (collectively, “Taxes”). You will pay Conflux for the Services without
        any reduction for Taxes. If Conflux is obliged to collect or pay Taxes,
        the Taxes will be invoiced to you, unless you provide Conflux with a
        valid tax exemption certificate authorized by the appropriate taxing
        authority or other documentation providing evidence that no tax should
        be charged. Conflux will not charge you VAT if you provide us with a VAT
        number issued by a taxing authority in the European Union, are
        purchasing the Services from Conflux V.O.F. for business reasons, and
        are located in a different European Union member state from Conflux
        V.O.F.. If you are required by law to withhold any Taxes from your
        payments to Conflux, you must provide Conflux with an official tax
        receipt or other appropriate documentation to support such payments.
        1.4. Price Changes. Conflux may change the fees charged for the Services
        at any time, provided that, for Services billed on a subscription basis,
        the change will become effective only at the end of the then-current
        billing cycle of your Subscription. Conflux will provide you with
        reasonable prior written notice of any change in fees to give you an
        opportunity to cancel your Subscription before the change becomes
        effective. 1.5. Overage Fees. Unless otherwise stated, any overage fees
        incurred by you will be billed in arrears. Overage fees which remain
        unpaid for 30 days after being billed are considered overdue. Failure to
        pay overage fees when due may result in the applicable Service being
        limited, suspended, or terminated (subject to applicable legal
        requirements), which may result in a loss of your data associated with
        that Service. 2. Privacy 2.1. Privacy. In the course of using the
        Services, you may submit content to Conflux (including your personal
        data and the personal data of others) or third parties may submit
        content to you through the Services (your “Content”). We know that by
        giving us your Content, you are trusting us to treat it appropriately.
        Conflux’s Privacy Policy detail how we treat your Content and personal
        data and we agree to adhere to that privacy policy. You in turn agree
        that Conflux may use and share your Content in accordance with our
        privacy policy. 2.2. Confidentiality. Conflux will treat your Content as
        confidential information and only use and disclose it in accordance with
        these Terms (including our privacy policy). However, your Content is not
        regarded as confidential information if such Content: (a) is or becomes
        public (other than through breach of these Terms by Conflux); (b) was
        lawfully known to Conflux before receiving it from you; (c) is received
        by Conflux from a third party without knowledge of breach of any
        obligation owed to you; or (d) was independently developed by Conflux
        without reference to your Content. Conflux may disclose your Content
        when required by law or legal process, but only after Conflux, if
        permitted by law, uses commercially reasonable efforts to notify you to
        give you the opportunity to challenge the requirement to disclose. 2.3.
        Security. Conflux will store and process your Content in a manner
        consistent with industry security standards. Conflux has implemented
        appropriate technical, organizational, and administrative systems,
        policies, and procedures designed to help ensure the security,
        integrity, and confidentiality of your Content and to mitigate the risk
        of unauthorized access to or use of your Content. 3. Your Content 3.1.
        You Retain Ownership of Your Content. You retain ownership of all of
        your intellectual property rights in your Content. Conflux does not
        claim ownership over any of your Content. These Terms do not grant us
        any licenses or rights to your Content except for the limited rights
        needed for us to provide the Services, and as otherwise described in
        these Terms. 3.2. Limited License to Your Content. You grant Conflux a
        worldwide, royalty free license to use, reproduce, distribute, modify,
        adapt, create derivative works, make publicly available, and otherwise
        exploit your Content, but only for the limited purposes of providing the
        Services to you and as otherwise permitted by Conflux’s privacy policy.
        This license for such limited purposes continues even after you stop
        using our Services, with respect to aggregate and de-identified data
        derived from your Content and any residual backup copies of your Content
        made in the ordinary course of Conflux’s business. This license also
        extends to any trusted third parties we work with to the extent
        necessary to provide the Services to you. If you provide Conflux with
        feedback about the Services, we may use your feedback without any
        obligation to you. 3.3. Customer Lists. Conflux may identify you (by
        name and logo) as a Conflux customer on Conflux’s website and on other
        promotional materials. Any goodwill arising from the use of your name
        and logo will inure to your benefit. 3.4. Other IP Claims. Conflux
        respects the intellectual property rights of others, and we expect our
        users to do the same. If you believe a Conflux user is infringing upon
        your intellectual property rights, you may report it to our customer
        support team. 4. Conflux IP 4.1. Conflux IP. Neither these Terms nor
        your use of the Services grants you ownership in the Services or the
        content you access through the Services (other than your Content). 5.
        User Content 5.1. User Content. The Services display content provided by
        others that is not owned by Conflux. Such content is the sole
        responsibility of the entity that makes it available. Correspondingly,
        you are responsible for your own Content and you must ensure that you
        have all the rights and permissions needed to use that Content in
        connection with the Services. Conflux is not responsible for any actions
        you take with respect to your Content, including sharing it publicly.
        Please do not use content from the Services unless you have first
        obtained the permission of its owner, or are otherwise authorized by law
        to do so. 5.2. Content Review. You acknowledge that, in order to ensure
        compliance with legal obligations, Conflux may be required to review
        certain content submitted to the Services to determine whether it is
        illegal or whether it violates these Terms (such as when unlawful
        content is reported to us). We may also modify, prevent access to,
        delete, or refuse to display content that we believe violates the law or
        these Terms. However, Conflux otherwise has no obligation to monitor or
        review any content submitted to the Services. 5.3. Third Party
        Resources. Conflux may publish links in its Services to internet
        websites maintained by third parties. Conflux does not represent that it
        has reviewed such third party websites and is not responsible for them
        or any content appearing on them. Trademarks displayed in conjunction
        with the Services are the property of their respective owners. 6.
        Account Management 6.1. Keep Your Password Secure. If you have been
        issued an account by Conflux in connection with your use of the
        Services, you are responsible for safeguarding your password and any
        other credentials used to access that account. You, and not Conflux, are
        responsible for any activity occurring in your account (other than
        activity that Conflux is directly responsible for which is not performed
        in accordance with your instructions), whether or not you authorized
        that activity. If you become aware of any unauthorized access to your
        account, you should notify Conflux immediately. Accounts may not be
        shared and may only be used by one individual per account. 6.2. Keep
        Your Details Accurate. Conflux occasionally sends notices to the email
        address registered with your account. You must keep your email address
        and, where applicable, your contact details and payment details
        associated with your account current and accurate. Accounts are
        controlled by the entity whose email address is registered with the
        account. 6.3. Remember to Backup. You are responsible for maintaining,
        protecting, and making backups of your Content. To the extent permitted
        by applicable law, Conflux will not be liable for any failure to store,
        or for loss or corruption of, your Content. 6.4. Account Inactivity.
        Conflux may terminate your account and delete any content contained in
        it if there is no account activity (such as a log in event or payment)
        for over 12 months. However, we will attempt to warn you by email before
        terminating your account to provide you with an opportunity to log in to
        your account so that it remains active. 6.5. Customer Success. Conflux
        may assign you a customer success manager (“CSM”). The CSM may review
        your use of the Services and your Content to help you to more
        effectively use the Services, including by providing reporting and usage
        insight. 7. User Requirements 7.1. Legal Status. If you are an
        individual, you may only use the Service if you have the power to form a
        contract with Conflux. None of the Services are intended for use by
        individuals less than 13 years old. If you are under 13 years old or do
        not have the power to form a contract with Conflux, you may not use the
        Services. We recommend that parents and guardians directly supervise any
        use of the Services by minors. If you are not an individual, you warrant
        that you are validly formed and existing under the laws of your
        jurisdiction of formation, that you have full power and authority to
        enter into these Terms, and that you have duly authorized your agent to
        bind you to these Terms. You represent and warrant that you will comply
        with all laws and regulations applicable to your use of the Services. 8.
        Acceptable Uses 8.1. Legal Compliance. You must use the Services in
        compliance with, and only as permitted by, applicable law. 8.2. Your
        Responsibilities. You are responsible for your conduct, Content, and
        communications with others while using the Services. You must comply
        with the following requirements when using the Services: (a) You may not
        purchase, use, or access the Services for the purpose of building a
        competitive product or service or for any other competitive purposes.
        (b) You may not misuse our Services by interfering with their normal
        operation, or attempting to access them using a method other than
        through the interfaces and instructions that we provide. (c) You may not
        circumvent or attempt to circumvent any limitations that Conflux imposes
        on your account. (d) Unless authorized by Conflux in writing, you may
        not probe, scan, or test the vulnerability of any Conflux system or
        network. (e) Unless authorized by Conflux in writing, you may not use
        any automated system or software to extract or scrape data from the
        websites or other interfaces through which we make our Services
        available. (f) Unless permitted by applicable law, you may not deny
        others access to, or reverse engineer, the Services, or attempt to do
        so. (g) You may not transmit any viruses, malware, or other types of
        malicious software, or links to such software, through the Services. (h)
        You may not engage in abusive or excessive usage of the Services, which
        is usage significantly in excess of average usage patterns that
        adversely affects the speed, responsiveness, stability, availability, or
        functionality of the Services for other users. Conflux will endeavor to
        notify you of any abusive or excessive usage to provide you with an
        opportunity to reduce such usage to a level acceptable to Conflux. (i)
        You may not use the Services to infringe the intellectual property
        rights of others, or to commit an unlawful activity. (j) Unless
        authorized by Conflux in writing, you may not resell or lease the
        Services. (k) If your use of the Services requires you to comply with
        industry-specific regulations applicable to such use, you will be solely
        responsible for such compliance, unless Conflux has agreed with you
        otherwise. You may not use the Services in a way that would subject
        Conflux to those industry-specific regulations without obtaining
        Conflux’s prior written agreement. For example, you may not use the
        Services to collect, protect, or otherwise handle “protected health
        information” without entering into a separate business associate
        agreement with Conflux that permits you to do so. 9. Suspension and
        Termination of Services 9.1. By You. If you terminate a Subscription in
        the middle of a billing cycle, you will not receive a refund for any
        period of time you did not use in that billing cycle unless you are
        terminating these Terms for any of the following reasons: (a) we have
        materially breached these Terms and failed to cure that breach within 30
        days after you have so notified us in writing; or (b) a refund is
        required by law. 9.2. By Conflux. Conflux may terminate your
        Subscription at the end of a billing cycle by providing at least 30
        days’ prior written notice to you. Conflux may terminate your
        Subscription for any reason by providing at least 90 days’ written
        notice to you and will provide a pro rata refund for any period of time
        you did not use in that billing cycle. Conflux may suspend performance
        or terminate your Subscription for any of the following reasons: (a) you
        have materially breached these Terms and failed to cure that breach
        within 30 days after Conflux has so notified you in writing; (b) you
        cease your business operations or become subject to insolvency
        proceedings and the proceedings are not dismissed within 90 days; or (c)
        you fail to pay fees for 30 days past the due date. Additionally,
        Conflux may limit or suspend the Services to you if you fail to comply
        with these Terms, or if you use the Services in a way that causes legal
        liability to us or disrupts others’ use of the Services. Conflux may
        also suspend providing the Services to you if we are investigating
        suspected misconduct by you. If we limit, suspend, or terminate the
        Services you receive, we will endeavor to give you advance notice and an
        opportunity to export a copy of your Content from that Service. However,
        there may be time sensitive situations where Conflux may decide that we
        need to take immediate action without notice. Conflux will use
        commercially reasonable efforts to narrow the scope and duration of any
        limitation or suspension under this Section as is needed to resolve the
        issue that prompted such action. Conflux has no obligation to retain
        your Content upon termination of the applicable Service. 9.3. Further
        Measures. If Conflux stops providing the Services to you because you
        repeatedly or egregiously breach these Terms, Conflux may take measures
        to prevent the further use of the Services by you, including blocking
        your IP address. 10. Changes and Updates 10.1. Changes to Terms. Conflux
        may change these Terms at any time for a variety of reasons, such as to
        reflect changes in applicable law or updates to Services, and to account
        for new Services or functionality. The most current version will always
        be posted on the Conflux website. If an amendment is material, as
        determined in Conflux’s sole discretion, Conflux will notify you by
        email. Notice of amendments may also be posted to Conflux’s blog or upon
        your login to your account. Changes will be effective no sooner than the
        day they are publicly posted. In order for certain changes to become
        effective, applicable law may require Conflux to obtain your consent to
        such changes, or to provide you with sufficient advance notice of them.
        If you do not want to agree to any changes made to the terms for a
        Service, you should stop using that Service, because by continuing to
        use the Services you indicate your agreement to be bound by the updated
        terms. 10.2. Changes to Services. Conflux constantly changes and
        improves the Services. Conflux may add, alter, or remove functionality
        from a Service at any time without prior notice. Conflux may also limit,
        suspend, or discontinue a Service at its discretion. If Conflux
        discontinues a Service, we will give you reasonable advance notice to
        provide you with an opportunity to export a copy of your Content from
        that Service. Conflux may remove content from the Services at any time
        in our sole discretion, although we will endeavor to notify you before
        we do that if it materially impacts you and if practicable under the
        circumstances. 11. Disclaimers and Limitations of Liability 11.1.
        Disclaimers. While it is in Conflux’s interest to provide you with a
        great experience when using the Services (and we love to please our
        customers), there are certain things we do not promise about them. We
        try to keep our online Services up, but they may be unavailable from
        time to time for various reasons. EXCEPT AS EXPRESSLY PROVIDED IN THESE
        TERMS AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE
        PROVIDED “AS IS” AND CONFLUX DOES NOT MAKE WARRANTIES OF ANY KIND,
        EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THOSE OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OR ANY
        REPRESENTATIONS REGARDING AVAILABILITY, RELIABILITY, OR ACCURACY OF THE
        SERVICES. 11.2. Exclusion of Certain Liability. TO THE EXTENT PERMITTED
        BY APPLICABLE LAW, CONFLUX, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS,
        SUPPLIERS, AND LICENSORS WILL NOT BE LIABLE FOR (A) ANY INDIRECT,
        CONSEQUENTIAL, SPECIAL, INCIDENTAL, PUNITIVE, OR EXEMPLARY DAMAGES
        WHATSOEVER, OR (B) LOSS OF USE, DATA, BUSINESS, REVENUES, OR PROFITS (IN
        EACH CASE WHETHER DIRECT OR INDIRECT), ARISING OUT OF OR IN CONNECTION
        WITH THE SERVICES AND THESE TERMS, AND WHETHER BASED ON CONTRACT, TORT,
        STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF CONFLUX HAS BEEN
        ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND EVEN IF A REMEDY FAILS OF
        ITS ESSENTIAL PURPOSE. 11.3. Limitation of Liability. TO THE EXTENT
        PERMITTED BY APPLICABLE LAW, THE AGGREGATE LIABILITY OF EACH OF CONFLUX,
        ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS
        ARISING OUT OF OR IN CONNECTION WITH THE SERVICES AND THESE TERMS WILL
        NOT EXCEED THE LESSER OF: (A) THE AMOUNTS PAID BY YOU TO CONFLUX FOR USE
        OF THE SERVICES AT ISSUE DURING THE 12 MONTHS PRIOR TO THE EVENT GIVING
        RISE TO THE LIABILITY; AND (B) EUR€200.00. 11.4. Consumers. We
        acknowledge that the laws of certain jurisdictions provide legal rights
        to consumers that may not be overridden by contract or waived by those
        consumers. If you are such a consumer, nothing in these Terms limits any
        of those consumer rights. 11.5. Businesses. If you are a business, you
        will indemnify and hold harmless Conflux and its affiliates, officers,
        agents, and employees from all liabilities, damages, and costs
        (including settlement costs and reasonable attorneys’ fees) arising out
        of a third party claim regarding or in connection with your or your end
        users’ use of the Services or breach of these Terms, to the extent that
        such liabilities, damages and costs were caused by you or your end
        users. 12. Contracting Entity 12.1. Who you are contracting with. Unless
        otherwise specified in relation to a particular Service, the Services
        are provided by, and you are contracting with, Conflux V.O.F. 12.2.
        Conflux V.O.F. For any Service provided by Conflux V.O.F., the following
        provisions will apply to any terms governing that Service: • Contracting
        Entity. References to “Conflux”, “we”, “us”, and “our” are references to
        Conflux V.O.F., located at Einsteinlaan 205, 1171VT, Badhoevedorp, the
        Netherlands. • Governing Law. Those terms are governed by the laws of
        the Netherlands (without regard to its conflicts of laws provisions). •
        Jurisdiction. Except if prohibited by applicable law, in relation to any
        legal action or proceedings to enforce those terms or arising out of or
        in connection with those terms, each party irrevocably submits to the
        exclusive jurisdiction of the courts of the Netherlands. 13. Other Terms
        13.1. Assignment. You may not assign these Terms without Conflux’s prior
        written consent, which may be withheld in Conflux’s sole discretion.
        Conflux may assign these Terms at any time without notice to you. 13.2.
        Entire Agreement. These Terms constitute the entire agreement between
        you and Conflux, and they supersede any other prior or contemporaneous
        agreements, terms and conditions, written or oral concerning its subject
        matter. Any terms and conditions appearing on a purchase order or
        similar document issued by you do not apply to the Services, do not
        override or form a part of these Terms, and are void. 13.3. Independent
        Contractors. The relationship between you and Conflux is that of
        independent contractors, and not legal partners, employees, or agents of
        each other. 13.4. Interpretation. The use of the terms “includes”,
        “including”, “such as”, and similar terms, will be deemed not to limit
        what else might be included. 13.5. No Waiver. A party’s failure or delay
        to enforce a provision under these Terms is not a waiver of its right to
        do so later. 13.6. Severability. If any provision of these Terms is
        determined to be unenforceable by a court of competent jurisdiction,
        that provision will be severed and the remainder of terms will remain in
        full effect. 13.7. Third Party Beneficiaries. There are no third party
        beneficiaries to these Terms. 13.8. Survival. The following sections
        will survive the termination of these Terms: 1, 2, 3.2, 9, 11, 12, and
        13. 14. Terms for Certain Customers and Countries 14.1. Language. These
        Terms are prepared and written in English. To the extent that any
        translated version conflicts with the English version, the English
        version controls, except where prohibited by applicable law. 14.2.
        Country-Specific Terms. If you are located in one of the following
        locations, the terms thereunder apply. Australia AU1. ACL. Nothing in
        these Terms will restrict, exclude, or modify, or purport to restrict,
        exclude, or modify, any statutory consumer rights under the Competition
        and Consumer Act 2010 (Cth). Brazil BR1. Additional Responsibilities. If
        you are younger than 16 years old, you must be represented by your
        parents or guardians in order to agree to these Terms and to use the
        Services. If you are aged 16 or 17, you must be assisted by your parents
        or guardians to agree to these Terms and to use the Services. BR2. Right
        of Withdrawal. If you are a consumer, you may withdraw your Subscription
        within 7 days of the date your Subscription first starts by sending us a
        notice of withdrawal. If you withdraw your Subscription under this
        Section, the fees you paid for that Subscription will be refunded upon
        Conflux’s receipt of your notice of withdrawal. BR3. Consumer Rights. If
        you are a consumer: (a) statutory warranties provided in the Law No.
        8.078/1990 (“Consumer Protection Code”) apply to you despite anything to
        the contrary in Section 11.1 (Disclaimers); (b) Section 11.2 (Exclusion
        of Certain Liability) will not apply to you in relation to the damages
        caused to you due to defects in the Services, as provided by Article 14
        of Law No. 8.078/1990 (“Consumer Protection Code”); and (c) Section 11.3
        (Limitation of Liability) will not apply to you. Europe EU1. Right of
        Withdrawal. In certain European countries, you have a legal right to
        cancel Subscriptions within a certain period of time. For details, see
        the country-specific terms for your country. France FR1. Overdue
        Payments. Overdue payments may result in a penalty at an interest rate
        equal to 3 times the legal interest rate or the statutory minimum rate,
        whichever is higher. Additionally, the statutory penalty for collection
        costs may be payable by you in the event of late payment. FR2. Right of
        Withdrawal. If you are a consumer, starting from the date your
        Subscription first starts, you have 14 days to exercise your right of
        withdrawal without cause, provided that you have not benefited from or
        started to use the Services before the end of that 14 day period. FR3.
        Media. The limited license you grant to Conflux under Section 3.2
        (Limited License to Your Content) allows Conflux to exploit your Content
        in any form and on any medium, including paper or digital media such as
        hard disks and flash drives, and by any means or process, including by
        wired, wireless, or online transmission of digitized or analog data. The
        duration of such limited license extends only for the legal term of
        protection of the intellectual property rights attached to your Content.
        FR4. Warranties. If you are a consumer, statutory warranties and the
        warranty of merchantability apply to you despite anything to the
        contrary in these Terms. Any disclaimer of warranties in these Terms
        does not derogate from any of your statutory warranty rights listed
        below: Article R. 211-4 of the French Consumer Code: “In contracts
        entered into between professionals, on the one hand, and, on the other
        hand, non-professionals or consumers, the professionals cannot
        contractually warrant the item to be delivered or the service to be
        rendered without clearly stating that, whatever the circumstances, the
        legal warranty binding the professional seller to cover the purchaser
        against any consequences of faults or hidden defects in the item being
        sold or the service being rendered, applies.” Article L. 211-4 of the
        French Consumer Code: “The seller is required to deliver a product which
        is conformed to the contract and is held liable for any lack of
        conformity which exists upon delivery. He is also held liable for any
        lack of conformity caused by the packaging or the assembly instructions,
        or the installation if he assumed responsibility therefor or had it
        carried out under his responsibility.” Article L. 211-5 of the French
        Consumer Code: “To be in conformity with the contract, the product must:
        (1) be suitable for the purpose usually associated with such a product
        and, if applicable: correspond to the description given by the seller
        and have the features that the seller presented to the buyer in the form
        of a sample or model; [and] have the features that a buyer might
        reasonably expect it to have considering the public statements made by
        the seller, the producer or his representative, including advertising
        and labeling; or (2) have the features defined by mutual agreement
        between the parties or be suitable for any special requirement of the
        buyer which was made known to the seller and which the latter agreed
        to.” Article L. 211-12 of the French Consumer Code: “Action resulting
        from lack of conformity lapses two years after delivery of the product.”
        Article 1641 of the French Civil Code: “A seller is bound to a warranty
        on account of the latent defects of the product sold which render it
        unfit for the use for which it was intended, or which so impair that use
        that the buyer would not have acquired it, or would only have given a
        lesser price for it, had he known of them.” Article 1648 §1 of the
        French Civil Code: “The action resulting from redhibitory vices must be
        brought by the buyer within a period of two years following the
        discovery of the vice”. FR5. Limitation. Section 11.3 (Limitation of
        Liability) does not apply to you if you are a consumer. Germany DE1.
        Right of Withdrawal. If you are a consumer, you may withdraw your
        contractual declaration within 14 days without giving reasons in text
        form (e.g. by mail, fax, email). The time period commences upon your
        receipt of this information notice in textual form, but not before the
        conclusion of the contract and also not before we have met our
        information requirements as set forth under Article 246 § 2 in
        conjunction with § 1 paragraph 1 and 2 of the Introductory Act to the
        German Civil Code and our information requirements under § 312 g
        paragraph 1, first sentence German Civil Code in conjunction with
        Article 246 § 3 of the Introductory Act to the German Civil Code.
        Punctual dispatch of the declaration of withdrawal suffices to observe
        the withdrawal period. The declaration of withdrawal has to be directed
        to our customer support team. DE2. Consequences of Withdrawal. In the
        case of a valid withdrawal, the mutually received deliverables shall be
        returned and any benefits obtained, if any (e.g. interest), shall be
        handed over. To the extent that you are unable to return or, where
        applicable, to deliver up the received deliverable and benefits obtained
        (e.g. use and enjoyment) in whole or in part, or only in a deteriorated
        condition, you may have to compensate us accordingly for loss of value,
        if any. This may possibly lead to the result that you will nevertheless
        have to fulfill the contractually owed payment obligations for the time
        period until withdrawal. Any obligation to reimburse payments must be
        fulfilled within 30 days. The period for the payment of costs will
        begin, in your case, with the dispatch of your declaration of withdrawal
        and in our case, upon receipt of same. DE3. Special Notifications. Your
        right of withdrawal expires prematurely if the contractual relationship
        was fully discharged by both sides at your explicit request before you
        have exercised your right of withdrawal. DE4. Termination for Breach. A
        failure to comply with these Terms must be material, repeated, or
        persistent before Conflux may exercise its right of termination under
        Section 9.2 (By Conflux). DE5. Specific Works. Conflux is not obliged to
        create any specific works for you. DE6. Liability Provisions. Sections
        11.2 (Exclusion of Certain Liability) and 11.3 (Limitation of Liability)
        do not apply and are replaced with the following: “Conflux’s liability
        to you for damages caused by slight negligence will, irrespective of its
        legal ground, be limited as follows: (a) Conflux will be liable up to
        the amount of foreseeable damages typical for this type of contract for
        a breach of material contractual obligations; and (b) Conflux shall not
        be liable for a breach of any non-material contractual obligations nor
        for the slightly negligent breach of any other applicable duty of care.
        The foregoing limitations of liability, as well as any other limitations
        of liability contained in these Terms, will not apply to any mandatory
        statutory liability, in particular to liability under the German Product
        Liability Act (Produkthaftungsgesetz), and liability for culpably caused
        personal injuries. Additionally, such limitations of liability will not
        apply if and to the extent that Conflux has assumed a specific
        guarantee. The foregoing shall apply accordingly to Conflux’s liability
        to you for futile expenses. You are obliged to take adequate measures to
        avert and reduce damages.” Luxembourg LU1. Survival. Sections of these
        Terms which are expressly stated to survive its termination will not
        survive indefinitely, but survive for a period of 30 years.
      </Page>
    </Layout>
  );
};

export default TermsPage;
