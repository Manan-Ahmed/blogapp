import Foater from "../component/foater";
import Navbar from "../component/nav";

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}

        <Foater/>
      </body>
    </html>
  );
}