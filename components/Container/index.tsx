import { DefaultPageProps } from "@/types/base";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends DefaultPageProps {
  children: ReactNode;
}
const Container: React.FC<Props> = ({ children, themeColor }) => {
  return (
    <Box
      bg={themeColor}
      maxWidth="1320px"
      width={"full"}
      height="full"
      margin={"0 auto"}
      padding="0 12px"
    >
      {children}
    </Box>
  );
};
export default Container;
