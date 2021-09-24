import styles from '../layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/logo-white.png'
export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLayout}>
                <Link href="/">
                <Image
                  className={styles.logo}
                  src={Logo}
                  height={55}
                  width={140}
                />
                </Link>
                <button className={styles.buttonMain}>
                    GET A QUOTE
                </button>
                
               
            </div>
        </div>
    )
}
