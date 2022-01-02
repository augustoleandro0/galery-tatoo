import type { NextPage } from 'next'
import Sidebar from '../components/sidebar'
import MenuMobile from '../components/menuMobile'
import Main from '../components/main'
import Grid from '../styles/grid.module.css'
import Contato from './contato'


const Home: NextPage = () => {


  return (
    <>
      <MenuMobile />
     
        <Sidebar />
        <Main />
      
    </>



  )
}

export default Home
