export default {
  widgets: [
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
                  buildHookId: '6234a71ea1ddb36fcfababa5',
                  title: 'Sanity Studio',
                  name: 'rollins-demo-studio',
                  apiId: '36d0f3e2-ec50-42be-8360-7f1f271f5775'
                },
                {
                  buildHookId: '6234a71f3c6e3776c2a6d975',
                  title: 'Blog Website',
                  name: 'rollins-demo',
                  apiId: 'b7df67ba-94c2-48f0-89af-bf3c857ac1a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cartaviamsb/rollins-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rollins-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
