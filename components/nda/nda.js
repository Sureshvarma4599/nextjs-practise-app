import styles from '../layout.module.css'
import Image from 'next/image'
import Nda from '../../assets/nda.jpg'
import Tick from '../../assets/tick.png'
export default function NdaComponent() {
    const data =[
        "Non-Disclosure Agreement", 
        "Dedicated Account Manager", 
        "Design Verification and Material Suggestions",
        "Material Certification and Dimensional Reports",
        "Custom Packaging Solutions"
    ]
    return (
        <div className={styles.nda}>
            <h1>
            Connect with us to discuss your 
            <br/>
            manufacturing requirement
            </h1>
            <div className={styles.NdaWrapper}>
                <div style={{width:"50%",textAlign:"start"}}>
                    {data.map((e,i)=>
                           <h4 key={i}>• {e}</h4>
                    )}
                </div>
               <Image src={Nda}/>
            </div>
            <button className={styles.buttonMain}>Talk to Sales</button>
        </div>
    )
}
