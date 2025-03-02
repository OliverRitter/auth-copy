import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { GiMatchTip } from 'react-icons/gi';
import NavLink from './NavLink';

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-blue-600 to-blue-800"
      classNames={{
        item: ['text-xl', 'text-white', 'uppercase', "data-[active=true]:text-yellow-200"],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <GiMatchTip className="text-gray-900" size={40} />
        <div className="font-bold text-3xl flex gap-2">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-690">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
       <NavLink href="/members" label="Matches" />
       <NavLink href="/lists" label="Lists" />
       <NavLink href="/messages" label="Messages" />
       
      </NavbarContent>
      <NavbarContent justify="end">
        <Button variant="bordered" className="text-white" as={Link} href="login">
          Login
        </Button>
        <Button variant="bordered" className="text-white" as={Link} href="register">
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
