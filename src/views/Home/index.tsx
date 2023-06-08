import { useEffect, useState } from 'react';
import { fetchData, getSearchBeerList } from './utils';
import { Beer } from '../../types';
import  FavoriteModal from '../Favorite/FavoriteModal';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Checkbox, Paper, TextField, Link } from '@mui/material';
import styles from './Home.module.css';
import { red } from '@mui/material/colors';

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [savedList, setSavedList] = useState<Array<Beer>>([]);
  const [favoriteList, setFavList] = useState([]);
  const [isDialogOpen, setDialogHandler] = useState(false);

  const [searchField, setSearchField] = useState("");
  var timerId: any


  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);
  useEffect(()=>{
    let data: any = localStorage.getItem("favorite");
    if(data)
      setFavList(JSON.parse(data))
  },[])
  const filterBeerList = (event: any) => {
    setSearchField(event.target.value)
    debounce(callSearchApi, 300)
  }

  const callSearchApi = () => {
    getSearchBeerList(setBeerList, searchField)
  }
  const debounce = (func: any, timer: number) => {
    clearTimeout(timerId); 
    timerId = setTimeout(func, timer)
  }
  const addFavoriteHandler = () => {
    setDialogHandler(true)
  }
  const handleCloseHandler = () => {
    setDialogHandler(false)
  }
  const getBeerName = (name: string)=> {
    setFavList(favoriteList => [...favoriteList, name] as any)
    localStorage.setItem("favorite", JSON.stringify([...favoriteList, name]))
  }
  return (
    <article>
      <section>
        <main>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <TextField label='Filter...' variant='outlined' style = {{width: '30%'}} onChange={filterBeerList}/>
                <Button variant='contained'>Reload list</Button>
              </div>
              <ul className={styles.list}>
              {beerList?.map((beer, index) => (
                  <li key={index.toString()}>
                    <Checkbox />
                    <Link style={{color:"navy"}} component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Paper>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3 style={{color:"#000080"}}>Favourite Beer List</h3>
                <Button variant='contained' size='small' onClick={addFavoriteHandler}>
                  Add Favourite Beer
                </Button>
              </div>
              <ul className={styles.list}>
                {favoriteList?.map((beer, index) => (
                  <div key = {index}>{beer}</div>
                ))}
                {!favoriteList?.length && <p>No Favourite Beer Found</p>}
              </ul>
            </div>
          </Paper>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3 style={{color:"#000080"}}>Saved items</h3>
                <Button variant='contained' size='small'>
                  Remove all items
                </Button>
              </div>
              <ul className={styles.list}>
                {savedList.map((beer, index) => (
                  <li key={index.toString()}>
                    <Checkbox />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
                {!savedList.length && <p>No saved items</p>}
              </ul>
            </div>
          </Paper>
          <FavoriteModal isDialogOpen = {isDialogOpen} onHandleClose= {handleCloseHandler} getBeerName = {getBeerName}/>
        </main>
      </section>
    </article>
  );
};

export default Home;