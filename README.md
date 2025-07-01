# ProCurrency – React Currency Converter

A lightweight, single‑page currency converter built with **React 18**, **Vite**, and **Tailwind CSS**. It fetches real‑time foreign‑exchange rates from an external API and lets you convert any amount between multiple currencies in milliseconds – all wrapped in a responsive, mobile‑first UI.

> **Live Site:** [https://procurrency.netlify.com](https://procurrency.netlify.com)
> **GitHub Repo:** [https://github.com/Sanjay-khandelwal/ReactProject](https://github.com/Sanjay-khandelwal/ReactProject)

---

## ✨ Key Features

| Feature                 | Details                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| **Real‑time rates**     | Powered by ExchangeRate‑API (or any REST FX service you prefer).                                       |
| **Instant conversion**  | Amount converts as you type – no page reloads.                                                         |
| **Multiple currencies** | Dropdowns are auto‑populated from the API response.                                                    |
| **Dark & light modes**  | Toggle included, handled entirely with Tailwind utility classes.                                       |
| **Responsive UI**       | Fully responsive design using Tailwind's utility classes.                                              |
| **Deployed on Netlify** | Lightning-fast global deployment at [https://procurrency.netlify.com](https://procurrency.netlify.com) |

---

## 🛠️ Getting Started Locally

### Prerequisites

* **Node ≥ 18** and **npm ≥ 9**
  *Check with `node -v` & `npm -v`.*

---

## 🚀 Create & Setup Vite + React Project

> If you’ve already cloned the repo (`git clone https://github.com/Sanjay-khandelwal/ReactProject.git`), skip to **Install dependencies**.

### 1. Create the project

```bash
npm create vite@latest ReactProject
```

Choose:

* **Project name**: ReactProject
* **Framework**: React
* **Variant**: JavaScript or TypeScript

### 2. Navigate into the project folder

```bash
cd ReactProject
```

### 3. Install dependencies

```bash
npm install
```



---

## 🎨 Add Tailwind CSS (Used in this project)

For the latest and recommended setup instructions for Tailwind CSS with Vite, please refer to the official documentation:

👉 [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

---

## 🔐 API Access

> ⚠️ This project does **not** include API files in the repo for security reasons.

To run the app locally:

1. Create a `.env.local` file
2. Add the following:

```env
VITE_EXCHANGE_API_URL=https://v6.exchangerate-api.com/v6
VITE_EXCHANGE_API_KEY=your-api-key-here
```

These values are automatically injected by Vite at build time.

---

## 🔗 Deployment (Netlify)

1. Connect the GitHub repo: [https://github.com/Sanjay-khandelwal/ReactProject](https://github.com/Sanjay-khandelwal/ReactProject)
2. Configure environment variables under:

   * **Site Settings → Build & Deploy → Environment**
3. Netlify will auto-deploy from the `main` branch and host the optimized build.

✅ Live: [https://procurrency.netlify.com](https://procurrency.netlify.com)

---

## 🧩 Folder Structure

```
ReactProject/
├─ public/              # Static assets
├─ src/
│  ├─ components/       # Reusable components
│  ├─ styles/           # Tailwind base & custom styles
│  ├─ App.jsx
│  └─ main.jsx
├─ .env.local           # Your local API keys (ignored)
├─ vite.config.js
└─ README.md
```


---

> Built with ❤️ by **Sanjay Khandelwal**
