import './css/App.css'; //importing the App.css file
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'; //importing the Routes and Route components from react-router-dom
import NavBar from './components/NavBar'; //importing the NavBar component
import { MovieProvider } from './contexts/MovieContext'; //importing the MovieProvider component
import { useEffect } from 'react'; //importing the useEffect hook from react

// This is the main component of the app
// It is the entry point of the app and it renders the Home component

function App() {

    useEffect(() => {
        fetch("/api/test")
            .then((res) => res.json())
            .then((data) => console.log("Backend response:", data))
            .catch((err) => console.error("Error:", err));
    }, []);

    useEffect(() => {
        fetch("/api/test")
            .then((res) => res.json())
            .then((data) => console.log("Backend response:", data))
            .catch((err) => console.error("Error:", err));
    }, []);

    return (
      <MovieProvider>
        <NavBar/>
        <main className='main-content'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/favorites' element={<Favorites/>}></Route>
            </Routes>
        </main>
      </MovieProvider> 
  )
}

// can't have 2 div in the same level.
    // so we need to wrap them in a single div 
    // instead of using div we can use fragment(<></>)



export default App
