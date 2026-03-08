"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserButton, useUser } from "@clerk/nextjs";

export const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="px-18 py-4 max-w-7xl mx-auto flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h1 className="font-game mt-1 text-2xl">CodeBox</h1>
      </div>
      {/* navbar */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              
              <ul className="grid md:grid-cols-2 sm:w-[400px] md:w-[500px] lg:w-[600px] gap-2">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-accent rounded-md cursor-pointer"
                  >
                    <h3 className="font-medium">{course.name}</h3>
                    <p className="text-sm text-gray-500">{course.desc}</p>
                  </li>
                ))}
              </ul>            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/projects" className={navigationMenuTriggerStyle()}>
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                Pricing
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact-us" className={navigationMenuTriggerStyle()}>
                Contact Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* sign up button */}
      {!isSignedIn ? (
        <Link href="/sign-up">
          <Button className="font-game text-xl cursor-pointer" variant="pixel">
            Sign Up
          </Button>
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                className="font-game text-xl cursor-pointer"
                variant="pixel"
              >
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </div>{" "}
        </div>
      )}
    </div>
  );
};
