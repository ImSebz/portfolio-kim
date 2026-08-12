import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { Hero } from "./components/Hero/Hero";
import { BrandProof } from "./components/BrandProof/BrandProof";
import { Management } from "./components/Management/Management";
import { DigitalExperiences } from "./components/DigitalExperiences/DigitalExperiences";
import { EventsSection } from "./components/EventsSection/EventsSection";
import { SocialWork } from "./components/SocialWork/SocialWork";
import { Profile } from "./components/Profile/Profile";
import { Contact } from "./components/Contact/Contact";
import { SiteFooter } from "./components/SiteFooter/SiteFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <BrandProof />
      <Management />
      <DigitalExperiences />
      <EventsSection />
      <SocialWork />
      <Profile />
      <Contact />
      <SiteFooter />
    </main>
  );
}
