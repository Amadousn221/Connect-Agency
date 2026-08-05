import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactModalProvider from "@/components/layout/ContactModalProvider";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ContactModalProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ContactModalProvider>
  );
}
