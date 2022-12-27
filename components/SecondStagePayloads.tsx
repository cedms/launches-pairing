import styles from '../styles/Card.module.css';

const LABEL = 'Second stage payloads';

const renderPayload = ({ payload_id, payload_type }) => <li key={payload_id}>{`${payload_id}-${payload_type}`}</li>;

interface Payload {
  payload_id: number;
  payload_type: string;
}

interface SecondStagePayloadsProps {
  payloads: [Payload];
}

export default function SecondStagePayloads({ payloads }: SecondStagePayloadsProps) {
  return (
    <div>
      <div className={styles.label}>{LABEL}</div>
      <ul className={styles.list}>{payloads.map(renderPayload)}</ul>
    </div>
  );
}
