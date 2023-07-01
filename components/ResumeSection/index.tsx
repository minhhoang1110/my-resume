import { DefaultPageProps } from "@/types/base";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Container from "../Container";

interface ResumeItem {
  title: string;
  subtitle: string;
  description?: string[];
  demo?: string;
  code?: string[];
}
interface Props extends DefaultPageProps {
  title: string;
  subtitle: string;
  education: ResumeItem[];
  experience: ResumeItem[];
  personalProject: ResumeItem[];
  skills: string[];
  downloadCVLink: string;
}
const ResumeSection: React.FC<Props> = ({
  title,
  subtitle,
  education,
  experience,
  personalProject,
  skills,
  downloadCVLink,
}) => {
  const themeColor: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  const showResumeInfomation = (
    title: string,
    data: ResumeItem[],
    width: "50%" | "100%"
  ): JSX.Element => {
    return (
      <Box
        flex="0 0 auto"
        width={{ base: "100%", lg: width }}
        marginTop="3rem"
        padding={"0 1.5rem"}
      >
        <Heading
          as="h2"
          fontWeight={"600"}
          fontSize="1.75rem"
          marginBottom={"1.5rem"}
          paddingBottom="0.5rem"
        >
          {title}
        </Heading>
        {data.length > 0 && (
          <Box
            paddingLeft={"1rem"}
            borderLeft={`2px solid ${themeColor}`}
            minHeight="325px"
          >
            {data.map((item, index) => (
              <Box key={index}>
                <Heading
                  as="h3"
                  fontSize={"1.3125rem"}
                  fontWeight="500"
                  marginBottom={"0.5rem"}
                >
                  {item.title}
                </Heading>
                <Text marginBottom={"0.5rem"} fontWeight="400">
                  {item.subtitle}
                </Text>
                {item.description &&
                  item.description.length > 0 &&
                  item.description.map((text, index) => (
                    <Text key={index} color={"#8e9a9d"} marginBottom={"1rem"}>
                      {text}
                    </Text>
                  ))}
                {item.demo && (
                  <Text color={"#8e9a9d"} marginBottom={"1rem"}>
                    Demo:{" "}
                    <Link href={item.demo} target="_blank">
                      {item.demo}
                    </Link>
                  </Text>
                )}
                {item.code && item.code.length > 0 && (
                  <Flex>
                    <Text color={"#8e9a9d"} marginRight={"0.5rem"}>
                      Code:
                    </Text>
                    <Box>
                      {item.code.map((text, index) => (
                        <Link
                          key={index}
                          color={"#8e9a9d"}
                          marginBottom={"0.5rem"}
                          href={text}
                          target="_blank"
                          display={"block"}
                        >
                          {text}
                        </Link>
                      ))}
                    </Box>
                  </Flex>
                )}
                {index < data.length - 1 && (
                  <Box
                    width={"full"}
                    height="1px"
                    background={"#8e9a9d"}
                    margin="1.5rem 0"
                    opacity={"0.3"}
                  ></Box>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    );
  };
  return (
    <Box id="resume" width={"full"} background="#F8F9FA" padding={"6.5rem 0"}>
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
        <Flex
          margin={"0 -1.5rem"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          {showResumeInfomation("My Education", education, "50%")}
          {showResumeInfomation("My Experience", experience, "50%")}
        </Flex>
        <Box margin={"0 -1.5rem"}>
          {showResumeInfomation("Personal Project", personalProject, "100%")}
        </Box>
        {skills.length > 0 && (
          <>
            <Heading
              as="h2"
              fontWeight={"600"}
              fontSize="1.75rem"
              marginBottom={"1.5rem"}
              marginTop={"3rem"}
              paddingBottom="0.5rem"
            >
              My Skills
            </Heading>
            <Flex alignItems={"center"} flexWrap="wrap">
              {skills.map((skill, index) => (
                <Box
                  key={index}
                  background={themeColor}
                  padding="0 0.5rem"
                  fontWeight={"600"}
                  lineHeight="1.8"
                  width={"fit-content"}
                  color="#ffffff"
                  marginRight={"1rem"}
                  marginBottom={"1rem"}
                >
                  {skill}
                </Box>
              ))}
            </Flex>
          </>
        )}
        <Flex justifyContent={"center"}>
          <Link
            href={downloadCVLink}
            display={"block"}
            margin="3rem 0 1rem 0"
            padding={".8rem 2.6rem"}
            fontWeight="500"
            transition={"all .5s ease"}
            border="2px solid #212529"
            background={"#F8F9FA"}
            _hover={{
              textDecoration: "none",
              background: "#212529",
              color: "#ffffff",
            }}
          >
            Download CV
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
export default ResumeSection;
