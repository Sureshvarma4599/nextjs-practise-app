import styles from '../layout.module.css'
export default function Applications({apps}) {
    return (
        <div className={styles.applications} >
             <div style={{width:"58%" }}>
                 <h2>{apps.heading}</h2>
                 <p className={styles.contentText}>{apps.subheading}</p>
             </div>
             <div style={{width:"40%" }}>
                 {apps.data.map((e,i)=>
                    <div key={i}>
                        <h2>{e.h}</h2>
                        <p className={styles.contentText}>{e.s}</p>
                    </div>
                 )}
             </div>
            

        </div>
    )
}
