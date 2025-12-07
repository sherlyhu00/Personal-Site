# 网站部署和修改指南

## 📌 部署到线上 - 3种方法

### 方法 1️⃣：GitHub Pages 部署（推荐 - 免费）

#### 步骤 1：创建 GitHub 仓库
1. 登录 [GitHub.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称填写：`portfolio` 或 `yourname.github.io`
4. 选择 "Public"（公开）
5. 点击 "Create repository"

#### 步骤 2：上传文件到 GitHub

**方法 A - 使用命令行（推荐）：**

```bash
# 进入网站文件夹
cd /Volumes/Tdrive/application/portfolio-website

# 初始化 Git（如果还没初始化）
git init

# 添加所有文件
git add .

# 提交文件
git commit -m "Initial commit - Portfolio website"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

**方法 B - 使用 GitHub 网页上传：**
1. 在你的仓库页面，点击 "Add file" → "Upload files"
2. 拖拽所有文件到网页
3. 点击 "Commit changes"

#### 步骤 3：启用 GitHub Pages
1. 在你的仓库页面，点击 "Settings"
2. 左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main" 和 "/ (root)"
5. 点击 "Save"
6. 等待 1-2 分钟，你的网站将在：`https://YOUR_USERNAME.github.io/portfolio/` 上线！

---

### 方法 2️⃣：Netlify 部署（最简单 - 拖拽上传）

#### 步骤详解：
1. 访问 [Netlify.com](https://www.netlify.com)
2. 点击 "Sign up" 注册（可用 GitHub 账号登录）
3. 登录后，点击 "Add new site" → "Deploy manually"
4. 将整个 `portfolio-website` 文件夹拖拽到网页
5. 等待 30 秒 - 完成！
6. 你会得到一个网址：`https://random-name-12345.netlify.app`

#### 自定义域名（可选）：
1. 在 Netlify 站点设置中，点击 "Domain settings"
2. 点击 "Options" → "Edit site name"
3. 改成你想要的名字，如：`yirui-hu.netlify.app`

---

### 方法 3️⃣：Vercel 部署（类似 Netlify）

1. 访问 [Vercel.com](https://vercel.com)
2. 用 GitHub 账号登录
3. 点击 "Add New Project"
4. 导入你的 GitHub 仓库
5. 点击 "Deploy" - 完成！

---

## ✏️ 如何修改个人信息

### 1. 更新基本联系信息

#### 修改邮箱和电话：
在**所有 4 个 HTML 文件**的底部（footer 部分），找到并修改：

```html
<!-- 在 index.html, aboutme.html, projects.html, contact.html 中都要改 -->
<footer class="footer-section py-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-3 mb-md-0">
                <!-- 👇 修改这里 -->
                <p class="mb-2"><i class="fas fa-envelope me-2"></i>你的邮箱@example.com</p>
                <p class="mb-0"><i class="fas fa-phone me-2"></i>你的电话号码</p>
            </div>
```

#### 修改社交媒体链接：
同样在 footer 部分：

```html
<div class="social-links mb-3">
    <!-- 👇 修改 LinkedIn 链接 -->
    <a href="你的LinkedIn完整URL" target="_blank" class="social-icon">
        <i class="fab fa-linkedin fa-2x"></i>
    </a>
    <!-- 👇 修改 GitHub 链接 -->
    <a href="你的GitHub完整URL" target="_blank" class="social-icon">
        <i class="fab fa-github fa-2x"></i>
    </a>
</div>
```

---

### 2. 更新 About Me 页面

打开 `aboutme.html`，找到以下部分进行修改：

#### 修改自我介绍：
```html
<!-- 找到 Introduction Section -->
<section class="intro-section py-5 bg-light">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8 mx-auto">
                <div class="intro-content">
                    <h2 class="mb-4">Introduction</h2>
                    <!-- 👇 修改这里的介绍文字 -->
                    <p class="lead">
                        在这里写你的自我介绍...
                    </p>
```

#### 修改教育背景：
```html
<!-- 找到 Education Section -->
<div class="education-item mb-4">
    <div class="d-flex justify-content-between align-items-start mb-2">
        <div>
            <!-- 👇 修改学校名称 -->
            <h3 class="h4 mb-1">你的学校名称</h3>
            <p class="text-muted mb-1">城市, 国家</p>
        </div>
        <!-- 👇 修改时间 -->
        <span class="badge bg-primary">开始时间 - 结束时间</span>
    </div>
    <div class="degree-info">
        <!-- 👇 修改学位信息 -->
        <p class="mb-2"><strong>学位名称</strong></p>
        <p class="mb-2"><strong>GPA:</strong> 你的GPA</p>
```

#### 修改职业目标：
```html
<!-- 找到 Career Goals Section -->
<section class="career-goals-section py-5">
    <!-- 👇 修改每个 goal-item 的内容 -->
    <div class="goal-item mb-4">
        <h3 class="h5 mb-2">
            <i class="fas fa-universal-access me-2 text-primary"></i>
            你的目标标题
        </h3>
        <p>
            你的目标描述...
        </p>
    </div>
```

---

### 3. 更新项目页面

打开 `projects.html`：

#### 添加/修改项目：
```html
<!-- 找到你想修改的项目 -->
<div class="project-detail-card mb-5">
    <div class="row">
        <div class="col-lg-9">
            <!-- 👇 修改项目标题 -->
            <h3 class="h4 mb-3">你的项目名称</h3>

            <!-- 👇 修改地点和导师 -->
            <p class="text-muted mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>
                地点 | Supervised by 导师名字
            </p>

            <!-- 👇 修改项目描述 -->
            <p class="mb-3">
                项目的简短描述...
            </p>

            <!-- 👇 修改项目要点 -->
            <ul class="project-highlights mb-3">
                <li>项目要点 1</li>
                <li>项目要点 2</li>
                <li>项目要点 3</li>
            </ul>

            <!-- 👇 修改技术标签 -->
            <div class="project-tags">
                <span class="badge bg-secondary">技术1</span>
                <span class="badge bg-secondary">技术2</span>
            </div>
        </div>
    </div>
</div>
```

---

### 4. 更新联系页面

打开 `contact.html`：

#### 修改联系信息卡片：
```html
<!-- Email -->
<div class="contact-info-item mb-4">
    <div class="d-flex align-items-start">
        <div class="contact-icon me-3">
            <i class="fas fa-envelope fa-2x text-primary"></i>
        </div>
        <div>
            <h3 class="h6 mb-1">Email</h3>
            <!-- 👇 修改邮箱 -->
            <a href="mailto:你的邮箱" class="contact-link">你的邮箱</a>
        </div>
    </div>
</div>

<!-- Phone -->
<div class="contact-info-item mb-4">
    <!-- 👇 修改电话 -->
    <a href="tel:你的电话" class="contact-link">你的电话</a>
</div>

<!-- Location -->
<div class="contact-info-item mb-4">
    <!-- 👇 修改地址 -->
    <p class="mb-0">你的城市, 州, 国家</p>
</div>
```

#### 修改社交媒体卡片：
```html
<!-- LinkedIn -->
<a href="你的LinkedIn完整URL" target="_blank" class="social-link-card">
    <i class="fab fa-linkedin fa-3x text-primary me-3"></i>
    <div>
        <h4 class="h6 mb-0">LinkedIn</h4>
        <p class="small text-muted mb-0">Connect professionally</p>
    </div>
</a>

<!-- GitHub -->
<a href="你的GitHub完整URL" target="_blank" class="social-link-card">
    <i class="fab fa-github fa-3x text-dark me-3"></i>
    <div>
        <h4 class="h6 mb-0">GitHub</h4>
        <p class="small text-muted mb-0">View my code and projects</p>
    </div>
</a>
```

---

### 5. 修改网站配色方案

打开 `css/styles.css`，在文件顶部找到：

```css
/* Color Variables */
:root {
    /* 👇 修改这些颜色值 */
    --primary-color: #2c5aa0;      /* 主色（深蓝） */
    --secondary-color: #1e3a5f;    /* 次要色（更深的蓝） */
    --accent-color: #4a90e2;       /* 强调色（浅蓝） */
    --text-dark: #333333;          /* 深色文字 */
    --text-light: #666666;         /* 浅色文字 */
}
```

**推荐配色方案：**

```css
/* 专业蓝色（当前） */
--primary-color: #2c5aa0;
--secondary-color: #1e3a5f;
--accent-color: #4a90e2;

/* 绿色主题 */
--primary-color: #2d6a4f;
--secondary-color: #1b4332;
--accent-color: #52b788;

/* 紫色主题 */
--primary-color: #6a4c93;
--secondary-color: #432874;
--accent-color: #a97fc9;

/* 橙色主题 */
--primary-color: #e07a5f;
--secondary-color: #a85741;
--accent-color: #f2a384;
```

---

### 6. 添加个人照片

#### 步骤：
1. 在 `portfolio-website` 文件夹中创建 `images` 文件夹
2. 把你的照片放进去，命名为 `profile.jpg`
3. 打开 `aboutme.html`，在 Introduction Section 添加：

```html
<section class="intro-section py-5 bg-light">
    <div class="container">
        <div class="row align-items-center">
            <!-- 👇 添加照片列 -->
            <div class="col-lg-4 mb-4 mb-lg-0 text-center">
                <img src="images/profile.jpg"
                     alt="Yirui Hu"
                     class="img-fluid rounded-circle shadow"
                     style="max-width: 300px;">
            </div>
            <div class="col-lg-8">
                <div class="intro-content">
                    <!-- 原有的介绍内容 -->
```

---

### 7. 修改页面标题和描述（SEO优化）

在每个 HTML 文件的 `<head>` 部分：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 👇 修改描述 -->
    <meta name="description" content="你的个人描述">
    <!-- 👇 修改标题 -->
    <title>你的名字 | 你的职位</title>
```

---

## 🔧 快速修改清单

打开这些文件进行修改：

- [ ] **所有 HTML 文件** → Footer 部分的邮箱、电话、社交链接
- [ ] **index.html** → 首页欢迎语、职位描述
- [ ] **aboutme.html** → 自我介绍、教育背景、职业目标
- [ ] **projects.html** → 项目列表和描述
- [ ] **contact.html** → 联系信息
- [ ] **css/styles.css** → 配色方案（可选）

---

## 💡 使用工具修改

### 推荐编辑器：
1. **VS Code**（免费，强烈推荐）
   - 下载：https://code.microsoft.com
   - 打开文件夹：File → Open Folder → 选择 portfolio-website

2. **Sublime Text**（免费）
   - 下载：https://www.sublimetext.com

3. **简单的文本编辑器**
   - Mac：TextEdit（纯文本模式）
   - Windows：Notepad++

---

## 🚀 修改后重新部署

### GitHub Pages：
```bash
cd /Volumes/Tdrive/application/portfolio-website
git add .
git commit -m "Updated personal information"
git push
```
等待 1-2 分钟自动更新

### Netlify：
- 直接拖拽修改后的文件夹到 Netlify
- 或在 Netlify 网站中点击 "Deploys" → "Deploy from folder"

---

## ❓ 常见问题

**Q: 修改后网站没变化？**
A: 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）

**Q: 照片显示不出来？**
A: 检查文件路径是否正确，确保图片在 `images/` 文件夹中

**Q: 配色改了没效果？**
A: 确保修改的是 `css/styles.css` 文件，并刷新浏览器

**Q: 如何添加更多页面？**
A: 复制一个现有 HTML 文件，修改内容，并在导航栏添加链接

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 检查浏览器控制台（F12）看错误信息
2. 对比原始文件确认修改正确
3. 重新下载备份的原始文件

---

**最后更新**: 2024年12月
**版本**: 1.0
