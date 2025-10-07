import Header from "./Header";
import Footer from "./Footer";
import { ReactComponentProps } from "@/interfaces";

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
