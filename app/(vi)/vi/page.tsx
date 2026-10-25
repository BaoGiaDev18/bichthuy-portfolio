import HomePage from "../../../components/pages/HomePage";
import { pageMeta } from "../../../lib/meta";

export const metadata = pageMeta("vi", "home");

export default function Page() {
  return <HomePage lang="vi" />;
}
