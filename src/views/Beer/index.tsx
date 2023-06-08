import { useEffect, useState } from 'react';
import { Beer as IBeer } from '../../types';
import { fetchData } from './utils';
import { useParams } from 'react-router-dom';

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <article>
      <section>
        <header>
          <h1>{beer?.name}</h1>
        </header>
        <main>
          <div>
            <b>Name: </b> {beer?.name}
          </div>
          <div>
            <b>Type: </b> {beer?.brewery_type}
          </div>
          <div>
            <b>Phone: </b> {beer?.phone}
          </div>
          <div>
            <b>Postal Code: </b> {beer?.postal_code}
          </div>
          <div>
            <b>State: </b> {beer?.state}
          </div>
          <div>
            <b>City: </b> {beer?.city}
          </div>
          <div>
            <b>Street: </b> {beer?.street}
          </div>
          <div>
            <b>Address 1: </b> {beer?.address_1}
          </div>
        </main>
      </section>
    </article>
  );
};

export default Beer;