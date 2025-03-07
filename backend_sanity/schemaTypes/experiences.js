export const experiences = {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'companyIcon',
      title: 'CompanyIcon',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'iconBg',
      title: 'IconBg',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
  ],
}
