function NavBarLink({ to = "", className, children }) {
  return (
    <a className={`${className && className}`} href={to}>
      {children}
    </a>
  );
}

export default NavBarLink;
