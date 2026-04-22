/**
 * 小窑湾海钓产业园 设计系统
 * 插画配色联动 — Illustration Color Sync (SVG inline version)
 *
 * 工作原理：
 * 1. 通过 XHR 加载 SVG 文件内容并内联注入 DOM（替代 <img> 标签）
 * 2. 监听配色方案切换事件 ds-scheme-changed
 * 3. 根据预定义的颜色映射表，将 SVG 路径的 fill 属性替换为当前方案对应的色阶颜色
 * 4. 人物肤色（#F7A07A, #EEAC8F）不参与配色切换，始终保持原始颜色
 */

(function () {
  'use strict';

  var svgLoaded = false;

  // 颜色映射表：原始 SVG 填充色 → 方案色组 + 色阶级别
  // 未列入此表的填充色（如人物肤色）不会被修改
  var colorMap = {
    // ── 天空/氛围 → Primary ──
    '#2D3C76': { group: 'primary', level: '800' },
    '#29528B': { group: 'primary', level: '700' },
    '#286BA9': { group: 'primary', level: '600' },
    '#275D97': { group: 'primary', level: '700' },
    '#2586BF': { group: 'primary', level: '500' },
    '#2B7FB9': { group: 'primary', level: '500' },
    '#1C86CD': { group: 'primary', level: '500' },
    '#3C80AE': { group: 'primary', level: '600' },
    '#4D64A4': { group: 'primary', level: '700' },
    '#323255': { group: 'primary', level: '900' },
    '#6695C5': { group: 'primary', level: '400' },
    '#84ABD2': { group: 'primary', level: '300' },
    '#A6D1E2': { group: 'primary', level: '200' },
    '#BDDBEA': { group: 'primary', level: '100' },
    '#D4E8F2': { group: 'primary', level: '50' },
    '#CCADD4': { group: 'primary', level: '200' },
    '#998ABD': { group: 'primary', level: '300' },
    '#AB9FCF': { group: 'primary', level: '200' },
    '#7750D0': { group: 'primary', level: '600' },
    '#7551CF': { group: 'primary', level: '600' },

    // ── 水面/海洋 → Secondary1 ──
    '#52B3D9': { group: 'secondary1', level: '400' },
    '#7CABBE': { group: 'secondary1', level: '300' },
    '#86C2C7': { group: 'secondary1', level: '200' },
    '#A2D0D3': { group: 'secondary1', level: '100' },
    '#B3D1D8': { group: 'secondary1', level: '100' },
    '#97C4D0': { group: 'secondary1', level: '200' },
    '#539AA0': { group: 'secondary1', level: '500' },
    '#4EA3AC': { group: 'secondary1', level: '500' },
    '#EDFEFE': { group: 'secondary1', level: '50' },

    // ── 陆地/岩石/地面 → Secondary2 ──
    '#050508': { group: 'secondary2', level: '900' },
    '#352C44': { group: 'secondary2', level: '800' },
    '#412024': { group: 'secondary2', level: '700' },
    '#AD5725': { group: 'secondary2', level: '600' },
    '#BF6031': { group: 'secondary2', level: '500' },
    '#C78630': { group: 'secondary2', level: '400' },
    '#C68523': { group: 'secondary2', level: '400' },
    '#A65E4B': { group: 'secondary2', level: '500' },
    '#DBC19A': { group: 'secondary2', level: '200' },
    '#E1E2E2': { group: 'secondary2', level: '100' },
    '#FAFAFA': { group: 'secondary2', level: '50' },

    // ── 植被/鱼类/细节 → Secondary3 ──
    '#44D281': { group: 'secondary3', level: '400' },
    '#09B188': { group: 'secondary3', level: '500' },
    '#30C291': { group: 'secondary3', level: '400' },
    '#88E687': { group: 'secondary3', level: '300' },
    '#81CBAA': { group: 'secondary3', level: '300' },
    '#A9E0C6': { group: 'secondary3', level: '200' },
    '#E04A45': { group: 'secondary3', level: '600' },
    '#E76952': { group: 'secondary3', level: '500' },
    '#F67E6B': { group: 'secondary3', level: '400' },
    '#EC878A': { group: 'secondary3', level: '300' },
    '#F8518C': { group: 'secondary3', level: '500' },
    '#973C36': { group: 'secondary3', level: '700' },

    // ── 人物服饰/金色 → Secondary3 ──
    '#F0B73F': { group: 'secondary3', level: '400' },
    '#FAC626': { group: 'secondary3', level: '400' },
    '#F7B925': { group: 'secondary3', level: '400' },
    '#E5A132': { group: 'secondary3', level: '500' },
    '#ECB451': { group: 'secondary3', level: '400' },
    '#B77726': { group: 'secondary3', level: '600' }
  };

  /**
   * 通过 XHR 加载 SVG 文件并内联注入到 #fishingIllust 容器中
   * 替换原有的 <img> 标签，使 SVG 路径可直接被 DOM 操作
   */
  function loadSvg(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/fishing-illustration.svg', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        var container = document.getElementById('fishingIllust');
        if (container) {
          container.innerHTML = xhr.responseText;
          var svg = container.querySelector('svg');
          if (svg) {
            svg.style.width = '100%';
            svg.style.height = 'auto';
            svg.style.display = 'block';
            svg.style.borderRadius = '12px';
          }
          svgLoaded = true;
          if (callback) callback();
        }
      }
    };
    xhr.send();
  }

  /**
   * 根据配色方案更新插画中所有 SVG 路径的 fill 颜色
   * @param {Object} scheme - 配色方案对象，包含 primary/secondary1/secondary2/secondary3 色阶
   */
  function updateIllustration(scheme) {
    if (!svgLoaded) return;
    var container = document.getElementById('fishingIllust');
    if (!container) return;

    var paths = container.querySelectorAll('path[fill]');

    paths.forEach(function (path) {
      // 始终基于原始颜色查找映射（首次修改前缓存到 data-original-fill）
      var originalFill = path.getAttribute('data-original-fill');
      if (!originalFill) {
        originalFill = path.getAttribute('fill');
        if (originalFill) {
          path.setAttribute('data-original-fill', originalFill);
        }
      }
      if (!originalFill || !colorMap[originalFill]) return;

      var mapping = colorMap[originalFill];
      var colorGroup = scheme[mapping.group];
      if (!colorGroup || !colorGroup[mapping.level]) return;

      path.setAttribute('fill', colorGroup[mapping.level]);
    });

    // 更新底部方案名称与色标指示点
    var nameEl = document.getElementById('illustSchemeName');
    if (nameEl) nameEl.textContent = scheme.name || '自定义方案';

    var dotP = document.getElementById('illustDotP');
    var dotS1 = document.getElementById('illustDotS1');
    var dotS2 = document.getElementById('illustDotS2');
    var dotS3 = document.getElementById('illustDotS3');
    if (dotP && scheme.primary) dotP.style.background = scheme.primary[500];
    if (dotS1 && scheme.secondary1) dotS1.style.background = scheme.secondary1[500];
    if (dotS2 && scheme.secondary2) dotS2.style.background = scheme.secondary2[500];
    if (dotS3 && scheme.secondary3) dotS3.style.background = scheme.secondary3[500];
  }

  /**
   * 配色方案切换事件处理
   */
  function onSchemeChanged(e) {
    if (e.detail && e.detail.scheme) {
      updateIllustration(e.detail.scheme);
    }
  }

  /**
   * 初始化：监听事件、加载 SVG、应用默认配色
   */
  function init() {
    document.addEventListener('ds-scheme-changed', onSchemeChanged);

    loadSvg(function () {
      // SVG 加载完成后应用默认配色方案
      if (typeof DSColorSchemes !== 'undefined') {
        var scheme = null;
        for (var i = 0; i < DSColorSchemes.length; i++) {
          if (DSColorSchemes[i].id === 'ocean-deep') {
            scheme = DSColorSchemes[i];
            break;
          }
        }
        if (scheme) updateIllustration(scheme);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
