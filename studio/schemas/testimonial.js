import icon from "react-icons/lib/md/mode-comment";

export default {
  name: "testimonial",
  title: "Testimonial",
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
      type: "blockContent"
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
