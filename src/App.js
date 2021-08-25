import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleMovie from "./components/templates/single-movie";
import HomePage from "./components/templates/homepage";
import ViewedMovies from "./contexts/contexts";
import { Container, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

function App() {
  return (
    <Router>
      <div className="App">
        <ViewedMovies>
          <ThemeProvider theme={theme}>
            <Container maxWidth="md">
              <Switch>
                <Route exact path="/:id" component={SingleMovie} />
                <Route exact path="/" component={HomePage} />
              </Switch>
            </Container>
          </ThemeProvider>
        </ViewedMovies>
      </div>
    </Router>
  );
}

export default App;
