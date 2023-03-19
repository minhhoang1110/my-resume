import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Container from "../Container";
import { FaPhone } from "react-icons/fa";
import Menu, { MenuItem } from "../Menu";

interface Props extends DefaultPageProps {
  logo: string;
  phone: string;
  menus: MenuItem[];
}
const Header: React.FC<Props> = ({ themeColor, logo, phone, menus }) => {
  return (
    <Box bg={themeColor} position="fixed" top={"0"} left={"0"} width={"full"}>
      <Container themeColor={themeColor}>
        <Flex alignItems={"center"} justifyContent="space-between">
          <Box fontSize={"23px"} fontWeight="800" lineHeight={"32px"}>
            {logo}
          </Box>
          <Flex
            fontSize={"1rem"}
            fontWeight="600"
            lineHeight={"24px"}
            alignItems="center"
          >
            <Icon
              as={FaPhone}
              fontSize="1.125rem"
              fontWeight={"800"}
              lineHeight="27px"
              marginRight={"8px"}
            />
            <Box marginRight={"8px"}>{phone}</Box>
            <Menu menus={menus} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default Header;
