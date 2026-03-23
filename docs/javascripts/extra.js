document.addEventListener("DOMContentLoaded", function() {
  // 左上のロゴ要素（必ずホームへのリンクになっている）を取得
  const logoLink = document.querySelector(".md-header__button.md-logo");
  // タイトルテキストの要素を取得
  const titleDiv = document.querySelector(".md-header__title");
  
  if (logoLink && titleDiv) {
    const homeUrl = logoLink.getAttribute("href");
    
    // タイトル部分もクリック可能にする
    titleDiv.style.cursor = "pointer";
    titleDiv.addEventListener("click", function() {
      window.location.href = homeUrl;
    });
  }
});
