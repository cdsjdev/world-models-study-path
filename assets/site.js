(function () {
  var stored = localStorage.getItem('wm-theme');
  var theme = stored === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeToggle');
  var themeLabel = document.getElementById('themeToggleLabel');

  function syncTheme() {
    var isDark = root.getAttribute('data-theme') !== 'light';
    themeLabel.textContent = isDark ? 'Dark' : 'Light';
  }

  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('wm-theme', next);
    syncTheme();
  });

  syncTheme();

  var langBtn = document.getElementById('langToggle');
  var langLabel = document.getElementById('langToggleLabel');
  var nodes = document.querySelectorAll('.i18n');

  function applyLang(lang) {
    nodes.forEach(function (el) {
      var html = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
      if (html !== null) el.innerHTML = html;
    });
    root.setAttribute('lang', lang === 'zh' ? 'zh' : 'en');
    langLabel.textContent = lang === 'zh' ? 'EN' : '中文';
  }

  var storedLang = localStorage.getItem('wm-lang');
  var initialLang = storedLang === 'zh' ? 'zh' : 'en';
  applyLang(initialLang);

  langBtn.addEventListener('click', function () {
    var current = root.getAttribute('lang') === 'zh' ? 'zh' : 'en';
    var next = current === 'zh' ? 'en' : 'zh';
    applyLang(next);
    localStorage.setItem('wm-lang', next);
  });
});
