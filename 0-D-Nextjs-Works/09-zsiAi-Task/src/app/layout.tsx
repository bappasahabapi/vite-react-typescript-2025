
import "./globals.css";
import Providers from "./lib/Provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
      <body>

        {children}
      </body>
       
     
    </html>
    </Providers>
    
  );
}
