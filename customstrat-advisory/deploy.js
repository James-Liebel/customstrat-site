const fs = require('fs');
const path = require('path');

// This script copies the built files from out/ to the repository root
// for GitHub Pages deployment with a custom domain

const outDir = path.join(__dirname, 'out');
const rootDir = path.join(__dirname, '..');

// Files to preserve in root (don't overwrite)
const preserveFiles = ['CNAME', '.git', '.gitignore', 'package.json', 'package-lock.json'];

if (!fs.existsSync(outDir)) {
  console.error('Error: out/ directory not found. Please run "npm run build" first.');
  process.exit(1);
}

console.log('Copying files from out/ to repository root...');
console.log(`Source: ${outDir}`);
console.log(`Destination: ${rootDir}`);

// Copy all files from out/ to root, preserving important files
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      // Skip preserving files/directories
      if (preserveFiles.includes(childItemName)) {
        console.log(`Preserving existing: ${childItemName}`);
        return;
      }
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    const fileName = path.basename(dest);
    // Don't overwrite preserved files
    if (preserveFiles.includes(fileName) && fs.existsSync(dest)) {
      console.log(`Preserving existing: ${fileName}`);
      return;
    }
    fs.copyFileSync(src, dest);
  }
}

// Copy everything from out/ to root
copyRecursive(outDir, rootDir);

// Verify index.html exists
const indexPath = path.join(rootDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('ERROR: index.html not found in output!');
  console.error('The build may have failed. Please check the build output.');
  process.exit(1);
} else {
  console.log('✓ index.html found in repository root');
}

// Create .nojekyll file in root to prevent Jekyll processing
const nojekyllPath = path.join(rootDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll file');
} else {
  console.log('✓ .nojekyll file already exists');
}

console.log('\n✓ Deployment files copied successfully!');
console.log('\nNext steps:');
console.log('1. Verify index.html is in the repository root');
console.log('2. Commit and push to GitHub:');
console.log('   git add .');
console.log('   git commit -m "Deploy website"');
console.log('   git push');
console.log('3. Check GitHub Pages settings:');
console.log('   - Settings > Pages > Source: Deploy from branch > main > / (root)');
console.log('   - Custom domain should be set to your domain (without www)');
