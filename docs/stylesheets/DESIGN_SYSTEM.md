# 冥人奇譚 攻略wiki デザインシステム

## 概要

本wikiのデザインは、[melta-ui](https://github.com/tsubotax/melta-ui) の設計原則を参考にしています。

> 参照元ツイート: [Claude Codeに特化したデザインシステムを作って工夫したこと](https://x.com/tsubotax/status/2033108527015956665)

---

## 設計原則（5つ）

### 1. Layered — 3層構造

UIを**背景（Background）→ 表層（Surface）→ テキスト/オブジェクト**の3層で構成する。

```
┌─────────────────────────────────────────┐
│  Background (--color-bg-primary)        │  ← 最奥レイヤー
│  ┌───────────────────────────────────┐  │
│  │  Surface (--color-surface-primary) │  │  ← 中間レイヤー（カード、テーブル等）
│  │  ┌─────────────────────────────┐  │  │
│  │  │  Text (--color-text-primary) │  │  │  ← 最前面レイヤー
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### 2. Contrast — WCAG 2.1準拠

テキストは背景に対して **4.5:1 以上**のコントラスト比を確保する。

### 3. Semantic — 意味ベースの命名

色は用途で指定する。生のカラーコードを直接使わない。

```css
/* ✅ OK: セマンティック */
background: var(--color-surface-primary);
color: var(--color-text-secondary);

/* ❌ NG: ハードコード */
background: #ffffff;
color: #6b7280;
```

### 4. Minimal — 装飾を控えめに

- 1つのViewで使う色は **3色まで**（背景・アクセント・テキスト）
- 余白とタイポグラフィで構造を伝える
- シャドウは控えめに

### 5. Grid — 4px/8pxグリッド

スペーシングは **4の倍数**を基本、**8の倍数**を推奨する。

```css
/* 定義済みトークン */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

---

## デザイントークン一覧

### カラー

| トークン | 用途 | ライトモード | ダークモード |
|---------|------|-------------|-------------|
| `--color-bg-primary` | ページ背景 | `#ffffff` | `#0f1117` |
| `--color-bg-secondary` | セクション背景 | `#f9fafb` | `#161922` |
| `--color-bg-tertiary` | 補助背景 | `#f3f4f6` | `#1e212c` |
| `--color-surface-primary` | カード・テーブル | `#ffffff` | `#161922` |
| `--color-surface-elevated` | 浮遊要素 | `#ffffff` | `#1e212c` |
| `--color-surface-border` | ボーダー | `#e5e7eb` | `#2a2d3a` |
| `--color-text-primary` | 見出し・本文 | `#111827` | `#e5e7eb` |
| `--color-text-secondary` | 補助テキスト | `#6b7280` | `#9ca3af` |
| `--color-text-muted` | 薄いテキスト | `#9ca3af` | `#6b7280` |
| `--color-accent` | アクセント | `#d97706` | `#f59e0b` |

### 角丸

| トークン | 値 | 用途 |
|---------|-----|------|
| `--radius-sm` | `4px` | コードブロック |
| `--radius-md` | `8px` | テーブル、画像、入力 |
| `--radius-lg` | `12px` | カード、ヒーロー |
| `--radius-xl` | `16px` | 大きなパネル |
| `--radius-full` | `9999px` | バッジ、ボタン |

### エレベーション（シャドウ）

| トークン | 用途 |
|---------|------|
| `--shadow-xs` | カード（デフォルト） |
| `--shadow-sm` | 画像コンテナ |
| `--shadow-md` | ヒーロー、ホバー時カード |
| `--shadow-lg` | モーダル、ドロップダウン |

### タイポグラフィ

| トークン | 値 | 用途 |
|---------|-----|------|
| `--text-xs` | 12px | キャプション |
| `--text-sm` | 13px | ラベル |
| `--text-base` | 14px | 本文 |
| `--text-md` | 16px | サブヘッド |
| `--text-lg` | 18px | 小見出し |
| `--text-xl` | 20px | セクション見出し |
| `--text-2xl` | 24px | ページ見出し |
| `--text-3xl` | 32px | ヒーロー見出し |

---

## 禁止パターン

本wikiでは以下のパターンを禁止する。

### 色の直接指定

```css
/* ❌ 禁止 */
color: #333333;
background: white;

/* ✅ 代わりに */
color: var(--color-text-primary);
background: var(--color-surface-primary);
```

### 過度な装飾

```css
/* ❌ 禁止: 強いシャドウ */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

/* ❌ 禁止: 大きすぎる角丸（カード等に） */
border-radius: 24px;

/* ❌ 禁止: 過度なアニメーション */
transition-duration: 500ms;
transform: translateY(-8px);

/* ✅ 代わりに */
box-shadow: var(--shadow-md);
border-radius: var(--radius-lg);
transition: transform var(--transition-normal);
transform: translateY(-2px);
```

### スペーシングのルール

```css
/* ❌ 禁止: 非グリッド値 */
padding: 15px;
margin: 7px;

/* ✅ 代わりに: 4px倍数 */
padding: var(--space-4);  /* 16px */
margin: var(--space-2);   /* 8px */
```

---

## ファイル構成

```
docs/stylesheets/
├── design-tokens.css  # デザイントークン（SSOT: Single Source of Truth）
└── extra.css          # コンポーネントスタイル（トークンを参照）
```

- **`design-tokens.css`** が唯一の値の定義元（SSOT）
- **`extra.css`** はトークンを `var()` で参照するのみ
- 新しい色やスペーシングが必要な場合は、まず `design-tokens.css` にトークンを追加する

---

## 変更履歴

| 日付 | 内容 |
|------|------|
| 2026-03-23 | melta-ui原則に基づくデザインシステム初版を作成 |
