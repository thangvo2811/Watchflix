import "./App.scss";
import Footer from "./components/Footer";
import LastWatch from "./components/LastWatch";
import ListMovies from "./components/ListMovie";
import Menu from "./components/Menu";
import SeriesMovie from "./components/SeriesMovie/index";

function App() {
  const fakeData = [
    {
      name: "My Last Watch",
      name_TopMovies: "Top Movies",
      name_TopTV: "Top TV Show",
      view_more: "View More",
    },
  ];
  return (
    <div className="container">
      <Menu />
      <ListMovies />
      {fakeData.map((item, index) => {
        return (
          <>
            <LastWatch name={item.name} view={item.view_more} />
            <LastWatch name={item.name_TopMovies} view={item.view_more} />
            <LastWatch name={item.name_TopTV} view={item.view_more} />
          </>
        );
      })}
      <SeriesMovie />
      <Footer />
    </div>
  );
}

export default App;
