import styles from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({id, coverImageUrl, description, developer, title, price, finalPrice, discountPercent, releaseDate, publisher }) => {

   const game = { id, coverImageUrl, description, developer, title, price, finalPrice, discountPercent, releaseDate, publisher };

   return (
      <Link to={`/game/${id}`} state={{ game }} className={styles.container}>
         <img className={styles.image}
               src={coverImageUrl}
               alt={title}/>
   
         <div className={styles.info}>
            <div className={styles.descriptionBox}>
               <p className={styles.category}>{developer}</p>
               <h3 className={styles.title}>{title}</h3>
            </div>

            <div className={styles.priceContainer}>
               
               {discountPercent && (
                  <span className={styles.discount}>
                     -{discountPercent}%
                  </span>
               )}

               <div className={styles.beforeAfterPrice}>
                  {discountPercent ? (
                     <>
                        <span className={styles.priceBefore}>
                           UAH {price}
                        </span>
                        <span className={styles.price}>
                           UAH {finalPrice}
                        </span>
                     </>
                  ) : (
                     <span className={styles.price}>
                        UAH {price}
                     </span>
                  )}
               </div>
            </div>
         </div>    
      </Link>
   )
}

export default Card;