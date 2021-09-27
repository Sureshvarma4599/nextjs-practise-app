import styles from '../layout.module.css'
import Image from 'next/image'
import Intro from '../../assets/intro.jpeg'
export default function Description() {
    const datas = [
        {
            head : "Design Review",
            text : `Get your designs reviewed by our engineers and receive 
            manufacturing feasibility, cost cutting feedback.`
        },{
            head : "No MOQ",
            text : `3D Usher allows ordering as less as One unit and has capacity to produce
             1,000+ parts a day.`
        },,{
            head : "Quality & Reliability",
            text : `Dedicated engineering team to ensure high quality and test every 
            single part before qualifying to ship.`
        },,{
            head : "Online Order Tracking",
            text : `Track your order in a few clicks. Dedicated account manager for any
             concerns or questions you may have.`
        }
    ]
    return (
        <div className={styles.Description}>
            <h1>How 3D Usher as Your Manufacturing Partner Can Benefit You</h1>
            <div style={{textAlign:"start",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <p className={styles.contentText} style={{width:"50%"}}>
                  With our engineers and account managers located in New York & India, 
                  you can concentrate on what you do best and let us take care of manufacturing your requirements.
                  Connect with us today to start your project.
                </p>
                <Image src={Intro} width={400} height={200}/>
            </div>
            <div className={styles.cardWrapper}>
              {datas.map((e,i)=>
               <div key={i} className={styles.Card}>
                  <h1 style={{fontSize:"1.4rem"}}>{e.head}</h1>
                  <p className={styles.contentText}>{e.text}</p>
               </div>
              )}
            </div>
        </div>
    )
}
