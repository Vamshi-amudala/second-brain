<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,18,20,24&height=200&section=header&text=Second%20Brain&fontSize=60&fontColor=fff&animation=twinkling&fontAlignY=35&desc=AI-Powered%20Knowledge%20Management%20System&descAlignY=55&descSize=20"/>

<h3>
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=9333EA&center=true&vCenter=true&random=false&width=900&lines=Capture+%7C+Organize+%7C+Discover+Insights;AI-Powered+Summaries+%26+Smart+Tags;Next.js+16+%7C+PostgreSQL+%7C+Gemini+AI;Full-Stack+Knowledge+Base+Platform;Building+Your+Digital+Second+Brain+🧠" alt="Typing SVG" />
</h3>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/🚀_Live_Demo-Coming_Soon-FF6B6B?style=for-the-badge&labelColor=8B5CF6"/></a>
  <a href="#-installation"><img src="https://img.shields.io/badge/⚡_Quick_Start-Get_Started-22C55E?style=for-the-badge&labelColor=059669"/></a>
  <a href="#-public-api"><img src="https://img.shields.io/badge/📡_API_Docs-Explore-3B82F6?style=for-the-badge&labelColor=1D4ED8"/></a>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&labelColor=CA8A04"/>
  <img src="https://komarev.com/ghpvc/?username=second-brain&label=Project+Views&color=blueviolet&style=for-the-badge"/>
</p>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

</div>

## <img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="30" /> Welcome to Second Brain

```typescript
@Service
class SecondBrain implements KnowledgeManagementSystem {
    
    private readonly features = {
        ai: "Gemini & OpenAI Integration",
        database: "PostgreSQL with Advanced Indexing",
        frontend: "Next.js 16 + Tailwind CSS + Framer Motion",
        architecture: "Microservices-Ready & Cloud-Native"
    };
    
    @PostConstruct
    async initialize() {
        console.log("🧠 Initializing Your Second Brain...");
        await this.connectDatabase();
        await this.loadAIModels();
        await this.startServer();
        console.log("✅ Ready to capture knowledge!");
    }
    
    public async captureKnowledge(content: string): Promise<KnowledgeItem> {
        const summary = await this.ai.generateSummary(content);
        const tags = await this.ai.suggestTags(content);
        
        return this.repository.save({
            content,
            summary,
            tags,
            timestamp: new Date()
        });
    }
    
    public searchKnowledge(query: string): Promise<KnowledgeItem[]> {
        return this.ai.semanticSearch(query);
    }
}
```

<div align="center">

### 🎯 **Impact Metrics**

<table>
  <tr>
    <td align="center">
      <img src="https://img.icons8.com/fluency/96/artificial-intelligence.png" width="65"/><br/>
      <b>AI-Powered</b><br/>
      <sub>Smart Summaries & Tags</sub>
    </td>
    <td align="center">
      <img src="https://img.icons8.com/fluency/96/speed.png" width="65"/><br/>
      <b>Lightning Fast</b><br/>
      <sub>Real-time Search</sub>
    </td>
    <td align="center">
      <img src="https://img.icons8.com/fluency/96/cloud.png" width="65"/><br/>
      <b>Cloud Native</b><br/>
      <sub>Scalable Architecture</sub>
    </td>
    <td align="center">
      <img src="https://img.icons8.com/fluency/96/api-settings.png" width="65"/><br/>
      <b>RESTful API</b><br/>
      <sub>Easy Integration</sub>
    </td>
  </tr>
</table>

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="32"/> Features & Capabilities

<div align="center">

<table>
<tr>
<td width="50%" valign="top">

### 🤖 **AI Intelligence**

<p align="center">
  <img src="https://skillicons.dev/icons?i=tensorflow" width="50"/>
</p>

```python
ai_features = {
    "auto_summarization": {
        "provider": ["Gemini", "OpenAI"],
        "accuracy": "95%+",
        "speed": "< 2 seconds"
    },
    "smart_tagging": {
        "method": "NLP + Context Analysis",
        "suggestions": "Intelligent & Relevant"
    },
    "semantic_search": {
        "algorithm": "Vector Embeddings",
        "relevance": "Highly Contextual"
    }
}
```

