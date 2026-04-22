/**
 * 小窑湾海钓产业园 设计系统
 * 色彩方案切换器 — Color Scheme Switcher
 */

(function () {
  'use strict';

  var currentSchemeId = 'ocean-deep';
  var customSchemes = [];

  // ---- 工具函数 ----

  // 根据一个 500 色值生成 10 级色阶
  function generateScale(hex500) {
    var rgb = hexToRgb(hex500);
    if (!rgb) return null;
    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    return {
      50:  hslToHex(hsl.h, Math.max(hsl.s - 20, 5),  Math.min(hsl.l + 38, 97)),
      100: hslToHex(hsl.h, Math.max(hsl.s - 15, 8),  Math.min(hsl.l + 30, 93)),
      200: hslToHex(hsl.h, Math.max(hsl.s - 10, 10), Math.min(hsl.l + 22, 88)),
      300: hslToHex(hsl.h, Math.max(hsl.s - 5, 15),  Math.min(hsl.l + 14, 80)),
      400: hslToHex(hsl.h, hsl.s,                  Math.min(hsl.l + 7, 72)),
      500: hex500,
      600: hslToHex(hsl.h, Math.min(hsl.s + 3, 90), Math.max(hsl.l - 6, 15)),
      700: hslToHex(hsl.h, Math.min(hsl.s + 5, 92), Math.max(hsl.l - 14, 12)),
      800: hslToHex(hsl.h, Math.min(hsl.s + 7, 94), Math.max(hsl.l - 22, 8)),
      900: hslToHex(hsl.h, Math.min(hsl.s + 9, 96), Math.max(hsl.l - 30, 5))
    };
  }

  // 根据四个 500 色值生成渐变
  function generateGradients(p500, s1500, s2500, s3500) {
    var p200 = generateScale(p500);
    var s1400 = generateScale(s1500);
    var s2400 = generateScale(s2500);
    var s3400 = generateScale(s3500);
    return {
      dawn: 'linear-gradient(135deg, #F7F8FA 0%, ' + p200[200] + ' 40%, ' + s1400[400] + ' 100%)',
      deep: 'linear-gradient(180deg, ' + p500 + ' 0%, ' + (p200 ? p200[800] : p500) + ' 60%, ' + (p200 ? p200[900] : p500) + ' 100%)',
      sunset: 'linear-gradient(135deg, ' + s3500 + ' 0%, ' + s2400[400] + ' 50%, ' + p500 + ' 100%)',
      surface: 'linear-gradient(135deg, ' + (p200 ? p200[50] : p500) + ' 0%, ' + p200[200] + ' 50%, ' + (p200 ? p200[400] : p500) + ' 100%)',
      shimmer: 'linear-gradient(135deg, ' + s1500 + ' 0%, ' + s1400[400] + ' 50%, ' + (p200 ? p200[600] : s1500) + ' 100%)'
    };
  }

  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
    return { r: r, g: g, b: b };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs((h / 60) % 2 - 1));
    var m = l - c / 2;
    var r, g, b;
    if (h < 60)      { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else              { r = c; g = 0; b = x; }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function isValidHex(str) {
    return /^#[0-9A-Fa-f]{6}$/.test(str);
  }

  // ---- 应用方案到 CSS 变量 ----
  function applyScheme(scheme) {
    var root = document.documentElement;
    document.body.classList.add('ds-scheme-transitioning');

    // 应用主色
    if (scheme.primary) {
      for (var level in scheme.primary) {
        root.style.setProperty('--color-primary-' + level, scheme.primary[level]);
      }
    }
    // 应用辅助色 1
    if (scheme.secondary1) {
      for (var level in scheme.secondary1) {
        root.style.setProperty('--color-secondary1-' + level, scheme.secondary1[level]);
      }
    }
    // 应用辅助色 2
    if (scheme.secondary2) {
      for (var level in scheme.secondary2) {
        root.style.setProperty('--color-secondary2-' + level, scheme.secondary2[level]);
      }
    }
    // 应用辅助色 3
    if (scheme.secondary3) {
      for (var level in scheme.secondary3) {
        root.style.setProperty('--color-secondary3-' + level, scheme.secondary3[level]);
      }
    }
    // 应用渐变
    if (scheme.gradients) {
      root.style.setProperty('--gradient-ocean-dawn', scheme.gradients.dawn);
      root.style.setProperty('--gradient-ocean-deep', scheme.gradients.deep);
      root.style.setProperty('--gradient-ocean-sunset', scheme.gradients.sunset);
      root.style.setProperty('--gradient-ocean-surface', scheme.gradients.surface);
      root.style.setProperty('--gradient-gold-shimmer', scheme.gradients.shimmer);
    }

    // 更新主题阴影色
    var p500 = scheme.primary ? scheme.primary[500] : '#1A7FA0';
    var s1500 = scheme.secondary1 ? scheme.secondary1[500] : '#D4A654';
    var pRgb = hexToRgb(p500);
    var s1Rgb = hexToRgb(s1500);
    if (pRgb) root.style.setProperty('--shadow-ocean', '0 8px 32px rgba(' + pRgb.r + ',' + pRgb.g + ',' + pRgb.b + ',0.15)');
    if (s1Rgb) root.style.setProperty('--shadow-gold', '0 4px 16px rgba(' + s1Rgb.r + ',' + s1Rgb.g + ',' + s1Rgb.b + ',0.20)');

    setTimeout(function () {
      document.body.classList.remove('ds-scheme-transitioning');
    }, 500);

    currentSchemeId = scheme.id;
    updateActiveCard();
    updateColorTitles(scheme);

    // 触发配色变更事件，供插画联动等模块监听
    document.dispatchEvent(new CustomEvent('ds-scheme-changed', { detail: { scheme: scheme } }));
  }

  // ---- 更新色彩标题名称 ----
  function updateColorTitles(scheme) {
    var primaryEl = document.getElementById('primaryTitle');
    var secondary1El = document.getElementById('secondaryTitle');
    var secondary2El = document.getElementById('secondary2Title');
    var secondary3El = document.getElementById('secondary3Title');
    if (primaryEl && scheme.primaryName) {
      primaryEl.textContent = '主色 Primary — ' + scheme.primaryName;
    }
    if (secondary1El && scheme.secondary1Name) {
      secondary1El.textContent = '辅助色 1 Secondary 1 — ' + scheme.secondary1Name;
    }
    if (secondary2El && scheme.secondary2Name) {
      secondary2El.textContent = '辅助色 2 Secondary 2 — ' + scheme.secondary2Name;
    }
    if (secondary3El && scheme.secondary3Name) {
      secondary3El.textContent = '辅助色 3 Secondary 3 — ' + scheme.secondary3Name;
    }
  }

  // ---- 渲染方案网格 ----
  function renderSchemeGrid() {
    var grid = document.getElementById('schemeGrid');
    if (!grid || typeof DSColorSchemes === 'undefined') return;

    var allSchemes = DSColorSchemes.concat(customSchemes);
    document.getElementById('schemeCount').textContent = allSchemes.length + ' 套';

    var html = '';
    allSchemes.forEach(function (scheme) {
      var isActive = scheme.id === currentSchemeId;
      html += '<div class="ds-scheme-card' + (isActive ? ' active' : '') + '" data-scheme-id="' + scheme.id + '">';
      html += '<div class="ds-scheme-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>';
      html += '<div class="ds-scheme-preview">';
      html += '<div class="ds-scheme-preview-bar" style="background:' + scheme.primary[500] + ';flex:12"></div>';
      html += '<div class="ds-scheme-preview-bar" style="background:' + scheme.secondary1[500] + ';flex:5"></div>';
      html += '<div class="ds-scheme-preview-bar" style="background:' + scheme.secondary2[500] + ';flex:3"></div>';
      html += '<div class="ds-scheme-preview-bar" style="background:' + scheme.secondary3[500] + ';flex:1"></div>';
      html += '</div>';
      html += '<div class="ds-scheme-name">' + scheme.name + '</div>';
      html += '<div class="ds-scheme-name-en">' + scheme.nameEn + '</div>';
      html += '<div class="ds-scheme-desc">' + scheme.desc + '</div>';
      html += '</div>';
    });

    grid.innerHTML = html;

    // 绑定点击事件
    grid.querySelectorAll('.ds-scheme-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var id = this.getAttribute('data-scheme-id');
        var scheme = findSchemeById(id);
        if (scheme) applyScheme(scheme);
      });
    });
  }

  function findSchemeById(id) {
    if (typeof DSColorSchemes !== 'undefined') {
      for (var i = 0; i < DSColorSchemes.length; i++) {
        if (DSColorSchemes[i].id === id) return DSColorSchemes[i];
      }
    }
    for (var j = 0; j < customSchemes.length; j++) {
      if (customSchemes[j].id === id) return customSchemes[j];
    }
    return null;
  }

  function updateActiveCard() {
    document.querySelectorAll('.ds-scheme-card').forEach(function (card) {
      card.classList.toggle('active', card.getAttribute('data-scheme-id') === currentSchemeId);
    });
    document.querySelectorAll('.ds-custom-saved-item').forEach(function (item) {
      item.classList.toggle('active', item.getAttribute('data-scheme-id') === currentSchemeId);
    });
  }

  // ---- 自定义方案面板 ----
  function initCustomPanel() {
    var openBtn = document.getElementById('openCustomPanel');
    var closeBtn = document.getElementById('closeCustomPanel');
    var panel = document.getElementById('customPanel');
    var applyBtn = document.getElementById('applyCustomScheme');
    var saveBtn = document.getElementById('saveCustomScheme');
    var resetBtn = document.getElementById('resetCustomScheme');

    if (!openBtn || !panel) return;

    openBtn.addEventListener('click', function () {
      panel.classList.add('open');
    });

    closeBtn.addEventListener('click', function () {
      panel.classList.remove('open');
    });

    // 颜色选择器与文本输入同步
    var colorPairs = [
      { picker: 'customPrimary', hex: 'customPrimaryHex', preview: 'previewPrimary' },
      { picker: 'customSecondary1', hex: 'customSecondary1Hex', preview: 'previewSecondary1' },
      { picker: 'customSecondary2', hex: 'customSecondary2Hex', preview: 'previewSecondary2' },
      { picker: 'customSecondary3', hex: 'customSecondary3Hex', preview: 'previewSecondary3' }
    ];

    colorPairs.forEach(function (pair) {
      var picker = document.getElementById(pair.picker);
      var hexInput = document.getElementById(pair.hex);
      var preview = document.getElementById(pair.preview);
      if (!picker || !hexInput) return;

      picker.addEventListener('input', function () {
        hexInput.value = this.value.toUpperCase();
        if (preview) preview.style.background = this.value;
      });

      hexInput.addEventListener('input', function () {
        var val = this.value.trim();
        if (!val.startsWith('#')) val = '#' + val;
        if (isValidHex(val)) {
          picker.value = val;
          if (preview) preview.style.background = val;
        }
      });

      hexInput.addEventListener('blur', function () {
        var val = this.value.trim();
        if (!val.startsWith('#')) val = '#' + val;
        if (isValidHex(val)) {
          this.value = val.toUpperCase();
        } else {
          this.value = picker.value.toUpperCase();
        }
      });
    });

    // 应用自定义方案（临时预览）
    applyBtn.addEventListener('click', function () {
      var p = document.getElementById('customPrimary').value;
      var s1 = document.getElementById('customSecondary1').value;
      var s2 = document.getElementById('customSecondary2').value;
      var s3 = document.getElementById('customSecondary3').value;
      var name = document.getElementById('customName').value.trim() || '自定义方案';

      var pScale = generateScale(p);
      var s1Scale = generateScale(s1);
      var s2Scale = generateScale(s2);
      var s3Scale = generateScale(s3);
      var grads = generateGradients(p, s1, s2, s3);

      applyScheme({
        id: '__custom_preview__',
        name: name,
        primary: pScale,
        secondary1: s1Scale,
        secondary2: s2Scale,
        secondary3: s3Scale,
        gradients: grads
      });
    });

    // 保存自定义方案
    saveBtn.addEventListener('click', function () {
      var p = document.getElementById('customPrimary').value;
      var s1 = document.getElementById('customSecondary1').value;
      var s2 = document.getElementById('customSecondary2').value;
      var s3 = document.getElementById('customSecondary3').value;
      var name = document.getElementById('customName').value.trim();
      if (!name) {
        document.getElementById('customName').focus();
        document.getElementById('customName').style.borderColor = 'var(--color-error-500)';
        setTimeout(function () {
          document.getElementById('customName').style.borderColor = '';
        }, 1500);
        return;
      }

      var id = 'custom-' + Date.now();
      var pScale = generateScale(p);
      var s1Scale = generateScale(s1);
      var s2Scale = generateScale(s2);
      var s3Scale = generateScale(s3);
      var grads = generateGradients(p, s1, s2, s3);

      var scheme = {
        id: id,
        name: name,
        nameEn: 'Custom',
        desc: '用户自定义方案 — ' + p.toUpperCase() + ' / ' + s1.toUpperCase() + ' / ' + s2.toUpperCase() + ' / ' + s3.toUpperCase(),
        primary: pScale,
        secondary1: s1Scale,
        secondary2: s2Scale,
        secondary3: s3Scale,
        gradients: grads
      };

      customSchemes.push(scheme);
      saveCustomToStorage();
      renderSchemeGrid();
      renderCustomSavedList();
      applyScheme(scheme);
    });

    // 重置
    resetBtn.addEventListener('click', function () {
      document.getElementById('customPrimary').value = '#1A7FA0';
      document.getElementById('customPrimaryHex').value = '#1A7FA0';
      document.getElementById('customSecondary1').value = '#D4A654';
      document.getElementById('customSecondary1Hex').value = '#D4A654';
      document.getElementById('customSecondary2').value = '#6FB4CE';
      document.getElementById('customSecondary2Hex').value = '#6FB4CE';
      document.getElementById('customSecondary3').value = '#E8644A';
      document.getElementById('customSecondary3Hex').value = '#E8644A';
      document.getElementById('customName').value = '';
      document.getElementById('previewPrimary').style.background = '#1A7FA0';
      document.getElementById('previewSecondary1').style.background = '#D4A654';
      document.getElementById('previewSecondary2').style.background = '#6FB4CE';
      document.getElementById('previewSecondary3').style.background = '#E8644A';

      // 恢复默认方案
      var defaultScheme = findSchemeById('ocean-deep');
      if (defaultScheme) applyScheme(defaultScheme);
    });
  }

  // ---- 已保存的自定义方案列表 ----
  function renderCustomSavedList() {
    var section = document.getElementById('customSavedSection');
    var list = document.getElementById('customSavedList');
    if (!section || !list) return;

    if (customSchemes.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    var html = '';
    customSchemes.forEach(function (scheme) {
      var isActive = scheme.id === currentSchemeId;
      html += '<div class="ds-custom-saved-item' + (isActive ? ' active' : '') + '" data-scheme-id="' + scheme.id + '">';
      html += '<div class="ds-custom-saved-dots">';
      html += '<div class="ds-custom-saved-dot" style="background:' + scheme.primary[500] + '"></div>';
      html += '<div class="ds-custom-saved-dot" style="background:' + scheme.secondary1[500] + '"></div>';
      html += '<div class="ds-custom-saved-dot" style="background:' + scheme.secondary2[500] + '"></div>';
      html += '<div class="ds-custom-saved-dot" style="background:' + scheme.secondary3[500] + '"></div>';
      html += '</div>';
      html += '<span>' + scheme.name + '</span>';
      html += '<span class="ds-custom-saved-delete" data-delete-id="' + scheme.id + '" title="删除">';
      html += '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      html += '</span>';
      html += '</div>';
    });

    list.innerHTML = html;

    // 绑定点击
    list.querySelectorAll('.ds-custom-saved-item').forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target.closest('.ds-custom-saved-delete')) return;
        var id = this.getAttribute('data-scheme-id');
        var scheme = findSchemeById(id);
        if (scheme) applyScheme(scheme);
      });
    });

    // 删除按钮
    list.querySelectorAll('.ds-custom-saved-delete').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = this.getAttribute('data-delete-id');
        customSchemes = customSchemes.filter(function (s) { return s.id !== id; });
        saveCustomToStorage();
        renderSchemeGrid();
        renderCustomSavedList();
        if (currentSchemeId === id) {
          var defaultScheme = findSchemeById('ocean-deep');
          if (defaultScheme) applyScheme(defaultScheme);
        }
      });
    });
  }

  // ---- 本地存储 ----
  function saveCustomToStorage() {
    try {
      localStorage.setItem('ds-custom-schemes', JSON.stringify(customSchemes));
    } catch (e) { /* ignore */ }
  }

  function loadCustomFromStorage() {
    try {
      var data = localStorage.getItem('ds-custom-schemes');
      if (data) customSchemes = JSON.parse(data);
    } catch (e) { /* ignore */ }
  }

  // ---- 初始化 ----
  function init() {
    loadCustomFromStorage();
    renderSchemeGrid();
    initCustomPanel();
    renderCustomSavedList();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
