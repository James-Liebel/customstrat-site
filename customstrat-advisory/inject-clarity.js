const fs = require('fs');
const path = require('path');

// Microsoft Clarity Project ID
const CLARITY_PROJECT_ID = 'v0jv4m5p9c';

// Clarity script to inject into <head>
const clarityScript = `
<script id="microsoft-clarity" type="text/javascript">
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
</script>`;

function injectClarityIntoHTML(filePath) {
  try {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Check if Clarity script already exists
    if (html.includes('microsoft-clarity')) {
      console.log(`  ✓ Clarity already exists in ${filePath}`);
      return;
    }
    
    // Find the </head> tag and insert script before it
    if (html.includes('</head>')) {
      html = html.replace('</head>', `${clarityScript}\n</head>`);
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`  ✓ Injected Clarity into ${filePath}`);
    } else {
      console.warn(`  ⚠ No </head> tag found in ${filePath}`);
    }
  } catch (error) {
    console.error(`  ✗ Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file !== 'node_modules' && file !== '.git' && !file.startsWith('.')) {
        processDirectory(filePath);
      }
    } else if (file === 'index.html') {
      injectClarityIntoHTML(filePath);
    }
  });
}

// Main execution
const outDir = path.join(__dirname, 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: out/ directory not found. Please run "npm run build" first.');
  process.exit(1);
}

console.log('Injecting Microsoft Clarity script into all HTML files...');
console.log(`Project ID: ${CLARITY_PROJECT_ID}`);
console.log(`Searching in: ${outDir}\n`);

processDirectory(outDir);

console.log('\n✓ Clarity injection complete!');
