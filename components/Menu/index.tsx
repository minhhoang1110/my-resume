import { DefaultPageProps } from "@/types/base";
import {
  Box,
  Button,
  Flex,
  Link,
  ListItem,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export interface MenuItem {
  label: string;
  link: string;
}
interface Props extends DefaultPageProps {
  menus: MenuItem[];
}
const Menu: React.FC<Props> = ({ menus }) => {
  const [isClickedButton, setIsClickedButton] = useState(false);
  const handleOnClickButton = () => {
    setIsClickedButton(!isClickedButton);
  };
  return (
    <Box>
      <Box>
        <Button
          background={"none"}
          border="none"
          outline={"none"}
          padding="10px"
          margin={"18px 15px"}
          height="30px"
          width={"25px"}
          minWidth="unset"
          position="relative"
          zIndex={isClickedButton ? "1001" : "unset"}
          _hover={{ background: "none", border: "none", outline: "none" }}
          onClick={handleOnClickButton}
        >
          <Box
            width={"100%"}
            height="2px"
            background={isClickedButton ? "#ffffff" : "#3c3636"}
            opacity="1"
            transition={".25s ease-in-out"}
            transform={isClickedButton ? "rotate(45deg)" : "rotate(0deg)"}
            transformOrigin={"left center"}
            position="absolute"
            left={isClickedButton ? "3px" : "0px"}
            top={isClickedButton ? "5px" : "7px"}
          ></Box>
          <Box
            width={isClickedButton ? "0" : "100%"}
            height="2px"
            background={isClickedButton ? "#ffffff" : "#3c3636"}
            opacity={isClickedButton ? "0" : "1"}
            transition={".25s ease-in-out"}
            transform="rotate(0deg)"
            transformOrigin={"left center"}
            position="absolute"
            left={"0px"}
            top="14px"
          ></Box>
          <Box
            width={"100%"}
            height="2px"
            background={isClickedButton ? "#ffffff" : "#3c3636"}
            opacity="1"
            transition={".25s ease-in-out"}
            transform={isClickedButton ? "rotate(-45deg)" : "rotate(0deg)"}
            transformOrigin={"left center"}
            position="absolute"
            left={isClickedButton ? "3px" : "0px"}
            top={isClickedButton ? "22px" : "21px"}
          ></Box>
        </Button>
      </Box>
      <Box
        position={"fixed"}
        width="100vw"
        height={"100vh"}
        top="0"
        left={"0"}
        background="rgba(0,0,0,.95)"
        transition={"visibility .3s ease,opacity .3s ease"}
        visibility={isClickedButton ? "visible" : "hidden"}
        opacity={isClickedButton ? "1" : "0"}
      >
        <Flex
          position={"absolute"}
          top="50%"
          left={"0"}
          transform="translateY(-50%)"
          zIndex={"1000"}
          color={"#ffffff"}
          alignItems="center"
          justifyContent={"center"}
          flexDirection="column"
          width={"full"}
        >
          {menus.length > 0 && (
            <UnorderedList
              listStyleType={"none"}
              maxHeight="80vh"
              minWidth={"400px"}
              padding="15px"
            >
              {menus.map((menu, index) => (
                <ListItem
                  key={index}
                  width={"full"}
                  textAlign="center"
                  fontSize={"1.3125rem"}
                  fontWeight="600"
                  lineHeight={"31.5px"}
                >
                  <Link
                    href={menu.link}
                    display="block"
                    width={"full"}
                    padding="8px 0"
                    color={"#ffffff"}
                    transition="all .2s ease"
                    transform={
                      isClickedButton ? "translateY(0)" : "translateY(-80px)"
                    }
                    opacity={isClickedButton ? "1" : "0"}
                    _hover={{ textDecoration: "none" }}
                  >
                    {menu.label}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          )}
          <Flex
            alignItems={"center"}
            justifyContent="center"
            width={"full"}
            marginTop="24px"
          >
            <Box
              width={"34px"}
              height="34px"
              margin={"2px 6px"}
              transition="all .2s ease"
              transform={
                isClickedButton ? "translateY(0)" : "translateY(-80px)"
              }
              opacity={isClickedButton ? "1" : "0"}
            >
              <Link
                title="Github"
                fontSize={"1.625rem"}
                fontWeight="600"
                lineHeight={"34px"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                width={"full"}
                height="full"
                href="https://github.com/minhhoang1110"
              >
                <Icon as={FaGithub} />
              </Link>
            </Box>
            <Box
              width={"34px"}
              height="34px"
              margin={"2px 6px"}
              transition="all .2s ease"
              transform={
                isClickedButton ? "translateY(0)" : "translateY(-80px)"
              }
              opacity={isClickedButton ? "1" : "0"}
            >
              <Link
                title="Linkein"
                fontSize={"1.625rem"}
                fontWeight="600"
                lineHeight={"34px"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                width={"full"}
                height="full"
                href="https://www.linkedin.com/in/hoang-truong-4a0a471a6/"
              >
                <Icon as={FaLinkedin} />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Menu;
