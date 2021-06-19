import { useRouter } from "next/router";
import Login from "../componenets/Login/Login";
export default function Home() {
  const { query } = useRouter();

  return (
    <>
      <Login />
    </>
  );
}
