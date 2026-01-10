const fs = require('fs');
const path = require('path');

// This script copies the built files from out/ to the repository root
// for GitHub Pages deployment with a custom domain

const outDir = path.join(__dirname, 'out');
const rootDir = path.join(__dirname, '..');

if (!fs.existsSync(outDir)) {
  console.error('Error: out/ directory not found. Please run "npm run build" first.');
  process.exit(1);
}

console.log('Copying files from out/ to repository root...');

// Copy all files from out/ to root
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy everything from out/ to root
copyRecursive(outDir, rootDir);

// Create .nojekyll file in root to prevent Jekyll processing
const nojekyllPath = path.join(rootDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file');
}

console.log('Deployment files copied successfully!');
console.log('Next steps:');
console.log('1. Review the files in the repository root');
console.log('2. Commit and push to GitHub');
console.log('3. Your site should be live at your custom domain');
