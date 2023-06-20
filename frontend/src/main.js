import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"


import MyHome from './MyHome.vue'
import AuditReports from "./components/AuditReports.vue"
import HelloUsers from "./components/HelloUsers.vue"
import HelloNorms from "./components/HelloNorms.vue"
import NewNorm from "./components/NewNorm.vue"
import NewAuditReport from "./components/NewAuditReport.vue"


const routes = [
    {
        path: "/",
        component : MyHome
    },
    {
        path: "/users",
        component: HelloUsers
    },
    {
        path: "/auditreports",
        component: AuditReports
    },
    {
        path: "/norms",
        component: HelloNorms
    },
    {
        path: "/insertnewnorm",
        component: NewNorm
    },
    {
        path: "/newauditreport",
        component: NewAuditReport
    }

];


const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

const app = createApp(MyHome);

app.use(router);

app.mount('#app')
