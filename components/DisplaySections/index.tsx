import { lazy } from "react";
import ColorSwitcher from "../ColorSwitcher";
import HomeBanner from "../HomeBanner";
import ScrollToTop from "../ScrollToTop";

const AboutMeSection = lazy(() => import("../AboutMeSection"));
const ContactMeSection = lazy(() => import("../ContactMeSection"));
const Footer = lazy(() => import("../Footer"));
const Header = lazy(() => import("../Header"));
const ResumeSection = lazy(() => import("../ResumeSection"));

interface Props {
  data: any;
  type: string;
}

const RenderAllSections: React.FC<Props> = ({ data, type }) => {
  switch (type) {
    case "header":
      return <Header {...data} />;
    case "homeBanner":
      return <HomeBanner {...data} />;
    case "aboutMe":
      return <AboutMeSection {...data} />;
    case "resume":
      return <ResumeSection {...data} />;
    case "contactMe":
      return <ContactMeSection {...data} />;
    case "footer":
      return <Footer {...data} />;
    case "scrollToTop":
      return <ScrollToTop />;
    case "colorSwitcher":
      return <ColorSwitcher {...data} />;
    default:
      return <></>;
  }
};

export default RenderAllSections;
