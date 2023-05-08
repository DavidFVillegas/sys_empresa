import data from '../data_json/data.json';
import styles from './Card.module.css';

const Clientes = () => {
  return (
    <div className={styles.card_container}>
      {data.clientes.map((cliente) => (
        <div key={cliente.id} className={styles.card}>
          <h3 className={styles.card_title}>{cliente.nombre}</h3>
          <p className={styles.card_text}>ID: {cliente.id}</p>
          <p className={styles.card_text}>Email: {cliente.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Clientes;


