import data from '../data_json/data.json';
import styles from './Card.module.css';

const Productos = () => {
  return (
    <div className={styles.card_container}>
      {data.productos.map((producto) => (
        <div key={producto.id} className={styles.card}>
          <h3 className={styles.card_title}>{producto.nombre}</h3>
          <p className={styles.card_text}>ID: {producto.id}</p>
          <p className={styles.card_text}>Precio: ${producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
