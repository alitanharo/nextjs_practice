import Head from "next/head";
import Image from "next/image";


const About = () => {
    return (  < >


        <Head>

            <title> About</title>
            <meta name='keyword' content='somthing' />
        </Head>

<h1>This is pofendog</h1>
<Image src = "/pof.jpg"  width={500} height={400} />
        <p>
            The American Bully is a modern breed of dog that was developed as a companion dog, and originally standardized and recognized as a breed in 2004 by the American Bully Kennel Club (ABKC). Their published breed standard basically describes the dog as giving the "impression of great strength for its size." In 2008, the American Bully was recognized by the European Bully Kennel Club (EBKC), and on July 15, 2013, by the United Kennel Club (UKC).[1] Neither The Kennel Club nor American Kennel Club (AKC) have recognized or accepted the American Bully into their registry as a purebred dog, only directly associated Kennel Clubs cite this breed being any different that a Pit Bull. The founding registry (ABKC) divided the American Bully into four categories, including the Pocket, Standard, Classic, and XL, whereas other registries, including the UKC, have approved one consistent size standard.

            There are several types, ranging from pocket to XXL in size and weight. Temperament in adult dogs is very much dependent on training, and the breed can be very demanding and needs to be properly trained.
        </p>

    </>);
}
 
export default About;