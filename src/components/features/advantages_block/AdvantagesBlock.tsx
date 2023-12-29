
import { useState, useEffect } from "react"
import AdvantageItem, { advantageItemProps } from "../../shared/advantage_item/AdvantageItem"
import s from "./AdvantagesBlock.module.css"
import { getAdvantagesRequest } from "../../../api/getAdvantagesRequest";

export default function AdvantagesBlock() {

    const [ advantages, setAdvantages ] = useState([]);

    useEffect(() => {
        const getAdv = async () => {
            await getAdvantagesRequest().then(response => {
                setAdvantages(response.data)
            }) 
        }

        getAdv()
    }, [])

    return (
        <div className={s.container}>
            {advantages.map(item => {
                return <AdvantageItem props={item}/>
            })}
        </div>
    )
}