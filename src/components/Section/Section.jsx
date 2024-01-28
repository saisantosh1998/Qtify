import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Button from "../Button/Button";
import { Tab, Tabs } from "@mui/material";

const Section = ({ title, url, hideButton, filterUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await axios.get(filterUrl);
        setFilters(response.data.data);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(url);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    if (filterUrl) {
      fetchFilters();
    }
    fetchTopAlbums();
  }, [url, filterUrl]);
  const handleChangeFilter = (event, newGenre) => {
    setSelectedFilter(newGenre);
  };

  const filterAlbumsByFilter = () => {
    if (selectedFilter === "All") {
      return albums;
    } else {
      return albums.filter((album) => album.genre.label === selectedFilter);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        {!hideButton && (
          <Button
            text={toggle ? "Show All" : "Collapse"}
            click={() => setToggle(!toggle)}
            styles={{
              backgroundColor: "var(--color-black)",
              border: "solid black 0px",
              borderRadius: "5px",
              color: "var(--color-primary)",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      {filterUrl && (
        <Tabs sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'var(--color-primary)',
          },
        }}value={selectedFilter} onChange={handleChangeFilter}>
          <Tab
            sx={{
              fontWeight: "bold",
              color: "var(--color-white)",
              '&.Mui-selected': {
                color: "var(--color-white)",
                borderBottom: "2px solid var(--color-primary)",
              },
            }}
            key="All"
            label="All"
            value="All"
          />
          {filters.length > 0 &&
            filters.map((filter) => (
              <Tab
                sx={{
                  fontWeight: "bold",
                  color: "var(--color-white)",
                  '&.Mui-selected': {
                    color: "var(--color-white)",
                    borderBottom: "2px solid var(--color-primary) !important",
                  },
                }}
                key={filter.key}
                label={filter.label}
                value={filter.label}
              />
            ))}
        </Tabs>
      )}
      {hideButton ? (
        <Carousel data={filterAlbumsByFilter()} renderedItem={Card} />
      ) : (
        <>
          {toggle ? (
            <Carousel data={albums} renderedItem={Card} />
          ) : (
            <div className={styles.cardGrid}>
              {albums.map((album) => (
                <Card key={album.id} album={album} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Section;
