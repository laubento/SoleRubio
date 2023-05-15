
import styles from './Pagination.module.css'

const Pagination = ({ campaigns, campaignsPerPage, paging, page }) => {

  const pages = [];
  for (let i = 1; i <= Math.ceil(campaigns / campaignsPerPage); i++) {
    pages.push(i);
  }

  return (

      <div>
      <nav className={styles.pages}>
          {pages?.map((el, key) => (
            <button className={page -1 === key? styles.btnActive : styles.btnPasive} key={key} onClick={() => paging(el)}>
              {el}
            </button>
          ))}
        
      </nav>
    </div>

  );
};

export default Pagination;