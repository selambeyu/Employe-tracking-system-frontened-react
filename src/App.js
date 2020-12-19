import React,{useState,useEffect} from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/signin";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./components/auth/signup";
import SideNav from "./components/layout/sideNav";
import { Provider } from 'react-redux'
import store from './store'
import Dashboard from "./components/layout/landing";
import DisplayAlert from "./components/layout/alert"
import ScrollToTop from "./components/layout/scroll";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import "./App.css";
const ENDPOINT = "http://127.0.0.1:4001";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function App() {
//   const [open, setOpen] = React.useState(true);
//   const [state, setState] = React.useState({
//       open: true,
//       vertical: 'bottom',
//       horizontal: 'left',
//   });
//   const [response, setResponse] = useState("");
//   const [alerts,setAlerts] = useState([])
//   useEffect(() => {
//     // const socket = socketIOClient(ENDPOINT);
//     const socket = socketIOClient(ENDPOINT, {
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
// });
//     socket.on("FromAPI", data => {
//       setResponse(data);
//       const msg = {
//         msg:data
//       }
//       alerts.push(msg)
//       console.log(alerts)
//     });
//   }, []);
  return (
    // <div>
    //     {response !== null && response != '' && (
        
    //                 <div key={alert.id}>
    //                     <Snackbar open={open} autoHideDuration={600}>
    //                         <Alert severity={alert.alertType}>{response}</Alert>
    //                     </Snackbar>
    //                 </div>
          
    //         )}
    //    <p>
    //   It's {response}
    // </p>
    // </div>
    <Provider store={store}>
      <DisplayAlert/>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route path="/admin" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
