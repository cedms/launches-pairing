import FirstStageCores from '../FirstStageCores';
import SecondStagePayloads from '../SecondStagePayloads';
import LaunchMessage from '../LaunchMessage/LaunchMessage';
import LaunchDateUtc from '../LaunchDateUtc';
import styles from './Launch.module.css';
import Logo from '../Logo/Logo';

const LOGO_WIDTH = 100;
const LOGO_HEIGHT = 100;

export default function Launch({ launch }) {
  return (
    <div className={styles.main} data-testid={`launch-${launch.flight_number}`}>
      <div className={styles.header}>
        <Logo src={launch.links.mission_patch_small} alt={launch.mission_name} width={LOGO_WIDTH} height={LOGO_HEIGHT} />
        <h2>{launch.mission_name}</h2>
      </div>
      <LaunchDateUtc dateString={launch.launch_date_Utc}></LaunchDateUtc>
      <FirstStageCores cores={launch.rocket.first_stage.cores}></FirstStageCores>
      <SecondStagePayloads payloads={launch.rocket.second_stage.payloads}></SecondStagePayloads>
      <LaunchMessage success={launch.launch_success} failureReason={launch.launch_failure_details?.reason}></LaunchMessage>
    </div>
  );
}
