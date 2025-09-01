import React from "react";
import {
  ClapperboardIcon,
  Contact,
  Database,
  RollerCoasterIcon,
  TrendingUp,
  Tv,
  TvMinimalPlay,
  Users,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import theme from "../../config/theme";

const SideBar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navLinks = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: "Trending",
      path: "/trending",
    },
    {
      icon: <RollerCoasterIcon className="h-5 w-5" />,
      label: "Popular",
      path: "/popular",
    },
    {
      icon: <ClapperboardIcon className="h-5 w-5" />,
      label: "Movie",
      path: "/movie",
    },
    {
      icon: <TvMinimalPlay className="h-5 w-5" />,
      label: "TV Shows",
      path: "/tv",
    },
    { icon: <Users className="h-5 w-5" />, label: "People", path: "/people" },
  ];

  const infoLinks = [
    {
      icon: <Database className="h-5 w-5" />,
      label: "About MovieDB",
      path: "/about",
    },
    {
      icon: <Contact className="h-5 w-5" />,
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <React.Fragment>
      {isOpen && (
        <div
          className={theme.sidebar.overlay}
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClose();
          }}
        />
      )}

      <aside
        className={`${theme.sidebar.container} ${theme.colors.background} ${isOpen ? theme.sidebar.mobileOpen : theme.sidebar.mobileClosed} `}
        aria-label="Movie sidebar"
      >
        {/* Header */}
        <div className={theme.sidebar.header.base}>
          <h1 className={theme.sidebar.header.title}>
            <Tv className="text-[#6565cd]" />
            <NavLink to="/">MovieDB</NavLink>
          </h1>
          <button
            onClick={onClose}
            className={theme.sidebar.header.closeButton}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className={theme.sidebar.navigation.container}>
          <h2 className={theme.sidebar.navigation.sectionHeader}>New Feeds</h2>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`${theme.sidebar.navigation.linkBase} ${
                  location.pathname === link.path
                    ? theme.sidebar.navigation.linkActive
                    : theme.sidebar.navigation.linkInactive
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className={theme.sidebar.navigation.divider}></div>

          <div className="mb-4">
            <h2 className={theme.sidebar.navigation.sectionHeader}>
              Website Information
            </h2>
          </div>w

          <div className="flex flex-col space-y-2">
            {infoLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`${theme.sidebar.navigation.linkBase} ${
                  location.pathname === link.path
                    ? theme.sidebar.navigation.linkActive
                    : theme.sidebar.navigation.linkInactive
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </React.Fragment>
  );
};

export default SideBar;
