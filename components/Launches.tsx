import camelcaseKeys from 'camelcase-keys';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Launch from './Launch';

const LAUNCHES_API_URL = 'https://api.spacexdata.com/v3/launches';
const PER_PAGE = 10;

export default function Launches() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launches, setLaunches] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(LAUNCHES_API_URL);
      const data = await res.json();
      const camelCasedLaunches = camelcaseKeys(data, { deep: true });
      setIsLoaded(true);
      setLaunches(camelCasedLaunches);
    } catch (err) {
      setIsLoaded(true);
      setError(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.grid}>
      {error && <div>Error: {error.message}</div>}
      {isLoaded ? launches.slice(0, PER_PAGE).map(launch => <Launch launch={launch} key={launch.flightNumber} />) : <div>Loading...</div>}
    </div>
  );
}
