import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import { restaurantsListSelector } from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

const Restaurants = ({ restaurants, loadRestaurants }) => {
  const [activeId, setActiveId] = useState(restaurants[0]?.id);

  useEffect(() => {
    loadRestaurants();
  }, []); // eslint-disable-line

  const restaurantId = activeId || restaurants[0]?.id;

  if (restaurants.length === 0) return <Loader />;

  const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));

  return (
    <div>
      <Tabs tabs={tabs} activeId={restaurantId} onChange={setActiveId} />
      <Restaurant id={restaurantId} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: restaurantsListSelector(state),
});

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
