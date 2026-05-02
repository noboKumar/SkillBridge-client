# SkillBridge 🎓
**"Connect with Expert Tutors, Learn Anything"**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

---

<center>
<img src="./public/skillbridge-web-mockup.jpg" alt="skillbridge" width="800px" height="500px" align="center" >
</center>
<br>

**Live Preview:** [https://skillbridgex.vercel.app](https://skillbridgex.vercel.app)
<br>

## 🌟 Overview

**SkillBridge** is a premium, full-stack tutoring platform designed to bridge the gap between motivated learners and expert educators. Built with a focus on modern aesthetics and seamless user experience, the platform allows students to book personalized 1-on-1 sessions, tutors to manage their teaching business, and admins to oversee the entire ecosystem.

### **Key Highlights:**
- **Premium UI/UX:** Built with a custom design system, glassmorphism, and dynamic animations.
- **Role-Based Access:** Distinct experiences for Students, Tutors, and Admins.
- **Real-time Stats:** Interactive dashboard with animated counter components.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.

---

## 🚀 Tech Stack

### **Frontend**
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion & CSS Transitions
- **State Management:** React Context & TanStack Query

### **Backend**
- **Server:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JSON Web Tokens (JWT) & Bcrypt
- **Validation:** Zod

---

## 🛠️ Features

### **For Students 👨‍🎓**
- **Smart Search:** Filter tutors by subject, rating, and price.
- **Booking System:** Seamlessly schedule 1-on-1 sessions.
- **Interactive Dashboard:** Track upcoming and past sessions.
- **Reviews:** Leave feedback for tutors after completed sessions.

### **For Tutors 👨‍🏫**
- **Profile Management:** Showcase expertise, bio, and hourly rates.
- **Availability Manager:** Set and manage teaching slots.
- **Session Tracking:** View and manage upcoming teaching bookings.
- **Earnings/Stats:** View ratings and teaching history.

### **For Admins 🛡️**
- **User Management:** Oversee all platform participants.
- **Category Management:** Manage subjects and tutoring categories.
- **Platform Analytics:** View total bookings and user statistics.

---

## ⚙️ Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- PostgreSQL database instance
- npm, yarn, or pnpm

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/noboKumar/SkillBridge-frontend.git
   cd skillbridge-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

### **Backend Setup**
1. Navigate to the backend directory.
2. Install dependencies: `npm install`.
3. Configure `.env` with `DATABASE_URL` and `JWT_SECRET`.
4. Run Prisma migrations: `npx prisma migrate dev`.
5. Start backend: `npm run dev`.

---

## 📸 UI Highlights

- **Hero Section:** Aceternity-inspired grid background with premium typography.
- **Animated Stats:** Real-time counter animations for platform growth.
- **Glassmorphic Navbar:** Sticky navigation with backdrop-blur effects.
- **Modern Dashboards:** Role-specific layouts with sidebar navigation.

---

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by [Nobo Kumar](https://github.com/noboKumar)
