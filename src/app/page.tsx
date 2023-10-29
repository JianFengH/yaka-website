import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar>
        <NavbarBrand>
          <Image
            src="/logo.svg"
            alt="Yaka Logo"
            width={100}
            height={24}
            priority
          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="#">Swap</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Dashboard</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Liquidity</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex" justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="" variant="flat">Connect</Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground" className="w-full" href="#" size="lg">Swap</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" className="w-full" href="#" size="lg">Dashboard</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" className="w-full" href="#" size="lg">Liquidity</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <div className="container"></div>
    </main>
  )
}
