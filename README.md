# 📚 Online Library System (Memphis Design Edition)

A vibrant, responsive Single Page Application (SPA) for managing a book collection. This project features a unique **80s Memphis Design** aesthetic (bold colors, hard shadows) while implementing complex React logic like **Redux state management**, **dynamic routing**, and **form validation**.

## 🚀 Features

### 1. Home Page
* **Welcome Section:** A bold landing area introducing the library.
* **Categories:** Quick links to filter books by genre (Fiction, Sci-Fi, etc.).
* **Popular Books:** A featured section displaying top-rated books with cover images.
* **Dynamic Header:** Shows the live count of books currently in the library (fetched via Redux).

### 2. Browse Books
* **Category Filtering:** URL-based filtering (e.g., `/books/Sci-Fi`).
* **Search Functionality:** Real-time search bar that filters by **Title** or **Author**.
* **Responsive Grid:** Cards adjust layout automatically for mobile and desktop.

### 3. Book Details
* **Dynamic Routing:** Fetches specific book data based on the ID in the URL (`/book/:id`).
* **Detailed View:** Shows full description, rating, author, and category.
* **Navigation:** Includes a "Back to Browse" button to preserve user flow.

### 4. Add Book (Redux Integrated)
* **State Management:** Uses **Redux Toolkit** to add new books to the global store.
* **Form Validation:** Prevents submission if fields (Title, Author, Rating) are empty or invalid.
* **Auto-Redirect:** Automatically navigates the user to the Browse page upon successful addition.

### 5. Custom 404 Page
* **Layout Logic:** Displays a custom error message **without the Header** (as per assignment requirements).
* **Routing Info:** dynamic display of the invalid URL that was accessed.

## 🛠️ Tech Stack

* **Frontend Framework:** React (Vite) 
* **State Management:** Redux Toolkit (`createSlice`, `useSelector`, `useDispatch`) 
* **Routing:** React Router DOM (v6 Data Router with Layouts) 
* **Styling:** Tailwind CSS (Custom Memphis Theme Configuration) 

## ⚙️ Installation & Run Instructions

Follow these steps to run the application locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AtulMishra001/online-library
    cd online-library
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Click the link shown in the terminal (usually `http://localhost:5173/`).

## 📂 Project Structure
```bash
src/
online-library/
├── node_modules/           # Project dependencies (auto-generated)
├── public/                 # Static assets (favicons, robots.txt)
│   └── vite.svg
├── src/
│   ├── components/         # Reusable UI (Header, etc.)
│   │   └── Header.jsx
│   ├── pages/              # Main Page Views
│   │   ├── Home.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── BookDetails.jsx
│   │   ├── AddBook.jsx
│   │   └── NotFound.jsx
│   ├── redux/              # State Management
│   │   ├── booksSlice.js
│   │   └── store.js
│   ├── utils/              # Helper Data
│   │   └── dummyData.js
│   ├── App.jsx             # Router Setup & Layout Wrapper
│   ├── index.css           # Tailwind "Memphis" Theme Config
│   └── main.jsx            # ⚡ React Entry Point (Mounts App to DOM)
├── .gitignore              # Tells Git which files to ignore
├── index.html              # ⚡ HTML Entry Point (Vite injects React here)
├── package.json            # ⚡ Project Metadata & Dependencies list
├── package-lock.json       # Exact versions of installed dependencies
├── postcss.config.js       # CSS processing configuration
├── README.md               # Project documentation
└── vite.config.js          # Vite Bundler configuration
```
---
*Submitted for React Assignment: Online Library System.*

[GitHub Link](https://github.com/AtulMishra001/online-library)