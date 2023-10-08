import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react"
import localforage from "localforage"
import { FiSun, FiMoon } from "react-icons/fi"
import { useLocation } from "react-router-dom"

import { ROUTERS } from "../../utils/constants"

export default function DefaultNavbar({ darkMode, setDarkMode }: any) {
  const location = useLocation()

  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarMenuToggle className="md:hidden" />

        <NavbarBrand>
          <span className="text-xl font-bold">Julian Keller</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {ROUTERS.map((r) => (
          <NavbarItem
            key={r.path}
            isActive={location.pathname === `/${r.path}`}
          >
            <Link
              className="uppercase"
              color={
                location.pathname === `/${r.path}` ? "primary" : "foreground"
              }
              href={r.path}
            >
              {r.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Switch
          size="lg"
          color="default"
          startContent={<FiSun />}
          endContent={<FiMoon />}
          isSelected={!darkMode}
          onValueChange={(isSelected: boolean) => {
            setDarkMode(!isSelected)
            localforage.setItem("darkMode", !isSelected)
          }}
        />
      </NavbarContent>

      <NavbarMenu className={`${darkMode ? 'dark' : ''}`}>
        {ROUTERS.map((r) => (
          <NavbarMenuItem key={r.path}>
            <Link
              className="w-full uppercase"
              size="lg"
              color={
                location.pathname === `/${r.path}` ? "primary" : "foreground"
              }
              href={r.path}
            >
              {r.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
