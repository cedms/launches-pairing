import styles from '../styles/Card.module.css';

const LABEL = 'First stage cores:';

const renderCore = ({ coreSerial }) => <li key={coreSerial}>{coreSerial}</li>;

interface Core {
  coreSerial: number;
}

interface FirstStageCoresProps {
  cores: [Core];
}

export default function FirstStageCores({ cores }: FirstStageCoresProps) {
  return (
    <div>
      <div className={styles.label}>{LABEL}</div>
      <ul className={styles.list}>{cores.map(renderCore)}</ul>
    </div>
  );
}
