import dayjs from 'dayjs';
import styles from '../../styles/Card.module.css';

const DATE_FORMAT = 'DD/MM/YYYY';

const LABEL = 'Launch date:';

interface LaunchDateProps {
  dateString: string;
}

export default function LaunchDate({ dateString }: LaunchDateProps) {
  const date = dayjs(dateString).format(DATE_FORMAT);
  return (
    <div>
      <div className={styles.label}>{LABEL}</div>
      <div>{date}</div>
    </div>
  );
}
