import React from "react"

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react"

import { ROUTERS } from "../../utils/constants"

export default function DefaultNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <span className="text-xl font-bold">Julian Keller</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {ROUTERS.map((r) => (
          <NavbarItem key={r.path}>
            <Link className="uppercase" color="foreground" href={r.path}>
              {r.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {ROUTERS.map((r) => (
          <NavbarMenuItem key={r.path}>
            <Link className="w-full uppercase" size="lg" color="primary" href={r.path}>
              {r.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
