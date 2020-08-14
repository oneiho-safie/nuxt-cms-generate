interface IAppConfig {
  apiHost: string
  proxyTo: string
  // isLocal: boolean
  baseUrl: string
  // downLoadHost: string
}

const production: any = {
  apiHost: 'https://app.safie.link',
  proxyTo: '',
  baseUrl: '/manager-v1/',
  trackingid: 'UA-58730371-14'
}

const staging: any = {
  apiHost: 'https://app.st.safie.link',
  proxyTo: '',
  baseUrl: '/manager-v1/',
  trackingid: 'UA-58730371-13'
}

const development: any = {
  apiHost: '',
  proxyTo: 'https://app.st.safie.link',
  baseUrl: '/manager-v1/',
  trackingid: 'UA-58730371-13'
}

export const getAppConfig = (NODE_ENV: string, BUILD_ENV: string | undefined): IAppConfig => {
  if (NODE_ENV === 'development') {
    // local環境は無条件development
    return development
  }
  if (NODE_ENV === 'production' && BUILD_ENV === 'staging') {
    // staging環境
    return staging
  }
  return production
}
