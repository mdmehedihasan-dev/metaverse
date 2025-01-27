import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import LearnMetaverseSection from "../components/LearnMetaverseSection"
import MetaverseCardSection from "../components/MetaverseCardSection"
import MetaverseSection from "../components/MetaverseSection"


const Home = () => {
  return (
    <div>
        <HeroSection/>
    <MetaverseSection/>
    <LearnMetaverseSection/>
    <MetaverseCardSection/>
    <HowItWorks/>
    </div>
  )
}

export default Home