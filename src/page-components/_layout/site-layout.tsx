import { PropsWithChildren } from "react"
import Link from "next/link"

import { footer, layout, main, menu, nav } from "@/page-components/_layout/site-layout.css"

type Props = {}
export const SiteLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div className={layout}>
      <nav className={nav}>
        <ul className={menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/playground">Playground</Link>
          </li>
          <li>
            <Link href="/resume">Resumé</Link>
          </li>
        </ul>
      </nav>
      <main className={main}>{children}</main>
      <footer className={footer}>
        <p>🚧🏗️ Under heavy construction 🏗️🚧 Please be careful 🚧</p>
      </footer>
    </div>
  )
}
