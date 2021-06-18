import { useRouter } from "next/router";
import { useEffect } from "react";
import ls from "local-storage";
import Login from "../componenets/Login/Login";
import Dashboard from "../componenets/Dashboard/Dashboard";
export default function Home() {
  const { query } = useRouter();

  return (
    <>
      {query.code ? (
        <Dashboard code={query.code} state={query.state} />
      ) : (
        <Login />
      )}
    </>
  );
}
