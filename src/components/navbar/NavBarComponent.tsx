import React, { useState } from 'react';
import { Nav, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom'


const NavBar = (props: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <Nav pills>
        <Dropdown nav>
          <DropdownMenu>

            <DropdownItem >
              <Link to="/login">Login</Link>
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>
      </Nav>
    </div>
  );
}

export default NavBar;
 