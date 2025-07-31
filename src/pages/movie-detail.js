import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';

const DetailPage = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Không tìm thấy phim!</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} width={300} />
      <p>{movie.detail}</p>
    </div>
  );
};

export default DetailPage;
