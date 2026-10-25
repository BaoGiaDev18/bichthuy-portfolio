import TramPage from "../../../components/pages/TramPage";
import { pageMeta } from "../../../lib/meta";

export const metadata = pageMeta("en", "tram");

export default function Page() {
  return <TramPage lang="en" />;
}
