# 📍 Profile Mapper App

An interactive React web application that displays user profiles along with their mapped addresses using Mapbox. This project includes an admin dashboard, responsive UI with Tailwind CSS, search/filter functionality, and profile detail views.

## 🚀 Features

- 👤 View list of user profiles with name, photo, and description
- 🗺️ Click “Summary” to view the user's address on an interactive Mapbox map
- 🔍 Search and filter profiles by name and location
- ➕ Admin dashboard to add and delete profiles
- 📱 Fully responsive design using Tailwind CSS
- ⚙️ Error handling for invalid data or map failures
- ⏳ Loading indicators during map and data fetch
- 📄 Profile detail page with extended information

## 🛠️ Technologies Used

- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons)

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/profile-mapper-app.git
   cd profile-mapper-app

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Add your Mapbox token:**

Create a .env file at the root:
  ```bash
  VITE_MAPBOX_TOKEN=your_mapbox_access_token
  ```
Get your token from https://account.mapbox.com/access-tokens/

4. **Run the application:**
  ```bash
  npm run dev
  ```

5. **Build for production:**
  ```bash
  npm run build
  ```

## 🧪 Folder Structure
  ```bash
  profile-mapper-app/
  │
  ├── public/
  ├── src/
  │   ├── components/         # Reusable components (Map, Header, etc.)
  │   ├── pages/              # Main pages (Home, Dashboard, Profile Detail)
  │   ├── data/               # Static/mock profile data
  │   ├── App.jsx             # Main app with routes
  │   ├── main.jsx            # Entry point
  │   └── index.css           # Tailwind imports
  │
  ├── .env                   # API tokens
  ├── tailwind.config.js     # Tailwind config
  ├── postcss.config.js      # PostCSS setup
  ├── package.json
  └── README.md
  ```

## 📝 Notes
- Admin functions are basic (add/delete) and managed locally (no backend).
- Map only works if valid coordinates are provided and Mapbox token is valid.
- Future improvements can include: backend integration, role-based login, and edit functionality.
