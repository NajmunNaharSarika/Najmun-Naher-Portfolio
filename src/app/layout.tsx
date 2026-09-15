import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LazyMotion, domAnimation } from "framer-motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://najmunnaher.vercel.app"),
  title: "Najmun Naher | Junior Software Developer (.NET & Web Technologies)",
  description:
    "Official portfolio of Najmun Naher — Junior Software Developer specializing in C#, .NET 6, ASP.NET Core, MVC 5, MS SQL Server, and Modern Web Technologies. Based in Azimpur, Dhaka 1205.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Najmun Naher",
    ".NET Developer",
    "ASP.NET Core",
    "C# Developer",
    "Junior Software Engineer",
    "Dhaka Developer",
    "IsDB-BISEW",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Najmun Naher" }],
  creator: "Najmun Naher",
  openGraph: {
    title: "Najmun Naher | Junior Software Developer (.NET & Web Technologies)",
    description:
      "A motivated software developer focused on ASP.NET Core, C#, MS SQL Server, Angular, and Clean Architecture.",
    url: "https://najmunnaher.vercel.app",
    siteName: "Najmun Naher Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Najmun Naher",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najmun Naher | Junior Software Developer",
    description:
      "Portfolio of Najmun Naher — .NET & Web Developer based in Azimpur, Dhaka.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen font-sans antialiased selection:bg-black selection:text-white bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LazyMotion features={domAnimation}>
            {children}
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}
