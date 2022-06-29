import React, {useState} from 'react'
import { ProductView } from './ProductView';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Sidebar = ({category, product}) => {
  

	const [selected, setSelected] = useState([]);

	function inputHandler (item) {

		if(selected.includes(item)){
			setSelected(selected.filter(function(x) {
				return x !== item
			}))
			console.log(selected)
		}
		else{
			selected.push(item)
			setSelected([...selected])
			console.log(selected)

		}
		
    };


	const categories = category.map((item, index) =>
        <div key={index}>
            <Button onClick={() => inputHandler(item['name'])} >
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
		            {item['name']}
		        </Typography>
            </Button>
        </div>
    );


  	return (
    
    <div>
		<div className = "sidenav">
	        <div>
            	{categories}
        	</div>
		</div>
		<div>

			<Typography variant="h5" component="div">
				Selected : {selected}
			</Typography>
			
			<ProductView category = {category} product = {product} selectedCategories = {selected} />

		</div>

    </div>
  )
}
