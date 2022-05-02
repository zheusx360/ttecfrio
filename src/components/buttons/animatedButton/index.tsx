import styles from './bt.module.scss'
export function Button({type = 1, text = 'ACESSAR', onClick = ()=>{}}){

  let renderButton = <button className={styles.second} onClick={onClick}>Button 2</button>

  switch (type) {
    case 1:
        renderButton = <button className={styles.first} onClick={onClick}>{text}</button>
      break;
    case 2:
        renderButton = <button className={styles.second} onClick={onClick}>{text}</button>
      break;
    case 3:
        renderButton = <button className={styles.third} onClick={onClick}>{text}</button>
      break;
    case 4:
        renderButton = <button className={styles.fourth} onClick={onClick}>{text}</button>
      break;
    case 5:
        renderButton = <button className={styles.fifth} onClick={onClick}>{text}</button>
      break;
    case 6:
        renderButton = <button className={styles.sixth} onClick={onClick}>{text}</button>
      break;
  }
  return(
      renderButton
  )

}
