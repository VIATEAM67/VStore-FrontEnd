import styles from './FreeGames.module.css'

import giftIcon from '../../../assets/icons/general-icons/gift.svg'

import img01 from '../../../assets/img/game-cards/garden-story.png'
import img02 from '../../../assets/img/game-cards/mages-of-mystralia.png'
import img03 from '../../../assets/img/game-cards/fighting-herds.png'

const FreeGames = () => {

   const cards = [
      {
         src: img01,
         title: 'Garden Story',
         date: 'Free Now - Feb 27 at 05:00 PM'
      },
      {
         src: img02,
         title: 'MAGES OF MYSTRALIA',
         date: 'Free Now - Feb 27 at 05:00 PM'
      },
        {
         src: img03,
         title: 'Them’s Fighting Herds',
         date: 'Free Soon - Feb 30 at 05:00 PM'
      }
   ]
   return (
      <div className={styles.container}>
         <div className={styles.titleBox}>
            <div>
               <img src={giftIcon} alt='' />
               <h3 className={styles.title}>Free games!</h3>
            </div>
       
            <button className={styles.button}>View More</button>
         </div>

         <ul className={styles.cardsList}>
            {cards.map((card, index) => (
               <li key={index}>
                  <img src={card.src} />
                  <p>{card.title}</p>
                  <span>{card.date}</span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default FreeGames;