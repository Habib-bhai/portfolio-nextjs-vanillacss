"use client"

import Link from "next/link";

export default function Navbar() {
    const openSidebar = () => {
      document.getElementById("sidebar")!.style.width = "250px";
    };
  
    const closeSidebar = () => {
      document.getElementById("sidebar")!.style.width = "0";
    };
  
    return (
      <div className="navbar-container">
        <div className="navbar">
          <h1>Bro Habib</h1>
          <ul className="nav-links">
            <Link  href={"/"}><li>Home</li></Link>
            <Link href={"#projects"}><li>Portfolio</li></Link>
            <a href="/frontend-dev-resume.pdf" download><li>Cv</li></a>
            <Link href={"#contact"}><li>Contact</li></Link>
          </ul>
          <button className="menu-btn" onClick={openSidebar}>Menu</button>
        </div>
  
        <div className="sidebar" id="sidebar">
          <button className="close-btn" onClick={closeSidebar}>×</button>
          <ul>
          <Link onClick={()=> closeSidebar()} href={"/"}><li>Home</li></Link>
            <Link onClick={()=> closeSidebar()} href={"#projects"}><li>Portfolio</li></Link>
            <a onClick={()=> closeSidebar()} href="/frontend-dev-resume.pdf" download><li>Cv</li></a>
            <Link onClick={()=> closeSidebar()} href={"#contact"}><li>Contact</li></Link>
          </ul>
        </div>
      </div>
    );
  }
  