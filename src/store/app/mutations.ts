import { App, IApp, IPageTitle } from '@/models/store/app/app'
import { IAppCommonMessage } from '@/models/store/app/AppCommonMessage'
import { IAppErrorMessage } from '@/models/store/app/AppErrorMessage'

export default {
  initState(state: IApp, payload: boolean) {
    Object.assign(state, new App())
  },
  isLogin(state: IApp, payload: boolean) {
    state.isLogin = payload
  },
  authError(state: IApp, payload: boolean) {
    state.authError = payload
  },
  isAppLoading(state: IApp, payload: boolean) {
    state.isAppLoading = payload
  },
  isAppLoaded(state: IApp, payload: boolean) {
    state.isAppLoaded = payload
  },
  updatePageTitle(state: IApp, payload: IPageTitle[]) {
    state.pageTitle = payload
  },
  updateAppErrorMessage(state: IApp, payload: IAppErrorMessage | null) {
    state.appErrorMessage = payload
  },
  updateAppCommonMessage(state: IApp, payload: IAppCommonMessage | null) {
    state.appCommonMessage = payload
  },
  clearAppErrorMEssage(state: IApp) {
    state.appErrorMessage = null
  },
  updateLoseLogin(state: IApp, payload: boolean) {
    state.loseLogin = payload
  },
  updateProfile(state: IApp, payload: any) {
    state.profile = payload
  },
  corporation(state: IApp, payload: any) {
    state.corporation = payload
  },
  allowAccess(state: IApp, payload: any) {
    state.allowAccess = payload
  },
  userGroupRoles(state: IApp, payload: any[]) {
    state.userGroupRoles = payload
  },
  corpRoleList(state: IApp, payload: any[]) {
    state.corpRoleList = payload
  },
  userInfo(state: IApp, payload: any) {
    state.userInfo = payload
  },
  loginUserName(state: IApp, payload: string) {
    state.loginUserName = payload
  },
  notifications(state: IApp, payload: any[]) {
    state.notifications = payload
  },
}
