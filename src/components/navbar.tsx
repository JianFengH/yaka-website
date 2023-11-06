'use client'

import { Navbar as NavbarNextUI, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import Image from "next/image";
import WalletConnect from "./wallet-connect";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  const menus = [
    { name: 'Swap', path: '/swap' },
    { name: 'Liquidity', path: '/liquidity' },
    { name: 'WalletTest', path: '/wallet-test' },
  ];

  return (
    <NavbarNextUI>
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
        {menus.map(({name, path}) => (
          <NavbarItem key={name} isActive={path === pathname}>
            <Link
              color={path === pathname ? 'primary' : 'foreground'}
              href={path}>
              {name}
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
        {menus.map(({name, path}) => (
          <NavbarMenuItem key={name}>
            <Link
              color={path === pathname ? 'primary' : 'foreground'}
              href={path}
              className="w-full"
              size="lg">
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarNextUI>
  )
}