export default [
  {
    title: 'Catalogo',
    children: [
      // {
      //   title: 'Spiga',
      //   to: 'dashboards-spiga',
      // },
      // {
      //   title: 'Tamarindo',
      //   to: 'dashboards-tamarindo',
      // },
      // {
      //   title: 'Blue Room',
      //   to: 'dashboards-blue-room',
      // },
      // {
      //   title: 'Ashley Furniture',
      //   to: 'dashboards-ashley',
      // },
      {
        title: 'Spiga',
        to: {
          name: 'catalogo-catalogo',
          params: {
            catalogo: 'spiga',
          },
        },
      },
      {
        title: 'Tamarindo',
        to: {
          name: 'catalogo-catalogo',
          params: {
            catalogo: 'tamarindo',
          },
        },
      },
      {
        title: 'Blue Room',
        to: {
          name: 'catalogo-catalogo',
          params: {
            catalogo: 'blue-room',
          },
        },
      },
      {
        title: 'Ashley Furniture',
        to: {
          name: 'catalogo-catalogo',
          params: {
            catalogo: 'ashley',
          },
        },
      },
    ],
  },

]
