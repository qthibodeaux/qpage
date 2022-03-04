import { useState } from 'react'
import { Grommet } from 'grommet'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HeaderLayer from './pages/portfolio/components/layer';
import MainPage from './pages/main';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}


//Main
function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const opener = () => setShowSidebar(true)
  const closer = () => setShowSidebar(false)

return (
  <Grommet theme={theme}>
    <Navbar opener={opener}/>
    <MainPage />
    {showSidebar && <HeaderLayer closer={closer} />}
    <Footer />
  </Grommet>
  )
}

export default App;
