const getRandomItem = (list) => {
  const available = list.filter(item => !item.selected);
  if (available.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
};

export default getRandomItem