import data from '../data_json/data.json';
import styles from './Card.module.css';

const Proveedores = () => {
  return (
    <div className={styles.card_container}>
      {data.proveedores.map((proveedor) => (
        <div key={proveedor.id} className={styles.card}>
          <h3 className={styles.card_title}>{proveedor.nombre}</h3>
          <p className={styles.card_text}>ID: {proveedor.id}</p>
          <p className={styles.card_text}>Email: {proveedor.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Proveedores;
