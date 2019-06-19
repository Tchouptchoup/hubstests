import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Menu>
    <Menu.Item as={Link} to="/music" style={{ cursor: "pointer" }}>
      Music
    </Menu.Item>
    <Menu.Item as={Link} to="/prime" style={{ cursor: "pointer" }}>
      Prime
    </Menu.Item>
    <Menu.Item as={Link} to="/graph" style={{ cursor: "pointer" }}>
      Graph
    </Menu.Item>
  </Menu>
);

export default Navbar;
