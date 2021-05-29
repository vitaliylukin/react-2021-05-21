import Rate from './rate';

export default function Review(props) {

  return (
    <div>
      <p>{props.review.user}</p>
      <p>{props.review.text}</p>
      <Rate rating={props.review.rating} />
    </div>
  );
}

