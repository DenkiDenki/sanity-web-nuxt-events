export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-web-nuxt-events-studio',
                  apiId: 'b4efd52e-ddfa-4949-82e1-085c5607d0cc'
                },
                {
                  buildHookId: '619590369a044b33e8bbfeb3',
                  title: 'Events Website',
                  name: 'sanity-web-nuxt-events',
                  apiId: 'de66faf7-d399-4093-b21c-416dbb3a8944'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DenkiDenki/sanity-web-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-web-nuxt-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
