import { useRouter } from "next/router";
import Login from "../componenets/Login/Login";
import Dashboard from "../componenets/Dashboard/Dashboard";
export default function Home() {
  const { query } = useRouter();
  return <div>{query.code ? <Dashboard code={query.code} /> : <Login />}</div>;
}
