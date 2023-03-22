import { Flex, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useScrolling } from "@/hooks";

const ScrollToTop: React.FC = () => {
  const themeColor: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  const { scrollTop } = useScrolling();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleOnScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    if (scrollTop < 900) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
  }, [scrollTop]);
  return (
    <Flex
      display={isVisible ? "flex" : "none"}
      alignItems={"center"}
      justifyContent="center"
      borderRadius={"50%"}
      background={"rgba(0,0,0,.2)"}
      boxShadow="0 5px 15px rgba(0,0,0,.15)"
      color="#ffffff"
      fontWeight={"600"}
      width={"36px"}
      height={"36px"}
      transition="all .3s ease-in-out"
      position={"fixed"}
      right="10px"
      bottom={"8px"}
      zIndex="1029"
      cursor={"pointer"}
      _hover={{ background: themeColor, color: "#212529" }}
      onClick={handleOnScrollTop}
    >
      <Icon as={AiOutlineArrowUp} />
    </Flex>
  );
};
export default ScrollToTop;
