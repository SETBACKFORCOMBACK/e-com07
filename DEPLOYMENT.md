# Git Commit & Deployment Guide

## 📋 Quick Commands for Committing and Deploying

### Step 1: Check Current Status
```bash
git status
```

### Step 2: Add All Changes
```bash
git add .
```
Or add specific files:
```bash
git add index.html men.html women.html
```

### Step 3: Commit Changes
```bash
git commit -m "Your commit message describing the changes"
```

Example commit messages:
- `git commit -m "Update homepage and fix image references"`
- `git commit -m "Add new products and improve cart functionality"`
- `git commit -m "Fix responsive design and update styling"`

### Step 4: Push to GitHub
```bash
git push origin main
```

If this is your first push or if you get an error, use:
```bash
git push -u origin main
```

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended for Static Sites)

1. **Go to your GitHub repository**: https://github.com/SETBACKFORCOMBACK/e-com07

2. **Navigate to Settings**:
   - Click on "Settings" tab in your repository

3. **Enable GitHub Pages**:
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

4. **Your site will be live at**:
   - `https://SETBACKFORCOMBACK.github.io/e-com07/`
   - It may take a few minutes to deploy

5. **Automatic Deployment**:
   - Every time you push to `main` branch, GitHub Pages will automatically redeploy your site
   - No manual deployment needed!

### Option 2: Netlify (Alternative)

1. Go to https://www.netlify.com
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Select your repository: `e-com07`
5. Build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `/` (root)
6. Click "Deploy site"
7. Your site will be live with a custom URL

### Option 3: Vercel (Alternative)

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository: `e-com07`
5. Click "Deploy"
6. Your site will be live instantly

---

## 🔄 Complete Workflow Example

```bash
# 1. Check what files have changed
git status

# 2. Add all changes
git add .

# 3. Commit with a descriptive message
git commit -m "Update website content and fix bugs"

# 4. Push to GitHub
git push origin main

# 5. (If using GitHub Pages) Wait 2-3 minutes for automatic deployment
# (If using Netlify/Vercel) Deployment happens automatically
```

---

## 📝 Best Practices

1. **Commit Often**: Make small, frequent commits rather than large ones
2. **Write Clear Messages**: Describe what changed and why
3. **Test Locally**: Always test your changes locally before committing
4. **Check Deployment**: After pushing, verify your site works on the live URL

---

## 🐛 Troubleshooting

### If `git push` fails:
```bash
# Pull latest changes first
git pull origin main

# Resolve any conflicts, then push again
git push origin main
```

### If GitHub Pages isn't updating:
- Wait 5-10 minutes (deployment can take time)
- Check the "Actions" tab in your GitHub repository for deployment status
- Clear your browser cache and try again

### If you need to undo a commit:
```bash
# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Undo last commit (discards changes)
git reset --hard HEAD~1
```

---

## ✅ Checklist Before Deploying

- [ ] All files are saved
- [ ] No broken image links
- [ ] Tested locally in browser
- [ ] All links work correctly
- [ ] Mobile responsive design works
- [ ] Cart functionality works
- [ ] Committed all changes
- [ ] Pushed to GitHub

---

**Your Repository**: https://github.com/SETBACKFORCOMBACK/e-com07

**Once GitHub Pages is enabled, your site will be at**: 
https://SETBACKFORCOMBACK.github.io/e-com07/

