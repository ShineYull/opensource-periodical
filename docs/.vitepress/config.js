export default {
    title: '开源期刊',
    description: 'Just playing around.',
    head:[
        ['link', { rel: 'icon', href: '/niunai.webp' }]
    ],
    lastUpdated: true,
    themeConfig: {
        siteTitle: "开源期刊",  //左上角的
        logo: "/niunai.webp",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
          {
            text: "热门期刊",             //导航标签的名字
            items: [                  //这种格式是有下拉菜单的版本
              { text: "暂无", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
              { text: "暂无", link: "/articles/vue/index" },
            ],
          },
          { text: "欢迎投稿", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },   //这种是没有下拉菜单的版本
        ],
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/ShineYull/opensource-periodical" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
        sidebar: {
            "/periodical/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识开源期刊", link: "/periodical/getting-started" },
                    ],
                },
                {
                    text: "开源期刊",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "第一期", link: "/periodical/periodical_01" },
                    ],
                },
            ],
            "/projectplay/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识projectplay", link: "/projectplay/getting-started" },
                    ],
                },
                {
                    text: "开源期刊项目亲测",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "第一期", link: "/projectplay/projectplay_01" },
                    ],
                },
            ],
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©2023 By <a href="https://github.com/ShineYull/opensource-periodical">Shine</a>'
        },
        editLink: {
            pattern: 'https://github.com/ShineYull/opensource-periodical',
            text: '欢迎提issues'
        },
    },
}