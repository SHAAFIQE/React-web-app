import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/about'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Projects from './pages/Projects'
  
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/sign-in" element ={<SignIn />} />
        <Route path="/sign-up" element ={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}
