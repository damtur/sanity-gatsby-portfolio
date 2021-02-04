export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601c844352ce4e1a8f1295bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-khf7uj1h',
                  apiId: '959945d3-85b3-4500-a67b-d0657321feae'
                },
                {
                  buildHookId: '601c8443b85e481bc2a23ac8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gx6ni7k1',
                  apiId: '0786424d-d336-4a66-b215-da8d14cc4c46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/damtur/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gx6ni7k1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
