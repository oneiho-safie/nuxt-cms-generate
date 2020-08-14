import { IAppErrorMessage } from './AppErrorMessage'
import { INotifications } from './Notifications'
import { AppCommonMessage, IAppCommonMessage } from './AppCommonMessage'

export interface IPageTitle {
  title: string
  to: string
}

export interface IApp {
  isAppLoading: boolean
  isAppLoaded: boolean
  pageTitle: IPageTitle[]
  appErrorMessage: IAppErrorMessage | null
  appCommonMessage: IAppCommonMessage | null

  isLogin: boolean

  authError: boolean

  loseLogin: boolean

  profile: any | null
  allowAccess: any[]

  userGroupRoles: any[]

  corporation: any | null
  corpRoleList: any[]
  userInfo: any | null
  loginUserName: string

  notifications: INotifications[]
}

export class App implements IApp {
  isAppLoading = false
  isAppLoaded = false
  pageTitle = [
  ]

  appErrorMessage = null
  appCommonMessage = null

  isLogin = false

  authError = false

  // 非同期時にログアウトだと発覚したときのフラグ
  loseLogin = false

  profile = {
    category: '',
    permissions: [],
    role: {
      name: '',
      id: -1,
    }
  }

  corporation = null

  allowAccess = ['login', 'errors-network', 'password-reset-request']
  userGroupRoles = []

  // appの管理権限リスト
  corpRoleList = []

  userInfo = null

  loginUserName = ''

  notifications = []
}
