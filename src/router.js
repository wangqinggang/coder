// import Vue from "vue";
import Router from "vue-router";
import ProjectInfo from "./components/ProjectInfo.vue";
import AddEntity from "./components/AddEntity.vue";
import EntityList from "./components/EntityList.vue";
import SupportMe from "./components/SupportMe.vue";
import Download from "./components/Download.vue";

// Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/info",
      name: "Info",
      component: ProjectInfo
    },
    {
      path: "/add",
      name: "AddEntity",
      component: AddEntity
    },
    {
      path: "/list",
      name: "EntityList",
      component: EntityList
    },
    {
      path: "/download",
      name: "Download",
      component: Download
    },
    {
      path: "/supportMe",
      name: "SupportMe",
      component: SupportMe
    }
  ]
});
