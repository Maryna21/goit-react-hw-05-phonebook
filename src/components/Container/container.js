import s from 'components/Container/container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Container;