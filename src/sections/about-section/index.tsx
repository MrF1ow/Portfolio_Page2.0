import SectionTitle from "../../components/section-title";
import Description from "../../components/description";
import Cube from "../../components/cube";
import Button from "../../components/button";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Content of the About Section
 *
 * @returns {JSX.Element}
 */
function AboutSection({ sectionRef }: SectionProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>("languages");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about" || location.pathname === "/about/") {
      setActiveItem("languages");
    } else {
      const pathItem = location.pathname.split("/")[2];
      setActiveItem(pathItem || "languages");
    }
  }, [location]);

  return (
    <div ref={sectionRef} className="flex flex-row w-full h-full">
      <div className="w-1/2">
        <SectionTitle title="About" />
        <Description text="Lorem dafsdf asdf asdf asdf asdf asdf asdf asdfnwef uiewrgiuwebgksjkdgbn ieruj gsniugj nsriulgj nrliugjnslifdugj nsleriuj hgqepruilgj hsndlifjkgneurlijg nslieujkgnliurgjkn lrieujgksndfliujnerliujg knslidugjknwelri u jgknlifjkgnlierujkgn liujgknwleiurjkgn wlireg" />
        <Outlet />
        <div className="flex flex-col gap-4 items-start">
          {activeItem === "languages" && (
            <>
              <Button title="Frameworks" path="/about/frameworks" />
              <Button title="Tools" path="/about/tools" />
            </>
          )}
          {activeItem === "frameworks" && (
            <>
              <Button title="Tools" path="/about/tools" />
              <Button title="Languages" path="/about/languages" />
            </>
          )}
          {activeItem === "tools" && (
            <>
              <Button title="Languages" path="/about/languages" />
              <Button title="Frameworks" path="/about/frameworks" />
            </>
          )}
        </div>
      </div>
      <div className="w-1/2">
        <Cube />
      </div>
    </div>
  );
}

export default AboutSection;
