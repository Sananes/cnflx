export default {
  name: "packages",
  title: "Package name",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "endusers",
      title: "End users",
      type: "number"
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2
    }
  ]
};
