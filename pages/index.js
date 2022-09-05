import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import Nav from './components/Nav'

export default function Home() {

  return (<>
  

    <Head>

<title> Home</title>
<meta  name='keyword' content='somthing'  />
    </Head>

    <div >

      <h1>Who is Pofendog?</h1>
      <Image src="/pofen.jpg" width={700} height={600} />
      <article>Here you will find some storry about Pofendog who is ...</article>
    </div>
  </>


  )
}
