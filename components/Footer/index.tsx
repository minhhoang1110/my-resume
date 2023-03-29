import { DefaultPageProps } from "@/types/base";
import { Box, Text } from "@chakra-ui/react";
import { lazy } from "react";
import { useSelector } from "react-redux";
const Container = lazy(() => import("../Container"));

interface Props extends DefaultPageProps {
  year: number;
  name: string;
}
const Footer: React.FC<Props> = ({ name, year }) => {
  const themeColor: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  return (
    <Box width={"full"} background="#212529" padding={"4.125rem 0"}>
      <Container>
        <Box textAlign={"center"} color="#ffffff">
          <Text>
            Copyright © {year}{" "}
            <Text as="span" color={themeColor} textDecoration="underline">
              {name}
            </Text>
            . All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
