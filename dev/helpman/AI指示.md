下記のようなWEBサービスを作りたいと思っています。  
- キャリアに悩んでいる人や、学生の進路相談に使われるような、その人の向き不向きを分析し、進路やキャリアについて答えを見つけるのを手伝う （聴覚優位、視覚優位的な診断からMBTI的なものやWAISなども利用する）  
- clinicと提携し、WAISなどの予約システム  
- 発達障害やグレーゾーンの人が、無職でないと通えない就労移行支援サービスを利用することなくオンラインで似たようなことができる
- 短期報酬を刺激する悪習慣を辞めるのをサポート（tiktokショート動画、news、XなどSNS） 

その他
- サブスク・課金機能・プラン変更機能
- ログイン・ログアウト機能
- 登録・退会機能

下記の技術・構成で実装予定です
- フロントエンド：Nuxt3, Vue3, Vite
- Vitest
- Feature Sliced構成
- Shadcn-ui, tailwindcss 
- PostgreSQL 
- バックエンド（APIサーバ）：Go,Echo
- github(PR, issues)
- github actions
- CI/CD
- OAuth2.0
- モノシリック構成、swagger(OpenAPI)
- Taskfile
- Docker, docker-compose

考慮事項・懸念点
- Vue, Nuxtを利用していても、将来簡単にNext, Reactにリプレイスすることも想定しています。

そのため、下記を洗い出し、日本語で回答して 
・必要な機能の洗い出し
・おおよそのページ