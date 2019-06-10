import icon from "react-icons/lib/md/business-center";

export default {
  name: "partner",
  title: "Partner",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100
      }
    },
    {
      name: "url",
      title: "Link",
      type: "url"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: false
      }
    }
  ],
  preview: {
    select: { title: "name", media: "image" }
  }
};
