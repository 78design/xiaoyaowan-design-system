/**
 * 小窑湾海钓产业园 设计系统
 * PDF 导出功能 — 纯 jsPDF API 实现（不依赖 html2canvas 截图）
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
      try {
        generatePdf();
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
      } catch (err) {
        console.error('PDF 生成失败:', err);
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        alert('PDF 生成失败: ' + err.message);
      }
    }, 100);
  });

  // ============================================
  // 纯 jsPDF API 生成 PDF
  // ============================================
  function generatePdf() {
    var jsPDFConstructor = window.jspdf && window.jspdf.jsPDF;
    if (!jsPDFConstructor) throw new Error('jsPDF 未加载');

    var pdf = new jsPDFConstructor('p', 'mm', 'a4');
    var pw = pdf.internal.pageSize.getWidth();   // 210
    var ph = pdf.internal.pageSize.getHeight();  // 297
    var ml = 15, mr = 15, mt = 15, mb = 20;
    var cw = pw - ml - mr; // content width

    // ---- 获取当前配色 ----
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

    var y = mt; // 当前 y 坐标

    // ---- 辅助函数 ----
    function checkPage(need) {
      if (y + need > ph - mb) {
        pdf.addPage();
        y = mt;
      }
    }

    function drawColorBar(x, w, h, hex) {
      pdf.setFillColor(hex);
      pdf.rect(x, y, w, h, 'F');
    }

    function drawText(text, x, size, color, style) {
      pdf.setFontSize(size);
      if (style === 'bold') pdf.setFont('helvetica', 'bold');
      else pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(color);
      pdf.text(text, x, y);
    }

    // ---- 封面 ----
    // 标题
    y += 30;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(p[500]);
    pdf.text('DESIGN SYSTEM', pw / 2, y, { align: 'center' });

    y += 14;
    pdf.setFontSize(28);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor('#1A1D26');
    // 中文用内置字体可能显示不了，用英文兜底
    pdf.text('XiaoYaoWan', pw / 2, y, { align: 'center' });

    y += 10;
    pdf.setFontSize(28);
    pdf.text('Sea Fishing Park', pw / 2, y, { align: 'center' });

    y += 12;
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor('#6B7285');
    pdf.text('Brand Design System', pw / 2, y, { align: 'center' });

    y += 14;
    // 方案标签
    var tagW = pdf.getTextWidth('Scheme: ' + schemeName) + 16;
    pdf.setFillColor(p[50]);
    pdf.roundedRect(pw / 2 - tagW / 2, y - 5, tagW, 10, 5, 5, 'F');
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(p[700]);
    pdf.text('Scheme: ' + schemeName, pw / 2, y + 1.5, { align: 'center' });

    y += 14;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor('#8A90A2');
    pdf.text(dateStr + '  v1.0', pw / 2, y, { align: 'center' });

    // 分隔线
    y += 8;
    pdf.setDrawColor(p[500]);
    pdf.setLineWidth(0.8);
    pdf.line(ml, y, pw - mr, y);

    // ---- 色阶绘制函数 ----
    function drawColorScale(title, subtitle, colors) {
      y += 14;
      checkPage(60);

      // 标题
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor('#1A1D26');
      pdf.text(title, ml, y);

      y += 6;
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor('#6B7285');
      pdf.text(subtitle, ml, y);

      y += 8;

      // 色块 — 第一行 50-500
      var barH = 20;
      var barW = (cw - 5) / 6;
      var levels = ['50','100','200','300','400','500'];
      for (var i = 0; i < 6; i++) {
        var bx = ml + i * (barW + 1);
        drawColorBar(bx, barW, barH, colors[levels[i]]);
        // 标签
        pdf.setFontSize(7);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor('#2A2E3A');
        pdf.text(levels[i], bx + 2, y + barH + 4);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor('#8A90A2');
        pdf.text(colors[levels[i]], bx + 2, y + barH + 7.5);
      }

      y += barH + 12;

      // 色块 — 第二行 600-900
      var levels2 = ['600','700','800','900'];
      barW = (cw - 3) / 4;
      for (var j = 0; j < 4; j++) {
        var bx2 = ml + j * (barW + 1);
        drawColorBar(bx2, barW, barH, colors[levels2[j]]);
        pdf.setFontSize(7);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor('#2A2E3A');
        pdf.text(levels2[j], bx2 + 2, y + barH + 4);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor('#8A90A2');
        pdf.text(colors[levels2[j]], bx2 + 2, y + barH + 7.5);
      }

      y += barH + 12;
    }

    // ---- 主色 ----
    drawColorScale('Primary', 'Core brand color', p);

    // ---- 辅助色 1 ----
    checkPage(60);
    drawColorScale('Secondary 1', 'Main supporting color (25%)', s1);

    // ---- 辅助色 2 ----
    checkPage(60);
    drawColorScale('Secondary 2', 'Secondary supporting color (15%)', s2);

    // ---- 辅助色 3 ----
    checkPage(60);
    drawColorScale('Secondary 3', 'Accent color (5%)', s3);

    // ---- 渐变预览 ----
    y += 6;
    checkPage(40);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor('#1A1D26');
    pdf.text('Gradients', ml, y);
    y += 6;
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor('#6B7285');
    pdf.text('Preset gradient combinations inspired by the sea.', ml, y);
    y += 8;

    var gradients = [
      { name: 'Ocean Dawn',    color: cv('--gradient-ocean-dawn') },
      { name: 'Ocean Deep',    color: cv('--gradient-ocean-deep') },
      { name: 'Ocean Sunset',  color: cv('--gradient-ocean-sunset') },
      { name: 'Ocean Surface', color: cv('--gradient-ocean-surface') },
      { name: 'Gold Shimmer',  color: cv('--gradient-gold-shimmer') }
    ];

    var gw = (cw - 8) / 5;
    var gh = 28;
    gradients.forEach(function(g, idx) {
      var gx = ml + idx * (gw + 2);
      // jsPDF 不支持 CSS 渐变，用纯色块代替
      pdf.setFillColor(p[500]);
      pdf.roundedRect(gx, y, gw, gh, 2, 2, 'F');
      pdf.setFontSize(7);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor('#2A2E3A');
      pdf.text(g.name, gx + gw / 2, y + gh + 4, { align: 'center' });
    });
    y += gh + 10;

    // ---- 配色比例 ----
    checkPage(30);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor('#1A1D26');
    pdf.text('Color Ratio', ml, y);
    y += 6;
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor('#6B7285');
    pdf.text('Visual weight distribution of the 4-color system.', ml, y);
    y += 8;

    var ratioH = 16;
    var ratioY = y;
    // Primary 60%
    pdf.setFillColor(p[500]);
    pdf.rect(ml, ratioY, cw * 0.6, ratioH, 'F');
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor('#ffffff');
    pdf.text('Primary 60%', ml + 4, ratioY + ratioH / 2 + 1);

    // Secondary1 25%
    pdf.setFillColor(s1[500]);
    pdf.rect(ml + cw * 0.6, ratioY, cw * 0.25, ratioH, 'F');
    pdf.text('S1 25%', ml + cw * 0.6 + 3, ratioY + ratioH / 2 + 1);

    // Secondary2 15%
    pdf.setFillColor(s2[500]);
    pdf.rect(ml + cw * 0.85, ratioY, cw * 0.10, ratioH, 'F');

    // Secondary3 5%
    pdf.setFillColor(s3[500]);
    pdf.rect(ml + cw * 0.95, ratioY, cw * 0.05, ratioH, 'F');

    y += ratioH + 6;
    // 图例
    pdf.setFontSize(7);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor('#6B7285');
    pdf.text('Primary (60%)  |  Secondary 1 (25%)  |  Secondary 2 (15%)  |  Secondary 3 (5%)', ml, y);
    y += 10;

    // ---- 使用规范 ----
    checkPage(50);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor('#1A1D26');
    pdf.text('Usage Guidelines', ml, y);
    y += 8;

    var guidelines = [
      ['Primary',     '60%', 'Core brand elements, main navigation, primary buttons, key information.'],
      ['Secondary 1', '25%', 'Secondary backgrounds, card surfaces, secondary buttons, price tags.'],
      ['Secondary 2', '15%', 'Subtle details, icons, data visualization, borders, dividers.'],
      ['Secondary 3', '5%',  'CTAs, alerts, highlights, important badges. Use sparingly.']
    ];

    guidelines.forEach(function(g) {
      checkPage(16);
      // 色点
      var dotColors = [p[500], s1[500], s2[500], s3[500]];
      var idx = guidelines.indexOf(g);
      pdf.setFillColor(dotColors[idx]);
      pdf.circle(ml + 2, y - 1.5, 2, 'F');

      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor('#2A2E3A');
      pdf.text(g[0] + '  (' + g[1] + ')', ml + 7, y);

      y += 4;
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor('#6B7285');
      pdf.text(g[2], ml + 7, y);
      y += 8;
    });

    // ---- 页脚 ----
    checkPage(20);
    y += 4;
    pdf.setDrawColor('#ECEEF2');
    pdf.setLineWidth(0.3);
    pdf.line(ml, y, pw - mr, y);
    y += 6;
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor('#8A90A2');
    pdf.text('XiaoYaoWan Sea Fishing Park  |  Brand Design System v1.0  |  ' + dateStr, pw / 2, y, { align: 'center' });

    // ---- 保存 ----
    pdf.save('XiaoYaoWan-Design-System-' + schemeName.replace(/\s+/g, '-') + '.pdf');
  }

})();
