import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/ui/Login.vue";
import Register from "../components/ui/Register.vue";
import Logout from "../components/ui/Logout.vue";

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
          alreadyLogin: false,
        },
      },
      {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
          alreadyLogin: false,
        },
      },
      {
        path: "/logout",
        name: "logout",
        component: Logout,
        meta: {
          requiresAuth: true,
        },
      },
    ];
      const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
      });
      
      // Navigation guard to check if the user is authenticated
      router.beforeEach((to, from, next) => {
        // Check if the route requires authentication
        if (to.meta.requiresAuth) {
          // Check if the user is logged in
          if (sessionStorage.getItem("role") == "customer") {
            if (to.name == "home") {
              next("store");
            } else {
              next();
            }
          } else {
            const token = Cookies.get("Authorization");
            if (token != null) {
              next();
            } else {
              next("/login");
            }
          }
        } else {
          if (
            Cookies.get("Authorization") == null ||
            sessionStorage.getItem("role") == "customer"
          ) {
            if (to.name == "home") {
              next("store");
            } else {
              next();
            }
          }
        }
        next();
      });
      
      export default router;