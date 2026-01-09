import type { Metadata } from "next";
import { Public_Sans, Heebo,  } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import WhatsAppButton from "./components/WhatsAppButton";
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Óptica Real - Óculos, Relógios e Joias em Torres | RS",
    template: "%s | Óptica Real",
  },
  description: "Óptica Real em Torres, RS. Especializada em óculos de sol, óculos de grau, relógios e joias das melhores marcas: Prada, Gucci, Ray-Ban, Versace, Tom Ford e muito mais. Atendimento personalizado no Centro de Torres.",
  keywords: [
    "óptica Torres",
    "óculos Torres",
    "relógios Torres",
    "joias Torres",
    "óculos de sol",
    "óculos de grau",
    "Prada óculos",
    "Gucci óculos",
    "Ray-Ban",
    "Versace",
    "Tom Ford",
    "óptica RS",
    "relojoaria Torres",
    "joalheria Torres",
  ],
  authors: [{ name: "Óptica Real" }],
  creator: "Óptica Real",
  publisher: "Óptica Real",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oticarealtorres.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oticarealtorres.com.br",
    siteName: "Óptica Real",
    title: "Óptica Real - Óculos, Relógios e Joias em Torres | RS",
    description: "Óptica Real em Torres, RS. Especializada em óculos de sol, óculos de grau, relógios e joias das melhores marcas: Prada, Gucci, Ray-Ban, Versace, Tom Ford e muito mais.",
    images: [
      {
        url: "/logo-optica.png",
        width: 1200,
        height: 630,
        alt: "Óptica Real - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Óptica Real - Óculos, Relógios e Joias em Torres | RS",
    description: "Especializada em óculos, relógios e joias das melhores marcas. Atendimento personalizado no Centro de Torres.",
    images: ["/logo-optica.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-optica.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-optica.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo-optica.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo-optica.png",
  },
  category: "Óptica e Relojoaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Script do LightWidget para carregar o feed do Instagram */}
        <script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          async
        ></script>
      </head>
      <body
        className={`${publicSans.variable} ${heebo.variable} antialiased`}
      >
        <Navbar />
        <div>
          {children}
          <WhatsAppButton />
        </div>
        <Footer />
      </body>
    </html>
  );
}
