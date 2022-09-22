import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUpView from '../views/SignUpView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutOkView from '../views/LogoutOkView.vue';
import AuthView from '../views/AuthView.vue';
import CreateTask from '../views/CreateTask.vue';
import EditTask from '../views/EditTask.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    children: [
      {
        path: 'sign-up',
        component: SignUpView,
      },
      {
        path: 'login',
        component: LoginView,
      },
    ],
  },
  {
    path: '/logout-ok',
    name: 'logout',
    component: LogoutOkView,
  },
  {
    path: '/new-task',
    name: 'newTask',
    component: CreateTask,
  },
  {
    path: '/edit/:taskId',
    name: 'edit',
    component: EditTask,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
