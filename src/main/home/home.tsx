import { UserContext } from "@/global";
import { useContext } from "react";
import { Card } from "antd";
import { Carousel } from "@/components";
export function Home() {
  const { staticText, setLocale } = useContext(UserContext);
  return <div></div>;
}
