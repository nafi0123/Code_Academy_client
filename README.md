# 🎓 CodeAcademy Client

A modern, full-featured online coding academy platform built with **Next.js** and **Tailwind CSS**.

[![vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnafi0123%2FCode_Academy_client&project-name=code-academy-client&repository-name=Code_Academy_client)

---

## 💡 Project Description

**CodeAcademy** is a dynamic, user-centric online learning platform designed to provide a seamless educational experience. It serves as the frontend client for a comprehensive coding school, allowing users to:

* Browse a wide catalog of coding courses, including **Python, JavaScript, React, Next.js, Java, C++**, and more.
* Securely **authenticate** using email/password or Google OAuth.
* **Enroll** in courses and manage their progress.
* Post and view **reviews** to help other learners.
* Access a personalized **user dashboard** to track enrolled courses.

The platform is built on modern web standards, ensuring a fast, responsive, and polished UI across all devices.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js** | React Framework for production (App Router) |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework for rapid UI development |
| **Authentication** | **Firebase Auth** | For email/password and **Google OAuth** integration |
| **User Experience** | **Responsive Design** | Optimized for all screen sizes |
| **Deployment** | **Vercel** | Global edge network for Next.js applications |

### Key Features

* **Public & Protected Routes:** Role-based access for different user sections.
* **Course Enrollment Management:** Streamlined process for users to join courses.
* **Review System:** Dedicated system for user feedback on courses.
* **User Dashboard:** Management hub for enrolled courses and personal reviews.
* **Dynamic Routing:** SEO-friendly pages for individual course details (`/courses/[id]`).

---

## 🗺️ Route Map

The following table outlines the key pages and their access requirements:

| Route | Description | Access |
| :--- | :--- | :--- |
| `/` | Home page with banner, popular courses, and highlight sections. | Public |
| `/allCourses` | Full list and catalog of all available coding courses. | Public |
| `/aboutUs` | Information about the CodeAcademy platform. | Public |
| `/courses/[id]` | Dynamic course details page with enroll and review options. | Public |
| `/login` | User login page (Email/Password & Google OAuth). | Public |
| `/register` | User registration page. | Public |
| `/allReview` | View all course reviews from all users. | **Protected** (Authenticated Users) |
| `/myCourse` | User's enrolled courses and progress tracking. | **Protected** (Authenticated Users) |
| `/myReview` | View and manage the user's posted course reviews. | **Protected** (Authenticated Users) |
| `/addToCard` | Add and manage courses in the user's shopping cart. | **Protected** (Authenticated Users) |

---

## ⚙️ Setup & Installation

Follow these steps to get a local copy of the project running on your machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn
* A **Firebase Project** for authentication

### 1. Clone the repository

```bash
git clone [https://github.com/nafi0123/Code_Academy_client.git](https://github.com/nafi0123/Code_Academy_client.git)
cd Code_Academy_client