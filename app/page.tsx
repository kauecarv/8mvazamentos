import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import ClonagemSection from "./sections/clonagem/ClonagemSection";
import DesignChannels from "./sections/design-channels/DesignChannels";
import DiscordSection from "./sections/discord/DiscordSection";
import HeroSection from "./sections/hero/HeroSection";
import NewYear from "./sections/new-year/NewYear";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <DiscordSection />
      <DesignChannels />
      <ClonagemSection/>
      <NewYear/>
      <FooterComponent/>
    </>
  );
}


