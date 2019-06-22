import icon from "react-icons/lib/md/settings-input-hdmi";

export default {
  name: "pricing",
  title: "Pricing",
  type: "document",
  icon,
  fields: [
    {
      title: "Title",
      name: "name",
      type: "string"
    },
    {
      title: "Packages",
      name: "package",
      type: "array",
      of: [{ type: "packages" }]
    },
    {
      title: "FAQ's",
      name: "faqs",
      type: "array",
      of: [{ type: "faq" }]
    }
  ],
  preview: {
    select: { title: "name", media: "image" }
  }
};
