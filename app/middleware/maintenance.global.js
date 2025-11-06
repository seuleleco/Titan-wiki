export default defineNuxtRouteMiddleware((to) => {
	if (to.query.acesso === 'sim') {
		return
	}
	if (to.path !== '/maintenance') {
		return navigateTo('/maintenance')
	}
})
