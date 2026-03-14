# 貢献ガイド

冥人奇譚 攻略wikiへの貢献ありがとうございます！このガイドでは、PRの送り方や編集ルールについて説明します。

## 編集の基本方針

- **正確性を優先する**: 未確認の情報には `!!! warning "要検証"` アドモニションを付けてください。
- **日本語で記述する**: すべてのコンテンツは日本語で書いてください。
- **既存のスタイルに合わせる**: 他のページのフォーマットを参考にしてください。

## 貢献の流れ

### 1. リポジトリをForkする

GitHubの [yotei-legends-wiki](https://github.com/jtkjp06/yotei-legends-wiki) ページで **Fork** ボタンをクリックします。

### 2. ブランチを作成する

```bash
git checkout -b fix/ページ名や修正内容
```

ブランチ名の例:
- `fix/samurai-skill-table` — 侍のスキルテーブルを修正
- `add/new-legendary-item` — 新しい神品を追加
- `update/beginner-guide` — 初心者ガイドを更新

### 3. 変更を加える

`docs/` フォルダ内の Markdown ファイルを編集します。

#### ローカルでプレビューする

```bash
pip install -r requirements.txt
mkdocs serve
```

<http://127.0.0.1:8000/> でリアルタイムプレビューが確認できます。

### 4. コミットする

```bash
git add .
git commit -m "fix: 侍のスキルテーブルを修正"
```

コミットメッセージは簡潔に、変更内容がわかるように書いてください。

### 5. Pull Requestを作成する

Fork したリポジトリを GitHub にプッシュし、元のリポジトリに **Pull Request** を作成します。

PR の説明には以下を含めてください:
- 変更の目的・理由
- 変更した内容の概要
- 参考にした情報源（公式サイト、動画など）

## Markdownの書き方

### アドモニション（注意ブロック）

```markdown
!!! warning "要検証"
    この情報はまだ確認が取れていません。

!!! tip "ヒント"
    便利なプレイのコツを書きます。

!!! note "メモ"
    補足情報を書きます。
```

### テーブル

```markdown
| 項目 | 値 | 備考 |
|------|-----|------|
| HP   | 100 | 基本値 |
```

### タブ

```markdown
=== "タブ1"
    タブ1の内容

=== "タブ2"
    タブ2の内容
```

## 禁止事項

- 著作権で保護されたゲーム内テキストや画像をそのまま転載すること
- 未確認の情報を確認済みとして掲載すること
- 他のユーザーへの誹謗中傷

## ライセンス

このwikiへの貢献は [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ja) ライセンスの下で公開されます。

ご不明な点は [Issues](https://github.com/jtkjp06/yotei-legends-wiki/issues) でお問い合わせください。
