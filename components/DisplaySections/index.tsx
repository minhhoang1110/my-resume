import AboutMeSection from "../AboutMeSection";
import ContactMeSection from "../ContactMeSection";
import Footer from "../Footer";
import Header from "../Header";
import HomeBanner from "../HomeBanner";
import ResumeSection from "../ResumeSection";

interface Props {
  data: any;
  type: string;
}

const renderAllSections = ({ data, type }: Props) => {
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
    default:
      return "";
  }
};

export default renderAllSections;
