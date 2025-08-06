import { useParams } from 'react-router-dom';

export const Details = () => {
  const { name } = useParams();

  return <h1>Detalhes do Pokémon: {name}</h1>;
};
