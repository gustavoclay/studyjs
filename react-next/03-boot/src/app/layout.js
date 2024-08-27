import { Inter } from "next/font/google";
import "./globals.css";

// Import do css para o react-boostrap
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fundamentos",
  description: "Minha aplicação de fundamentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
