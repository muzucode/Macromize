import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calc.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },  
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import(/* webpackChunkName: "about" */ '../views/Verify.vue')
  },
  {
    path: '/verify/resend-verification',
    name: 'Resend Verification',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResendVerification.vue')
  },
  {
    path: '/signout',
    name: 'Sign Out',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignOut.vue')
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue')
  },
  {
    path: '/calc',
    name: 'Calc',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calc.vue')
  },
  {
    path: '/findacoach',
    name: 'Find a Coach',
    component: () => import(/* webpackChunkName: "about" */ '../views/FindACoach.vue')
  },
  {
    path: '/users/:username/',
    name: 'User Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
  },
  {
    path: '/users/:username/reviews',
    name: 'Reviews',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reviews.vue')
  },
  {
    path: '/users/:username/leave-a-review',
    name: 'Leave a Review',
    component: () => import(/* webpackChunkName: "about" */ '../views/LeaveAReview.vue')
  },
  {
    path: '/edit-profile',
    name: 'Edit Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
