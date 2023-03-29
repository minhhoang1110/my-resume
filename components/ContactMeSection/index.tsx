import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Container from "../Container";

interface Props extends DefaultPageProps {
  title: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}
const ContactMeSection: React.FC<Props> = ({
  title,
  name,
  email,
  phone,
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
        textAlign="center"
      >
        <Heading
          as="h3"
          fontWeight={"600"}
          fontSize="1.3125rem"
          marginBottom={"0.5rem"}
        >{`${key}:`}</Heading>
        <Text fontWeight={"400"} fontSize="1.125rem" marginBottom={"1rem"}>
          {value}
        </Text>
      </Box>
    );
  };
  return (
    <Box
      id="contactMe"
      width={"full"}
      background={themeColor}
      padding={"6.5rem 0"}
    >
      <Container>
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
        <Flex
          alignItems={"center"}
          flexWrap="wrap"
          marginLeft={"-0.75rem"}
          marginRight={"-0.75rem"}
          marginTop={"1.5rem"}
        >
          {showInfomation("Name", name)}
          {showInfomation("Phone", phone)}
          {showInfomation("Email", email)}
          {showInfomation("Living in", address)}
        </Flex>
      </Container>
    </Box>
  );
};
export default ContactMeSection;
