
import './App.css'
import LogIn from './component/LogIn'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
    <h1>Welcome To The Real World With React</h1>
    <LogIn/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App;
