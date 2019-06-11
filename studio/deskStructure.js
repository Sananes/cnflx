import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/lib/md/settings";
import MdPerson from "react-icons/lib/md/person";
import MDHdmi from "react-icons/lib/md/settings-input-hdmi";
import MDPage from "react-icons/lib/md/insert-drive-file";

const hiddenDocTypes = listItem =>
  ![
    "partner",
    "pricing",
    "integration",
    "siteIntegration",
    "testimonial",
    "object",
    "siteSettings"
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("Pages")
        .icon(MDPage)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Integrations")
                .icon(MDPage)
                .child(
                  S.editor()
                    .id("siteIntegration")
                    .schemaType("siteIntegration")
                    .documentId("siteIntegration")
                )
            ])
        ),
      // S.listItem()
      //   .title("Integrations")
      //   .icon(MDHdmi)
      //   .child(
      //     S.list()
      //       .title("Integrations")
      //       .items([
      //         S.listItem()
      //           .title("Settings")
      //           .icon(MdSettings)
      //           .child(
      //             S.editor()
      //               .id("siteSettings")
      //               .schemaType("siteSettings")
      //               .documentId("siteSettings")
      //           ),
      //         S.listItem()
      //           .title("Integrations")
      //           .schemaType("integration")
      //           .child(S.documentTypeList("integration").title("Integrations"))
      //       ])
      //   ),
      S.listItem()
        .title("Integrations")
        .icon(MDHdmi)
        .schemaType("integration")
        .child(S.documentTypeList("integration").title("Integrations")),
      S.listItem()
        .title("Pricing")
        .icon(MDHdmi)
        .child(
          S.editor()
            .id("pricing")
            .schemaType("pricing")
            .documentId("pricing")
        ),
      S.listItem()
        .title("Partners")
        .icon(MdPerson)
        .schemaType("partner")
        .child(S.documentTypeList("partner").title("Partners")),
      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
