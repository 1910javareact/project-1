import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

const NavBar = (props: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav pills>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Employee Reimbursement System 
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>
              {/* empty */}
            </DropdownItem>
            <DropdownItem>
              <Link to="/Login">Login</Link>
            </DropdownItem>
            <DropdownItem >
              <Link to="/Reimbursements">Reimbursements</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/Users">Users</Link>
            </DropdownItem>
            <DropdownItem divider />
            {/* <DropdownItem>Another Action</DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
        {/*<NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem> */}
      </Nav>
    </div>
  );
}

export default NavBar;
