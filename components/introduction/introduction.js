import styles from '../layout.module.css'
import Image from 'next/image'
import Logo from '../../assets/logo-white.png'
import Capability from  "../capability/capability"
export default function Header() {
    return (
        <div className={styles.landing}>
            <div className={styles.landingTitle}>
               <h1 className={styles.pageSectionTitle}>
                  On Demand Manufacturing 
                  <br/>
                  Capabilities
               </h1>
               <Capability />
            </div>
        </div>
    )
}
