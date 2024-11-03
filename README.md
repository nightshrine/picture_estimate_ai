# picture_estimate_ai

## 概要

-   画像の推定を行う AI を作ろうとしています。
-   ただ、現状は frontend は react、backend は fastapi を使って、デプロイする方法を模索するリポジトリとして存在しています。
-   fastapi を Docker 化して fly.io へデプロイする方法を確立しました。
    -   ただ、一番スペックが低いものでも月額 300 円ほどかかるので、基本止めています。
    -   その代わり、手元で動かせるように、docker-compose で動かすこともできます。

## 使い方

-   docker-compose で動かす

```
docker compose up -d
```

-   http://localhost:3000 へアクセスすると、サンプルアプリが立ち上がります。

## デプロイ方法

-   frontend: cloudflare pages
-   backend: fly.io
