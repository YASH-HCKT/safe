# Simple Deployment Script for AccessOne & InclusionApp
# Run this from PowerShell in the project root

Write-Host "🚀 Starting Deployment Process..." -ForegroundColor Cyan

# 1. Stage changes
Write-Host "📦 Staging changes..."
git add .

# 2. Get commit message from user or use default
$msg = Read-Host "Enter commit message (or press Enter for 'Auto-deploy update')"
if ([string]::IsNullOrWhiteSpace($msg)) { $msg = "Auto-deploy update" }

# 3. Commit
Write-Host "💾 Committing changes..."
git commit -m "$msg"

# 4. Push to GitHub
Write-Host "⬆️ Pushing to GitHub (main)..."
git push origin main

Write-Host "✅ Pushed to GitHub!" -ForegroundColor Green
Write-Host "🌐 Vercel will now start the automatic build and deployment."
Write-Host "🔗 Live Site: https://accessone2026.vercel.app/" -ForegroundColor Blue
Pause
