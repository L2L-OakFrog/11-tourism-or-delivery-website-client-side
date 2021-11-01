import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "./Hooks/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Main/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound';
import PrivateRoute from './Pages/Shared/PrivateRoute';
import ManageUsers from './Pages/Private/ManageUsers/ManageUsers';
import ManageOrders from './Pages/Private/ManageOrders/ManageOrders';
import AddHotels from './Pages/Private/AddHotels/AddHotels';
import AddTours from './Pages/Private/AddTours/AddTours';
import AddRestaurants from './Pages/Private/AddRestaurants/AddRestaurants';
import Tours from './Pages/Tours/Tours';
import TourDetails from './Pages/Tours/TourDetails/TourDetails';
import Hotels from './Pages/Hotels/Hotels';
import HotelDetails from './Pages/Hotels/HotelDetails/HotelDetails';
import Restaurants from './Pages/Restaurants/Restaurants';
import RestaurantDetails from './Pages/Restaurants/RestaurantDetails/RestaurantDetails';
import TitleChange from './Pages/TitleChange/TitleChange';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div className="contents">
            <div className="header">
              <Header></Header>
            </div>
            <div className="container routes">
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>

                <Route path='/home' render={(props) => (
                  <TitleChange title="OakTours">
                    <Home {...props} />
                  </TitleChange>
                )} />

                <Route path='/tours' render={(props) => (
                  <TitleChange title="Tours">
                    <Tours {...props} />
                  </TitleChange>
                )} />

                <Route path='/hotels' render={(props) => (
                  <TitleChange title="Hotels">
                    <Hotels {...props} />
                  </TitleChange>
                )} />

                <Route path='/restaurants' render={(props) => (
                  <TitleChange title="Restaurants">
                    <Restaurants {...props} />
                  </TitleChange>
                )} />

                <Route path='/about' render={(props) => (
                  <TitleChange title="About OakTour">
                    <About {...props} />
                  </TitleChange>
                )} />

                <Route path='/login'>
                  <Login></Login>
                </Route>

                {/* Private Routes */}

                <PrivateRoute path='/allorders'>
                  <ManageOrders></ManageOrders>
                </PrivateRoute>

                <PrivateRoute path='/users'>
                  <ManageUsers></ManageUsers>
                </PrivateRoute>

                <PrivateRoute path='/addtours'>
                  <AddTours></AddTours>
                </PrivateRoute>

                <PrivateRoute path='/addhotels'>
                  <AddHotels></AddHotels>
                </PrivateRoute>

                <PrivateRoute path='/addrestaurants'>
                  <AddRestaurants></AddRestaurants>
                </PrivateRoute>

                {/* Private Routes */}

                {/* Details pages */}

                <PrivateRoute exact path='/tourdetail/:tourId'>
                  <TourDetails></TourDetails>
                </PrivateRoute>

                <PrivateRoute exact path='/hoteldetail/:hotelId'>
                  <HotelDetails></HotelDetails>
                </PrivateRoute>

                <PrivateRoute exact path='/restaurantdetail/:restauId'>
                  <RestaurantDetails></RestaurantDetails>
                </PrivateRoute>

                {/* Details pages */}

                <Route path='*'>
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </div>
          </div>

          <div className="footer">
            <Footer></Footer>
          </div>
        </Router >
      </AuthProvider >
    </div >
  );
}

export default App;
