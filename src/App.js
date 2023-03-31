import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import AboutPage from './components/AboutPage'
import BooksPage from './components/BooksPage'
import ContactPage from './components/ContactPage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/books">Books</Link>
        <Link to="/contact">Contact</Link>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />,
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
