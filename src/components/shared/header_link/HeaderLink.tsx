import { Link } from "react-router-dom"
import s from "./HeaderLink.module.css"

export type headerLinkProps = {
    endpoint: string,
    text: string
}

export default function HeaderLink({ props }: {props: headerLinkProps }) { 
    return (
        <div className={s.container}>
            <Link className={s.link} to={props.endpoint}>{props.text}</Link>
        </div>
    )
}