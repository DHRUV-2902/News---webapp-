import { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function News()
{

	const [info, setInfo] = useState([]);
    const [country,setCountry]=useState("in");

    const hCountry=(event)=>{setCountry(event.target.value);}

		const gn = (event) => {
		event.preventDefault();
		let a1 = "https://newsapi.org/v2/top-headlines";
		let a2 = "?country=" + country;
		let a3 = "&apiKey=" + "d817ea20249e4e4194a16b16d0bb4181";

		let urladd = a1 + a2 + a3;
		axios.get(urladd)
		.then(res => setInfo(res.data.articles))
		.catch(err => console.log("issue " + err));
	}

	return(
	<>
	<center>
	<h1 style={{"color":"white"}}> News App </h1>
	<form onSubmit={ gn }>
        <label>select country </label>
        <br/>
        <select onChange={hCountry}>
  <option value="in">India</option>
  <option value="sg">Singapore</option>
  <option value="hk">Honk kong</option>
  <option value="nz">New Zealand</option>
</select>
		<input type="submit" value="GetNews" />
	</form>

	{
	info.map( (e) => (
		<>
		<Result  urlToImage={e.urlToImage} title = {e.title}  url={e.url} />
		</>
	))
	}

	</center>
	</>
	);

}