**✨ What You Get:**
- ⚡ Instant AI-generated summaries
- 🏷️ Context-aware tag suggestions  
- 🔍 Semantic search capabilities
- 🎯 Smart content categorization

</td>
<td width="50%" valign="top">

### 🎨 **Beautiful UI/UX**

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,tailwind" width="100"/>
</p>

```css
.second-brain {
    design: "Minimalist High-Tech";
    animations: "Framer Motion 3D";
    responsive: "Mobile-First";
    theme: "Dark Mode + Smooth Transitions";
    layout: "Parallax Hero + Cards";
}
```

**✨ Experience:**
- 🌙 Stunning dark mode interface
- 🎭 3D parallax hero animations
- 📱 Fully responsive design
- 💫 Smooth Framer Motion effects
- 🎨 Modern glassmorphism cards

</td>
</tr>
<tr>
<td width="50%" valign="top">

### ⚡ **Core Features**

<p align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="120">
</p>

- 📊 **Smart Dashboard** - Filter, sort & organize
- 🔎 **Real-time Search** - Full-text + semantic
- 🗂️ **Type System** - Notes, Links, Insights
- 📅 **Flexible Sorting** - Date, title, relevance
- 💳 **Modal Views** - Beautiful card details
- 🧩 **Widgets** - Embeddable search widget
- 📥 **Import/Export** - Data portability

</td>
<td width="50%" valign="top">

### 🔧 **Developer Experience**

<p align="center">
  <img src="https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif" width="120">
</p>

- 🌐 **RESTful API** - Clean endpoints
- 📦 **Modular Architecture** - Easy to extend
- 🏛️ **Portable Design** - Switch providers easily
- 🐳 **Docker Ready** - Container support
- ☁️ **Cloud Native** - Deploy anywhere
- 🧪 **TypeScript** - Full type safety
- 📚 **Documentation** - Comprehensive guides

</td>
</tr>
</table>

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="35"/> Tech Stack & Architecture

<div align="center">

### 🛠️ **Technology Arsenal**

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br><b>Next.js 16</b>
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br><b>TypeScript</b>
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="48" height="48" alt="PostgreSQL" />
<br><b>PostgreSQL</b>
</td>
<td align="center" width="96">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind" />
<br><b>Tailwind</b>
</td>
<td align="center" width="96">
<img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" width="48" height="48" alt="Framer" />
<br><b>Framer</b>
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=redis" width="48" height="48" alt="Redis" />
<br><b>Redis</b>
</td>
</tr>
</table>

<details>
<summary><b>📚 Complete Technology Breakdown</b></summary>

<br>

<table>
<tr>
<td width="50%" valign="top">

### 🎨 **Frontend Stack**

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,typescript,tailwind,html,css&perline=3" />
</p>

```javascript
const frontend = {
  framework: 'Next.js 16 (App Router)',
  language: 'TypeScript 5.0',
  styling: 'Tailwind CSS 3.4',
  components: 'Shadcn UI',
  animations: 'Framer Motion',
  icons: 'Lucide React',
  markdown: 'React Markdown',
  forms: 'React Hook Form',
  notifications: 'Sonner Toast'
};
```

</td>
<td width="50%" valign="top">

### ⚙️ **Backend & Infrastructure**

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,postgresql,redis,docker&perline=3" />
</p>

```yaml
backend:
  runtime: Next.js API Routes
  database: PostgreSQL (Aiven)
  caching: Redis
  ai_providers:
    - Google Gemini
    - OpenAI GPT-4
  architecture:
    - Server Actions
    - RESTful API
    - Microservices-Ready
```

</td>
</tr>
</table>

</details>

### 🏗️ **System Architecture**

```mermaid
graph TB
    subgraph "🎨 Frontend Layer"
        A[Next.js 16 App]
        B[React Components]
        C[Framer Motion]
    end
    
    subgraph "⚡ Application Layer"
        D[Server Actions]
        E[API Routes]
        F[Public API]
    end
    
    subgraph "🤖 AI Services"
        G[Gemini AI]
        H[OpenAI]
        I[Vector Search]
    end
    
    subgraph "💾 Data Layer"
        J[(PostgreSQL)]
        K[(Redis Cache)]
    end
    
    A --> B --> C
    B --> D --> E
    E --> F
    D --> G & H --> I
    D --> J
    E --> J & K
    
    style A fill:#9333ea
    style G fill:#f59e0b
    style H fill:#10b981
    style J fill:#3b82f6
```

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="35" /> Quick Start Guide

