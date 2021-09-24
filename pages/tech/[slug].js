import Header from "../../components/header/header"
import Styles from "../../components/layout.module.css"
import { useRouter } from "next/router"
import Injection from "../../assets/injectionMolding.png"
import Sheet from "../../assets/sheetMetal.png"
import Vaccum from "../../assets/vacuumCasting.png"
import Head from 'next/head'
import Image from "next/image"
import {Datas} from '../../components/data'
export default function Tech({data}) {
    console.log(data)
    return (
      <div>
        <Head>
          <title>3D Usher </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className={Styles.landing}>
           <h1 className={Styles.pageSectionTitle}>
              Your Manufacturing Partner for
              <br/>
             {data.text}
           </h1>
           <Image 
             src={data.image}
             width={300}
             height={200}/>
            <p className={Styles.paragraph}>{data.data}</p>
        </div>
      </div>
    )
  }
  export const getStaticProps = ({params})=>{
    
      let slug = params.slug
      let data = {}
        switch (slug){
            case "injection-molding":
                data = Datas[0]
                break;
            case "vaccum-casting" :
              data = Datas[1]
                break;
            case "sheet-metal" :
                data = Datas[2]
                break;
                
        }
      return {
          props:{
              data:data
          }
      }
  }
  export async function getStaticPaths(){
    const paths = Datas.map((e)=>{
        return { params :{slug : e.link}}
    })
    return {
        paths,
        fallback : false
    }
  }
  