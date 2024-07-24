import Navigation from "@/components/navigation";
import "@/styles/global.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
