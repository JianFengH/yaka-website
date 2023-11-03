import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home({ current }: { current: string }) {
  const menus = [
    { name: 'Swap', href: '#' },
    { name: 'Dashboard', href: '#' },
    { name: 'Liquidity', href: '#' },
  ];

  return (
    <Navbar>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Image
            src="/logo.svg"
            alt="Yaka Logo"
            width={100}
            height={24}
            priority
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menus.map((item) => (
          <NavbarItem key={item.name} isActive={current === item.name}>
            <Link
              color={current === item.name ? 'primary' : 'foreground'}
              href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
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
        {menus.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              color={current === item.name ? 'primary' : 'foreground'}
              href={item.href}
              className="w-full"
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}