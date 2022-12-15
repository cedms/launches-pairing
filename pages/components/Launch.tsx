import Logo from './Logo';
import FirstStageCores from './FirstStageCores';
import SecondStagePayloads from './SecondStagePayloads';
import LaunchMessage from './LaunchMessage';
import LaunchDateUtc from './LaunchDateUtc';
import styles from '../../styles/Home.module.css';

export default function Launch({ launch }) {
  return (
    <a href='/' className={styles.card}>
      <div className={styles.header}>
        <Logo src={launch.links.missionPatchSmall} alt={launch.missionName}></Logo>
        <h2>{launch.missionName}</h2>
      </div>
      <LaunchDateUtc dateString={launch.launchDateUtc}></LaunchDateUtc>
      <FirstStageCores cores={launch.rocket.firstStage.cores}></FirstStageCores>
      <SecondStagePayloads payloads={launch.rocket.secondStage.payloads}></SecondStagePayloads>
      <LaunchMessage success={launch.launchSuccess} failureReason={launch.launchFailureDetails?.reason}></LaunchMessage>
    </a>
  );
}
