function Food() {
  const food1 = "Fufu";
  const food2 = "Wakye";

  return (
    <ul>
      <li>Banku</li>
      <li>{food1}</li>
      <li>{food2.toLocaleUpperCase()}</li>
    </ul>
  );
}

export default Food;
