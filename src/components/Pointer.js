import classes from './Pointer.module.sass'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

import { useState } from 'react'


const Pointer = (props) => {
    const [active, setActive] = useState(false)

    const onMouseOver = () => {
        setActive(true)
    }

    const onMouseOut = () => {
        setActive(false)
    }

    return (
        <li onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={`${classes.Pointer} ${active?classes.ActiveIcon:''}`}>
            <div className={`icon ${classes.Icon}`}><ChevronDoubleRightIcon /></div>{props.children}
        </li>
    )
}

export default Pointer
