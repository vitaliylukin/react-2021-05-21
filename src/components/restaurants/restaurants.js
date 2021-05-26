import { useState, useMemo } from 'react';
import Menu from '../menu';
import Navigation from '../navigation';

const Restaurants = ({ restaurants }) => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Navigation restaurants={restaurants} onRestaurantClick={setActiveId} />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
};

export default Restaurants;
