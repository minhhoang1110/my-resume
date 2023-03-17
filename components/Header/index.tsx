import { DefaultPageProps } from "@/types/base";
import { Box, Flex } from "@chakra-ui/react";
import Container from "../Container";

interface Props extends DefaultPageProps {
  logo: string;
  phone: string;
}
const Header: React.FC<Props> = ({ themeColor, logo, phone }) => {
  return (
    <Box bg={themeColor} position="fixed" top={"0"} left={"0"} width={"full"}>
      <Container themeColor={themeColor}>
        <Flex alignItems={"center"} justifyContent="space-between">
          <Box fontSize={"23px"} fontWeight="800" lineHeight={"32px"}>
            {logo}
          </Box>
          <Box fontSize={"1rem"} fontWeight="600" lineHeight={"24px"}>
            {phone}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default Header;
