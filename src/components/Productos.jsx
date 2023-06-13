import styles from './styles/Productos.module.css'
const Productos = () => {
  return (
    <div className={styles.Container}>
      <h1>PRODUCTOS</h1>
      <div className={styles.Filters}>
            <label className={styles.label}>Filtrar por:</label>
            <select className={styles.select} >
                <option className={styles.option} value="">--Sin filtro--</option>
                <option className={styles.option} value="cera">Cera</option>
                <option className={styles.option} value="pomada">Pomadas</option>
                <option className={styles.option} value="polvo">Polvos</option>
                <option className={styles.option} value="aceite">Aceites</option>
                <option className={styles.option} value="balsamo">Balsamos</option>
            </select>    
            <input className={styles.input} type="text" />
      </div>
      <div className={styles.show}>
        contenedor de productos
      </div>
    </div>
  )
}

export default Productos