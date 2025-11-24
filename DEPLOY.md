# 🚀 GitHub 部署指令

## 快速部署步驟

### 1️⃣ 在 GitHub 創建新倉庫

1. 前往 https://github.com
2. 點擊右上角 **+** → **New repository**
3. 倉庫名稱：`ai-prompt-generator`（或您喜歡的名稱）
4. 選擇 **Public**
5. **不要**勾選 "Initialize this repository with a README"
6. 點擊 **Create repository**

### 2️⃣ 執行以下命令

複製 GitHub 倉庫 URL 後，在終端機中執行：

```bash
# 初始化 Git 倉庫
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: AI 繪圖提示詞生成器"

# 設置主分支
git branch -M main

# 添加遠程倉庫（替換成您的倉庫 URL）
git remote add origin https://github.com/您的用戶名/ai-prompt-generator.git

# 推送到 GitHub
git push -u origin main
```

### 3️⃣ 啟用 GitHub Pages

1. 在 GitHub 倉庫頁面 → **Settings**
2. 左側菜單 → **Pages**
3. Source → 選擇 **main** 分支
4. 點擊 **Save**
5. 等待 1-2 分鐘後訪問：
   ```
   https://您的用戶名.github.io/ai-prompt-generator/
   ```

## 🎉 完成！

您的 AI 繪圖提示詞生成器現在已經上線了！
