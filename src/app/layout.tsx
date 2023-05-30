'use client';
import GridContainer from "../components/Layouts/GridContainer";
import Main from "../components/Layouts/Main";
import Sidebar from "../components/Layouts/Sidebar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <GridContainer>
          <Sidebar />
          <Main>
            {children}
          </Main>
        </GridContainer>
        </body>
    </html>
  )
}
