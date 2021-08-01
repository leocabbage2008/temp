import "./App.css";
import Grid from "./components/Grid";

function App() {
  const cards = [
    {
      job: "Janitor",
      gender: "m",
    },
    {
      job: "Janitor",
      gender: "f",
    },
    {
      job: "Janitor",
      gender: "m",
    },
    {
      job: "Janitor",
      gender: "f",
    },
    {
      job: "Janitor",
      gender: "m",
    },
    {
      job: "Janitor",
      gender: "f",
    },
    {
      job: "Janitor",
      gender: "m",
    },
    {
      job: "Janitor",
      gender: "f",
    },
    {
      job: "Janitor",
      gender: "m",
    },
  ];
  return <Grid content={cards} />;
}

export default App;
