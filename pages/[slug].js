import Header from "../components/header/header"
import Styles from "../components/layout.module.css"
import Head from 'next/head'
import Image from "next/image"
import {Datas} from '../components/data'
import React, {useState}  from "react"
import axios from "axios"
import Description from "../components/description/description"
import Materials from "../components/materials/materials"
import Nda from "../components/nda/nda"
export default function Tech({data,apidata}) {

    const [email ,setEmail] = useState("");
    const handleChange =(e)=>{
        setEmail(e.currentTarget.value);
    }

    const submitHandler = ()=>{
        
        console.log(data)
        axios.post('http://localhost:3000/api/text',[email])
        .then(res=>{
            console.log(res)
        })
        setEmail("")
    }
   
    return (
      <div className={Styles.tech}>
        <Head>
          <title>3D Usher </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className={Styles.techLanding}>
          <div 
            style={{
              width:"50%",
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between"
              }}>
             <h1 className={Styles.sectionTitle} >
                On Demand {Datas[data].text} 
              </h1>
              <p className={Styles.contentText} >
                {Datas[data].data}
              </p>
              <div>
                 <button className={Styles.buttonMain}>GET A QUOTE</button>
                 <button className={Styles.buttonSecondary}>Speak with an Engineer</button>
              </div>
              
          </div>
          <div>
            <Image 
             src={Datas[data].image}
             width={300}
             height={280}
            />
          </div>
            {/*
            <input 
              className = {Styles.input}
              value ={email}
              placeholder="Email *"
              onChange={handleChange}
            />
            <button 
              className={Styles.buttonMain}
              onClick={submitHandler}
            >
                Post
            </button>
            <div className={Styles.card}>
            {apidata.map((e,i)=>
                <div key={i} className={Styles.api}>
                    <p className={Styles.paragraph}>Email  :  {e.email}</p>
                </div>
            )}
            </div>
            */}
        </div>
        <Description/>
        <Materials 
          name={Datas[data].text} 
          data={Datas[data].materials} 
        />
        <Nda/>
      </div>
    )
  }
  export const getStaticProps = async({params})=>{
    
      let slug = params.slug
      let data = {}
        switch (slug){
            case "injection-molding":
                data = Datas[0];
                break;
            case "vaccum-casting" :
              data = Datas[1];
                break;
            case "sheet-metal" :
                data = Datas[2];
                break;
            case "cnc-machining" :
                data = Datas[4];
                break;
            case "3d-printing" :
                data = Datas[5];
                break;
                
        }
        const result = Datas.findIndex((e)=> e.link === slug)
        const res = await fetch(`http://localhost:3000/api/text`)
        const api = await res.json()
        
      return {
          props:{
              data:result,
              apidata: api,
          }
      }
  }
  export async function getStaticPaths(){
    const paths = Datas.map((e)=>{
        return { params :{slug : e.link}}
    })
    return {
        paths,
        fallback : false,
    }
  }
  /*
  
  export const getServerSideProps = async()=>{
    const res = await fetch('http://localhost:3000/api/text')
    const api = await res.json()
    return {
      props:{
        apidata:api
      }
    }
  }*/ 
  