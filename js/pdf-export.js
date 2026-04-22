/**
 * 小窑湾海钓产业园 设计系统
 * PDF 导出功能 — html2canvas 截图 + jsPDF 多页拼接
 */

(function () {
  'use strict';

  // ---- 「浏览设计规范」按钮 → 滚动到色彩系统 ----
  var btnBrowse = document.getElementById('btnBrowseSpecs');
  if (btnBrowse) {
    btnBrowse.addEventListener('click', function () {
      var colorsSection = document.getElementById('colors');
      if (colorsSection) {
        colorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ---- PDF 下载按钮 ----
  var btnPdf = document.getElementById('btnDownloadPdf');
  if (!btnPdf) return;

  btnPdf.addEventListener('click', function () {
    var btn = this;
    var originalText = btn.innerHTML;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:ds-spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> 正在生成 PDF...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(function () {
      generatePdf().then(function () {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
      }).catch(function (err) {
        console.error('PDF 生成失败:', err);
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        alert('PDF 生成失败: ' + err.message);
      });
    }, 100);
  });

  // ============================================
  // PDF 生成
  // ============================================
  function generatePdf() {
    return new Promise(function (resolve, reject) {
      var jsPDFConstructor = window.jspdf && window.jspdf.jsPDF;
      if (!jsPDFConstructor) jsPDFConstructor = window.jsPDF;
      if (!jsPDFConstructor) { reject(new Error('jsPDF 未加载')); return; }
      if (!window.html2canvas) { reject(new Error('html2canvas 未加载')); return; }

      // 获取当前配色
      var cs = getComputedStyle(document.documentElement);
      function cv(n) { return cs.getPropertyValue(n).trim(); }

      var schemeName = '深海蓝 Ocean Deep';
      if (typeof DSColorSchemes !== 'undefined') {
        var activeCard = document.querySelector('.ds-scheme-card.active');
        if (activeCard) {
          var id = activeCard.getAttribute('data-scheme-id');
          for (var i = 0; i < DSColorSchemes.length; i++) {
            if (DSColorSchemes[i].id === id) {
              schemeName = DSColorSchemes[i].name + ' ' + DSColorSchemes[i].nameEn;
              break;
            }
          }
        }
      }

      var p = {}, s1 = {}, s2 = {}, s3 = {};
      ['50','100','200','300','400','500','600','700','800','900'].forEach(function(lv) {
        p[lv]  = cv('--color-primary-' + lv);
        s1[lv] = cv('--color-secondary1-' + lv);
        s2[lv] = cv('--color-secondary2-' + lv);
        s3[lv] = cv('--color-secondary3-' + lv);
      });

      var now = new Date();
      var dateStr = now.getFullYear() + '.' + String(now.getMonth()+1).padStart(2,'0') + '.' + String(now.getDate()).padStart(2,'0');

      // 构建 PDF 内容
      var container = document.createElement('div');
      container.id = 'ds-pdf-export';
      // 关键：position:fixed + top:0 + left:0 让元素在视口内，但用 z-index:-1 和 opacity:0 隐藏
      // html2canvas 的 onclone 会在克隆的 DOM 中设置 opacity:1
      container.style.cssText = 'position:fixed;top:0;left:0;width:794px;padding:48px 56px;font-family:"DM Sans","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;color:#2A2E3A;background:#fff;z-index:-1;opacity:0;pointer-events:none;overflow:visible;';

      container.innerHTML = buildPdfContent(schemeName, dateStr, p, s1, s2, s3, cv);
      document.body.appendChild(container);

      // 等待渲染
      setTimeout(function () {
        window.html2canvas(container, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          width: 794,
          windowWidth: 794,
          scrollX: 0,
          scrollY: 0,
          onclone: function (clonedDoc) {
            // 在克隆的文档中让容器可见
            var cloned = clonedDoc.getElementById('ds-pdf-export');
            if (cloned) {
              cloned.style.opacity = '1';
              cloned.style.zIndex = '99999';
            }
          }
        }).then(function (canvas) {
          document.body.removeChild(container);

          var pdf = new jsPDFConstructor('p', 'mm', 'a4');
          var pageWidth = pdf.internal.pageSize.getWidth();
          var pageHeight = pdf.internal.pageSize.getHeight();
          var margin = 10;
          var contentWidth = pageWidth - margin * 2;

          var imgData = canvas.toDataURL('image/jpeg', 0.92);
          var imgWidth = contentWidth;
          var imgHeight = (canvas.height * imgWidth) / canvas.width;

          var heightLeft = imgHeight;
          var position = margin;

          // 第一页
          pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
          heightLeft -= (pageHeight - margin * 2);

          // 后续页
          while (heightLeft > 0) {
            position = heightLeft - imgHeight + margin;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
            heightLeft -= (pageHeight - margin * 2);
          }

          pdf.save('小窑湾海钓产业园-设计系统-' + schemeName.replace(/\s+/g, '-') + '.pdf');
          resolve();
        }).catch(function (err) {
          if (document.body.contains(container)) document.body.removeChild(container);
          reject(err);
        });
      }, 800);
    });
  }

  // ============================================
  // 构建 PDF HTML 内容
  // ============================================
  function buildPdfContent(schemeName, dateStr, p, s1, s2, s3, cv) {
    var html = '';

    // ---- 封面 ----
    html += '<div style="text-align:center;padding:60px 0 40px;">';
    html += '<div style="font-size:10px;font-weight:600;color:' + p[500] + ';letter-spacing:2px;margin-bottom:12px;">DESIGN SYSTEM</div>';
    html += '<h1 style="font-size:32px;font-weight:700;color:#1A1D26;margin:0 0 8px;">小窑湾海钓产业园</h1>';
    html += '<h2 style="font-size:20px;font-weight:400;color:#6B7285;margin:0 0 24px;">XiaoYaoWan Sea Fishing Park</h2>';
    html += '<div style="display:inline-block;padding:8px 20px;background:' + p[50] + ';border-radius:20px;font-size:12px;font-weight:600;color:' + p[700] + ';">配色方案：' + schemeName + '</div>';
    html += '<div style="margin-top:16px;font-size:12px;color:#8A90A2;">' + dateStr + '  v1.0</div>';
    html += '</div>';

    // 分隔线
    html += '<hr style="border:none;border-top:2px solid ' + p[500] + ';margin:24px 0;">';

    // ---- 主色 ----
    html += buildColorSection('主色 Primary', 'Core brand color — 核心品牌色，用于主要操作和关键信息', p);

    // ---- 辅助色 1 ----
    html += buildColorSection('辅助色 1 Secondary 1', 'Main supporting color (25%) — 主要辅助色，用于次要操作和背景', s1);

    // ---- 辅助色 2 ----
    html += buildColorSection('辅助色 2 Secondary 2', 'Secondary supporting color (15%) — 次要辅助色，用于细节和纹理', s2);

    // ---- 辅助色 3 ----
    html += buildColorSection('辅助色 3 Secondary 3', 'Accent color (5%) — 点缀色，用于高亮和强调', s3);

    // ---- 配色比例 ----
    html += '<div style="margin-top:32px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 8px;">配色比例 Color Ratio</h3>';
    html += '<p style="font-size:11px;color:#6B7285;margin:0 0 16px;">四色体系的视觉权重分布</p>';
    html += '<div style="display:flex;height:32px;border-radius:6px;overflow:hidden;">';
    html += '<div style="flex:12;background:' + p[500] + ';display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:600;">主色 60%</div>';
    html += '<div style="flex:5;background:' + s1[500] + ';display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:600;">辅1 25%</div>';
    html += '<div style="flex:3;background:' + s2[500] + ';"></div>';
    html += '<div style="flex:1;background:' + s3[500] + ';"></div>';
    html += '</div>';
    html += '<div style="display:flex;justify-content:space-between;margin-top:8px;font-size:9px;color:#6B7285;">';
    html += '<span>主色 60%</span><span>辅助色1 25%</span><span>辅助色2 15%</span><span>辅助色3 5%</span>';
    html += '</div>';
    html += '</div>';

    // ---- 使用规范 ----
    html += '<div style="margin-top:32px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 16px;">使用规范 Usage Guidelines</h3>';

    var guidelines = [
      { name: '主色 Primary', pct: '60%', color: p[500], desc: '核心品牌元素、主导航、主要按钮、关键信息。占页面色彩面积的主体。' },
      { name: '辅助色 1 Secondary 1', pct: '25%', color: s1[500], desc: '次要背景、卡片表面、次要按钮、价格标签等辅助性元素。' },
      { name: '辅助色 2 Secondary 2', pct: '15%', color: s2[500], desc: '细节装饰、图标、数据可视化、边框、分割线等。' },
      { name: '辅助色 3 Secondary 3', pct: '5%', color: s3[500], desc: 'CTA 按钮、警示信息、高亮标注、重要徽章。克制使用。' }
    ];

    guidelines.forEach(function (g) {
      html += '<div style="display:flex;align-items:flex-start;margin-bottom:12px;">';
      html += '<div style="width:12px;height:12px;border-radius:50%;background:' + g.color + ';margin-right:12px;margin-top:2px;flex-shrink:0;"></div>';
      html += '<div>';
      html += '<div style="font-size:12px;font-weight:600;color:#2A2E3A;">' + g.name + ' (' + g.pct + ')</div>';
      html += '<div style="font-size:10px;color:#6B7285;margin-top:2px;">' + g.desc + '</div>';
      html += '</div></div>';
    });
    html += '</div>';

    // ---- 排版规范 ----
    html += '<div style="margin-top:32px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 8px;">排版规范 Typography</h3>';
    html += '<p style="font-size:11px;color:#6B7285;margin:0 0 16px;">字体层级与间距系统</p>';

    // 标题层级
    var typeStyles = [
      { name: 'H1 页面标题', size: '32px', weight: '700', usage: '页面主标题' },
      { name: 'H2 章节标题', size: '24px', weight: '600', usage: '章节标题' },
      { name: 'H3 小节标题', size: '18px', weight: '600', usage: '小节标题' },
      { name: 'Body 正文', size: '14px', weight: '400', usage: '正文内容' },
      { name: 'Caption 说明', size: '12px', weight: '400', usage: '辅助说明' }
    ];

    html += '<table style="width:100%;border-collapse:collapse;font-size:11px;">';
    html += '<tr style="background:#F5F7FA;"><th style="padding:8px;text-align:left;border-bottom:1px solid #E2E8F0;">样式</th><th style="padding:8px;text-align:left;border-bottom:1px solid #E2E8F0;">字号</th><th style="padding:8px;text-align:left;border-bottom:1px solid #E2E8F0;">字重</th><th style="padding:8px;text-align:left;border-bottom:1px solid #E2E8F0;">用途</th></tr>';
    typeStyles.forEach(function (t) {
      html += '<tr><td style="padding:8px;border-bottom:1px solid #ECEEF2;">' + t.name + '</td><td style="padding:8px;border-bottom:1px solid #ECEEF2;">' + t.size + '</td><td style="padding:8px;border-bottom:1px solid #ECEEF2;">' + t.weight + '</td><td style="padding:8px;border-bottom:1px solid #ECEEF2;">' + t.usage + '</td></tr>';
    });
    html += '</table>';
    html += '</div>';

    // ---- 间距系统 ----
    html += '<div style="margin-top:32px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 8px;">间距系统 Spacing</h3>';
    html += '<p style="font-size:11px;color:#6B7285;margin:0 0 16px;">基于 4px 基础单位的间距体系</p>';

    var spaces = [
      { token: '--space-1', value: '4px', usage: '紧凑间距' },
      { token: '--space-2', value: '8px', usage: '元素内间距' },
      { token: '--space-3', value: '12px', usage: '小组件间距' },
      { token: '--space-4', value: '16px', usage: '标准间距' },
      { token: '--space-5', value: '20px', usage: '段落间距' },
      { token: '--space-6', value: '24px', usage: '卡片内边距' },
      { token: '--space-8', value: '32px', usage: '章节间距' },
      { token: '--space-10', value: '40px', usage: '大区块间距' }
    ];

    html += '<div style="display:flex;flex-wrap:wrap;gap:12px;">';
    spaces.forEach(function (s) {
      html += '<div style="width:calc(25% - 9px);background:#F5F7FA;border-radius:8px;padding:12px;text-align:center;">';
      html += '<div style="font-size:10px;font-weight:600;color:#2A2E3A;">' + s.token + '</div>';
      html += '<div style="font-size:16px;font-weight:700;color:' + p[500] + ';margin:4px 0;">' + s.value + '</div>';
      html += '<div style="font-size:9px;color:#6B7285;">' + s.usage + '</div>';
      html += '</div>';
    });
    html += '</div></div>';

    // ---- 圆角系统 ----
    html += '<div style="margin-top:32px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 8px;">圆角系统 Border Radius</h3>';
    html += '<p style="font-size:11px;color:#6B7285;margin:0 0 16px;">统一的圆角层级</p>';

    var radii = [
      { token: '--radius-sm', value: '4px', usage: '小型元素' },
      { token: '--radius-md', value: '8px', usage: '按钮、输入框' },
      { token: '--radius-lg', value: '12px', usage: '卡片' },
      { token: '--radius-xl', value: '16px', usage: '大型容器' },
      { token: '--radius-full', value: '9999px', usage: '圆形/药丸' }
    ];

    html += '<div style="display:flex;gap:16px;">';
    radii.forEach(function (r) {
      html += '<div style="flex:1;text-align:center;">';
      html += '<div style="width:48px;height:48px;background:' + p[100] + ';border:2px solid ' + p[300] + ';border-radius:' + (r.value === '9999px' ? '50%' : r.value) + ';margin:0 auto 8px;"></div>';
      html += '<div style="font-size:9px;font-weight:600;color:#2A2E3A;">' + r.token + '</div>';
      html += '<div style="font-size:8px;color:#6B7285;">' + r.value + '</div>';
      html += '</div>';
    });
    html += '</div></div>';

    // ---- 阴影系统 ----
    html += '<div style="margin-top:32px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 8px;">阴影系统 Shadows</h3>';
    html += '<p style="font-size:11px;color:#6B7285;margin:0 0 16px;">层级分明的阴影体系</p>';

    var shadows = [
      { name: 'sm', css: '0 1px 2px rgba(0,0,0,0.05)', usage: '轻微浮起' },
      { name: 'md', css: '0 4px 6px rgba(0,0,0,0.07)', usage: '卡片' },
      { name: 'lg', css: '0 10px 15px rgba(0,0,0,0.1)', usage: '弹窗' },
      { name: 'xl', css: '0 20px 25px rgba(0,0,0,0.15)', usage: '模态框' }
    ];

    html += '<div style="display:flex;gap:24px;">';
    shadows.forEach(function (s) {
      html += '<div style="flex:1;text-align:center;">';
      html += '<div style="width:60px;height:40px;background:#fff;border-radius:8px;box-shadow:' + s.css + ';margin:0 auto 8px;"></div>';
      html += '<div style="font-size:9px;font-weight:600;color:#2A2E3A;">--shadow-' + s.name + '</div>';
      html += '<div style="font-size:8px;color:#6B7285;">' + s.usage + '</div>';
      html += '</div>';
    });
    html += '</div></div>';

    // ---- 动效系统 ----
    html += '<div style="margin-top:32px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 8px;">动效系统 Motion</h3>';
    html += '<p style="font-size:11px;color:#6B7285;margin:0 0 16px;">统一的过渡与缓动曲线</p>';

    var motions = [
      { token: '--duration-fast', value: '150ms', usage: '微交互' },
      { token: '--duration-normal', value: '250ms', usage: '标准过渡' },
      { token: '--duration-slow', value: '400ms', usage: '复杂动画' },
      { token: '--ease-default', value: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: '默认缓动' },
      { token: '--ease-bounce', value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', usage: '弹性缓动' }
    ];

    html += '<table style="width:100%;border-collapse:collapse;font-size:10px;">';
    html += '<tr style="background:#F5F7FA;"><th style="padding:6px;text-align:left;border-bottom:1px solid #E2E8F0;">变量</th><th style="padding:6px;text-align:left;border-bottom:1px solid #E2E8F0;">值</th><th style="padding:6px;text-align:left;border-bottom:1px solid #E2E8F0;">用途</th></tr>';
    motions.forEach(function (m) {
      html += '<tr><td style="padding:6px;border-bottom:1px solid #ECEEF2;font-family:monospace;">' + m.token + '</td><td style="padding:6px;border-bottom:1px solid #ECEEF2;font-family:monospace;">' + m.value + '</td><td style="padding:6px;border-bottom:1px solid #ECEEF2;">' + m.usage + '</td></tr>';
    });
    html += '</table></div>';

    // ---- 页脚 ----
    html += '<div style="margin-top:48px;padding-top:16px;border-top:1px solid #ECEEF2;text-align:center;">';
    html += '<div style="font-size:10px;color:#8A90A2;">小窑湾海钓产业园 XiaoYaoWan Sea Fishing Park  |  品牌设计系统 v1.0  |  ' + dateStr + '</div>';
    html += '</div>';

    return html;
  }

  // ============================================
  // 构建色阶区块
  // ============================================
  function buildColorSection(title, subtitle, colors) {
    var html = '<div style="margin-top:24px;">';
    html += '<h3 style="font-size:16px;font-weight:600;color:#1A1D26;margin:0 0 4px;">' + title + '</h3>';
    html += '<p style="font-size:11px;color:#6B7285;margin:0 0 12px;">' + subtitle + '</p>';

    // 第一行 50-500
    html += '<div style="display:flex;gap:4px;margin-bottom:4px;">';
    ['50','100','200','300','400','500'].forEach(function (lv) {
      html += '<div style="flex:1;">';
      html += '<div style="height:48px;background:' + colors[lv] + ';border-radius:4px;"></div>';
      html += '<div style="font-size:8px;font-weight:600;color:#2A2E3A;margin-top:4px;">' + lv + '</div>';
      html += '<div style="font-size:7px;color:#6B7285;">' + colors[lv] + '</div>';
      html += '</div>';
    });
    html += '</div>';

    // 第二行 600-900
    html += '<div style="display:flex;gap:4px;">';
    ['600','700','800','900'].forEach(function (lv) {
      html += '<div style="flex:1;">';
      html += '<div style="height:48px;background:' + colors[lv] + ';border-radius:4px;"></div>';
      html += '<div style="font-size:8px;font-weight:600;color:#2A2E3A;margin-top:4px;">' + lv + '</div>';
      html += '<div style="font-size:7px;color:#6B7285;">' + colors[lv] + '</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '</div>';
    return html;
  }

})();
