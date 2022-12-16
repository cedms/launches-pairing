import styles from '../styles/Card.module.css';

const LABEL = 'Second stage payloads:';

const renderPayload = ({ payloadId, payloadType }) => <li key={payloadId}>{`${payloadId}-${payloadType}`}</li>;

interface Payload {
  payloadId: number;
  payloadType: string;
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
