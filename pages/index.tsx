import Head from "next/head";
import { GetStaticProps } from "next";
import React from "react";
import MainLayout from "@/layouts";
import { VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { DEFAULT_THEME_COLOR } from "@/configs/constants";
import { useSelector } from "react-redux";
const RenderAllSections = dynamic(() => import("@/components/DisplaySections"));

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      sections: [
        {
          type: "header",
          data: {
            logo: process.env.NEXT_PUBLIC_BRAND_NAME || "",
            phone: process.env.NEXT_PUBLIC_PHONE || "",
            menus: [
              {
                label: "Home",
                link: "homeBanner",
              },
              {
                label: "About Me",
                link: "aboutMe",
              },
              {
                label: "Resume",
                link: "resume",
              },
              {
                label: "Contact Me",
                link: "contactMe",
              },
            ],
          },
        },
        {
          type: "homeBanner",
          data: {
            greeting: "Hi, I'm Minh Hoàng",
            typeWriters: ["Web", "Developer"],
            location: "live in Ho Chi Minh City, VN.",
            action: "Contact Me",
            actionLink: "contactMe",
            image: "/images/potrait.webp",
          },
        },
        {
          type: "aboutMe",
          data: {
            title: "Know Me More",
            subtitle: "About Me",
            name: process.env.NEXT_PUBLIC_NAME || "",
            description:
              "I'm a problem-solver, and I like challenges. I'm a web developer with experience in Front-end and a desire to learn and work with Back-end. I'm looking for a suitable position at a company with projects that can help me improve my skills and where contributions are recognized and rewarded.",
            yearOfExp: 2,
            dateOfBirth: "17 August, 1999",
            email: process.env.NEXT_PUBLIC_EMAIL || "",
            address: "Ho Chi Minh City, VN.",
          },
        },
        {
          type: "resume",
          data: {
            title: "A summary of My Resume",
            subtitle: "Resume",
            education: [
              {
                title: "Infomation Technology",
                subtitle:
                  "Posts and Telecommunications Institute of Technology / 2017",
              },
              {
                title: "Front-end Course",
                subtitle:
                  "BeCodeching - Chuyên Dạy Lập Trình Cho Sinh Viên Và Người Trái Ngành / 2020",
              },
            ],
            experience: [
              {
                title: "Front-end Developer",
                subtitle: "TECHSEED JOINT STOCK COMPANY, 11/2020 - 10/2022",
                description: [
                  "Built a webapp for Getjob system that is used for manage job and employees.",
                  "Learned Back-end skills and used these skills to develop server for Getjob system.",
                  "Technical: HTML, CSS/SCSS, UIkit, Javascript, ReactJS, Rest API, Golang, PostgreSQL.",
                ],
              },
            ],
            personalProject: [
              {
                title: "Web Developer",
                subtitle: "Social Networking Site Project, 6/2023",
                description: [
                  "Features: Login, Sign up, Forgot Password, Profile, New feed, Post Status, Like, Comment, Add Friend, Chat.",
                  "Technical: NextJs, Typescript, Tailwind CSS, Axios, Java Spring Boot, PostgreSQL.",
                ],
                demo: "https://sn-site-frontend.vercel.app/",
                code: [
                  "https://github.com/minhhoang1110/sn-site-frontend",
                  "https://github.com/minhhoang1110/sn-site-backend",
                ],
              },
              {
                title: "Front-end Developer",
                subtitle: "TMH Blog, 3/2023",
                description: [
                  "Technical: HTML, CSS, TailwindCSS, TypeScript, NextJS, Prismic CMS.",
                ],
                demo: "https://tmh-blog-minhhoang1110.vercel.app/",
                code: ["https://github.com/minhhoang1110/tmh-blog"],
              },
              {
                title: "Front-end Developer",
                subtitle: "A simple weather app, 2/2023",
                description: [
                  "Features: Search cites by name, show current weather (Temperature, Humidity, Sea Level, Wind, Pressure, ...), show forecast in next hours.",
                  "Technical: HTML, CSS, CharkaUI, TypeScript, NextJS, Redux, Rest API, OpenWeather API, RapidAPI (GeoDB Cities API).",
                ],
                demo: "https://nextjs-wheather-app.vercel.app/",
                code: ["https://github.com/minhhoang1110/nextjs-wheather-app"],
              },
            ],
            skills: [
              "HTML",
              "CSS",
              "Bootstrap",
              "Tailwind",
              "JavaScript",
              "TypeScript",
              "JQuery",
              "Redux",
              "ReactJS",
              "NextJS",
              "JSON",
              "AJAX",
              "Java",
              "Spring boot",
              "MySQL",
              "PostgreSQL",
              "REST",
              "Git",
            ],
            downloadCVLink: process.env.NEXT_PUBLIC_DOWNLOAD_CV_URL || "",
          },
        },
        {
          type: "contactMe",
          data: {
            title: "Let's get in touch",
            name: process.env.NEXT_PUBLIC_NAME || "",
            email: process.env.NEXT_PUBLIC_EMAIL || "",
            phone: process.env.NEXT_PUBLIC_PHONE || "",
            address: "Ho Chi Minh City, VN.",
          },
        },
        {
          type: "footer",
          data: {
            year: process.env.NEXT_PUBLIC_YEAR || 0,
            name: process.env.NEXT_PUBLIC_BRAND_NAME || "",
          },
        },
        {
          type: "scrollToTop",
        },
        {
          type: "colorSwitcher",
          data: {
            title: "Color Switcher",
            colors: [
              { color: "aqua", title: "Cyan" },
              { color: "#00fe9c", title: "Spring Green" },
              { color: "#adff2f", title: "Green Yellow" },
              { color: "#d6ed17", title: "Lime Punch" },
              { color: "#ff91fb", title: "Violet" },
              { color: "#fdbb2e", title: "Reset Default Orange" },
              { color: "#eee8aa", title: "Pale Golden Rod" },
              { color: "#f5df4e", title: "Yellow" },
            ],
          },
        },
      ],
      bgColor: "#ffffff",
      textColor: "#212529",
      manifestURL: "/manifest.json",
      themeColor: DEFAULT_THEME_COLOR,
      appleTouchIcon: "/images/user-96.png",
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
  manifestURL: string;
  themeColor: string;
  appleTouchIcon: string;
}

const Home: React.FC<PageProps> = ({
  sections,
  bgColor,
  textColor,
  manifestURL,
  themeColor,
  appleTouchIcon,
}) => {
  const currentTheme: string = useSelector(
    (state: any) => state.themeColorReducer
  );
  return (
    <MainLayout bgColor={bgColor} textColor={textColor}>
      <Head>
        <title>Hoang Truong Resume</title>
        <meta
          name="description"
          content="The website that is about my infomation and my resume"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href={manifestURL} />
        <meta name="theme-color" content={currentTheme || themeColor} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        <meta
          name="apple-mobile-web-app-status-bar"
          content={currentTheme || themeColor}
        />
      </Head>
      {sections &&
        sections.map((section, index) => (
          <VStack key={index} w="full" m="0 !important">
            <RenderAllSections data={section.data} type={section.type} />
          </VStack>
        ))}
    </MainLayout>
  );
};
export default Home;
