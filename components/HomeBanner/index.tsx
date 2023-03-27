import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Container from "../Container";
import Typewriter from "typewriter-effect";
import Image from "next/image";
interface Props extends DefaultPageProps {
  greeting: string;
  typeWriters: string[];
  location: string;
  action: string;
  actionLink: string;
  image: string;
}
const HomeBanner: React.FC<Props> = ({
  greeting,
  typeWriters,
  actionLink,
  action,
  location,
  image,
}) => {
  const themeColor: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  const handleOnClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView();
  };
  return (
    <Box
      width={"full"}
      height="calc(100vh - 66px)"
      background={themeColor}
      overflow="hidden"
      position={"relative"}
      id="homeBanner"
    >
      <Container>
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", lg: "space-between" }}
          width={"full"}
          height="full"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            order={{ base: "2", lg: "1" }}
            textAlign={{ base: "center", lg: "left" }}
            width={{ base: "100%", lg: "58.33333333%" }}
            overflow="hidden"
          >
            <Heading
              as="h1"
              fontWeight={"300"}
              fontSize={{ base: "calc(1.425rem + 2.1vw)", lg: "3rem" }}
              textTransform={"uppercase"}
              lineHeight={{ base: "1.3", lg: "62.4px" }}
            >
              {greeting}
            </Heading>
            <Heading
              as="h2"
              fontWeight={"600"}
              fontSize={{ base: "calc(1.775rem + 6.3vw)", lg: "6.5rem" }}
              textTransform={"uppercase"}
              lineHeight={{ base: "1.3", lg: "135.2px" }}
            >
              <Typewriter
                options={{
                  strings: typeWriters,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Heading>
            <Text fontSize="1.3125rem" lineHeight="37.6px">
              {location}
            </Text>
            <Link
              onClick={() => handleOnClick(actionLink)}
              color={"#ffffff"}
              display={"block"}
              fontWeight="700"
              lineHeight={"24px"}
              margin={{ base: "0 auto", lg: "16px 0 0 0" }}
              marginTop="16px"
              padding={".8rem 2.6rem"}
              transition="all .5s ease"
              boxShadow={"0 5px 15px rgba(0,0,0,.15)"}
              background="#212529"
              border="2px solid #212529"
              width={"fit-content"}
              _hover={{ textDecoration: "none", background: "#424649" }}
            >
              {action}
            </Link>
          </Box>
          <Box
            width={{ base: "fit-content", lg: "41.66666667%" }}
            flex="0 0 auto"
            order={{ base: "1", lg: "2" }}
            marginBottom={{ base: "1rem", lg: "0" }}
            padding="0 12px"
          >
            <Box
              background={"#ffffff"}
              borderRadius="50%"
              boxShadow={"0 1rem 3rem rgba(0,0,0,.175)"}
              padding="1rem"
              width={"fit-content"}
            >
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                style={{ maxWidth: "100%", borderRadius: "50%" }}
                priority
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default HomeBanner;
