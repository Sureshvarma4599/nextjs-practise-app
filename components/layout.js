
import styles from './layout.module.css'
import File from './file'
export default function Layout({ children }) {
    return <div className={styles.container}>
        <File/>
        {children}
        
        </div>
  }