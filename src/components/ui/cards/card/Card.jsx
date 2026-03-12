import styles from './Card.module.css'

const Card = ({src, altText, category, title, price, priceBefore, priceAfter}) => {
   
   const discount = priceBefore && priceAfter ? Math.round((1 - priceAfter / priceBefore) * 100) : null;
   
   return (
      <a className={styles.container}>
         <img className={styles.image}
               src={src}
               alt={altText}/>
   
         <div className={styles.info}>
            <div className={styles.description}>
               <p className={styles.category}>{category}</p>
               <h3 className={styles.title}>{title}</h3>
            </div>
           

            <div className={styles.priceContainer}>
               {discount && <span className={styles.discount}>-{discount}%</span>}

               <div className={styles.beforeAfterPrice}>
                  {priceBefore && priceAfter ?(
                  <>
                  <span className={styles.priceBefore}>{`UAH ${priceBefore}`}</span>
                  <span className={styles.price}>{`UAH ${priceAfter}`}</span>
                  </>
                  ) : (
                     <span className={styles.price}>{`UAH ${price}`}</span>
                  )}
               </div> 
            </div>
         </div>    
      </a>
   )
}

export default Card;