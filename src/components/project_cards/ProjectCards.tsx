import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCards.module.css"


export default function Projects_card({src, tags,  href}: {src:string, tags: string[] , href: string}) {
  return (
   <Link href={href} target="_blank" prefetch={true}>
     <div className={styles.project_card}>

       <Image src={src} alt="image" height={300} width={300} className={styles.project_image}/>

       <div className={styles.tags_container}>
         {
            tags.map((item,index) => <div key={index} className={styles.tags}> {item} </div>)
         }
  
       </div>
    </div>
    </Link>
  )
}