<div align="center">

### ⚡ **Get Up and Running in 5 Minutes**

<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="400">

</div>

### 📋 **Prerequisites**

<table>
<tr>
<td align="center" width="33%">
  <img src="https://img.icons8.com/fluency/96/node-js.png" width="60"/><br/>
  <b>Node.js 18+</b><br/>
  <sub>Runtime Environment</sub>
</td>
<td align="center" width="33%">
  <img src="https://img.icons8.com/fluency/96/postgresql.png" width="60"/><br/>
  <b>PostgreSQL</b><br/>
  <sub>Database (Aiven Recommended)</sub>
</td>
<td align="center" width="33%">
  <img src="https://img.icons8.com/fluency/96/api-settings.png" width="60"/><br/>
  <b>AI API Key</b><br/>
  <sub>Gemini or OpenAI</sub>
</td>
</tr>
</table>

### 🚀 **Installation Steps**

```bash
# 1️⃣ Clone the Repository
git clone https://github.com/yourusername/second-brain.git
cd second-brain

# 2️⃣ Install Dependencies
npm install

# 3️⃣ Set Up Environment Variables
cp .env.example .env.local
# Edit .env.local with your credentials

# 4️⃣ Initialize Database
npm run db:init

# 5️⃣ Start Development Server
npm run dev

# 6️⃣ Open Your Browser
# Navigate to http://localhost:3000
```

<div align="center">

### 🎉 **That's it! Your Second Brain is Ready!**

