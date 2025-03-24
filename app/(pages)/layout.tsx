import type React from "react"
import FooterCalendar from "../components/shared/footer";
import HeaderCalendar from "../components/shared/header";
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <header>
          <HeaderCalendar />
        </header>
        {children}
        <footer>
          <FooterCalendar />
        </footer>
      </body>
    </html>
  );
}
