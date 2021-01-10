
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Inicio.vue') },
      { path: '/limpeza', component: () => import('pages/Limpeza.vue') },
      { path: '/dicas', component: () => import('pages/Dicas.vue') },
      { path: '/obrigado', component: () => import('pages/Obrigado.vue') },
      { path: '/nao-mexer', component: () => import('pages/NaoMexer.vue') }
    ]
  },

  {
    path: 'page',
    component: () => import('layouts/Page.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
