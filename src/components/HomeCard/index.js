import {
	Center,
	PropertyCard,
	PropertyImage,
	PropertyImageTitle,
	PropertyDescription,
	CardTile,
} from './style'

import { Link } from 'react-router-dom'

const HomeCard = (props) => {
	return (
		<Center>
			<Link to={props.to} style={{ textDecoration: 'none' }}>
				<PropertyCard>
					<PropertyImage className='property-image'>
						<PropertyImageTitle className='property-image-title'>
							<h5>
								{
									props.titleImage
								}
							</h5>
						</PropertyImageTitle>
					</PropertyImage>
					<PropertyDescription className='property-description'>
						<CardTile>
							{props.title}
						</CardTile>
						<p> {props.description} </p>
					</PropertyDescription>
				</PropertyCard>
			</Link>
		</Center>
	)
}

export default HomeCard
