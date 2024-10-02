import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: '/',
		name: '/',
		component: () => import('../views/LoginView.vue')
	},

	{
		path: '/baseball',
		name: 'baseball',
		component: () => import('../views/BaseballStatsView.vue')
	},
	{
		path: '/baseball/LLM',
		name: 'baseball-LLM',
		component: () => import('../views/LLMView.vue')
	},
	{
		path: '/blackjack',
		name: 'blackjack',
		component: () => import('../views/Blackjack.vue')
	},

	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;