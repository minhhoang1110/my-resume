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
    default:
      return "";
  }
};

export default renderAllSections;
