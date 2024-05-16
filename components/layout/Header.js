"use client"
import {Navbar} from 'react-bootstrap';
import Link from "next/link";

export function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" className={'px-3'}>
        <Link className={'navbar-brand'} href={'/'}>Three.js React Viewer</Link>
      </Navbar>
    </header>
  );
};