"use client";

import ThemeToggle from "@/components/layout/theme-toggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>{/* <MobileSidebar /> */} </div>
        <div className="mr-auto">
          {mounted && (
            <Image
              src={
                theme === "dark"
                  ? "/logos/logo_yellow.svg"
                  : "/logos/logo_black.svg"
              }
              alt="logo"
              width={100}
              height={100}
            />
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              window.open("https://github.com/Skate-Org", "_blank");
            }}
          >
            {" "}
            <GithubIcon height={20} width={20} />
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
