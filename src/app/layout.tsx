import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/molecules/Header";
import Flex from "@/components/atoms/Flex";

export const metadata: Metadata = {
  title: "Motordill | Comparador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Header />
        <Flex className=" pt-0 sm:pt-4 pb-24 px-4 sm:px-6 lg:px-20">
          {children}
        </Flex>
      </body>
    </html>
  );
}
