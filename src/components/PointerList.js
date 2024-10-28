import classes from './PointerList.module.sass'


const PointerList = (props) => {
    return (
        <ul className={classes.PointerList}>
            {props.children}
        </ul>
    )
}

export default PointerList
