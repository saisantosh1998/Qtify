// Section.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Section.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Section = ({ title, url }) => {
  const [albums, setAlbums] = useState([]);
  const [backupAlbums, setBackupAlbums] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(url);
        setAlbums(response.data.slice(0, 6));
        setBackupAlbums(response.data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    fetchTopAlbums();
  }, []);

  const handleClick = () => {
    setToggle(!toggle);
    setAlbums(toggle ? backupAlbums.slice(0, 6) : backupAlbums);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <Button
          text={toggle ? 'Collapse' : 'Show All'}
          click={handleClick}
          styles={{
            backgroundColor: 'var(--color-black)',
            border: 'solid black 0px',
            borderRadius: '5px',
            color: 'var(--color-primary)',
            cursor: 'pointer',
          }}
        />
      </div>
      <div className={styles.cardGrid}>
        {albums.map((album) => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Section;
