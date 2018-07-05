```
一些基本概念

### 对讲账号
tcAccount   GET v1/Intercom/GetAccount?userId={userId}
创建对讲账号 对讲账号在设备或手机初始化后，只要知道对方的对讲userId，就可以向对讲发起对讲请求

智能门禁    tcDevice    设备查询 / 绑定 / 解绑  / 开锁

门禁卡      tcCard      绑定  /   开锁
提供对门口机设备控制操作

+-----------------------+
|                       |
|                       |
|  Keeper login to App  ----------------------> get locationId
|                       |
|                       |
+-----------------------+

```

