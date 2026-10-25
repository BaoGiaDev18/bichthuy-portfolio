import TramPage from "../../../../components/pages/TramPage";
import { pageMeta } from "../../../../lib/meta";

export const metadata = pageMeta("vi", "tram");

export default function Page() {
  return <TramPage lang="vi" />;
}
