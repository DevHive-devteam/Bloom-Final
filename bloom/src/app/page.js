import { Navbar } from "./components/NavBar";
import { GridHoverHero } from "./components/GridHoverHero";
import { StickyCards } from "./components/stickyCards";
import { TextParallaxContentExample } from "./components/TextParallaxContent";
import { NavProvider } from "./context/NavContext";
import { DisappearingFeatures } from "./components/DisappearingScrollFeatures";
import CollapseCardFeatures from "./components/CollapseCardFeatures"
import StackedCardTestimonials from "./components/StackedCardTestimonials";

export default function Home() {
  return (
    <NavProvider>
      <Navbar />
      <GridHoverHero />
      
      <CollapseCardFeatures />
      <TextParallaxContentExample />
<StackedCardTestimonials />
      <DisappearingFeatures />
    </NavProvider>
  );
}
