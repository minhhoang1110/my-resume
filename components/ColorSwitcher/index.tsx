import { themeColorAction } from "@/actions";
import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaCog } from "react-icons/fa";
import { useDispatch } from "react-redux";
interface Color {
  color: string;
  title: string;
}
interface Props extends DefaultPageProps {
  title: string;
  colors: Color[];
}
const ColorSwitcher: React.FC<Props> = ({ title, colors }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleOnChangeColor = (color: string) => {
    dispatch(themeColorAction.setThemeColor(color));
    setIsOpen(false);
  };
  const handleOnOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Flex
      position={"fixed"}
      zIndex="99"
      right={isOpen ? "0" : "-202px"}
      top="50%"
      transform={"translateY(-50%)"}
      transition="all .3s ease-in-out"
    >
      <Flex
        background={"#555555"}
        color="#ffffff"
        width={"40px"}
        height="40px"
        alignItems={"center"}
        justifyContent="center"
        cursor={"pointer"}
        fontSize="1.25rem"
        borderRadius={"4px 0 0 4px"}
        onClick={handleOnOpen}
      >
        <Icon as={FaCog} />
      </Flex>
      <Box width={"202px"} padding="20px" background={"#ffffff"}>
        <Heading
          as={"h2"}
          fontWeight="600"
          fontSize={"1rem"}
          marginBottom="0.5rem"
        >
          {title}
        </Heading>
        <Box
          width={"full"}
          height="1px"
          background={"#8e9a9d"}
          margin="1rem 0"
          opacity={"0.3"}
        ></Box>
        {colors.length > 0 && (
          <Flex alignItems={"center"} flexWrap="wrap">
            {colors.map((color, index) => (
              <Box
                key={index}
                title={color.title}
                background={color.color}
                width="32px"
                height={"32px"}
                margin="4px 2px"
                borderRadius={"50%"}
                cursor="pointer"
                onClick={() => handleOnChangeColor(color.color)}
              ></Box>
            ))}
          </Flex>
        )}
      </Box>
    </Flex>
  );
};
export default ColorSwitcher;
