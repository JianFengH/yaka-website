import { Navbar as Navbarui, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import Image from "next/image";
import WalletConnect from "./wallet-connect";

export default function Navbar({ current }: { current: string }) {
  const menus = [
    { name: 'Swap', href: '#' },
    { name: 'Dashboard', href: '#' },
    { name: 'Liquidity', href: '#' },
    { name: 'WalletTest', href: '/wallet-test' },
  ];

  return (
    <Navbarui>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Yaka Logo"
              width={100}
              height={24}
              priority
            />
          </Link>
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
      <NavbarContent className="sm:flex" justify="end">
        <NavbarItem>
          <WalletConnect />
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
    </Navbarui>
  )
}