
一些基本概念

##### 对讲账号
```
tcAccount  创建 / 查询帐号
创建对讲账号 对讲账号在设备或手机初始化后，只要知道对方的对讲userId，就可以向对讲发起对讲请求
```

##### 智能门禁  
```
tcDevice    设备查询 / 绑定 / 解绑 / 开锁
提供对门口机设备控制操作
```

##### 门禁卡
```
tcCard      绑定 / 开锁
提供对门口机设备控制操作
```

#### 密码

##### 设备管理 PC端
```
+--------------------+           +--------------------+             +--------------------+
|                    |           |                    |             |                    |
|        采购         +-------->  |       安装          +--------->  |         绑定        |
|                    |           |                    |             |                    |
+--------------------+           +--------------------+             +--------------------+
```

| 序号 | 地址 | 名称 | 机身号 | 机型 | 固件版本 | 状态 | 操作 |
|----|----|----|-----|------|------|------|------|
| 1 | 康桥边的院子1号楼1单元 | 大门 | 00001 | 2018H1 | 1.0.1 | 正常 | ⚙️ |
| 2 | 康桥边的院子1号楼1单元 | 单元 | 00006 | 2018-3W | 1.0.1 | 离线 | ⚙️ |
| 3 | 康桥边的院子1号楼1单元 | 车库 | 00001 | 2018H1 | 1.0.1 | 故障 | ⚙️ |



##### 业主App端
```
              Unsaved               
+-----------------------+
|                       |
|  Keeper login to App  +--------> 1. 获取账户              2. 获取locationId (单元ID或者房屋ID), 进而获取location绑定的de^ice
|                       |               +                                            +
+-----------------------+               |                                            |
                                        |                                            |
                                        |                                            |
                                        |                                            |
                                        |                                            |
                                        |                                            |
                                        |                                            |
                                        v                                            v
                                        
                           +--------------------------+                 +---------------------------+
                           |                          |                 |                           |
                           |        VoIp 呼叫          |                 |          开锁             |
                           |                          |                 |                           |
                           |                          |                 |                           |
                           |                          |                 |                           |
                           +--------------------------+                 +---------------------------+

```

