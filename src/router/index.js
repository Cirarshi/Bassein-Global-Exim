import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import BulkQuote from "../pages/BulkQuote.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },

  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },

  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },

  {
    path: "/bulk-quote",
    name: "BulkQuote",
    component: BulkQuote,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
