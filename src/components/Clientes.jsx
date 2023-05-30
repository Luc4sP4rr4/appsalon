import styles from './Clientes.module.css'
const Clientes = () => {
  return (
    <div className={styles.Container}>
      <h1>CLIENTES</h1>
      <div className={styles.Filters}>
            <label className={styles.label}>Filtrar por:</label>
            <select className={styles.select} >
                <option className={styles.option} value="">--Sin filtro--</option>
                <option className={styles.option} value="id">Id</option>
                <option className={styles.option} value="name">Nombre y apellido</option>
                <option className={styles.option} value="telefono">Telefono</option>
                <option className={styles.option} value="peluquero">Peluquero</option>
            </select>    
            <input className={styles.input} type="text" />
      </div>
      <div className={styles.show}>
        TABLA DE CLIENTES
      </div>

    
    </div>
  )
}

export default Clientes