import React from "react";
import clsx from "clsx";
import { useStaticQuery, graphql } from "gatsby";

import { Navbar, Container, Nav } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import NavItem from "components/NavItem";
import Image from "components/Image";

import "./Navbar.scss";

const MyNavbar = () => {
  const {
    site: {
      siteMetadata: { menuLinks },
    },
    markdownRemark = { frontmatter: {} },
  } = useStaticQuery(graphql`
    query NavBarQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
      markdownRemark(fields: { fileName: { regex: "/navbar/i" } }) {
        frontmatter {
          brand
          menuText
          navBar {
            imageFileName
          }
        }
      }
    }
  `);
  const { menuText, navBar } = markdownRemark.frontmatter;

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          <div className="navbar-brand-icon">
            <Image fileName={navBar.imageFileName} alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {menuText}
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        {/* <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {menuLinks.map(({ name, link }) => (
              <NavItem key={name} to={link} onClick={closeMenu}>
                {name}
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
