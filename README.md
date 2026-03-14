# 冥人奇譚 攻略wiki（yotei-legends-wiki）

Ghost of Yōtei（ゴースト・オブ・ヨウテイ）の無料DLC「冥人奇譚（Legends）」の日本語攻略wikiです。

## URL

https://jtkjp06.github.io/yotei-legends-wiki/

## 技術スタック

- [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- GitHub Pages（GitHub Actionsで自動デプロイ）

## ローカルでの確認方法

MkDocsのローカルサーバー機能を利用して、手元のブラウザでプレビューしながら編集できます。

1. **基本環境の準備**
   Python3 がインストールされている必要があります。
2. **依存パッケージのインストール**
   リポジトリのルートディレクトリで以下を実行します。
   ```bash
   # (推奨) 仮想環境の作成と有効化 (Mac/Linux)
   python3 -m venv .venv
   source .venv/bin/activate
   
   # パッケージのインストール
   pip install -r requirements.txt
   ```
3. **ローカルサーバーの起動**
   ```bash
   mkdocs serve
   ```
4. **ブラウザで確認**
   `http://127.0.0.1:8000/` にアクセスします。
   起動中はマークダウンファイルの変更が自動でリロード（Live Reload）され反映されます。
   停止する場合は、ターミナルで `Ctrl + C` を押します。
