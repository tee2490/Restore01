import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import  { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from '../../features/about/AboutPage';
import BasketPage from '../../features/basket/BasketPage';
import { setBasket } from '../../features/basket/basketSlice';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/home/HomePage';
import agent from '../api/agent';
import { useStoreContext } from '../context/StoreContext';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';
import { useAppDispatch, useAppSelector } from '../store/configureStore';
import { getCookie } from '../util/util';
import Header from './Header'
import LoadingComponent from './LoadingComponent';

export default function App() {
  //const { setBasket } = useStoreContext(); //ควบคุมสเตทด้วย React context to Centralize
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true);
  const {fullscreen} = useAppSelector(state=>state.screen)
 
  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else setLoading(false);
  }, [dispatch]);


  const [mode, setMode] = useState(true)
  const displayMode =  mode ? 'light':  'dark'

  const darkTheme = createTheme({
    palette: {
      mode: displayMode
    },
  });

  const handleMode=()=>setMode(!mode)

  if (loading) return <LoadingComponent message="Initilize App....." />;

  return (
    <>
     <ThemeProvider theme={darkTheme}>
     <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={1000}
        />
      <CssBaseline />
      <Header handleMode={handleMode}/>
      {fullscreen ? <>{mainroute}</> : <Container sx={{marginTop:2}}>
        {mainroute}
      </Container>}
    </ThemeProvider>
    </>
  )
}


const mainroute = <Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/about' element={<AboutPage/>}/>
<Route path='/contact' element={<ContactPage/>}/>
<Route path='/catalog' element={<Catalog/>}/>
<Route path='/basket' element={<BasketPage/>}/>
<Route path='/catalog/:id' element={<ProductDetails/>}/>
<Route path='/checkout' element={<CheckoutPage/>}/>
<Route path='/server-error' element={<ServerError/>}/>
<Route path='*' element={<NotFound/>}/>
</Routes>
