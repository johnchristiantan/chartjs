import "./App.css";
import { useState } from "react";
import BarChart from "./assets/component/BarChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["green"],
        borderColor: ["gray"],
      },
    ],
  });
  return (
    <>
      <div>
        <BarChart chartData={userData} />
      </div>
    </>
  );
}

export default App;
