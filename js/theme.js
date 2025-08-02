const toggleButton = document.getElementById('toggle-theme');
const icon = document.getElementById('mode-icon');

// 默认设置
if (!localStorage.getItem('theme')) {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light');
}

// 应用主题
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// 初始化
applyTheme(localStorage.getItem('theme'));

// 切换事件
toggleButton.addEventListener('click', () => {
  const current = localStorage.getItem('theme');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});
