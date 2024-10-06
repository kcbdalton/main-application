import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: '/',
		name: '/',
		component: () => import('../views/Login.vue')
	},

	{
		path: '/baseball',
		name: 'baseball',
		redirect: {
			name: 'baseball-LLM'
		},
		component: () => import('../views/BaseballStats.vue')
	},
	{
		path: '/baseball/LLM',
		name: 'baseball-LLM',
		component: () => import('../views/LLM.vue')
	},
	{
		path: '/blackjack',
		name: 'blackjack',
		component: () => import('../views/Blackjack.vue')
	},
	{
		path: '/solitaire',
		name: 'solitaire',
		component: () => import('../views/Solitaire.vue')
	},

	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;