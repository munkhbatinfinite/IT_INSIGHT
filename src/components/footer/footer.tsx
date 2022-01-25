import { UserContext } from "@/global";
import { useContext } from "react";
export function Footer() {
  const { staticText, setLocale, locale } = useContext(UserContext);
  console.log(locale);
  return (
    <div style={{ background: "#295288", position: "relative" }}>
      <div className="h-64 flex justify-around text-white flex-row p-10 border-b-2 text-md">
        <div className="border-b-2 border-white h-8 w-26">
          {staticText.footer.information}
        </div>
        <div className="border-b-2 border-white h-8 w-26">
          {staticText.footer.contact}
        </div>
        <div className="border-b-2 border-white h-8 w-26">
          {staticText.footer.newsletter}
        </div>
        <div className="border-b-2 border-white h-8 w-26">
          {staticText.footer.follow}
        </div>
      </div>
      <div className="h-28 flex justify-around text-white flex-row pt-8 text-sm p-2">
        <div className="h-8">© 2022 Grandstream Networks INC</div>
        <div className="h-8">{staticText.footer.sitemap}</div>
        <div className="h-8">126 Brookline Ave, 3rd Floor Boston, MA 02215</div>
        <div className="h-8 flex space-x-2 cursor-pointer">
          {locale === "en" ? (
            <div className="border-2 p-1" onClick={() => setLocale("en")}>
              ENGLISH
            </div>
          ) : (
            <div className="m-1" onClick={() => setLocale("en")}>
              ENGLISH
            </div>
          )}
          {locale === "mn" ? (
            <div className="border-2 p-1" onClick={() => setLocale("mn")}>
              МОНГОЛ
            </div>
          ) : (
            <div className="m-1" onClick={() => setLocale("mn")}>
              МОНГОЛ
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
