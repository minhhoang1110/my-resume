import Header from "../Header";

interface Props {
  data: any;
  type: string;
}

const renderAllSections = ({ data, type }: Props) => {
  switch (type) {
    case "header":
      return <Header {...data} />;
    default:
      return "";
  }
};

export default renderAllSections;
