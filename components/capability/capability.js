import styles from '../layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {Datas} from "../data"
export default function Header() {
    const data = Datas
    return (
        <div className={styles.Capability}>
            {data.map((e,i)=>
            <Link href={`/${e.link}`}>
                <div className={styles.capabilityCard} key={i}>
                  <Image 
                   src={e.image}
                   width={80}
                   height={120}
                   />
                  <p className={styles.TechHeading}>{e.text}</p>
                </div>
            </Link>
            
            )}
            
        </div>
    )
}
/*
export const getStaticProps = ()=>{
    const data = [
        {
            image: Injection,
            text: "Injection Molding"
        },{
            image: Vaccum,
            text: "Vaccum Casting"
        },{
            image: Sheet,
            text: "Sheet Metal"
        },{
            image: Injection,
            text: "Injection Molding"
        },{
            image: Vaccum,
            text: "Vaccum Casting"
        }
    ]
    return {
        props:{
            data
        }
    }
}*/
