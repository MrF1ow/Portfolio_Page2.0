import { useState, useEffect } from "react";
import NavItem from "./navitem";
import { motion } from "framer-motion";

function Navigation({
  scrollToSection,
  sectionRefs,
}: NavigationProps): JSX.Element {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // const handleMouseEnter = (index: number) => {
  //   setHoveredItem(index);
  //   console.log("hoveredItem", hoveredItem);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };

  return (
    <nav>
      <ul className="flex font-league lg:gap-20 lg:text-2xl md:gap-16 md:text-2xl">
        <NavItem
          text="Home"
          sectionRef={sectionRefs.homeRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          hoveredItem={hoveredItem}
        />
        <NavItem
          text="About"
          sectionRef={sectionRefs.aboutRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          hoveredItem={hoveredItem}
        />
        <NavItem
          text="Projects"
          sectionRef={sectionRefs.projectsRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          hoveredItem={hoveredItem}
        />
        <NavItem
          text="Contact"
          sectionRef={sectionRefs.contactRef}
          scrollToSection={scrollToSection}
          setHoveredItem={setHoveredItem}
          hoveredItem={hoveredItem}
        />
      </ul>
    </nav>
  );
}

export default Navigation;
