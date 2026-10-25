import HtvPage from "../../../components/pages/HtvPage";
import { pageMeta } from "../../../lib/meta";

export const metadata = pageMeta("en", "htv");

export default function Page() {
  return <HtvPage lang="en" />;
}
