import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Container from "../Container";

interface Props extends DefaultPageProps {
  title: string;
  subtitle: string;
  name: string;
  description: string;
  yearOfExp: 2;
  dateOfBirth: string;
  email: string;
  address: string;
}
const AboutMeSection: React.FC<Props> = ({
  title,
  subtitle,
  name,
  dateOfBirth,
  description,
  email,
  yearOfExp,
  address,
}) => {
  const themeColor: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  const showInfomation = (key: string, value: string): JSX.Element => {
    return (
      <Box
        flex={"0 0 auto"}
        width={{ base: "50%", lg: "25%" }}
        marginTop="1rem"
        padding={"0 0.75rem"}
      >
        <Text color="#8e9a9d" fontWeight={"500"}>{`${key}:`}</Text>
        <Text fontWeight={"600"} fontSize="1.125rem">
          {value}
        </Text>
      </Box>
    );
  };
  return (
    <Box width={"full"} background="#ffffff" padding={"6.5rem 0"}>
      <Container>
        <Flex width={"full"} justifyContent="center" marginBottom={"0.5rem"}>
          <Text
            background={themeColor}
            padding="0 0.5rem"
            fontWeight={"400"}
            lineHeight="1.8"
            width={"fit-content"}
          >
            {subtitle}
          </Text>
        </Flex>
        <Heading
          as={"h2"}
          textAlign="center"
          fontSize={"2.5rem"}
          fontWeight="600"
          marginBottom={"3rem"}
          lineHeight="1.2"
        >
          {title}
        </Heading>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box flex={"0 0 auto"} width={{ base: "100%", lg: "66.66666667%" }}>
            <Heading
              as="h2"
              fontSize={"2rem"}
              fontWeight="400"
              lineHeight="1.2"
              marginBottom={"1rem"}
              textAlign={{ base: "center", lg: "left" }}
            >
              Hi, I&apos;m{" "}
              <Text
                display={"inline"}
                fontWeight="700"
                borderBottom={`3px solid ${themeColor}`}
              >
                {name}
              </Text>
            </Heading>
            <Text
              fontSize={"1.3125rem"}
              fontWeight="400"
              lineHeight={"1.8"}
              marginBottom="1rem"
              textAlign={{ base: "center", lg: "left" }}
            >
              {description}
            </Text>
          </Box>
          <Box
            flex={"0 0 auto"}
            width={{ base: "100%", lg: "33.33333333%" }}
            marginTop={{ base: "1.5rem", lg: "0" }}
          >
            <Flex
              alignItems={"center"}
              justifyContent="center"
              boxShadow={"0 0 50px rgba(0,0,0,.03)"}
              width="120px"
              height={"120px"}
              margin="0 auto 1.5rem"
              background={themeColor}
              borderRadius="50%"
            >
              <Text
                color="#4c4d4d"
                fontWeight={"500"}
                lineHeight="1.3"
                fontSize={{ base: "calc(2.025rem + 9.3vw)", lg: "9rem" }}
                transform="scale(1.3)"
              >
                {yearOfExp}
              </Text>
            </Flex>
            <Heading
              as="h3"
              fontSize={"1.75rem"}
              fontWeight="500"
              marginBottom={"10px"}
              textAlign="center"
            >
              Years of{" "}
              <Text display={"inline"} fontWeight="700">
                Experiance
              </Text>
            </Heading>
          </Box>
        </Flex>
        <Flex
          alignItems={"center"}
          flexWrap="wrap"
          marginLeft={"-0.75rem"}
          marginRight={"-0.75rem"}
          marginTop={"1.5rem"}
        >
          {showInfomation("Name", name)}
          {showInfomation("Email", email)}
          {showInfomation("Date of birth", dateOfBirth)}
          {showInfomation("From", address)}
        </Flex>
      </Container>
    </Box>
  );
};
export default AboutMeSection;
