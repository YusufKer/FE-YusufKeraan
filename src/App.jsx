import './App.css'
import Header from "./components/global/Header"
import Footer from "./components/global/Footer"
import Banner from './sections/Banner/Banner'
import BestGearSection from './sections/BestGear/BestGearSection'
import MainFeature from './sections/MainFeature/MainFeature'
import LatestPromo from './sections/LatestPromo/LatestPromo'
import InstagramGrid from './sections/InstagramGrid/InstagramGrid'

function App() {

  return (
    <>
      <Header/>
      <div className="space-y-mb md:space-y-dt">
        <Banner/>
        <BestGearSection/>
        <MainFeature/>
        <LatestPromo/>
        <InstagramGrid/>
      </div>
      <Footer/>
    </>
  )
}

export default App
