export const testimonials = {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
