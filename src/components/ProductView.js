import React, {useState, useEffect} from 'react'
import '../App.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function cards(name, category){
	const card = (
		<React.Fragment>
		  <CardContent>
			
			<Typography variant="h5" component="div">
			  {name}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
			  {category}
			</Typography>
			
		  </CardContent>
		  <CardActions>
			<Button size="small">Learn More</Button>
		  </CardActions>
		</React.Fragment>
	  );

	return card
}


export const ProductView = ({product, selectedCategories, category}) => {

	let filteredData = []
	console.log("SLECTED CAT: " + selectedCategories);

	if(selectedCategories.length >0){

		
		for (let index = 0; index < Object.keys( product).length; index++) {
			
			if (selectedCategories.includes(category[product[index].category-1].name)){
				filteredData.push({'name':product[index]['name'],'category':category[product[index].category-1].name});
			}
		}
	}
	else{
		for (let index = 0; index < Object.keys( product).length; index++) {
			
			filteredData.push({'name':product[index]['name'],'category':category[product[index].category-1].name});
			
		}
	}


	const Products = filteredData.map((item) =>
		<div>
            <Button>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">

					<Box sx={{ minWidth: 275 }}>
    	  				<Card variant="outlined" style={{backgroundColor: "rgb(67, 229, 175)"}}>{cards(item.name, item.category)}</Card>
    				</Box>
		        </Typography>
            </Button>
        </div>
    );


  return (
    <div className = "sidenav">
		{Products} 
    </div>
  )
}
