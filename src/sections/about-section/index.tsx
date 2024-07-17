import SectionTitle from "../../components/section-title";
import Description from "../../components/description";
import CubeCanvas from "../../components/cube-canvas";
import Button from "../../components/button";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { aboutDescription } from "../../data/section-descriptions";
import { useOutletContext } from "react-router-dom";

/**
 * Content of the About Section
 *
 * @returns {JSX.Element}
 */
function AboutSection(): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>("languages");
  const location = useLocation();
  const [isMobile] = useOutletContext();

  useEffect(() => {
    if (location.pathname === "/about" || location.pathname === "/about/") {
      setActiveItem("languages");
    } else {
      const pathItem = location.pathname.split("/")[2];
      setActiveItem(pathItem || "languages");
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <SectionTitle title="About" delay={0.15} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
          <Description text={aboutDescription} />
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
        {!isMobile && (
          <div className="w-1/2">
            <CubeCanvas activeItem={activeItem} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutSection;
