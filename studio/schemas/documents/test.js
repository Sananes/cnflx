// siteSettings.js
export default {
  name: "test",
  type: "document",
  title: "Test",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle"
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media."
    },
    {
      title: "Integrations",
      name: "integrations",
      type: "array",
      of: [
        {
          type: "reference",
          title: "Integrations",
          to: [
            {
              type: "integration"
            }
          ]
        }
      ]
    }
  ]
};
