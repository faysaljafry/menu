import { createRouter, createWebHistory } from "vue-router";

import Friends from "./components/Friends/Friends.vue";
import Navbar from "./components/navigation/Navbar.vue";
import Groups from "./components/Groups/Groups.vue";
import Market from "./components/Market/Market.vue";
import Videos from "./components/Videos/Video.vue";
import Memories from "./components/Memories/Memories.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      components: {
        //default: Friends,
        Navbar: Navbar,
      },
      alias: "/home",
    },
    {
      path: "/friends",
      name: "friends",
      meta: {
        title: "Friends",
      },
      components: {
        default: Friends,
        Navbar: Navbar,
      },
      alias: "/home",
    },
    {
      path: "/groups",
      name: "groups",
      components: {
        default: Groups,
        Navbar: Navbar,
      },
      alias: "/home",
    },
    {
      path: "/market",
      name: "market",
      components: {
        default: Market,
        Navbar: Navbar,
      },
      alias: "/home",
    },
    {
      path: "/videos",
      name: "videos",
      components: {
        default: Videos,
        Navbar: Navbar,
      },
      alias: "/home",
    },
    {
      path: "/memories",
      name: "memories",
      components: {
        default: Memories,
        Navbar: Navbar,
      },
      alias: "/home",
    },
    {
      path: "/Saved",
      name: "saved",
      components: {
        default: Saved,
        Navbar: Navbar,
      },
      alias: "/home",
    },
  ],
  linkActiveClass: "active text-info",
  linkExactActiveClass: "active",
  //document.title = "GlobalMentics-" + to.meta.title,
});
export default router;
