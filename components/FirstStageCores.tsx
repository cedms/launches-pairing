import styles from '../styles/Card.module.css';

const LABEL = 'First stage cores';

const renderCore = ({ core_serial }) => <li key={core_serial}>{core_serial}</li>;

interface Core {
  core_serial: number;
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
