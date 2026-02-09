<div align="center">

# 🧠 Second Brain

### AI-Powered Knowledge Management System

*Capture, organize, and discover insights with intelligent automation*

<br>

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-22C55E?style=for-the-badge&logo=responsive&logoColor=white)](https://github.com)

[📚 Documentation](docs) • [🚀 Demo](#) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## 📖 Table of Contents

<details>
<summary>Click to expand</summary>

- [✨ Features](#-features)
- [🎨 Showcase](#-showcase)
- [🚀 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [🗄️ Database Schema](#️-database-schema)
- [🎯 Usage](#-usage)
- [🔌 Public API](#-public-api)
- [🏗️ Architecture](#️-architecture)
- [📁 Project Structure](#-project-structure)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)

</details>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🤖 AI-Powered Intelligence
- ⚡ **Automatic summaries** with Gemini/OpenAI
- 🏷️ **Smart tag suggestions**
- 🔍 **Semantic search** capabilities
- 🎯 **Context-aware insights**

</td>
<td width="50%">

### 🎨 Beautiful UI/UX
- 🌙 **Dark mode** with smooth transitions
- ✨ **Framer Motion** animations
- 📱 **Mobile-first** responsive design
- 🎭 **3D parallax** hero section

</td>
</tr>
<tr>
<td width="50%">

### ⚡ Core Functionality
- 📊 **Smart dashboard** with filtering
- 🔎 **Real-time search** across knowledge
- 🗂️ **Type filtering** (notes/links/insights)
- 📅 **Flexible sorting** options

</td>
<td width="50%">

### 🔧 Developer Features
- 🌐 **RESTful API** for integration
- 🧩 **Embeddable widget** for websites
- 🏛️ **Portable architecture**
- 📦 **Modular components**

</td>
</tr>
</table>

---

## 🎨 Showcase

<div align="center">

### 🎭 Parallax Hero Animation

> Stunning landing page with 3D effects and smooth Framer Motion animations

### 📊 Interactive Dashboard

> Real-time search, filter, and sort your knowledge with an intuitive interface

### 💳 Knowledge Card Modal

> Beautiful scrollable modals with proper overflow handling

### 📱 Fully Responsive

> Seamless experience from mobile to desktop

</div>

---

## 🚀 Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br>Next.js 16
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="48" height="48" alt="PostgreSQL" />
<br>PostgreSQL
</td>
<td align="center" width="96">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind" />
<br>Tailwind CSS
</td>
<td align="center" width="96">
<img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" width="48" height="48" alt="Framer" />
<br>Framer Motion
</td>
</tr>
</table>

<details>
<summary><b>📚 Full Technology List</b></summary>

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 16 (App Router), TypeScript, Tailwind CSS, Shadcn UI |
| **Backend** | Next.js API Routes, Server Actions |
| **Database** | PostgreSQL (Aiven with SSL) |
| **AI/ML** | Google Gemini, OpenAI (Vercel AI SDK) |
| **Animations** | Framer Motion |
| **UI Components** | Shadcn UI, Lucide React Icons |
| **Content** | React Markdown, Sonner Toast |
| **Forms** | React Hook Form |

</details>

---

## 📦 Installation

### Prerequisites

> ✅ Node.js 18+ installed  
> ✅ PostgreSQL database (Aiven recommended)  
> ✅ Google Gemini or OpenAI API key

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone <your-repo-url>
cd second-brain-app

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# 4️⃣ Initialize database
npm run db:init

# 5️⃣ Start development server
npm run dev

# 6️⃣ Open browser
# Navigate to http://localhost:3000
```

### 🔐 Environment Configuration

Create a `.env.local` file in the root directory:

```env
# 🗄️ Database Configuration (Aiven PostgreSQL)
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# 🤖 AI Configuration (choose one or both)
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
# OR
OPENAI_API_KEY=your_openai_api_key_here
```

<details>
<summary><b>📝 Getting API Keys</b></summary>

**Google Gemini API:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and paste into `.env.local`

**OpenAI API:**
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new secret key
3. Copy and paste into `.env.local`

</details>

---

## 🗄️ Database Schema

<details>
<summary><b>📊 View Schema Details</b></summary>

### Table: `knowledge_items`

```sql
CREATE TABLE knowledge_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  type TEXT NOT NULL CHECK (type IN ('note', 'link', 'insight')),
  tags TEXT[] DEFAULT '{}',
  source_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 🚀 Indexes

Automatically created for optimal performance:

- ✅ **Type filtering** - Fast type-based queries
- ✅ **Tag searching** - GIN index for array operations
- ✅ **Date sorting** - Chronological ordering
- ✅ **Full-text search** - Content discovery

</details>

---

## 🎯 Usage

### 📝 Creating Knowledge Items

```mermaid
graph LR
    A[Navigate to Dashboard] --> B[Click 'Create New']
    B --> C[Fill Form]
    C --> D[AI Generates Summary]
    D --> E[AI Suggests Tags]
    E --> F[Submit & Save]
    style D fill:#9333ea
    style E fill:#9333ea
```

1. Navigate to the **Dashboard**
2. Click on the **"Create New"** tab
3. Fill in the form with your content
4. AI automatically generates a **summary** ✨
5. AI suggests relevant **tags** 🏷️
6. Click **Submit** to save

### 🔍 Browsing Knowledge

<table>
<tr>
<td width="25%" align="center">

**🔎 Search**

Full-text search across all items

</td>
<td width="25%" align="center">

**🗂️ Filter**

By type: note, link, insight

</td>
<td width="25%" align="center">

**📅 Sort**

By date or title (asc/desc)

</td>
<td width="25%" align="center">

**👁️ View**

Click cards for full details

</td>
</tr>
</table>

### 🧩 Using the Embeddable Widget

> **Embed your knowledge base on any website!**

```html
<!-- Copy this iframe code from Dashboard -->
<iframe 
  src="http://localhost:3000/widget" 
  width="100%" 
  height="600px"
  frameborder="0">
</iframe>
```

**Steps:**
1. Go to Dashboard → Click **"Embed"** button
2. Copy the generated iframe code
3. Paste on your website
4. Your knowledge base is now searchable externally! 🎉

---

## 🔌 Public API

### Query Endpoint

<div align="center">

```http
GET /api/public/brain/query?q=search_term
```

</div>

### 📥 Response Format

```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Understanding TypeScript Generics",
      "content": "Full content of the knowledge item...",
      "summary": "AI-generated summary of the content",
      "type": "note",
      "tags": ["typescript", "programming", "generics"],
      "source_url": "https://example.com/article",
      "created_at": "2026-02-07T10:30:00Z",
      "updated_at": "2026-02-07T10:30:00Z"
    }
  ]
}
```

### 💡 Usage Examples

<details>
<summary><b>cURL</b></summary>

```bash
curl http://localhost:3000/api/public/brain/query?q=javascript
```

</details>

<details>
<summary><b>JavaScript Fetch</b></summary>

```javascript
const response = await fetch(
  'http://localhost:3000/api/public/brain/query?q=javascript'
);
const data = await response.json();
console.log(data.data); // Array of knowledge items
```

</details>

<details>
<summary><b>Python Requests</b></summary>

```python
import requests

response = requests.get(
    'http://localhost:3000/api/public/brain/query',
    params={'q': 'javascript'}
)
data = response.json()
print(data['data'])
```

</details>

---

## 🏗️ Architecture

### 🎯 Portable Design Principles

<div align="center">

```mermaid
graph TD
    A[UI Components] --> B[Server Actions]
    B --> C[AI Service Layer]
    B --> D[Database Layer]
    C --> E[Gemini/OpenAI]
    D --> F[PostgreSQL]
    style C fill:#9333ea
    style D fill:#3b82f6
```

</div>

<table>
<tr>
<td width="50%">

### 🔌 Decoupled Layers

- **Database Layer** (`lib/db.ts`)
  - Abstracted PostgreSQL operations
  - Connection pooling
  - Easy provider switching

- **AI Service Layer** (`lib/ai.ts`)
  - Provider-agnostic integration
  - Fallback support
  - Summary & tag generation

</td>
<td width="50%">

### ⚡ Benefits

- ✅ Switch database providers easily
- ✅ Change AI providers (Gemini ↔ OpenAI)
- ✅ Migrate hosting platforms
- ✅ Scale components independently
- ✅ Maintain clean separation of concerns

</td>
</tr>
</table>

### 🧩 Component Hierarchy

```
RootLayout
├── 🎨 Header (Sticky Navigation)
├── 📄 Main Content
│   ├── 🏠 HomePage (ParallaxHero)
│   ├── 📊 Dashboard
│   │   └── KnowledgeDashboard
│   │       ├── 🔍 Search & Filter Controls
│   │       ├── 💳 KnowledgeCard (Grid)
│   │       │   └── 🪟 Scrollable Modal
│   │       └── 🧩 Embed Widget
│   ├── 📚 DocsPage
│   ├── 🔌 APIDocsPage
│   └── 🧩 WidgetPage
└── 🦶 Footer
```

---

## 📁 Project Structure

<details>
<summary><b>📂 Expand Full Structure</b></summary>

```
second-brain-app/
│
├── 📱 app/
│   ├── actions/
│   │   └── knowledge.ts          # ⚡ Server actions for CRUD
│   ├── api/
│   │   └── public/brain/query/   # 🔌 Public API endpoint
│   ├── dashboard/
│   │   └── page.tsx              # 📊 Dashboard (Client)
│   ├── docs/
│   │   └── page.tsx              # 📚 Documentation
│   ├── widget/
│   │   └── page.tsx              # 🧩 Embeddable widget
│   ├── api-docs/
│   │   └── page.tsx              # 🔌 API docs
│   ├── globals.css               # 🎨 Global styles
│   ├── layout.tsx                # 🏗️ Root layout
│   └── page.tsx                  # 🏠 Landing page
│
├── 🧩 components/
│   ├── ui/                       # 🎨 Shadcn UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── skeleton.tsx
│   │   ├── tabs.tsx
│   │   └── textarea.tsx
│   ├── knowledge-card.tsx        # 💳 Card with modal
│   ├── knowledge-dashboard.tsx   # 📊 Dashboard grid
│   ├── knowledge-form.tsx        # 📝 Create/edit form
│   ├── knowledge-skeleton.tsx    # ⏳ Loading skeleton
│   ├── parallax-hero.tsx         # 🎭 3D hero section
│   ├── smooth-scroll.tsx         # 🌊 Smooth scrolling
│   ├── header.tsx                # 🎨 Navigation
│   ├── footer.tsx                # 🦶 Footer
│   └── empty-state.tsx           # 📭 Empty state
│
├── 📚 lib/
│   ├── ai.ts                     # 🤖 AI service (Gemini/OpenAI)
│   ├── db.ts                     # 🗄️ Database layer
│   ├── query-ai.ts               # 🔍 Semantic search
│   └── utils.ts                  # 🛠️ Utilities
│
├── 🔧 scripts/
│   ├── init-db.ts                # 🗄️ DB initialization
│   ├── add-test-data.ts          # 📊 Test data generator
│   ├── test-ai.ts                # 🤖 AI testing
│   └── test-gemini.ts            # 🧪 Gemini testing
│
├── 📄 Configuration Files
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
│
└── 🌐 public/                    # Static assets
```

</details>

---

## 🚢 Deployment

### ▲ Vercel (Recommended)

<table>
<tr>
<td>

**1️⃣ Connect Repository**

Push code to GitHub

</td>
<td>

**2️⃣ Import to Vercel**

Import your repository

</td>
<td>

**3️⃣ Add Environment**

Configure variables

</td>
<td>

**4️⃣ Deploy**

Click deploy!

</td>
</tr>
</table>

### 🌐 Other Platforms

<div align="center">

| Platform | Deployment Status | Documentation |
|----------|------------------|---------------|
| **Netlify** | ✅ Supported | [Guide](https://docs.netlify.com/frameworks/next-js/) |
| **AWS Amplify** | ✅ Supported | [Guide](https://docs.amplify.aws/) |
| **Railway** | ✅ Supported | [Guide](https://docs.railway.app/) |
| **Render** | ✅ Supported | [Guide](https://render.com/docs) |
| **Digital Ocean** | ✅ Supported | [Guide](https://docs.digitalocean.com/) |

</div>

---

## 🎨 UX Principles

> **Design philosophy that guides every decision**

<table>
<tr>
<td align="center" width="25%">

### 🎯 Clarity

**Over Clutter**

Clean, focused interface with progressive disclosure

</td>
<td align="center" width="25%">

### 🤖 AI Co-pilot

**Not Autopilot**

Intelligent assistance without getting in the way

</td>
<td align="center" width="25%">

### ✨ Delight

**In Details**

Micro-interactions for premium experience

</td>
<td align="center" width="25%">

### 📱 Mobile

**First Design**

Seamless on all devices

</td>
</tr>
</table>

---

## 📱 Responsive Design

### Breakpoint Strategy

<div align="center">

```
📱 Mobile        📱 Tablet        💻 Desktop
320px+          640px - 1024px    1024px+
```

</div>

<details>
<summary><b>🎨 Key Responsive Features</b></summary>

- ✅ Adaptive padding (`sm:`, `md:`, `lg:` breakpoints)
- ✅ Responsive typography scaling
- ✅ Mobile-optimized modals and dialogs
- ✅ Touch-friendly interface elements
- ✅ Optimized grid layouts for all sizes
- ✅ Sticky navigation behavior
- ✅ Flexible content containers

**Grid Responsive Behavior:**
- **Mobile**: 1 column layout
- **Tablet** (`sm:`): 2 column grid
- **Desktop** (`lg:`): 3 column grid

</details>

---

## 🔐 Security & Best Practices

> **Security is built-in, not bolted-on**

<table>
<tr>
<td width="50%">

### 🛡️ Security Measures

- 🔒 **Read-only** public API
- 🔐 **SSL encryption** for database
- 🚫 **No API keys** in version control
- 🔒 **Environment variable** protection
- 🛡️ **SQL injection** prevention

</td>
<td width="50%">

### ✅ Best Practices

- ✨ **Modal scroll lock** for UX
- 🎨 **Hydration-safe** components
- ⚡ **Optimized rendering** performance
- 📱 **Responsive design** patterns
- 🧪 **Type safety** with TypeScript

</td>
</tr>
</table>

---

## 🐛 Known Issues & Fixes

<div align="center">

| Issue | Status | Solution |
|-------|--------|----------|
| Knowledge card modal scrolling | ✅ **Fixed** | Proper flex layout with `min-h-0` |
| Background scroll when modal open | ✅ **Fixed** | Body scroll lock implementation |
| Hydration mismatches | ✅ **Fixed** | Client-side particle generation |
| Responsive design inconsistencies | ✅ **Fixed** | Fully implemented across all pages |
| Modal overflow handling | ✅ **Fixed** | `overflow-y-auto` with flex container |

</div>

---

## 🤝 Contributing

<div align="center">

**We love contributions! Here's how you can help:**

</div>

### 🔧 Development Workflow

```bash
# 1️⃣ Fork the repository
# 2️⃣ Create a feature branch
git checkout -b feature/amazing-feature

# 3️⃣ Make your changes
# 4️⃣ Commit with conventional commits
git commit -m "feat: add amazing feature"

# 5️⃣ Push to your fork
git push origin feature/amazing-feature

# 6️⃣ Open a Pull Request
```

### 📋 Contribution Guidelines

<details>
<summary><b>View Guidelines</b></summary>

- ✅ Follow the existing code style
- ✅ Write meaningful commit messages
- ✅ Add tests for new features
- ✅ Update documentation as needed
- ✅ Ensure all tests pass
- ✅ Keep PRs focused and atomic

</details>

---

## 📄 License

<div align="center">

**MIT License**

This project is open source and available under the [MIT License](LICENSE).

*Feel free to use for personal or commercial purposes* 🎉

</div>

---

## 🙏 Acknowledgments

<div align="center">

<table>
<tr>
<td align="center" width="20%">

**Next.js**

Framework

</td>
<td align="center" width="20%">

**Shadcn UI**

Components

</td>
<td align="center" width="20%">

**Framer Motion**

Animations

</td>
<td align="center" width="20%">

**Vercel AI SDK**

AI Integration

</td>
<td align="center" width="20%">

**Lucide React**

Icons

</td>
</tr>
</table>

</div>

---

<div align="center">

### 💜 Built with love for knowledge workers everywhere

**⭐ Star this repo if you find it useful!**

[⬆ Back to Top](#-second-brain)

---

*Made with ❤️ using Next.js, TypeScript, and AI*

</div>