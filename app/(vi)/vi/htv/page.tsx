import HtvPage from "../../../../components/pages/HtvPage";
import { pageMeta } from "../../../../lib/meta";

export const metadata = pageMeta("vi", "htv");

export default function Page() {
  return <HtvPage lang="vi" />;
}
