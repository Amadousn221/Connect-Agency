import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/flaticon-set.css';
import '@/assets/css/elegant-icons.css';

import '@/assets/css/gallery.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/style.css'
import '@/assets/css/connect-web.css'

import type { Metadata } from "next";
import Dependency from '@/components/utilities/Dependency';
import ScrollUpBtn from '@/components/utilities/ScrollUpBtn';

export const metadata: Metadata = {
  title: {
    default: "Connect Web — Sites, e-commerce et outils de gestion",
    template: "%s | Connect Web",
  },
  description:
    "Sites internet, boutiques en ligne, applications de gestion, CRM/ERP, marketing digital et installations réseau : Connect Web part de votre activité pour choisir les bons outils.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <a className="cw-skip-link" href="#contenu">Aller au contenu</a>
        <Dependency />
        {children}
        <ScrollUpBtn />
      </body>
    </html>
  );
}
