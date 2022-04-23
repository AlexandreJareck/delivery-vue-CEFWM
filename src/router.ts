import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Pedido from './views/pedido/Pedido.vue';
import Produto from './views/produto/Produto.vue';
import NotFound from './views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/pedido",
            name: "Pedido",
            component: Pedido
        },
        {
            path: "/produtos",
            name: "Produto",
            component: Produto
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFound
        }
    ]
});

export default router;