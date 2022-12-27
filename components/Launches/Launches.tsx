import Button, { ButtonColor, ButtonSize } from 'components/Button/Button';
import { useEffect, useState } from 'react';
import styles from './Launches.module.css';
import Launch from '../Launch/Launch';

const LAUNCHES_API_URL = 'https://api.spacexdata.com/v3/launches';
const PER_PAGE = 10;
const LOAD_MORE_BUTTON_LABEL = 'Load more';

export default function Launches() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  const loadData = async () => {
    try {
      const res = await fetch(LAUNCHES_API_URL);
      const data = await res.json();
      setIsLoaded(true);
      setLaunches(data);
    } catch (err) {
      setIsLoaded(true);
      setError(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOnClick = () => {
    setCurrentPage(currentPage + 1);
  }

  if (error) return <div>Error: {error.message}</div>;
  if (!isLoaded) return <div>Loading...</div>;
  
  return (
    <div className={styles.main}>
      <div className={styles.grid}>        
        {launches.slice(0, currentPage * PER_PAGE).map(launch => <Launch launch={launch} key={launch.flight_number} />)}
      </div>
      <Button text={LOAD_MORE_BUTTON_LABEL} onClick={handleOnClick} color={ButtonColor.Primary}></Button>      
    </div>
  );
}
