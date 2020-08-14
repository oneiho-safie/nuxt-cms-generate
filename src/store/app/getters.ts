import { IApp } from '@/models/store/app/app'

export default {
  state(state: IApp): IApp {
    return state
  },
  isAppLoading(state: IApp): boolean {
    return state.isAppLoading
  },
  isLogin(state: IApp): boolean {
    return state.isLogin
  },
  isAppLoaded(state: IApp): boolean {
    return state.isAppLoaded
  },
  // 全体管理者であること
  isAdmin(state: IApp): boolean {
    return state.profile.category === 'admin'
  },
  profile(state: IApp): any {
    return state.profile
  },
  appErrorMessage(state: IApp) {
    return state.appErrorMessage
  },
  appCommonMessage(state: IApp) {
    return state.appCommonMessage
  },
  allowAccess(state: IApp) {
    return state.allowAccess
  },
  corporation(state: IApp) {
    return state.corporation
  },
  userInfo(state: IApp) {
    return state.userInfo
  },
  userGroupRoles(state: IApp) {
    return state.userGroupRoles
  },
  corpRoleList(state: IApp) {
    return state.corpRoleList
  },
  userRoleCategory(state: IApp) {
    let category = 'none'
    const profile = state.profile
    const myRoleid = profile.role.id
    const corpRoleList = state.corpRoleList
    corpRoleList.forEach(elm => {
      if (elm.id === myRoleid) {
        category = elm.category
      }
    })
    return category
  },
  notifications(state: IApp) {
    return state.notifications
  },
}
