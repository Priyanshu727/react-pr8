import React, { useState } from "react"
import "./cars.css";
import img1 from "../assets/astonmartin.jpg"
import img2 from "../assets/audi.jpg"
import img3 from "../assets/chevrolate.jpg"
import img4 from "../assets/fearrari.jpg"
import img5 from "../assets/GT.jpg"
import img6 from "../assets/lamborgani.jpg"
import img7 from "../assets/lamborgani1.jpg"
import img8 from "../assets/lamborgani2.jpg"
import img9 from "../assets/mercidese.jpg"
import img10 from "../assets/mercidese1.jpg"
import img11 from "../assets/mercidese2.jpg"
import img12 from "../assets/mercidese3.jpg"
import img13 from "../assets/mustang.jpg"
import img14 from "../assets/astonmartin.jpg"
import img15 from "../assets/audi.jpg"
import img16 from "../assets/chevrolate.jpg"
import img17 from "../assets/fearrari.jpg"
import img18 from "../assets/lamborgani.jpg"
import img19 from "../assets/mercidese.jpg"

const data = [
	{
		id: 1,
		name: "Astonmartin",
		category: "Super_Car",
		image: img1,
		price: 425585,
	},
	{
		id: 2,
		name: "Audi",
		category: "Super_Car",
		image: img2,
		price: 135191,
	},
	{
		id: 3,
		name: "Chevrolate",
		category: "Super_Car",
		image: img3,
		price: 83380,
	},
	{
		id: 4,
		name: "Fearrari",
		category: "Super_Car",
		image: img4,
		price: 174607,
	},
	{
		id: 5,
		name: "Carrera GT",
		category: "Business_Car",
		image: img5,
		price: 124820,
	},
	{
		id: 6,
		name: "lamborgani Urus",
		category: "Business_Car",
		image: img6,
		price: 119155,
	},
	{
		id: 7,
		name: "lamborgani Aventador",
		category: "Classic_collection",
		image: img7,
		price: 215888,
	},
	{
		id: 8,
		name: "lamborgani Huracan",
		category: "Classic_collection",
		image: img8,
		price: 321381,
	},
	{
		id: 9,
		name: "Mercidese Benz",
		category: "Classic_collection",
		image: img9,
		price: 425154,
	},
	{
		id: 10,
		name: "Mercidese AMW",
		category: "Classic_collection",
		image: img10,
		price: 322516,
	},
	{
		id: 11,
		name: "Mercidese G-wagon",
		category: "Formula_Car",
		image: img11,
		price: 76384,
	},
	{
		id: 12,
		name: "Mercidese G-wagon",
		category: "Formula_Car",
		image: img12,
		price: 344240,
	},
	{
		id: 13,
		name: "Mustang",
		category: "Racing_Car",
		image: img13,
		price: 307837,
	},
	{
		id: 14,
		name: "Astonmartin",
		category: "Racing_Car",
		image: img14,
		price: 339887,
	},
	{
		id: 15,
		name: "Audi",
		category: "Racing_Car",
		image: img15,
		price: 476189,
	},
	{
		id: 16,
		name: "Chevrolate",
		category: "Racing_Car",
		image: img16,
		price: 222993,
	},
	{
		id: 17,
		name: "Fearrari",
		category: "Super_Car",
		image: img17,
		price: 213426,
	},
	{
		id: 18,
		name: "Carrera GT",
		category: "Super_Car",
		image: img18,
		price: 73368,
	},
	{
		id: 19,
		name: "lamborgani Urus",
		category: "Business_Car",
		image: img19,
		price: 163050,
	},
]

const Virappan = () => {
	const [car, setcar] = useState(data)

	const filterType = (category) => {
		if (category === "All") {
			setcar(data)
		} else {
			const filteredcar = data.filter((item) => item.category === category)
			setcar(filteredcar)
		}
	}

	const filterName = (name) => {
		const filteredcar = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
		setcar(filteredcar)
	}

	return (
		<>
			<section className="bckgrnd">
				<div className="container">
					<h1 className="heading mb-5">Virappan &nbsp;CARs</h1>
					<div className="filters mb-5">
						<div className="filter">
							<p className="text-center">Search Name</p>
							<input
								onChange={(e) => {
									filterName(e.target.value);
								}}
								type="text"
								id="name"
								name="name"
								className="search-input"
							/>
						</div>
						<div className="filter">
							<p>Filter by Category</p>
							<div className="filter-options">
								<button className="btn btn-secondary mb-2" onClick={() => setcar(data)}>All</button>
								<button className="btn btn-secondary mb-2" onClick={() => filterType("Super_Car")}>Super Car</button>
								<button className="btn btn-secondary mb-2" onClick={() => filterType("Business_Car")}>Business Car</button>
								<button className="btn btn-secondary mb-2" onClick={() => filterType("Racing_Car")}>Racing Car</button>
								<button className="btn btn-secondary mb-2" onClick={() => filterType("Formula_Car")}>Formula Car</button>
								<button className="btn btn-secondary mb-2" onClick={() => filterType("Classic_collection")}>Classic Collection</button>
							</div>
						</div>
					</div>

					<div className="d-flex flex-wrap">
						{car.map((item, index) => (
							<div key={index} className="card mb-3 mx-2 overflow-hidden">
								<img src={item.image} alt={item.name} />
								<div className="card-body food-details">
									<p>{item.name}</p>
									<p>$ {item.price.toLocaleString('en-US')}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Virappan