import styles from '../layout.module.css'
import { useState } from 'react'
export default function Materials(props) {
    const data = props.data
    const [selected, setSelected] = useState(0)
    
    
    return (
        <div className={styles.Description}>
            <h1 style={{textAlign:"start"}}>{props.name} Materials</h1>
            <div className={ styles.Materials }>
                {data.map((e,i)=>
                <h1
                  className={ selected == i ? styles.active : styles.inactive } 
                  key={i} 
                  style={{ fontSize:"1.2rem", fontWeight:"400" }} 
                  onClick={()=>setSelected(i)}
                >
                   {e.type}
                </h1>
                )}
            </div>
            <h1>{data[selected].abb}</h1>
            <p 
              className={ styles.contentText } 
              style={{ textAlign:"start" }}
            >
             {data[selected].des}
            </p>
        </div>
    )
}
