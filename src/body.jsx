import styles from "./body.module.css";

function Body() {
  const cafeNames = [
    "Starbucks",
    "Café de Flore",
    "Blue Bottle Coffee",
    "The Coffee Bean & Tea Leaf",
  ];

  const mapCafeNames = cafeNames.map((cafeName) => {
    return (
      <div key={cafeName} className={styles.cafes}>
        {cafeName}
      </div>
    );
  });

  return (
    <>
      <header className={styles.header}>
        <h1>Cafe Names</h1>
      </header>
      <div className={styles.main}>{mapCafeNames}</div>
    </>
  );
}

export default Body;
