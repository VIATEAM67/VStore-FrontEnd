import TopGame from '../../ui/top/TopGame.jsx'
import Advertising from '../../ui/adverising/Adverising.jsx'
import Featured from '../../ui/featured/Featured.jsx'
import Mobile from '../../ui/mobile/Mobile.jsx'
import FreeGames from '../../ui/free/FreeGames.jsx'
import styles from './Main.module.css'

const Main = () => {

   const propsData = [
      {
         title: 'Discover Something',
         data: '/data/discover-cards.json'
      },
      {
         title: 'Winter Sale Spotlight',
         data: '/data/sales-cards.json'
      },
      {
         data:'/data/featured-cards.json'
      },
      {
         title: 'Popular Games',
         data:'/data/popular-games.json'
      },
      {
         title: 'Recently Updated',
         data:'/data/updated-games.json'
      },
      {
         title: 'Now On The  Store',
         data:'/data/discover-cards.json'
      }
   ]
    
   return (
      <main className={styles.container}>
         <TopGame />
         <Advertising {...propsData[0]}/>
         <Advertising {...propsData[1]}/>
         <Featured {...propsData[2]}/>
         <FreeGames />
         <Mobile/>
         <Advertising {...propsData[3]} />
         <Advertising {...propsData[4]} />
         <Advertising {...propsData[5]} />
      </main>
   )
}

export default Main;