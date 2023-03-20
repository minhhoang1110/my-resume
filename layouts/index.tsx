import React, { ReactNode } from "react";
import { VStack } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  bgColor: string;
  textColor: string;
}

const MainLayout = ({ children, bgColor, textColor }: Props) => {
  return (
    <VStack pt="66px" bgColor={bgColor} color={textColor}>
      {children}
    </VStack>
  );
};

export default MainLayout;
