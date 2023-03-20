import AboutMeSection from "../AboutMeSection";
import Header from "../Header";
import HomeBanner from "../HomeBanner";

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
    default:
      return "";
  }
};

export default renderAllSections;
