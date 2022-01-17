import { UserContext } from "@/global";
import { useContext } from "react";
export function Home() {
  const { staticText, setLocale } = useContext(UserContext);
  console.log(staticText);
  return (
    <div>
      <button
        style={{ border: "1px solid red", margin: 10 }}
        onClick={() => {
          setLocale("en");
        }}
      >
        english
      </button>
      <button
        style={{ border: "1px solid red", margin: 10 }}
        onClick={() => {
          setLocale("mn");
        }}
      >
        mongolian
      </button>
      this is home
    </div>
  );
}
