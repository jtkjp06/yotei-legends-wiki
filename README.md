# 冥人奇譚 攻略wiki

[![Deploy MkDocs to GitHub Pages](https://github.com/jtkjp06/yotei-legends-wiki/actions/workflows/deploy.yml/badge.svg)](https://github.com/jtkjp06/yotei-legends-wiki/actions/workflows/deploy.yml)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.ja)

**Ghost of Yōtei: Legends（ゴースト・オブ・ヨウテイ 冥人奇譚）** の非公式コミュニティ攻略wikiです。  
PS5ゲーム「Ghost of Yōtei」に付属する無料の協力マルチプレイヤーDLCを対象としています。

🌐 **公開サイト**: <https://jtkjp06.github.io/yotei-legends-wiki/>

---

## 概要

このwikiは [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) で構築されており、GitHub Pagesで公開されています。

### 掲載内容

- 各クラス（侍・弓取・用心棒・忍）の攻略情報
- ゲームモード別（奇譚・九死・攻城・大禍・百鬼）の立ち回りガイド
- 装備・ビルド情報（神品一覧・特殊効果）
- 初心者向けガイドおよび上級者向けTips
- 用語集・更新履歴

---

## ローカル環境でのプレビュー

### 必要なもの

- Python 3.9 以上
- pip

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/jtkjp06/yotei-legends-wiki.git
cd yotei-legends-wiki

# 仮想環境を作成（推奨）
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

# 依存パッケージをインストール
pip install -r requirements.txt

# ローカルサーバーを起動
mkdocs serve
```

ブラウザで <http://127.0.0.1:8000/> を開くとプレビューできます。

---

## 貢献方法

wiki への貢献を歓迎します！詳しくは [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

### クイックガイド

1. このリポジトリを **Fork** する
2. 編集用ブランチを作成する（例: `git checkout -b fix/samurai-skills`）
3. `docs/` 以下の Markdown ファイルを編集する
4. `mkdocs serve` でプレビューして確認する
5. **Pull Request** を作成する

---

## ライセンス

このwikiのコンテンツは [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ja) ライセンスの下で公開されています。

> **注意**: ゲームの著作権は Sony Interactive Entertainment および Sucker Punch Productions に帰属します。このwikiはファンが作成した非公式の情報サイトです。
