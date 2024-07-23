'use client'
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { SunIcon ,MoonIcon} from '@heroicons/react/24/solid'

function Navbar({className}) {

    const [active, setActive] = useState(null);


    // const [activeTheme,setActiveTheme] = useState(window.localStorage.getItem("theme"))
    const [activeTheme,setActiveTheme] = useState()
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
          const theme = window.localStorage.getItem("theme");
          setActiveTheme(theme);
          if (theme) {
              document.documentElement.classList.add(theme);
          }
      }
  }, []);

    let handleChangeTheme=()=>{
      if(activeTheme === "dark"){
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem("theme","light")
        setActiveTheme("light")
      }
      else{
          document.documentElement.classList.remove("light")
          document.documentElement.classList.add("dark")
          window.localStorage.setItem("theme","dark")
          setActiveTheme("dark")
      }
    }

  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} className="flex ">
      <Link href="/">
      <MenuItem setActive={setActive} active={active} item="Home"/>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
        </div>
      </MenuItem>
      <Link href='/contact'>
        <MenuItem setActive={setActive} active={active} item="Contact Us"/>
      </Link>
      {/* <button className="rounded bg-black px-3 dark:bg-white text-white dark:text-black" onClick={handleChangeTheme}>
      Change to {theme === "dark" ? "light" : "dark"} theme
      </button> */}
      {
        activeTheme ==="dark" ? 
        <SunIcon  className="size-6 text-yellow-400" onClick={handleChangeTheme}/>
        :
        <MoonIcon  className="size-6 text-neutral-800" onClick={handleChangeTheme}/>
      }
      
      </Menu>
    </div>
  )
}

export default Navbar
