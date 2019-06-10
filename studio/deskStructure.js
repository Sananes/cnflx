import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/lib/md/settings";
import MdPerson from "react-icons/lib/md/person";
import MDHdmi from "react-icons/lib/md/settings-input-hdmi";

const hiddenDocTypes = listItem =>
  !["partner", "integration", "testimonial", "siteSettings"].includes(
    listItem.getId()
  );

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
        .title("Integrations")
        .icon(MDHdmi)
        .child(
          S.list()
            .title("Integrations")
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
                .title("Integrations")
                .schemaType("integration")
                .child(S.documentTypeList("integration").title("Integrations"))
            ])
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
