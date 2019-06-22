export default {
  name: "faq",
  title: "FAQ's",
  type: "object",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ],
  preview: {
    select: { title: "title" }
  }
};
