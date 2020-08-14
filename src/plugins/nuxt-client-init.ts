import { NuxtAppOptions } from '@nuxt/types/app/'

export default async ({store, route, app, redirect}: NuxtAppOptions) => {
  if (!store || !route) {
    return
  }
  const routerName = route.name
  const fullPath = route.fullPath
  const allowAccess = store.state.app.allowAccess
  // ログインしなくてもアクセス可の領域
  const isFreeAccess = allowAccess.includes(routerName)
  const baseUrl = app.context.base

  if (!isFreeAccess) {
    try {
      await store.dispatch('app/getProfile')
      await store.dispatch('app/appInit')
      store.commit('app/isLogin', true)
    } catch (error) {
      const errorTitle = error.response.data.error
      const error_description = error.response.data.error_description
      const invalidToken = errorTitle === 'invalid_token'
      const invalidAccount = error_description === 'corporation version is wrong.'
      if (invalidToken) {
        let href = baseUrl + '#/login'
        const linkObj: any = { name: 'login' }
        if (fullPath !== '/') {
          href =+ '?link=' + fullPath
        }
        redirect({ name: 'login' })
        // window.location.href = href
        return
      } else if (invalidAccount) {
        window.location.href = baseUrl + '#/login?attention=invalidAccount'
        return
      } else {
        window.location.href = baseUrl + '#/errors/network'
        return
      }
    }
  }
  return
}
