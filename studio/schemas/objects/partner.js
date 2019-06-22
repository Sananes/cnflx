export default {
  name: "partner",
  title: "Partner",
  type: "object",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
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
