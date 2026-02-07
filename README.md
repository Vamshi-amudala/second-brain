# Second Brain - AI-Powered Knowledge Management System

A professional full-stack knowledge management system built with Next.js, PostgreSQL, and AI integration. Capture, organize, and discover insights with intelligent automation.

![Second Brain](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue?style=for-the-badge&logo=postgresql)

## ✨ Features

- **AI-Powered Intelligence**: Automatic summary generation and tag suggestions using Gemini or OpenAI
- **Smart Dashboard**: Search, filter, and sort your knowledge with an intuitive interface
- **Beautiful UI**: Minimalist high-tech design with dark mode and smooth animations
- **Parallax Hero**: Stunning landing page with Framer Motion animations
- **Public API**: RESTful endpoint for programmatic access to your knowledge base
- **Portable Architecture**: Decoupled layers for easy migration and scaling

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Database**: PostgreSQL (Aiven)
- **AI**: Google Gemini / OpenAI (via Vercel AI SDK)
- **Animations**: Framer Motion

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd second-brain-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database Configuration (Aiven PostgreSQL)
   DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

   # AI Configuration (choose one or both)
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
   # OR
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Initialize the database**
   
   The database schema will be created automatically on first run. Alternatively, you can manually initialize:
   ```bash
   npm run db:init
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The system uses a single `knowledge_items` table:

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

Indexes are automatically created for:
- Type filtering
- Tag searching (GIN index)
- Date sorting
- Full-text search

## 🎨 UX Principles

1. **Clarity over Clutter**: Clean, focused interface with progressive disclosure
2. **AI as a Co-pilot**: Intelligent assistance without getting in the way
3. **Delight in Details**: Micro-interactions and animations for a premium experience

## 🔌 Public API

### Query Endpoint

```
GET /api/public/brain/query?q=search_term
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": "uuid",
      "title": "Knowledge Item Title",
      "content": "Full content...",
      "summary": "AI-generated summary",
      "type": "note",
      "tags": ["tag1", "tag2", "tag3"],
      "source_url": "https://...",
      "created_at": "2026-02-07T...",
      "updated_at": "2026-02-07T..."
    }
  ]
}
```

**Example:**
```bash
curl http://localhost:3000/api/public/brain/query?q=javascript
```

## 🏗️ Architecture

### Portable Design

The system is built with a decoupled architecture:

- **Database Layer** (`lib/db.ts`): Abstracted PostgreSQL operations with connection pooling
- **AI Service Layer** (`lib/ai.ts`): Provider-agnostic AI integration
- **Server Actions** (`app/actions/knowledge.ts`): Business logic separation
- **UI Components** (`components/`): Reusable, animated components

This design makes it easy to:
- Switch database providers
- Change AI providers
- Migrate to different hosting platforms
- Scale individual components

## 📁 Project Structure

```
second-brain-app/
├── app/
│   ├── actions/          # Server actions
│   ├── api/              # API routes
│   ├── dashboard/        # Dashboard page
│   ├── docs/             # Documentation page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── knowledge-card.tsx
│   ├── knowledge-dashboard.tsx
│   ├── knowledge-form.tsx
│   └── parallax-hero.tsx
├── lib/
│   ├── ai.ts             # AI service
│   ├── db.ts             # Database layer
│   └── utils.ts          # Utilities
└── public/               # Static assets
```

## 🎯 Usage

### Creating Knowledge Items

1. Navigate to the Dashboard
2. Click on the "Create New" tab
3. Fill in the form with your content
4. AI will automatically generate a summary and suggest tags
5. Submit to save

### Browsing Knowledge

1. Use the search bar to find specific items
2. Filter by type (note, link, insight)
3. Sort by date or title
4. Click on cards to view details

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔐 Security Notes

- The public API endpoint is read-only
- Database credentials should be kept secure
- Use SSL for production database connections
- API keys should never be committed to version control

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- AI integration via [Vercel AI SDK](https://sdk.vercel.ai/)

---

**Built with ❤️ for knowledge workers everywhere**
