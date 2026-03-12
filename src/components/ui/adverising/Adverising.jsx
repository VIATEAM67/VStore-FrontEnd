import { useEffect, useState } from 'react'
import styles from './Adverising.module.css'
import Card from "../cards/card/Card"

const Advertising = ({title, data}) => {
   const [cards, setCards] = useState([]);

   // загрузка JSON
   useEffect(() => {
      fetch(data)
         .then((res) => res.json())
         .then((data) => setCards(data))
         .catch((err) => console.error("Ошибка загрузки JSON:", err));
   }, [data]);

   return (
      <div className={styles.container}>
         <h2 className={styles.title}>{title}</h2>
         <ul>
            {cards.map((card, index) => (
               <li key={index}>
                  <Card {...card}/>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Advertising;