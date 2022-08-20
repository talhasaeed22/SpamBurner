import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export const getServerSideProps=()=>{
  return {
    redirect:{
      destination:'/home'
    }
  }
}