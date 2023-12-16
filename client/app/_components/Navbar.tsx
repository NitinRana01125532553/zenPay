"use client";

import {
  Typography,
  Navbar,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  //mobile view navbar
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // navigation links on navbar
  const navList = (
    <ul className="mt-6 mb-8 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography as="li" color="white" className="p-1 font-normal text-lg">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <a href="#" className="flex items-center text-lg">
          Account
        </a>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <a href="#" className="flex items-center text-lg">
          Blocks
        </a>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <a href="#" className="flex items-center text-lg">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-[calc(100%)] overflow-scroll bg-black lg:px-12">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-4xl font-bold grad2"
            color="white"
          >
            ZenPay
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1 ml-6">
              <Button
                className="hidden bg-white text-black h-12 px-8 lg:inline-block hover:bg-black hover:text-white border-2 border-white ring-white"
                color="white"
              >
                <span className="">DashBoard</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="gradient"
              size="lg"
              color="white"
              className="hover:bg-black hover:text-white border-2 border-white"
            >
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
