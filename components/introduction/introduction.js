import styles from '../layout.module.css'
import Image from 'next/image'
import Logo from '../../assets/logo-white.png'
import Capability from  "../capability/capability"
import Typewriter from "typewriter-effect";
export default function Header() {
    return (
        <div className={styles.landing}>
            <div className={styles.landingTitle}>
               <h1 className={styles.pageSectionTitle}>
                  Your Manufacturing Partner for
                  <span style={{color:"rgb(29, 191, 137)"}}>
                    <Typewriter
                      options={{
                      strings: [
                        "Injection Molding",
                        "CNC Machining",
                        "3D Printing",
                        "Vacuum Casting",
                        "Thermoforming",
                        "Sheet Metal"
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      pauseFor: 1000,
                    }}
                    />
                   </span>
               </h1>
            </div>
            <Capability />
        </div>
    )
}
