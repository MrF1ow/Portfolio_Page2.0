
/*
  This component is used to render the hamburger icon when the menu is open.
  The icon is a SVG element that when clicked, will close the menu.

  @param toggleMenu: function
  @returns JSX.Element
*/
function HamburgerCloseIcon({ toggleMenu }: HamburgerIconProps): JSX.Element {
  return (
    <div onClick={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default HamburgerCloseIcon;
