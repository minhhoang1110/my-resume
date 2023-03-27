import AboutMeSection from "../AboutMeSection";
import ColorSwitcher from "../ColorSwitcher";
import ContactMeSection from "../ContactMeSection";
import Footer from "../Footer";
import Header from "../Header";
import HomeBanner from "../HomeBanner";
import ResumeSection from "../ResumeSection";
import ScrollToTop from "../ScrollToTop";

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
