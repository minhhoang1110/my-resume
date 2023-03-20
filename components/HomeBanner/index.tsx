import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Heading, Link, Text, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Container from "../Container";
import Typewriter from "typewriter-effect";
interface Props extends DefaultPageProps {
  greeting: string;
  typeWriters: string[];
  location: string;
  action: string;
  actionLink: string;
}
const HomeBanner: React.FC<Props> = ({
  greeting,
  typeWriters,
  actionLink,
  action,
  location,
}) => {
  const themeColor: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  return (
    <Box
      width={"full"}
      height="calc(100vh - 66px)"
      background={themeColor}
      overflow="hidden"
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
              href={actionLink}
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
            width={{ base: "100%", md: "41.66666667%" }}
            flex="0 0 auto"
            order={{ base: "1", lg: "2" }}
            padding="0 12px"
          >
            <Box
              background={"#ffffff"}
              borderRadius="50%"
              boxShadow={"0 1rem 3rem rgba(0,0,0,.175)"}
              padding="1rem"
            >
              <Image
                src={"/images/potrait.jpg"}
                alt=""
                maxWidth={"100%"}
                borderRadius="50%"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default HomeBanner;
