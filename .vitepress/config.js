import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Zettelkasten Blog',
  description: 'A personal knowledge base and blog',
  base: '/km-obsidian-zettelkasten/',
  srcDir: '.',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notebook', link: '/nb/' }
    ],
    
    sidebar: {
      '/nb/': [
        {
          text: 'Notebook',
          items: [
            { text: 'Index', link: '/nb/' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/km-obsidian-zettelkasten' }
    ]
  },
  
  markdown: {
    lineNumbers: true
  }
})