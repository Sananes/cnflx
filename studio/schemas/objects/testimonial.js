import icon from "react-icons/lib/md/mode-comment";

export default {
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
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
