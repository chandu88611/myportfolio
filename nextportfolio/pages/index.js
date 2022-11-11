import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Main from '../components/Main'
import Contact from '../components/contact'
export default function Home() {
  return (
   <div className='bg-black '>
<Layout>

  <Main/>
  <Contact/>
</Layout>
    
   </div>
  )
}
