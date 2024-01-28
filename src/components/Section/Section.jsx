import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Section.module.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Button from '../Button/Button';

const Section = ({ title, url }) => {
  const [albums, setAlbums] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(url);
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchTopAlbums();
  }, [url]);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <Button
          text={toggle ? 'Show All' : 'Collapse'}
          click={() => setToggle(!toggle)}
          styles={{
            backgroundColor: 'var(--color-black)',
            border: 'solid black 0px',
            borderRadius: '5px',
            color: 'var(--color-primary)',
            cursor: 'pointer',
          }}
        />
      </div>
      {toggle ? (
        <Carousel data={albums} renderedItem={Card}/>
      ) : (
        <div className={styles.cardGrid}>
          {albums.map((album) => (
            <Card key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
