import Axios from "axios";
import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.use(Vuex);
Vue.config.productionTip = false;

const axios = Axios.create();

axios.interceptors.response.use(
  (v: any) => v,
  (err: any) => err
);

Vue.prototype.$axios = axios;

const store = new Vuex.Store({
  state: {
    projects: [
      {
        dark: true,
        title: "DHBW Richie",
        routeName: "workgallery",
        description:
          "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
        images: {
          icon: "../img/projects/richie/icon-richie.png",
          background: "../img/projects/richie/preview3-richie.png"
        }
      },
      {
        dark: false,
        title: "Timo's Icons",
        routeName: "timosicons",
        description:
          "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
        images: {
          icon: "../img/projects/icons/icon-icons.png",
          background: "../img/projects/icons/preview2-icons.png"
        }
      },
      {
        dark: false,
        title: "Work Gallery",
        routeName: "workgallery",
        description:
          "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
        images: {
          icon: "../img/projects/icons/icon-icons.png",
          background: "../img/projects/workgallery/gallery-preview.png"
        }
      },
      {
        dark: false,
        title: "NHL Stats",
        routeName: "workgallery",
        description:
          "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
        images: {
          icon: "../img/projects/cassy/icon-cassy.png",
          background: "../img/projects/cassy/preview-cassy.png"
        }
      },

      {
        dark: true,
        title: "AMS Pro",
        routeName: "workgallery",
        description:
          "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
        images: {
          icon: "../img/projects/richie/icon-richie.png",
          background: "../img/projects/richie/preview3-richie.png"
        }
      }
    ],
    icons: [
      {
        name: "Search",
        iconName: "ti ti-search",
        paths: 2
      },
      {
        name: "Add",
        iconName: "ti ti-add",
        paths: 2
      },
      {
        name: "Admin",
        iconName: "ti ti-admin",
        paths: 3
      },
      {
        name: "Arrow",
        iconName: "ti ti-arrow",
        paths: 1
      },
      {
        name: "At",
        iconName: "ti ti-at",
        paths: 0
      },
      {
        name: "Book",
        iconName: "ti ti-book",
        paths: 2
      },
      {
        name: "Delete",
        iconName: "ti ti-delete",
        paths: 3
      },
      {
        name: "Dislike",
        iconName: "ti ti-dislike",
        paths: 1
      },
      {
        name: "Error",
        iconName: "ti ti-error",
        paths: 4
      },
      {
        name: "Feedback",
        iconName: "ti ti-feedback",
        paths: 1
      },
      {
        name: "Hashtag",
        iconName: "ti ti-hashtag",
        paths: 1
      },
      {
        name: "Home",
        iconName: "ti ti-home",
        paths: 2
      },
      {
        name: "Information",
        iconName: "ti ti-info",
        paths: 6
      },
      {
        name: "Like",
        iconName: "ti ti-like",
        paths: 1
      },
      {
        name: "List",
        iconName: "ti ti-list",
        paths: 6
      },
      {
        name: "Login",
        iconName: "ti ti-login",
        paths: 2
      },
      {
        name: "Logout",
        iconName: "ti ti-logout",
        paths: 2
      },
      {
        name: "Questionmark",
        iconName: "ti ti-questionmark",
        paths: 1
      },
      {
        name: "Rating",
        iconName: "ti ti-rating",
        paths: 5
      },
      {
        name: "Remove",
        iconName: "ti ti-remove",
        paths: 1
      },
      {
        name: "Reply",
        iconName: "ti ti-reply",
        paths: 1
      },
      {
        name: "Review",
        iconName: "ti ti-review",
        paths: 2
      },
      {
        name: "Save",
        iconName: "ti ti-save",
        paths: 3
      },
      {
        name: "Share",
        iconName: "ti ti-share",
        paths: 2
      },
      {
        name: "Success",
        iconName: "ti ti-success",
        paths: 4
      },
      {
        name: "User",
        iconName: "ti ti-user",
        paths: 1
      },
      {
        name: "User Active",
        iconName: "ti ti-user-active",
        paths: 2
      },
      {
        name: "User Card",
        iconName: "ti ti-user-card",
        paths: 2
      },
      {
        name: "User Inactive",
        iconName: "ti ti-user-inactive",
        paths: 2
      },
      {
        name: "Users",
        iconName: "ti ti-users",
        paths: 3
      }
    ]
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
