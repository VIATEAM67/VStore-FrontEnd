import styles from'./Home.module.css'

import Header from '../../components/layout/header/Header.jsx'
import Main from '../../components/layout/main/Main.jsx'
import Footer from '../../components/layout/footer/Footer.jsx'

const Home = () => {
   return(
      <>
         <div className={styles.container}>
            <Header />
            <Main />
            <Footer />
         </div>
      </>
   )
}

export default Home;