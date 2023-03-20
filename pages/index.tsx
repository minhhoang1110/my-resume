import Head from "next/head";
import { GetStaticProps } from "next";
import React from "react";
import MainLayout from "@/layouts";
import { VStack } from "@chakra-ui/react";
import renderAllSections from "@/components/DisplaySections";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      sections: [
        {
          type: "header",
          data: {
            logo: "TMH",
            phone: "0944 283 271",
            menus: [
              {
                label: "Home",
                link: "/",
              },
              {
                label: "About Me",
                link: "/",
              },
              {
                label: "Resume",
                link: "/",
              },
              {
                label: "Contact Me",
                link: "/",
              },
            ],
          },
        },
        {
          type: "homeBanner",
          data: {
            greeting: "Hi, I'm Minh Hoang",
            typeWriters: ["Front-end", "Developer"],
            location: "live in Ho Chi Minh City, VN.",
            action: "Contact Me",
            actionLink: "#",
          },
        },
      ],
      bgColor: "#ffffff",
      textColor: "#212529",
    },
  };
};
interface SectionItem {
  type: string;
  data: any;
}

interface PageProps {
  sections: SectionItem[];
  bgColor: string;
  textColor: string;
}

const Home: React.FC<PageProps> = ({ sections, bgColor, textColor }) => {
  return (
    <MainLayout bgColor={bgColor} textColor={textColor}>
      <Head>
        <title>Hoang Truong</title>
        <meta
          name="description"
          content="The website that is about my infomation and my resume"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sections &&
        sections.map((section, index) => (
          <VStack key={index} w="full" m="0 !important">
            {renderAllSections({
              data: section.data,
              type: section.type,
            })}
          </VStack>
        ))}
    </MainLayout>
  );
};
export default Home;
