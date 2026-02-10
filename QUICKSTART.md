# Tillsammans digitalt - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
/app                    - Next.js pages
  /lesson/[id]         - Dynamic lesson pages
  /lessons             - Lessons overview
  /progress            - User progress tracking
  /help                - Help & support
/components            - Reusable components
  /interactive         - Interactive lesson components
/lib                   - Utilities and data
  lessons.ts           - Lesson definitions
/public                - Static assets
```

## 🎨 Customization

### Adding New Lessons

Edit `lib/lessons.ts`:

```typescript
{
  id: "your-lesson-id",
  title: "Your Lesson Title",
  description: "Description",
  category: "communication", // or "e-services", "security", "basics"
  difficulty: "beginner",
  duration: 15,
  points: 150,
  steps: [
    {
      id: "step-1",
      type: "instruction",
      title: "Step Title",
      content: "Step content...",
      hint: "Optional hint"
    }
  ]
}
```

### Creating Interactive Components

1. Create a new component in `/components/interactive/`
2. Export it with `onComplete` callback
3. Reference it in lesson step: `component: "YourComponentName"`

Example:
```typescript
export default function YourComponent({ onComplete }: { onComplete: () => void }) {
  return (
    <div>
      {/* Your interactive content */}
      <button onClick={onComplete}>Complete</button>
    </div>
  );
}
```

## 🎯 Key Features Implemented

✅ Senior-friendly UI (large fonts, high contrast)
✅ Progressive lesson system
✅ Interactive phone simulations
✅ Points and achievements
✅ Progress tracking
✅ Help & support pages
✅ Responsive design

## 🔄 Next Steps

### To add a database:
1. Install Prisma: `npm install @prisma/client`
2. Set up Prisma schema
3. Connect to PostgreSQL/MySQL
4. Replace mock data with database queries

### To add authentication:
1. Install NextAuth: `npm install next-auth`
2. Set up authentication providers
3. Protect lesson routes
4. Store user progress

### To add real-time support:
1. Integrate chat service (e.g., Crisp, Intercom)
2. Add phone support integration
3. Implement mentor matching system

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Or build for production:
```bash
npm run build
npm start
```

## 📚 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Framer Motion** - Animations (planned)

## 🤝 Support

For questions or issues:
- Email: hjalp@tillsammansdigitalt.se
- Phone: 070-481 03 77

## 📄 License

© 2026 IT-Weor AB. All rights reserved.
