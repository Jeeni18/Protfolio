# Jeeni Shrestha — Developer Portfolio

A modern, minimal, dark-themed developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed
- npm v9+ installed

### Installation

```bash
# 1. Navigate into the project folder
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Visit **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 📦 Deploying to Vercel

### Option 1 — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Option 2 — GitHub Integration

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Your site is live on a `.vercel.app` URL

---

## 🌐 Custom Domain Setup (jeenishrestha.com.np)

### Step 1 — Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Type `jeenishrestha.com.np` and click **Add**
4. Also add `www.jeenishrestha.com.np`

### Step 2 — Configure DNS Records

Log in to your domain registrar (where you bought `jeenishrestha.com.np`) and add these DNS records:

| Type  | Name  | Value            | TTL  |
|-------|-------|------------------|------|
| A     | @     | 76.76.21.21      | 3600 |
| CNAME | www   | cname.vercel-dns.com | 3600 |

> **Note:** DNS propagation can take 5 minutes to 48 hours.

### Step 3 — Verify in Vercel

- After adding DNS records, go back to Vercel → Domains
- Vercel will automatically verify and provision an SSL certificate

---

## 📧 EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://emailjs.com) to send emails without a backend.

### Step 1 — Create an EmailJS Account

Go to [emailjs.com](https://emailjs.com) and sign up for a free account.

### Step 2 — Create an Email Service

1. Dashboard → **Email Services** → **Add New Service**
2. Choose Gmail, Outlook, or any SMTP provider
3. Authorize your email account
4. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3 — Create an Email Template

1. Dashboard → **Email Templates** → **Create New Template**
2. Use these template variables (must match exactly):
   ```
   From: {{name}} ({{email}})
   Message: {{message}}
   ```
3. Copy the **Template ID** (e.g., `template_xyz789`)

### Step 4 — Get Your Public Key

1. Dashboard → **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_XXXXXXXXXXXXXXX`)

### Step 5 — Update the Config

Open `src/components/ContactModal.jsx` and replace the placeholders:

```js
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',    // ← Your Service ID
  TEMPLATE_ID: 'template_xyz789', // ← Your Template ID
  PUBLIC_KEY: 'user_XXXXXXX',     // ← Your Public Key
}
```

---

## 🖼️ Adding Certificate Images

1. Place your certificate images in `src/assets/certificates/`
   ```
   src/assets/certificates/
     data-science.jpg
     ml-course.jpg
     ...
   ```

2. Open `src/sections/Certifications.jsx`

3. Import the image at the top:
   ```js
   import dataScienceCert from '../assets/certificates/data-science.jpg'
   ```

4. Update the certificate data:
   ```js
   {
     id: 1,
     title: 'Data Science Certification',
     org: 'Online Platform',
     year: '2024',
     image: dataScienceCert,  // ← Use the imported image
     ...
   }
   ```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── certificates/       ← Add certificate images here
│   ├── components/
│   │   ├── CertModal.jsx       ← Certificate popup modal
│   │   ├── ContactModal.jsx    ← Contact form modal
│   │   ├── FloatingContact.jsx ← Floating button (bottom-right)
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── SectionWrapper.jsx  ← Reusable scroll-animate wrapper
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Customization

- **Colors:** Edit CSS variables in `src/index.css` and `tailwind.config.js`
- **Content:** Update data arrays in each section file under `src/sections/`
- **Projects:** Add/edit objects in the `projects` array in `Projects.jsx`
- **Socials:** Update links in `Footer.jsx` and `Navbar.jsx`

---

## 📄 License

MIT — Free to use and adapt for your own portfolio.
