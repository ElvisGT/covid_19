import style from '../styles/main.module.scss';

export const InteractionButton = ({text,action}) => {
  return (
      <button className={style.Button} onClick={action}>
          {text}
      </button>
  )
}
