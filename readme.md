一个练习性质的芙莉莲主题自习时钟。背景6张动画壁纸可选，播放列表10首原声带，3种白噪音；白噪音与原声带音乐独立控制。

重要声明：FrierenTimer软件仅面向个人用户提供非商业使用。任何企业、组织或个人不得将本软件用于商业活动，包括但不限于直接销售软件、利用软件提供付费服务、将软件嵌入商业产品中以获取经济收益等。违反本声明进行商业使用的行为将受到法律追究。



功能说明：

◀▶ 切换背景视频

🌊 点击播放白噪音

⛶ 全屏显示

播放器右下角可选随机/顺序播放，点击三条横线可展开音乐列表

START 开始计时

PAUSE/CONTINUE 暂停/继续

RESET 重置



#文件结构：

```
FrierenTimer/
├── readme.md
├── .gitignore
├── package.json
├── package-lock.json
├── main.js
├── preload.js
├── assets/
│   ├── background/    #背景壁纸（视频）
│   ├── sound/         #白噪音
│   └── music/         #背景音乐
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```


#已有背景视频如下：
```
this.videoFiles = [
    'assets/background/write.mp4',
    'assets/background/water.mp4',
    'assets/background/fire.mp4',
    'assets/background/tomb.mp4',
    'assets/background/meteor.mp4',
    'assets/background/box.mp4'
];
```

#添加音乐格式如下：

```
{
    name: 'Goodbye for Now, Eisen',
    artist: 'Evan Call',
    url: 'assets/music/Goodbye for Now, Eisen.ogg',
    cover: 'assets/music/cover.webp'
},
```


Q：是否需要删除node_modules等？
A：​依赖未变更时无需删除​

node_modules目录存储的是项目依赖的第三方库，只要package.json中的依赖版本未变化，这些库的代码不会因你的业务代码修改而失效。
直接运行构建或启动命令即可生效，例如：npm run build。
​需要删除node_modules的情况​

​依赖版本变更：修改了package.json中的依赖项（如版本号、新增/删除包）。
​安装异常：遇到依赖安装错误或运行时报错（如npm install失败、模块缺失）。

清除缓存（可选）​​
若安装过程中报缓存相关错误：npm cache clean --force
