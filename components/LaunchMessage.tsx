import clsx from 'clsx';
import styles from '../styles/LaunchMessage.module.css';

const SUCCESS_MESSAGE = 'Launch succeeded';

const getFailureMessage = failureReason => `Launch failed due to ${failureReason}.`;

const SuccessMessage = () => <div className={clsx(styles.message, styles.success)}>{SUCCESS_MESSAGE}</div>;

const FailureMessage = ({ failureReason }) => <div className={clsx(styles.message, styles.failure)}>{getFailureMessage(failureReason)}</div>;

interface LaunchMessageProps {
  success: boolean;
  failureReason: string;
}

export default function LaunchMessage({ success, failureReason }: LaunchMessageProps) {
  return success ? <SuccessMessage /> : <FailureMessage failureReason={failureReason}></FailureMessage>;
}
