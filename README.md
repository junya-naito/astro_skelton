# Astro開発環境

https://docs.astro.build/ja/getting-started/

- yarn 1.22.19
- node v20.3.0

## インストール

```
yarn install
```

## 開発

```
yarn dev
```

## ビルド

```
yarn build
```

## ビルドファイル確認

```
$ yarn preview
```

# ディレクトリ構成

```
root
 ├── public
 ├── dist
 └── src
      ├── components
      │    └── hoge.astro
      ├── layouts
      │    ├── Layout.astro
      │    ├── Header.astro
      │    └── Footer.astro
      ├── pages
      │    ├── index.astro
      │    └── page.astro
      ├── scripts
      │    ├── modules
      │    │    └── hoge.ts
      │    ├── common.ts
      │    └── home.ts
      └── styles
           ├── modules
           │    └── _hoge.scss
           ├── pages
           │    └── home.scss
           │    └── page.scss
           ├── _mixin.scss
           ├── _variables.scss
           ├── ResetStyle.astro
           ├── GlobalStyles.astro
           └── home.ts
```

## public

画像を格納するディレクトリ
images/ 内に画像を入れる。

## dist

ビルドファイルの出力先

## src

### components

astroコンポーネントを格納

### layouts

レイアウト用のastroファイルを格納

### pages

- ページを管理する。
  例) aboutページを追加

```
cp src/pages/page.astro src/pages/about.astro
```

### scripts

- tsファイルを管理する。
- common.tsに共通のscriptを定義する。（layout.astroで読み込んでいる）
- ページ固有のscriptを書く場合は `hoge.ts` を作成し、各ページのastroファイル末尾で読み込む。

```astro
// src/pages/index.astro

<script>
  import '../scripts/home.ts';
</script>
```

### styles

- 基本はastroコンポーネント内にスタイルを記述する。
- グローバルのスタイルを定義したい場合は `GlobalStyles.astro` 内に定義する。
- リセットCSSは`ResetStyles.astro`で定義している。
- ページ固有のスタイルを定義したい時は、hoge.scssを作成し、各ページのastroファイルのコンポーネントスクリプト内で読み込む。

```
// src/styles/pages/home.scss
h1 {
  font-size: 20px;
}

// src/pages/index.astro
---
// コンポーネントスクリプトはここに書きます
import '../styles/pages/home.scss';
---

```

- ファイルを分割して管理したい場合は `modules/` 内にファイルを格納してimportする

```scss
// src/styles/modules/_test.scss
body {
  display: block;
}

// src/styles/GlobalStyles.astro
<style is:global lang="scss">
  @import 'modules/_test';
</style>

// is:globalでグローバルにstyleを設定する意
// lang="scss"でscssを使用可能にする
```
