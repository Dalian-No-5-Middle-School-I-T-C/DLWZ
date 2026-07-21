# 大连五中官网 · 长期记忆

## 项目概况
- **仓库目录**：`C:\Users\xujia\Desktop\五中官网项目\DLWZ`（已从 `5中官网v1.0` 重命名并初始化为 git）
- **站点**：大连市第五中学官网首页，单页响应式前端
- **技术栈**：Tailwind CSS v4（`src/input.css` → `src/output.css`）、Swiper 11、Lucide、Google Fonts（Noto Serif SC / Noto Sans SC）
- **环境限制**：`node_modules` 缺失，无法重新编译 Tailwind，因此新增样式必须走纯 CSS 文件（如 `editorial.css`），不能依赖新生成的 Tailwind utility。

## 已确认 Bug 与修复
1. **favicon 空链接**：`index.html` 第 10 行改为 `./images/五中logo.jpg`。
2. **主题切换按钮永久隐藏**：`hidden sm:hidden` → `hidden sm:flex`（`sm:flex` 已编译到 `output.css`）。
3. **品牌色不一致**：Hero 第二张 emerald 叠加层、和雅教育「和美环境」卡片、教育教学「获奖教师」统计卡均从 emerald 改为红金。

## 红金精致化层
- 新增 `editorial.css`（纯 CSS，加载于 `style.css` 之后）：
  - `.hero-overlay-red`、`.brand-card-gold`、`.brand-icon`、`.brand-soft`、`.brand-ico`
  - 将 `.card-hover:hover` 阴影与 `.gradient-overlay` 由蓝改红
- `src/input.css` 中 `--color-primary-800/900` 的错误红色值已修正为深蓝，为未来 rebuild 做准备。

## Ardot 画布
- 文件：大连五中官网-红金精致化方案
- fileId：`706312424288038`
- 链接：https://ardot.tencent.com/file/706312424288038
- 用户选定板块：Header/Hero/Footer 默认 + 和雅教育·办学理念、荣誉殿堂·数据社会证明、校园风光·特色网格
- 风格：Editorial Minimalist Archive + Editorial Luxury Fashion（骨瓷暖白 `#F4F0E8`、酒红 `#5A2E3A`、金 `#C49A4A`、衬线标题）
