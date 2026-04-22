/**
 * 小窑湾海钓产业园 设计系统
 * 交互脚本
 */

(function () {
  'use strict';

  // ---- 侧边栏导航 ----
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const mobileToggle = document.getElementById('mobileToggle');
  const navItems = document.querySelectorAll('.ds-nav-item[data-section]');
  const sections = document.querySelectorAll('.ds-section[id]');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    overlay.style.display = 'block';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // 导航点击 — 平滑滚动
  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var sectionId = this.getAttribute('data-section');
      var target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // 移动端关闭侧边栏
      if (window.innerWidth <= 1024) {
        closeSidebar();
      }
    });
  });

  // 滚动监听 — 高亮当前导航项
  function updateActiveNav() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(function (item) {
          item.classList.remove('active');
          if (item.getAttribute('data-section') === id) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  var scrollTimer = null;
  window.addEventListener('scroll', function () {
    if (scrollTimer) cancelAnimationFrame(scrollTimer);
    scrollTimer = requestAnimationFrame(updateActiveNav);
  }, { passive: true });

  // ---- 标签页切换 ----
  var tabsContainer = document.getElementById('tabsDemo');
  if (tabsContainer) {
    var tabs = tabsContainer.querySelectorAll('.ds-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
      });
    });
  }

  // ---- 开关切换 ----
  var toggleDemo = document.getElementById('toggleDemo');
  if (toggleDemo) {
    toggleDemo.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }

  // ---- 滚动入场动画 ----
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.classList.add('ds-visible');
      }
    });
  }, observerOptions);

  // 观察所有子章节
  document.querySelectorAll('.ds-subsection').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(el);
  });

  // 使用 MutationObserver 或直接添加 visible 样式
  var subsectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        subsectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.ds-subsection').forEach(function (el) {
    subsectionObserver.observe(el);
  });

  // ---- 色块点击复制 ----
  document.querySelectorAll('.ds-color-chip-block').forEach(function (chip) {
    chip.style.cursor = 'pointer';
    chip.title = '点击复制色值';
    chip.addEventListener('click', function () {
      var hexText = this.parentElement.querySelector('.ds-color-chip-hex');
      if (hexText) {
        var value = hexText.textContent;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(value).then(function () {
            showCopyFeedback(chip, value);
          });
        }
      }
    });
  });

  function showCopyFeedback(element, text) {
    var original = element.style.outline;
    element.style.outline = '2px solid var(--color-primary-500)';
    element.style.outlineOffset = '2px';
    setTimeout(function () {
      element.style.outline = original;
    }, 600);
  }

  // ---- 按钮涟漪效果 ----
  document.querySelectorAll('.ds-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var ripple = document.createElement('span');
      ripple.className = 'ds-ripple';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.width = '0';
      ripple.style.height = '0';
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(function () {
        ripple.remove();
      }, 600);
    });
  });

})();
