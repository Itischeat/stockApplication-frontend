import { createApp } from 'vue'
import './reset.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'



import Home from './components/Home.vue'
import Auth from './components/Auth.vue'
import Search from './components/SearchNoAdmin.vue'
import SearchAdmin from './components/SearchAdmin.vue'
import CreateProduct from './components/CreatProduct.vue'
import UpdateProduct from './components/UpdateProduct.vue'
import DeleteProduct from './components/DeleteProduct.vue'


const store = createStore({
  state() {
    return {
      isAdmin: false,
    }
  },
  mutations: {
    access(state) {
      state.isAdmin = true
    }
  }
})

const router = createRouter({
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: "/auth/searchAdmin",
    component: SearchAdmin
  },
  {
    path: "/auth/creatProduct",
    component: CreateProduct
  },
  {
    path: "/auth/UpdateProduct",
    component: UpdateProduct
  },
  {
    path: "/auth/DeleteProduct",
    component: DeleteProduct
  }
  ],
  history: createWebHistory()
})


const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
