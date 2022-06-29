import React, {useState, useEffect} from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';

import axios from "axios";

function App() {

	const [categories, setCategories] = useState([]);
	const [Products, setProducts] = useState([]);
	
	useEffect (() => {
		async function getAllData(){
			try{
				const categories = await axios.get("http://127.0.0.1:8000/category")
				const Products = await axios.get("http://127.0.0.1:8000/product")

				setCategories(categories.data)
				setProducts(Products.data)
				

			}
			catch(error) {
				console.log(error)
			}
		}

		getAllData()
	}, [])


  return (

	<div className = "container" >
		<Sidebar category = {categories} product = {Products}/>
	</div>
  );
}

export default App;
