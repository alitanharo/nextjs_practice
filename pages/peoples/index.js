//import styles from "../styles/peoples.module.css"

import Link from "next/link";


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { peoples: data }
    }
}





const Peoples = ({ peoples }) => {





    return (<div >
        <h1>Peoples</h1>
    
{peoples.map(p=>(
    <Link href={"/peoples/" + p.id} key={p.id}>
        <a >
            <h3>{p.name}</h3>
        </a>
    </Link>
))}

    </div>);
}

export default Peoples;