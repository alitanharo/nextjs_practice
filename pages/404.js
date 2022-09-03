import Link from "next/link";
import style from '../styles/error.module.css'
const NotFound = () => {
    return (<div className={style.notFound}>


        <h1>ooops!!!</h1>
        <h2> The page can not found</h2>
        <Link href="/">
            <a>
                comeback to Home page!
            </a>
        </Link>
    </div>);
}

export default NotFound;