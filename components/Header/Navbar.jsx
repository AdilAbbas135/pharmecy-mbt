"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { LiaGiftsSolid } from "react-icons/lia";

const Menu = [
  {
    Title: "Medicines",
    link: "",
  },
  { Title: "Flue Shots & Immunizationss", link: "" },
  {
    Title: "Covid Testing",
    link: "",
  },
  {
    Title: "Blister Packs",
    link: "",
  },
  {
    Title: "DMV Eye Exam",
    link: "",
  },
  {
    Title: "Household Supplies",
    link: "",
  },
];
const Navbar = () => {
  return (
    <div className="py-2 w-full hidden md:block">
      <div className="w-full max-w-7xl mx-auto">
        <NavigationMenu>
          <NavigationMenuList>
            {Menu.map((menu, i) => {
              return (
                <div className="relative" key={i}>
                  <NavigationMenuItem>
                    <Link href={menu.link} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <span className="font-bold">{menu.Title}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
              );
            })}
            <Button variant="outline" className="border-primary">
              <LiaGiftsSolid size={25} className="mr-1" /> Toys & Gifts
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
