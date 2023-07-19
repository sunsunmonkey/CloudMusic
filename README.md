# 网易云音乐移动版
### 启动
    使用前先启动服务，我是启动的本地3000端口，配置文件在services/request/config.js里，配置好后在终端输入命令 `npm start`即可启动
### 基础功能
- 基本实现了侧边栏的全部功能：
    (单指抽拉，不过半的弹回，边界阈值的判断，点击蒙版的退回，以及相应的动画效果)

- 个人主页大体内容

- 从个人主页的卡片按钮处进入信息编辑页 

- 歌单页面及简单交互
    (点击歌目变红，滚动条监听，及顶部标题变化)

- 登录：使用的是二维码登录，在未登录状态下点击头像或二维码icon即可进入/login下
        实现原理是使用一个简单的轮询，来判断是否登录成功

### 项目亮点

- 项目架构清晰分层明确

- 使用redux管理一些网络请求的数据

- 组件的封装和复用，以及插槽的灵活使用

- 较为美观的样式
