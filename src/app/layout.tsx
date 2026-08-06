import type { Metadata } from 'next';
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Argam | AI Systems Engineer",
  description:
    "AI Systems Engineer specializing in Backend Engineering, Artificial Intelligence, Intelligent Automation, and Robotics.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Argam | AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in Backend Engineering, Artificial Intelligence, Intelligent Automation, and Robotics.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Argam | AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in Backend Engineering, Artificial Intelligence, Intelligent Automation, and Robotics.",
    images: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
