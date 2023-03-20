import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Container from "../Container";
import { FaPhone } from "react-icons/fa";
import Menu, { MenuItem } from "../Menu";
import { useSelector } from "react-redux";
import { useScrolling } from "@/hooks";

interface Props extends DefaultPageProps {
  logo: string;
  phone: string;
  menus: MenuItem[];
}
const Header: React.FC<Props> = ({ logo, phone, menus }) => {
  const themeColor: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  const { isScrolling, scrollTop } = useScrolling();
  return (
    <Box
      bg={isScrolling && scrollTop > 0 ? "#ffffff" : themeColor}
      position="fixed"
      top={"0"}
      left={"0"}
      zIndex="800"
      width={"full"}
      borderBottom={isScrolling && scrollTop > 0 ? "1px solid #efefef" : "none"}
    >
      <Container
        themeColor={isScrolling && scrollTop > 0 ? "#ffffff" : themeColor}
      >
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
            <Menu menus={menus} themeColor={themeColor} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default Header;
