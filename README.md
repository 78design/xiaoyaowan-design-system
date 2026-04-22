# 小窑湾海钓产业园 · 品牌设计系统 v1.0

## 概述

这是一套为小窑湾海钓产业园打造的专业设计系统（Design System），涵盖色彩、字体、间距、组件库与动效规范，服务于园区导览、品牌宣传、线下物料等多场景应用。

## 项目定位

- **项目名称**：小窑湾海钓产业园
- **位置**：大连市金普新区小窑湾国际商务区南端海岸
- **核心定位**：综合文旅型海钓产业园区
- **总投资**：约 3 亿元
- **占地面积**：近 6 万平方米
- **目标受众**：家庭游客、海钓爱好者、企业团建客户

## 设计系统结构

```
xiaoyaowan-design-system/
├── index.html              # 交互式设计系统文档（主入口）
├── css/
│   ├── tokens.css          # 设计令牌（色彩、字体、间距等）
│   ├── base.css            # 基础样式重置
│   ├── layout.css          # 布局框架
│   ├── components.css      # 基础组件样式
│   ├── animations.css      # 动效规范
│   ├── motion-demo.css     # 动效演示动画
│   └── sections.css        # 各章节专用样式
├── js/
│   └── main.js             # 交互脚本
└── README.md               # 本文件
```

## 快速开始

### 浏览设计系统

直接在浏览器中打开 `index.html` 文件即可查看完整的交互式设计系统文档。

### 在项目中使用

#### 1. 引入样式文件

```html
<!-- 引入设计令牌 -->
<link rel="stylesheet" href="css/tokens.css">

<!-- 引入基础样式 -->
<link rel="stylesheet" href="css/base.css">

<!-- 引入组件样式（按需引入） -->
<link rel="stylesheet" href="css/components.css">

<!-- 引入动效样式（按需引入） -->
<link rel="stylesheet" href="css/animations.css">
```

#### 2. 使用设计令牌

所有设计参数都通过 CSS 变量定义，可以直接在项目中使用：

```css
/* 使用品牌主色 */
.my-button {
  background: var(--color-primary-500);
  color: var(--color-neutral-0);
}

/* 使用间距 */
.my-container {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
}

/* 使用字体 */
.my-title {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
}
```

#### 3. 使用组件

```html
<!-- 按钮 -->
<button class="ds-btn ds-btn-primary">主要按钮</button>
<button class="ds-btn ds-btn-secondary">次要按钮</button>
<button class="ds-btn ds-btn-outline">描边按钮</button>

<!-- 卡片 -->
<div class="ds-card">
  <div class="ds-card-image">
    <img src="image.jpg" alt="图片描述">
  </div>
  <div class="ds-card-body">
    <h3 class="ds-card-title">卡片标题</h3>
    <p class="ds-card-text">卡片内容描述</p>
  </div>
  <div class="ds-card-footer">
    <button class="ds-btn ds-btn-primary ds-btn-sm">操作</button>
  </div>
</div>

<!-- 表单 -->
<div>
  <label class="ds-label">输入框标签</label>
  <input class="ds-input" type="text" placeholder="请输入...">
</div>
```

## 设计规范

### 色彩系统

- **主色 Primary**：深海蓝 `#1A7FA0`
  - 传递专业、可靠、海洋原生感
  - 适用于主要操作、关键信息、品牌标识

- **辅助色 Secondary**：暖沙金 `#D4A654`
  - 灵感源自海岸线金色沙滩与夕阳
  - 用于次要操作、价格标注、星级评分

- **点缀色 Accent**：珊瑚橙 `#E8644A`
  - 呼应渔火与夕阳的暖色调
  - 用于限时活动、促销标签、紧急通知

- **中性色 Neutral**：墨岩灰
  - 从纯白到近黑共 11 级
  - 用于文本、边框、背景等结构性元素

### 字体系统

- **展示字体**：Playfair Display + Noto Serif SC
  - 用于 Hero 标题、品牌大字、视觉焦点文字

- **界面字体**：DM Sans + Noto Sans SC
  - 用于标题、正文、按钮、标签等所有 UI 文字

- **等宽字体**：JetBrains Mono
  - 用于代码展示、数值数据、技术参数

### 间距系统

基于 4px 基准单位的间距系统：

- `--space-1` = 4px
- `--space-2` = 8px
- `--space-3` = 12px
- `--space-4` = 16px
- `--space-6` = 24px
- `--space-8` = 32px
- `--space-12` = 48px
- `--space-16` = 64px

### 动效规范

- **时长**：100ms / 200ms / 300ms / 500ms / 1000ms
- **缓动**：ease-in-out / ease-out / bounce / ocean-wave
- **原则**：流畅、克制、有意义，服务于功能而非炫技

## 组件库

### 基础组件

- 按钮（Buttons）：4 种变体、3 种尺寸
- 卡片（Cards）：标准卡片、特色卡片
- 表单（Forms）：输入框、文本域、下拉选择、复选框、开关
- 标签（Tags/Badges）：品牌色标签、语义色标签
- 导航（Navigation）：导航链接、标签页
- 反馈（Feedback）：提示 Toast、进度条、工具提示

## 使用场景

本设计系统适用于以下场景：

1. **园区导览/小程序/App**
   - 游客服务界面
   - 导览地图
   - 活动预约

2. **线下物料（导视/展板/印刷品）**
   - 园区标识系统
   - 宣传展板
   - 印刷品设计

3. **官方网站/品牌宣传**
   - 官方网站
   - 品牌宣传材料
   - 社交媒体视觉

## 设计原则

1. **海洋原生**
   - 色彩与视觉语言源自黄海海域的自然调性
   - 传递海洋文旅的松弛与活力

2. **系统一致**
   - 通过设计令牌统一管理所有视觉参数
   - 确保全链路一致性

3. **灵动有度**
   - 动效设计借鉴海浪节律
   - 以自然流畅的过渡和恰到好处的微交互提升体验

## 浏览器支持

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
- 移动端浏览器

## 版本信息

- **版本**：v1.0
- **发布日期**：2026.04
- **更新内容**：初始版本发布

## 注意事项

1. 所有设计令牌均通过 CSS 变量定义，可直接在项目中引用
2. 组件样式按需引入，避免不必要的样式加载
3. 动效尊重用户系统级减弱动效偏好设置
4. 图片建议使用 WebP/AVIF 格式，提供 JPG 回退

## 联系方式

如有设计系统相关问题，请联系设计团队。

---

**小窑湾海钓产业园 · Design System v1.0**
