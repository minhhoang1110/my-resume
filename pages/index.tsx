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
              "I'm a good problem-solver, and I like challenges. I'm a web developer with experience in Front-end and a bit of experience in Back-end. My long-term goal is to become a Full-stack Developer and be promoted to higher positions. I'm looking for a suitable position at a company where I can apply my skills and improve my skills and where my contributions are recognized and rewarded.",
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
                title: "Web Developer",
                subtitle: "TECHSEED JOINT STOCK COMPANY, Nov 2020 - Oct 2022",
                description: [
                  "Participating in the development of the GetJob system - helping to connect workers and employers. Responsible for the development and maintenance of the employer portal website. Participate in the Back-end development for the GetJob system.",
                  "Perform tasks as required by product team and leader. Based on the specific description to ensure the portal website is built to match and exactly according to the company's requirements.",
                  "Work with the design team to ensure the portal site's user interface is built according to the design.",
                  "Participate in building and developing the logic processing and user interface for portal website functions such as posting job requests, viewing and managing job requests, creating work locations, managing employees, managing employer information and report.",
                  "Resolve cross-browser compatibility and the responsive issue of the portal website.",
                  "Learn new knowledge, then participate in the Back-end development to support the portal website and employee application of the GetJob system.",
                  "Develop server APIs, write API documentation.",
                  "Develop a website for admin to manage all the data of the system based on the MVC model.",
                  "Work with the QA to fix issues and bugs of the portal website and Back-end code.",
                  "Communicate with team members and manage tasks in Trello.",
                  "Report tasks progress to the team leader every week.",
                  "Technology: HTML/CSS, SCSS, UI-kit, JavaScript, ReactJS, axios, JSON, Golang, GORM Golang, Swagger, PostgreSQL.",
                ],
              },
            ],
            personalProject: [
              {
                title: "Web Developer",
                subtitle: "Social Networking Site Project, Jun 2023 - Present",
                description: [
                  "Participating in the development and maintenance of the Social Network Website base on Facebook. Responsible for the deploying the website.",
                  "Create and manage tasks in Trello to ensure the best project progress.",
                  "Building and developing the logic processing and user interface for the website functions such as Login, Sign up, Forgot Password, Verify Email, Profile, New feed, Post Status, Like, Comment, Add Friend and Chat.",
                  "Resolve cross-browser compatibility and the responsive issue of the website.",
                  "Develop server APIs.",
                  "Integrate with Cloudinary to manage images of the project.",
                  "Deploy the website, APIs and Database.",
                  "Technology: HTML/CSS, Tailwind CSS, TypeScript, NextJS, axios, JSON, Java, Spring Boot, Spring Security, PostgreSQL, Render, Cloudinary, Vercel.",
                ],
                demo: "https://sn-site-frontend.vercel.app/",
                code: [
                  "https://github.com/minhhoang1110/sn-site-frontend",
                  "https://github.com/minhhoang1110/sn-site-backend",
                ],
              },
              {
                title: "Front-end Developer",
                subtitle: "TMH Blog, Mar 2023 - Mar 2023",
                description: [
                  "Participating in the development and maintenance of the Blog Website. Responsible for write blog content, website interface and deploying the website.",
                  "Building and developing the user interface of the website such as list blog, blog detail.",
                  "Write blog content for website",
                  "Resolve cross-browser compatibility and the responsive issue of the website.",
                  "Integrate with Prismic CMS to manage blog content and user interface of the website.",
                  "Deploy the website.",
                  "Technology: HTML/CSS, Tailwind CSS, TypeScript, NextJS, Pismic CMS, Vercel.",
                ],
                demo: "https://tmh-blog-minhhoang1110.vercel.app/",
                code: ["https://github.com/minhhoang1110/tmh-blog"],
              },
              {
                title: "Front-end Developer",
                subtitle: "A simple weather app, Feb 2023 - Feb 2023",
                description: [
                  "Participating in the development and maintenance of the weather searching website.",
                  "Building and developing the user interface for the website functions such as searching cities by name, showing current weather (Temperature, Humidity, Sea Level, Wind, Pressure, ...) and showing forecasts in the next hours.",
                  "Resolve cross-browser compatibility and the responsive issue of the website.",
                  "Integrate with the public API to show weather data on the website.",
                  "Deploy the website.",
                  "Technology: HTML/CSS, CharkaUI, TypeScript, NextJS, Redux, Rest API, OpenWeather API, RapidAPI (GeoDB Cities API), Vercel",
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
              "Problem-solving skill",
              "Team work",
              "English",
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
