import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaCartPlus } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full px-5 md:px-0 bg-primary text-foreground">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-5">
          <div className="w-full flex-1 flex items-center gap-5">
            <Image height={100} width={100} priority src={"/logo.png"} alt="" />
            <Input
              type="text"
              placeholder="Search Medicines"
              className="w-full hidden md:block"
            />
          </div>
          <div className="flex-1 flex items-center justify-end gap-5">
            <Button variant="ghost" className="text-white hidden md:block">
              Sign in | Sign Up
            </Button>
            <Button variant="outline" size="icon">
              <FaCartPlus size={25} />
            </Button>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
