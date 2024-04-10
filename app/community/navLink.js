"use client";
import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";
function NavLink({ children, href }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
}

export default NavLink;
