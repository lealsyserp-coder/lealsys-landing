import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Features } from '@/components/Features'
import { WhyLealsys } from '@/components/WhyLealsys'
import { Industries } from '@/components/Industries'
import { Pricing } from '@/components/Pricing'
import { DemoForm } from '@/components/DemoForm'
import { Footer } from '@/components/Footer'
import { WhatsAppFab } from '@/components/WhatsAppFab'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <WhyLealsys />
        <Industries />
        <Pricing />
        <DemoForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
