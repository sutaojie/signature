//app.ts
export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  globalData: {
    userInfo?: wx.UserInfo
  }
}

App<IMyApp>({
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
      console.log('loading yun');
    }
  },
  globalData: {
  }
})