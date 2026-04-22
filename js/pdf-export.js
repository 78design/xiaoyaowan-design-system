/**
 * 小窑湾海钓产业园 设计系统
 * PDF 导出功能
 * 使用 jsPDF API 直接生成（html2canvas 截图 + jsPDF 分页）
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

    // 延迟执行，让按钮状态先更新
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
        alert('PDF 生成失败，请重试。');
      });
    }, 100);
  });

  function generatePdf() {
    return new Promise(function (resolve, reject) {
      // 获取当前方案信息
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

      // 获取当前 CSS 变量值
      var cs = getComputedStyle(document.documentElement);
      function cv(name) { return cs.getPropertyValue(name).trim(); }

      // 构建当前色值
      var p50 = cv('--color-primary-50');
      var p100 = cv('--color-primary-100');
      var p200 = cv('--color-primary-200');
      var p300 = cv('--color-primary-300');
      var p400 = cv('--color-primary-400');
      var p500 = cv('--color-primary-500');
      var p600 = cv('--color-primary-600');
      var p700 = cv('--color-primary-700');
      var p800 = cv('--color-primary-800');
      var p900 = cv('--color-primary-900');

      var s50 = cv('--color-secondary1-50');
      var s100 = cv('--color-secondary1-100');
      var s200 = cv('--color-secondary1-200');
      var s300 = cv('--color-secondary1-300');
      var s400 = cv('--color-secondary1-400');
      var s500 = cv('--color-secondary1-500');
      var s600 = cv('--color-secondary1-600');
      var s700 = cv('--color-secondary1-700');
      var s800 = cv('--color-secondary1-800');
      var s900 = cv('--color-secondary1-900');

      var s2_50 = cv('--color-secondary2-50');
      var s2_100 = cv('--color-secondary2-100');
      var s2_200 = cv('--color-secondary2-200');
      var s2_300 = cv('--color-secondary2-300');
      var s2_400 = cv('--color-secondary2-400');
      var s2_500 = cv('--color-secondary2-500');
      var s2_600 = cv('--color-secondary2-600');
      var s2_700 = cv('--color-secondary2-700');
      var s2_800 = cv('--color-secondary2-800');
      var s2_900 = cv('--color-secondary2-900');

      var s3_50 = cv('--color-secondary3-50');
      var s3_100 = cv('--color-secondary3-100');
      var s3_200 = cv('--color-secondary3-200');
      var s3_300 = cv('--color-secondary3-300');
      var s3_400 = cv('--color-secondary3-400');
      var s3_500 = cv('--color-secondary3-500');
      var s3_600 = cv('--color-secondary3-600');
      var s3_700 = cv('--color-secondary3-700');
      var s3_800 = cv('--color-secondary3-800');
      var s3_900 = cv('--color-secondary3-900');

      var now = new Date();
      var dateStr = now.getFullYear() + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + String(now.getDate()).padStart(2, '0');

      // 构建 PDF 内容容器
      // 关键：使用 opacity:0 + z-index:-1 而非 visibility:hidden
      // html2canvas 无法截取 visibility:hidden 的元素，但 opacity:0 的元素可以
      var container = document.createElement('div');
      container.id = 'ds-pdf-export';
      container.style.cssText = 'position:fixed;top:0;left:0;width:794px;padding:48px;font-family:"DM Sans","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;color:#2A2E3A;background:#fff;z-index:-1;opacity:0;pointer-events:none;';

      container.innerHTML = ''
        // 封面标题
        + '<div style="text-align:center;margin-bottom:48px;padding-bottom:32px;border-bottom:2px solid ' + p500 + ';">'
        + '  <div style="font-size:11px;font-weight:600;color:' + p500 + ';letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;">DESIGN SYSTEM</div>'
        + '  <h1 style="font-family:Georgia,serif;font-size:36px;font-weight:700;color:#1A1D26;line-height:1.2;margin-bottom:12px;">小窑湾海钓产业园</h1>'
        + '  <h2 style="font-size:20px;font-weight:400;color:#6B7285;margin-bottom:24px;">品牌设计系统规范</h2>'
        + '  <div style="display:inline-block;padding:6px 16px;border-radius:20px;background:' + p50 + ';font-size:12px;font-weight:600;color:' + p700 + ';">当前方案：' + schemeName + '</div>'
        + '  <div style="font-size:12px;color:#8A90A2;margin-top:16px;">导出日期：' + dateStr + ' · v1.0</div>'
        + '</div>'

        // 主色
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">主色 Primary</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">核心品牌色，传递专业、可靠、海洋原生感。</p>'
        + '  <table style="width:100%;border-collapse:collapse;font-size:11px;">'
        + '    <tr>' + swatchTd(p50, '50', p50) + swatchTd(p100, '100', p100) + swatchTd(p200, '200', p200) + swatchTd(p300, '300', p300) + swatchTd(p400, '400', p400) + swatchTd(p500, '500', p500) + '</tr>'
        + '    <tr>' + swatchTd(p600, '600', p600) + swatchTd(p700, '700', p700) + swatchTd(p800, '800', p800) + swatchTd(p900, '900', p900) + '<td></td><td></td></tr>'
        + '  </table>'
        + '</div>'

        // 辅助色 1
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">辅助色 1 Secondary 1</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">温暖感点缀，用于次要操作和价格标注。</p>'
        + '  <table style="width:100%;border-collapse:collapse;font-size:11px;">'
        + '    <tr>' + swatchTd(s50, '50', s50) + swatchTd(s100, '100', s100) + swatchTd(s200, '200', s200) + swatchTd(s300, '300', s300) + swatchTd(s400, '400', s400) + swatchTd(s500, '500', s500) + '</tr>'
        + '    <tr>' + swatchTd(s600, '600', s600) + swatchTd(s700, '700', s700) + swatchTd(s800, '800', s800) + swatchTd(s900, '900', s900) + '<td></td><td></td></tr>'
        + '  </table>'
        + '</div>'

        // 辅助色 2
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">辅助色 2 Secondary 2</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">清新感辅助色，用于信息提示、图标点缀、数据可视化。</p>'
        + '  <table style="width:100%;border-collapse:collapse;font-size:11px;">'
        + '    <tr>' + swatchTd(s2_50, '50', s2_50) + swatchTd(s2_100, '100', s2_100) + swatchTd(s2_200, '200', s2_200) + swatchTd(s2_300, '300', s2_300) + swatchTd(s2_400, '400', s2_400) + swatchTd(s2_500, '500', s2_500) + '</tr>'
        + '    <tr>' + swatchTd(s2_600, '600', s2_600) + swatchTd(s2_700, '700', s2_700) + swatchTd(s2_800, '800', s2_800) + swatchTd(s2_900, '900', s2_900) + '<td></td><td></td></tr>'
        + '  </table>'
        + '</div>'

        // 辅助色 3
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">辅助色 3 Secondary 3</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">用于高亮标注、交互反馈、重要提醒等需要视觉突出的场景。</p>'
        + '  <table style="width:100%;border-collapse:collapse;font-size:11px;">'
        + '    <tr>' + swatchTd(s3_50, '50', s3_50) + swatchTd(s3_100, '100', s3_100) + swatchTd(s3_200, '200', s3_200) + swatchTd(s3_300, '300', s3_300) + swatchTd(s3_400, '400', s3_400) + swatchTd(s3_500, '500', s3_500) + '</tr>'
        + '    <tr>' + swatchTd(s3_600, '600', s3_600) + swatchTd(s3_700, '700', s3_700) + swatchTd(s3_800, '800', s3_800) + swatchTd(s3_900, '900', s3_900) + '<td></td><td></td></tr>'
        + '  </table>'
        + '</div>'

        // 渐变
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">渐变 Gradients</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">预设渐变组合，灵感来自小窑湾海域不同时段的光影变化。</p>'
        + '  <div style="display:flex;gap:12px;flex-wrap:wrap;">'
        + gradientBlock(cv('--gradient-ocean-dawn'), 'Ocean Dawn')
        + gradientBlock(cv('--gradient-ocean-deep'), 'Ocean Deep')
        + gradientBlock(cv('--gradient-ocean-sunset'), 'Ocean Sunset')
        + gradientBlock(cv('--gradient-ocean-surface'), 'Ocean Surface')
        + gradientBlock(cv('--gradient-gold-shimmer'), 'Gold Shimmer')
        + '  </div>'
        + '</div>'

        // 字体
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">字体排版 Typography</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">中英双语字体体系。</p>'
        + '  <div style="background:#F7F8FA;border-radius:8px;padding:20px;margin-bottom:12px;">'
        + '    <div style="font-size:10px;color:#8A90A2;margin-bottom:4px;">--font-display</div>'
        + '    <div style="font-family:Georgia,serif;font-size:28px;font-weight:700;color:#1A1D26;">Playfair Display 展示字体</div>'
        + '  </div>'
        + '  <div style="background:#F7F8FA;border-radius:8px;padding:20px;margin-bottom:12px;">'
        + '    <div style="font-size:10px;color:#8A90A2;margin-bottom:4px;">--font-heading / --font-body</div>'
        + '    <div style="font-size:22px;font-weight:600;color:#1A1D26;">DM Sans 界面字体</div>'
        + '  </div>'
        + '  <div style="background:#F7F8FA;border-radius:8px;padding:20px;">'
        + '    <div style="font-size:10px;color:#8A90A2;margin-bottom:4px;">--font-mono</div>'
        + '    <div style="font-family:Consolas,monospace;font-size:18px;font-weight:500;color:#1A1D26;">JetBrains Mono 等宽字体</div>'
        + '  </div>'
        + '</div>'

        // 间距
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">间距系统 Spacing</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">基于 4px 基准单位的间距系统。</p>'
        + '  <div style="display:flex;gap:8px;align-items:flex-end;">'
        + spacingBar(4, '4px', '--space-1')
        + spacingBar(8, '8px', '--space-2')
        + spacingBar(12, '12px', '--space-3')
        + spacingBar(16, '16px', '--space-4')
        + spacingBar(24, '24px', '--space-6')
        + spacingBar(32, '32px', '--space-8')
        + spacingBar(48, '48px', '--space-12')
        + spacingBar(64, '64px', '--space-16')
        + '  </div>'
        + '</div>'

        // 组件示例
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">组件示例 Components</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">基础组件在当前配色下的效果。</p>'
        + '  <div style="background:#F7F8FA;border-radius:8px;padding:24px;margin-bottom:12px;">'
        + '    <div style="font-size:10px;color:#8A90A2;margin-bottom:12px;text-transform:uppercase;letter-spacing:1px;">按钮 Buttons</div>'
        + '    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">'
        + '      <span style="display:inline-block;padding:8px 20px;background:' + p500 + ';color:#fff;border-radius:6px;font-size:13px;font-weight:600;">Primary 主要</span>'
        + '      <span style="display:inline-block;padding:8px 20px;background:' + s500 + ';color:#1A1D26;border-radius:6px;font-size:13px;font-weight:600;">Secondary 次要</span>'
        + '      <span style="display:inline-block;padding:8px 20px;border:2px solid ' + p500 + ';color:' + p500 + ';border-radius:6px;font-size:13px;font-weight:600;">Outline 描边</span>'
        + '      <span style="display:inline-block;padding:8px 20px;color:' + p500 + ';border-radius:6px;font-size:13px;font-weight:600;">Ghost 幽灵</span>'
        + '    </div>'
        + '  </div>'
        + '  <div style="background:#F7F8FA;border-radius:8px;padding:24px;margin-bottom:12px;">'
        + '    <div style="font-size:10px;color:#8A90A2;margin-bottom:12px;text-transform:uppercase;letter-spacing:1px;">标签 Badges</div>'
        + '    <div style="display:flex;gap:8px;flex-wrap:wrap;">'
        + '      <span style="display:inline-block;padding:3px 10px;background:' + p50 + ';color:' + p700 + ';border-radius:20px;font-size:11px;font-weight:600;">品牌色</span>'
        + '      <span style="display:inline-block;padding:3px 10px;background:' + s50 + ';color:' + s700 + ';border-radius:20px;font-size:11px;font-weight:600;">辅助色 1</span>'
        + '      <span style="display:inline-block;padding:3px 10px;background:' + s2_50 + ';color:' + s2_700 + ';border-radius:20px;font-size:11px;font-weight:600;">辅助色 2</span>'
        + '      <span style="display:inline-block;padding:3px 10px;background:' + s3_50 + ';color:' + s3_700 + ';border-radius:20px;font-size:11px;font-weight:600;">辅助色 3</span>'
        + '      <span style="display:inline-block;padding:3px 10px;background:#ECFDF5;color:#047857;border-radius:20px;font-size:11px;font-weight:600;">成功</span>'
        + '      <span style="display:inline-block;padding:3px 10px;background:#FEF2F2;color:#B91C1C;border-radius:20px;font-size:11px;font-weight:600;">错误</span>'
        + '    </div>'
        + '  </div>'
        + '  <div style="background:#F7F8FA;border-radius:8px;padding:24px;">'
        + '    <div style="font-size:10px;color:#8A90A2;margin-bottom:12px;text-transform:uppercase;letter-spacing:1px;">表单 Forms</div>'
        + '    <div style="margin-bottom:12px;">'
        + '      <div style="font-size:12px;font-weight:500;color:#3E4351;margin-bottom:4px;">输入框</div>'
        + '      <div style="padding:8px 12px;border:2px solid #D5D8E0;border-radius:6px;font-size:13px;color:#8A90A2;">请输入内容...</div>'
        + '    </div>'
        + '    <div style="display:flex;gap:16px;align-items:center;">'
        + '      <div style="width:20px;height:20px;border:2px solid ' + p500 + ';border-radius:4px;background:' + p500 + ';position:relative;"><div style="position:absolute;top:2px;left:6px;width:5px;height:10px;border:2px solid #fff;border-top:none;border-left:none;transform:rotate(45deg);"></div></div>'
        + '      <span style="font-size:13px;color:#3E4351;">复选框示例</span>'
        + '    </div>'
        + '  </div>'
        + '</div>'

        // 动效
        + '<div style="margin-bottom:40px;">'
        + '  <h3 style="font-size:16px;font-weight:700;color:#1A1D26;margin-bottom:4px;">动效规范 Motion</h3>'
        + '  <p style="font-size:12px;color:#6B7285;margin-bottom:16px;">借鉴海浪自然节律的动效设计。</p>'
        + '  <table style="width:100%;border-collapse:collapse;font-size:12px;">'
        + '    <tr style="background:#F7F8FA;"><th style="text-align:left;padding:8px 12px;font-weight:600;color:#3E4351;border-bottom:1px solid #ECEEF2;">时长</th><th style="text-align:left;padding:8px 12px;font-weight:600;color:#3E4351;border-bottom:1px solid #ECEEF2;">变量</th><th style="text-align:left;padding:8px 12px;font-weight:600;color:#3E4351;border-bottom:1px solid #ECEEF2;">适用场景</th></tr>'
        + '    <tr><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;">100ms</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;font-family:monospace;font-size:11px;">--duration-instant</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;color:#6B7285;">按钮按下、开关切换</td></tr>'
        + '    <tr style="background:#FAFAFA;"><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;">200ms</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;font-family:monospace;font-size:11px;">--duration-fast</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;color:#6B7285;">悬停态、焦点态、Tooltip</td></tr>'
        + '    <tr><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;">300ms</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;font-family:monospace;font-size:11px;">--duration-normal</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;color:#6B7285;">模态框、展开收起、标签页</td></tr>'
        + '    <tr style="background:#FAFAFA;"><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;">500ms</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;font-family:monospace;font-size:11px;">--duration-slow</td><td style="padding:8px 12px;border-bottom:1px solid #ECEEF2;color:#6B7285;">页面转场、内容区切换</td></tr>'
        + '    <tr><td style="padding:8px 12px;">1000ms</td><td style="padding:8px 12px;font-family:monospace;font-size:11px;">--duration-slowest</td><td style="padding:8px 12px;color:#6B7285;">装饰性动画</td></tr>'
        + '  </table>'
        + '</div>'

        // 页脚
        + '<div style="text-align:center;padding-top:24px;border-top:1px solid #ECEEF2;font-size:11px;color:#8A90A2;">'
        + '  小窑湾海钓产业园 · 品牌设计系统 v1.0 · ' + dateStr
        + '</div>';

      document.body.appendChild(container);

      // 等待 500ms 确保渲染完成后再截图
      setTimeout(function () {
        // 使用 html2canvas 直接截图（来自 html2pdf.bundle.min.js）
        var html2canvasLib = window.html2canvas;
        if (!html2canvasLib) {
          document.body.removeChild(container);
          reject(new Error('html2canvas 未加载'));
          return;
        }

        html2canvasLib(container, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          width: 794,
          windowWidth: 794
        }).then(function (canvas) {
          // 截图完成后立即移除容器
          document.body.removeChild(container);

          // 使用 jsPDF 直接创建 PDF（来自 html2pdf.bundle.min.js）
          var jsPDFConstructor = window.jspdf && window.jspdf.jsPDF;
          if (!jsPDFConstructor) {
            reject(new Error('jsPDF 未加载'));
            return;
          }

          var pdf = new jsPDFConstructor('p', 'mm', 'a4');

          var pageWidth = pdf.internal.pageSize.getWidth();
          var pageHeight = pdf.internal.pageSize.getHeight();
          var margin = 10;
          var contentWidth = pageWidth - margin * 2;
          var contentHeight = pageHeight - margin * 2;

          // 将 canvas 转为 JPEG 图片数据
          var imgData = canvas.toDataURL('image/jpeg', 0.95);
          var imgWidth = contentWidth;
          var imgHeight = (canvas.height * imgWidth) / canvas.width;

          // 计算需要多少页
          var heightLeft = imgHeight;
          var position = margin;

          // 第一页
          pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
          heightLeft -= contentHeight;

          // 如果内容超出第一页，添加更多页
          while (heightLeft > 0) {
            position = margin - (imgHeight - heightLeft);
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
            heightLeft -= contentHeight;
          }

          // 保存 PDF
          pdf.save('小窑湾海钓产业园-设计系统-' + schemeName.replace(/\s+/g, '-') + '.pdf');
          resolve();
        }).catch(function (err) {
          document.body.removeChild(container);
          reject(err);
        });
      }, 500);
    });
  }

  // ---- 辅助函数 ----

  function swatchTd(color, label, hex) {
    return '<td style="width:16.66%;vertical-align:top;padding:0;">'
      + '<div style="height:48px;background:' + color + ';border:1px solid #ECEEF2;"></div>'
      + '<div style="padding:4px 6px;font-size:10px;">'
      + '<div style="font-weight:600;color:#2A2E3A;">' + label + '</div>'
      + '<div style="font-family:monospace;color:#8A90A2;">' + hex + '</div>'
      + '</div></td>';
  }

  function gradientBlock(gradient, name) {
    return '<div style="flex:1;min-width:120px;">'
      + '<div style="height:72px;border-radius:8px;background:' + gradient + ';margin-bottom:6px;"></div>'
      + '<div style="font-size:11px;font-weight:600;color:#2A2E3A;">' + name + '</div>'
      + '</div>';
  }

  function spacingBar(height, label, token) {
    return '<div style="text-align:center;">'
      + '<div style="width:32px;height:' + height + 'px;background:' + getComputedStyle(document.documentElement).getPropertyValue('--gradient-ocean-surface').trim() + ';border-radius:4px;margin:0 auto 4px;"></div>'
      + '<div style="font-size:9px;color:#545A6B;font-weight:600;">' + label + '</div>'
      + '</div>';
  }

})();
