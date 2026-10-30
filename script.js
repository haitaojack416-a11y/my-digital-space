// 移动端导航菜单的展开与关闭。
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "打开导航菜单" : "关闭导航菜单");
    navLinks.classList.toggle("is-open", !isExpanded);
  });

  // 点选导航链接后收起手机菜单。
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "打开导航菜单");
      navLinks.classList.remove("is-open");
    });
  });

  // 切换到桌面宽度时清除手机菜单的展开状态。
  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "打开导航菜单");
      navLinks.classList.remove("is-open");
    }
  });
}

// 自动显示当前年份，避免页脚年份过期。
const year = document.querySelector("#current-year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
