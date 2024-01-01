import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/herosection/HeroSection'
import Stats from '@/components/stats/Stats'
import Services from '@/components/services/Services'
import ExamCity from '@/components/examcity/ExamCity'
import AcoFeature from '@/components/feature/AcoFeature'
import TravelFeature from '@/components/feature/TravelFeature'
import Faq from '@/components/Faqs/Faq'


function Home() {  
  return (
    <Layout >
        <HeroSection/>  
        <Stats/> 
        <Services/>
        <ExamCity/>
        <AcoFeature/>
        <TravelFeature/> 
        <Faq/>
       
    </Layout>
  )
}

export default Home