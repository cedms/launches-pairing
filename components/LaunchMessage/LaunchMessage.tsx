import clsx from 'clsx';
import styles from './LaunchMessage.module.css';

const SUCCESS_MESSAGE = 'Launch succeeded';
const FAILURE_MESSAGE = 'Launch failed';

const SuccessMessage = () => (
    <div className={clsx(styles.label, styles.success)}>{SUCCESS_MESSAGE}</div>
)

const FailureMessage = ({ failureReason }) => (
  <>
    <div className={styles.reason}>{failureReason}</div>
    <div className={clsx(styles.label, styles.failure)}>{FAILURE_MESSAGE}</div>
  </>
)

interface LaunchMessageProps {
  success: boolean;
  failureReason?: string;
}

export default function LaunchMessage({ success, failureReason }: LaunchMessageProps) {
  return (
  <div className={styles.main} data-testid='launch-message'>
    {success
      ? <SuccessMessage /> 
      : <FailureMessage failureReason={failureReason}></FailureMessage>
    }
</div>)
  
}
