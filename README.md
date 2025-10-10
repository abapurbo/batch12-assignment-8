# 📱 HERO.IO Apps Store Explore

## Project Overview
The purpose of this project is to create an **interactive and user-friendly App Store Dashboard**. Users can browse different apps, search, view detailed information, install/uninstall apps, and track app ratings. The project is built using **React.js**, **React Router**, **localStorage**, and **Recharts**.

---

## 🔹 Key Features

### Home Page
- Center-aligned banner with heading, description, and store buttons.
- Top Apps Section displaying popular apps with image, title, downloads, and ratings.
- **Show All** button to navigate to the All Apps page.

### All Apps Page
- Display all apps from JSON data in a responsive grid layout.
- Live search functionality to filter apps by title (case-insensitive).
- Shows total number of apps and a “No App Found” message if search yields no result.

### App Details Page
- Displays app information: title, image, downloads, reviews, and ratings.
- Install button with **localStorage** integration and success toast notification.
- Review chart visualizing star ratings using **Recharts**.
- App description section with detailed information.

### Installation Page
- Displays installed apps from **localStorage**.
- Users can uninstall apps with a confirmation toast.
- Sorting feature by download count (High → Low, Low → High).

### Navigation & UX
- Custom Header with logo, navigation links, and GitHub contribution button.
- Custom Footer with creative design.
- Smooth page transitions with loading animations during navigation and search.
- Error page for invalid routes and relevant messages for not found apps.

### Challenge Features
- LocalStorage-based install/uninstall system.
- Loading animations for page navigation and search operations.
- Fully responsive design for desktop, tablet, and mobile devices.

---

## 🔹 Tech Stack
- **Frontend:** React.js, TailwindCSS,DaisyUi,JavaScript 
- **Routing:** React Router v6  
- **Charts:** Recharts  
- **State & Storage:** React Context API, localStorage  
- **Notifications:** React Toastify  

