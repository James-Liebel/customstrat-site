# Microsoft Clarity Implementation Guide

This guide provides step-by-step instructions for implementing Microsoft Clarity analytics on your CustomStrat Advisory website with zero-request tracking (no cookie banners required).

## 📋 Overview

The implementation includes:
- ✅ Microsoft Clarity script injection in the site header
- ✅ Custom event tracking for service clicks
- ✅ Semantic labeling for filtering heatmaps by service type
- ✅ Zero-request setup (no cookie consent required)

## 🔧 Step 1: Get Your Microsoft Clarity Project ID

1. **Sign up/Login to Microsoft Clarity**
   - Go to [https://clarity.microsoft.com](https://clarity.microsoft.com)
   - Sign in with your Microsoft account (or create one)

2. **Create or Select a Project**
   - Click "Add new project" or select an existing project
   - Enter your website URL: `https://yourdomain.com` (your custom GitHub Pages domain)
   - Click "Create project"

3. **Copy Your Project ID**
   - After creating the project, you'll see setup instructions
   - Copy the **Project ID** (it looks like: `abc123xyz456`)
   - The Project ID is the string in the script URL: `https://www.clarity.ms/tag/[PROJECT_ID]`

## 📝 Step 2: Add Your Clarity Project ID

1. **Open the Layout File**
   - Navigate to: `customstrat-advisory/src/app/layout.tsx`

2. **Replace the Placeholder**
   - Find this line (around line 11):
     ```typescript
     const CLARITY_PROJECT_ID = 'YOUR_CLARITY_PROJECT_ID_HERE';
     ```
   - Replace `YOUR_CLARITY_PROJECT_ID_HERE` with your actual Project ID:
     ```typescript
     const CLARITY_PROJECT_ID = 'abc123xyz456'; // Your actual ID
     ```

3. **Save the file**

**Note:** The script is placed directly in the `<head>` section of all HTML files, ensuring it loads on every page.

## 🚀 Step 3: Commit and Deploy to GitHub

### Option A: Using GitHub Web Interface

1. **Navigate to your repository**
   - Go to: `https://github.com/James-Liebel/customstrat-site`

2. **Edit the Clarity Script file**
   - Click on `customstrat-advisory/src/components/ClarityScript.tsx`
   - Click the pencil icon (✏️) to edit
   - Replace `YOUR_CLARITY_PROJECT_ID_HERE` with your actual Project ID
   - Scroll down and click "Commit changes"
   - Add commit message: `Add Microsoft Clarity tracking with service click events`
   - Click "Commit changes" button

3. **Build and Deploy**
   - The site should automatically rebuild if you have GitHub Actions set up
   - Or manually trigger the build process:
     - If using `npm run deploy`, run this locally and push the `out/` folder
     - Or set up GitHub Actions to build on push

### Option B: Using Git Command Line

```bash
# Navigate to your project directory
cd customstrat-advisory

# Edit ClarityScript.tsx and add your Project ID
# (Use your preferred editor)

# Stage the changes
git add src/components/ClarityScript.tsx

# Commit
git commit -m "Add Microsoft Clarity tracking with service click events"

# Push to main branch
git push origin main
```

## ✅ Step 4: Verify the Implementation

### Method 1: Browser Console (Recommended)

1. **Open your live website**
   - Navigate to your custom domain (e.g., `https://yourdomain.com`)

2. **Open Developer Tools**
   - Press `F12` (Windows/Linux) or `Cmd+Option+I` (Mac)
   - Or right-click → "Inspect"

3. **Check the Console Tab**
   - Click on the "Console" tab
   - Type the following and press Enter:
     ```javascript
     typeof window.clarity
     ```
   - **Expected result**: `"function"` (confirms Clarity is loaded)

4. **Check Network Tab**
   - Click on the "Network" tab
   - Filter by "clarity" or "clarity.ms"
   - Refresh the page (F5)
   - **Expected result**: You should see requests to `clarity.ms` domain
   - Look for: `https://www.clarity.ms/tag/[YOUR_PROJECT_ID]`

5. **Test Event Tracking**
   - In the Console, type:
     ```javascript
     window.clarity('event', 'test_event')
     ```
   - **Expected result**: No errors (silent success)
   - Navigate to `/services` page
   - Click on a service card
   - In Console, check for any tracking logs (if in development mode)

### Method 2: Clarity Dashboard

1. **Wait 5-10 minutes** after deployment
   - Clarity needs time to process initial data

2. **Check Your Clarity Dashboard**
   - Go to [https://clarity.microsoft.com](https://clarity.microsoft.com)
   - Select your project
   - You should see:
     - Session recordings starting to appear
     - Heatmaps showing user interactions
     - Custom events in the "Events" section

3. **Verify Custom Events**
   - In Clarity dashboard, go to "Events" or "Insights"
   - Look for events named:
     - `service_click` (generic)
     - `service_click_strategy_development`
     - `service_click_strategy_execution_and_transformation`
     - `service_click_customer_experience_and_performance_improvement`

## 🎯 What Gets Tracked

### Automatic Tracking
- **Page views**: All pages automatically tracked
- **Click heatmaps**: All clicks on the site
- **Scroll maps**: User scroll behavior
- **Session recordings**: Full user sessions

### Custom Event Tracking
The following service clicks are tracked with semantic labels:

1. **Strategy Development** (`/services/strategy-development`)
   - Event: `service_click_strategy_development`

2. **Strategy Execution & Transformation** (`/services/strategy-execution`)
   - Event: `service_click_strategy_execution_and_transformation`

3. **Customer Experience & Performance Improvement** (`/services/operational-improvements`)
   - Event: `service_click_customer_experience_and_performance_improvement`

4. **Service Category Cards** (from CaseStudyCards component)
   - Events: `service_click_[category_name]`

All service clicks also trigger a generic `service_click` event for overall service interest analysis.

## 🔍 Filtering Heatmaps by Service

In the Clarity dashboard:

1. **Go to Heatmaps**
2. **Click "Filter"**
3. **Select "Events"**
4. **Choose a specific service event** (e.g., `service_click_strategy_development`)
5. **View heatmaps** showing only interactions from users who clicked that service

## 📊 Files Modified

The following files were added/modified:

1. **`src/components/ClarityScript.tsx`** (NEW)
   - Loads Microsoft Clarity script
   - Only loads in production

2. **`src/lib/clarityTracking.ts`** (NEW)
   - Utility functions for tracking service clicks
   - Handles event naming and semantic labeling

3. **`src/components/TrackedServiceLink.tsx`** (NEW)
   - Wrapper component for service links with automatic tracking

4. **`src/app/layout.tsx`** (MODIFIED)
   - Added ClarityScript component

5. **`src/app/services/page.tsx`** (MODIFIED)
   - Replaced Link components with TrackedServiceLink
   - Added service name tracking

6. **`src/components/CaseStudyCards.tsx`** (MODIFIED)
   - Added click tracking to service category cards

## 🛠️ Troubleshooting

### Clarity not loading
- **Check Project ID**: Ensure it's correctly set in `ClarityScript.tsx`
- **Check environment**: Script only loads in production (`NODE_ENV === 'production'`)
- **Check browser console**: Look for JavaScript errors
- **Check network tab**: Verify requests to `clarity.ms` are not blocked

### Events not appearing
- **Wait 5-10 minutes**: Clarity processes events with a delay
- **Check event names**: Ensure they match what's in the dashboard
- **Test manually**: Use `window.clarity('event', 'test')` in console
- **Check ad blockers**: Some ad blockers may block Clarity

### Development mode
- Clarity script is **disabled in development** to avoid tracking test data
- To test locally, temporarily change:
  ```typescript
  if (process.env.NODE_ENV !== 'production' || ...)
  ```
  to:
  ```typescript
  if (false || ...) // Temporarily enable for testing
  ```

## 🔒 Privacy & Compliance

- **Zero-request setup**: Microsoft Clarity does not require cookie consent banners
- **GDPR compliant**: Clarity is GDPR compliant by default
- **No PII**: Clarity does not collect personally identifiable information
- **IP anonymization**: IP addresses are anonymized automatically

## 📚 Additional Resources

- [Microsoft Clarity Documentation](https://docs.microsoft.com/en-us/clarity/)
- [Clarity Dashboard](https://clarity.microsoft.com)
- [Clarity Event Tracking Guide](https://docs.microsoft.com/en-us/clarity/clarity-api)

---

**Implementation Date**: [Add date when implemented]
**Clarity Project ID**: [Add your Project ID here for reference]
