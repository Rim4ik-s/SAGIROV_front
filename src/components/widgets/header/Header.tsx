import React from "react"
import s from "./Header.module.css"
import Logo from "../../shared/logo/Logo"
import HeaderLinks from "../../features/header_links/HeaderLinks"
import { headerLinkProps } from "../../shared/header_link/HeaderLink"

export default function Header() {
    return (
        <div className={s.container}>
            <div className={s.container_2}>
                <Logo />
                <HeaderLinks></HeaderLinks>
            </div>
        </div>
    )
}