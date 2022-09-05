import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import style from '../styles/error.module.css'
const NotFound = () => {
    const router= useRouter();

useEffect(()=>{


setTimeout(()=>{
    router.push("/")

},3000)

},[])





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