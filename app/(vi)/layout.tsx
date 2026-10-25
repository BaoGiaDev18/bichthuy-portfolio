import "../globals.css";
import RootDoc from "../../components/RootDoc";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDoc lang="vi">{children}</RootDoc>;
}
