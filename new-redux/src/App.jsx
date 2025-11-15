import Testing from "./comp/Testing"
import ForwardRefEx from "./comp/UseRefEx"
import UseRefEx from "./comp/UseRefEx"
import NewComp from "./newComp"
import {Link, Route,Routes} from 'react-router-dom'
import Home from "./pages/home"
import About from "./pages/About"
import Service from "./pages/Service"

function App() {
  

  return (
    <>
      
      <h1>React Router Sample</h1>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>{' '} About</Link>
          <Link to='/service'>{' '} Service</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>


      </Routes>


{/*       
      <NewComp></NewComp>
      <Testing></Testing>
      <UseRefEx></UseRefEx>
      <ForwardRefEx></ForwardRefEx> */}
    </>
  )
}

export default App
