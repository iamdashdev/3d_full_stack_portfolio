export const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technologies'}}],
    },
    {
      name: 'liveProject',
      title: 'Live Project',
      type: 'string',
    },
    {
      name: 'sourceCode',
      title: 'Source Code',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Web Development', value: 'web-development'},
          {title: 'GIS and Remote Sensing', value: 'gis-remote-sensing'},
          {title: 'Data Science and ML', value: 'data-science-ml'},
        ],
      },
    },
  ],
}
