// siteSettings.js
export default {
  name: "homepage",
  type: "document",
  title: "Homepage",
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
      title: "Partners",
      name: "partnersList",
      type: "array",
      of: [{ type: "partner" }],
      validation: Rule => Rule.min(3).max(6)
    },
    {
      title: "Testimonials",
      name: "testimonialList",
      type: "array",
      of: [{ type: "testimonial" }],
      validation: Rule => Rule.max(3)
    }
  ]
};
