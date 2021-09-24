import styles from '../layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Injection from "../../assets/injectionMolding.png"
import Sheet from "../../assets/sheetMetal.png"
import Vaccum from "../../assets/vacuumCasting.png"
export default function Header() {
    const data = [
        {
            image: Injection,
            text: "Injection Molding",
            link: "injection-molding"
        },{
            image: Vaccum,
            text: "Vaccum Casting",
            link: "vaccum-casting"
        },{
            image: Sheet,
            text: "Sheet Metal",
            link: "sheet-metal"
        },{
            image: Injection,
            text: "Injection Molding",
            link: "injection-molding"
        },{
            image: Vaccum,
            text: "Vaccum Casting",
            link: "vaccum-casting"
        }
    ]
    return (
        <div className={styles.Capability}>
            {data.map((e,i)=>
            <Link href={`/tech/${e.link}`}>
                <div className={styles.capabilityCard} key={i}>
                  <Image 
                   src={e.image}
                   width={80}
                   height={120}
                   />
                  <p>{e.text}</p>
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
