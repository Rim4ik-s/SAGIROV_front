import { useEffect, useState } from "react"
import HeaderLink, { headerLinkProps } from "../../shared/header_link/HeaderLink"
import s from "./HeaderLinks.module.css"
import { getLinksRequest } from "../../../api/getLinksRequest"


export default function HeaderLinks() {

    const [a, setA] = useState([])

    useEffect(() => {
        const getA = async () => {
            await getLinksRequest().then(response => {
                setA(response.data)
            })
        }

        getA()
    }, [])
    return (
        <div className={s.root_container}>
            <div className={s.container}>
                {a.map(link => {
                    return <HeaderLink props={link} />
                })}
            </div>
        </div>
    )
}