[![Open in Browser](https://img.shields.io/badge/🌐_Open-http://localhost:3000-FF6B6B?style=for-the-badge)](http://localhost:3000)

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="35"/> Usage & Features

### 📝 **Creating Knowledge Items**

<div align="center">

```mermaid
graph LR
    A[📊 Dashboard] --> B[➕ Create New]
    B --> C[📝 Fill Form]
    C --> D[🤖 AI Magic]
    D --> E[✨ Summary Generated]
    D --> F[🏷️ Tags Suggested]
    E --> G[💾 Save]
    F --> G
    G --> H[🎉 Done!]
    
    style D fill:#9333ea,color:#fff
    style E fill:#10b981,color:#fff
    style F fill:#f59e0b,color:#fff
    style H fill:#3b82f6,color:#fff
```

</div>

**Step-by-Step:**

1. **Navigate** to the Dashboard 📊
2. **Click** the "Create New" tab ➕
3. **Enter** your content (note, link, or insight) 📝
4. **Watch** AI generate summary automatically ✨
5. **Review** smart tag suggestions 🏷️
6. **Submit** to save ✅

### 🔍 **Browsing & Searching**

<table>
<tr>
<td width="25%" align="center">

<img src="https://img.icons8.com/fluency/96/search.png" width="60"/><br/>
**🔎 Search**

Full-text & semantic search

</td>
<td width="25%" align="center">

<img src="https://img.icons8.com/fluency/96/filter.png" width="60"/><br/>
**🗂️ Filter**

By type: Notes, Links, Insights

</td>
<td width="25%" align="center">

<img src="https://img.icons8.com/fluency/96/sorting-options.png" width="60"/><br/>
**📅 Sort**

By date or title

</td>
<td width="25%" align="center">

<img src="https://img.icons8.com/fluency/96/visible.png" width="60"/><br/>
**👁️ View**

Click cards for details

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" width="35" /> Public API Documentation

<div align="center">

### 📡 **RESTful API Endpoints**

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="120">

</div>

### 🔌 **Query Endpoint**

```http
GET /api/public/brain/query?q={search_term}
```

### 📥 **Response Format**

```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Understanding TypeScript Generics",
      "content": "Full content...",
      "summary": "AI-generated summary",
      "type": "note",
      "tags": ["typescript", "programming", "generics"],
      "source_url": "https://example.com/article",
      "created_at": "2026-02-09T10:30:00Z",
      "updated_at": "2026-02-09T10:30:00Z"
    }
  ]
}
```

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif" width="35"/> Deployment Guide

<div align="center">

### 🚀 **Deploy to Production**

<img src="https://user-images.githubusercontent.com/74038190/212281775-b468df30-4edc-4bf8-a4ee-f52e1aaddc86.gif" width="400">

</div>

### ▲ **Vercel (Recommended)**

<table>
<tr>
<td align="center" width="25%">

<img src="https://img.icons8.com/fluency/96/github.png" width="60"/><br/>
**1️⃣ Connect**

Push code to GitHub

</td>
<td align="center" width="25%">

<img src="https://img.icons8.com/fluency/96/import.png" width="60"/><br/>
**2️⃣ Import**

Import to Vercel

</td>
<td align="center" width="25%">

<img src="https://img.icons8.com/fluency/96/settings.png" width="60"/><br/>
**3️⃣ Configure**

Add environment vars

</td>
<td align="center" width="25%">

<img src="https://img.icons8.com/fluency/96/rocket.png" width="60"/><br/>
**4️⃣ Deploy**

Click deploy!

</td>
</tr>
</table>

```bash
# One-Click Deploy with Vercel CLI
npm i -g vercel
vercel --prod
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Handshake.gif" width="35"/> Contributing

<div align="center">

**We love contributions! Here's how you can help:**

<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="200">

</div>

### 🔧 **Development Workflow**

```bash
# 1️⃣ Fork the repository on GitHub
# 2️⃣ Clone your fork
git clone https://github.com/YOUR_USERNAME/second-brain.git

# 3️⃣ Create a feature branch
git checkout -b feature/amazing-feature

# 4️⃣ Make your changes and commit
git add .
git commit -m "feat: add amazing feature"

# 5️⃣ Push to your fork
git push origin feature/amazing-feature

# 6️⃣ Open a Pull Request
```

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## 📄 License

<div align="center">

### **MIT License**

This project is open source and available under the [MIT License](LICENSE).

**Feel free to use for personal or commercial purposes!** 🎉

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## 🙏 Acknowledgments

<div align="center">

### **Built With Amazing Technologies**

<table>
<tr>
<td align="center" width="20%">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="60"/><br/>
  <b>Next.js</b><br/>
  <sub>Framework</sub>
</td>
<td align="center" width="20%">
  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="60"/><br/>
  <b>Shadcn UI</b><br/>
  <sub>Components</sub>
</td>
<td align="center" width="20%">
  <img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" width="60"/><br/>
  <b>Framer Motion</b><br/>
  <sub>Animations</sub>
</td>
<td align="center" width="20%">
  <img src="https://skillicons.dev/icons?i=postgresql" width="60"/><br/>
  <b>PostgreSQL</b><br/>
  <sub>Database</sub>
</td>
<td align="center" width="20%">
  <img src="https://img.icons8.com/fluency/96/artificial-intelligence.png" width="60"/><br/>
  <b>Vercel AI</b><br/>
  <sub>AI Integration</sub>
</td>
</tr>
</table>

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

## <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Handshake.gif" width="35"/> Connect & Support

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/216122065-2f028bae-25d6-4a3c-bc9f-175394ed5011.png" width="250">

### 💬 **Let's Build Something Amazing Together**

<br>

[![GitHub Stars](https://img.shields.io/github/stars/yourusername/second-brain?style=for-the-badge&logo=github&color=yellow)](https://github.com/yourusername/second-brain/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/yourusername/second-brain?style=for-the-badge&logo=github&color=blue)](https://github.com/yourusername/second-brain/network)
[![GitHub Issues](https://img.shields.io/github/issues/yourusername/second-brain?style=for-the-badge&logo=github&color=red)](https://github.com/yourusername/second-brain/issues)

<br>

### 💭 **Thought of the Day**

<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" />

<br>

---

### ⭐ **If this project helps you, consider giving it a star!**

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">

<div align="center">

### 💜 **Built with love for knowledge workers everywhere**

**[⬆ Back to Top](#-second-brain)**

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,18,20,24&height=150&section=footer"/>

</div>

---

<div align="center">

**💻 Crafted with ❤️, ☕, and 🧠 by the Second Brain Team**

```javascript
while (alive) {
    learn();
    build();
    share();
    repeat();
}
```

*"The best way to predict the future is to create it."* – Alan Kay

**© 2025 Second Brain. Building the future of knowledge management, one commit at a time.**

</div>