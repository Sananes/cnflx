import icon from "react-icons/lib/md/settings-input-hdmi";

export default {
  name: "integration",
  title: "Integration",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 2
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: { title: "name", media: "image" }
  }
};
