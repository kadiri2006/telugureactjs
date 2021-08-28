import "./App.css";
import logo from "./img/1.svg";

export default function weather() {
  let data = [
    {
      day: "Monday",
      date: "April 5th 1:00pm",
      imga: logo,
      temp: "35",
      visibility: "clear sky",
    },
    {
      day: "Tuesday",
      date: "April 6th 10:00pm",
      imga: logo,
      temp: "20",
      visibility: "cloudy",
    },
    {
      day: "Wensday",
      date: "April 7th 11:00pm",
      imga: logo,
      temp: "23",
      visibility: "rainy",
    },
  ];

  return (
    <div className="body">
      <h1> 3-day forecast</h1>
      <p>Tirupathi Andhra pradesh,india </p>

      {data.length > 1 ? (
        data.map((value,index) => (
          <div className="block" key={value.day}>
            <p>{value.day}</p>
            <p>{value.date}</p>
            <p>{value.temp}</p>
            <p>{value.visibility}</p>
            <img src={value.imga} alt="cloud logo" />
          </div>
        ))
      ) : (
        <p>condition does't meet the requie ments</p>
      )}
    </div>
  );
}
