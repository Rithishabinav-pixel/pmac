import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/Header/Header";






export default function RootLayout({ children }) {
  return (
<>
        
        <Header/>
        {children}
        
 </>
  );
}
