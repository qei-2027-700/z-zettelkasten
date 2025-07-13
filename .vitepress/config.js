import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Zettelkasten',
  description: 'A personal knowledge base and blog',
  base: '/z-zettelkasten/',
  srcDir: '.',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notebook', link: '/nb/' },
      { text: 'Beauty', link: '/beauty/' },
      { text: 'Career', link: '/career/' },
      { text: 'Health', link: '/health/' },
      { text: 'Other', link: '/other/' }
    ],
    
    sidebar: {
      '/nb/': [
        {
          text: 'Notebook',
          items: [
            { text: 'Index', link: '/nb/' },
            { text: '戦略・方針', link: '/nb/戦略・方針' },
            { text: 'Jizen', collapsed: true, items: [
              { text: 'w-aru-28', link: '/nb/jizen/w-aru-28' },
              { text: 'w-yu-33', link: '/nb/jizen/w-yu-33' }
            ]},
            { text: 'Message', collapsed: true, items: [
              { text: 'kaeru', link: '/nb/message/kaeru' },
              { text: 'kaeru2', link: '/nb/message/kaeru2' }
            ]}
          ]
        }
      ],
      '/beauty/': [
        {
          text: 'Beauty',
          items: [
            { text: 'チュアンド・タン', link: '/beauty/チュアンド・タン' },
            { text: 'ヘアセット', link: '/beauty/ヘアセット' },
            { text: '服', link: '/beauty/服' },
            { text: '歯ホワイトニング', link: '/beauty/歯ホワイトニング' },
            { text: '香水', link: '/beauty/香水' }
          ]
        }
      ],
      '/career/': [
        {
          text: 'Career',
          items: [
            { text: '経験・自己分析', link: '/career/経験・自己分析' }
          ]
        }
      ],
      '/cooking/': [
        {
          text: 'Cooking',
          items: [
            { text: 'ドレッシング', link: '/cooking/ドレッシング' },
            { text: '自炊メモ', link: '/cooking/自炊メモ' }
          ]
        }
      ],
      '/health/': [
        {
          text: 'Health',
          items: [
            { text: '歯科', link: '/health/歯科' },
            { text: '睡眠外来', link: '/health/睡眠外来' },
            { text: '通院先ログ', link: '/health/通院先ログ' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/z-zettelkasten' }
    ]
  },
  
  markdown: {
    lineNumbers: true
  }
})