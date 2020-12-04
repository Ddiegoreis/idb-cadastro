import {
	Container,
	Header,
	Title,
	PoweredBy,
	CardContainer,
	LogoBbm
} from './style'

import HomeCard from '../../components/HomeCard'
import BtnAjuda from '../../components/BtnAjuda'

const HomeScreen = () => {
	return (
		<Container>
			<Header>
				<LogoBbm />

				<Title>IDB Cadastro</Title>

				<PoweredBy></PoweredBy>
			</Header>

			<CardContainer>
				<HomeCard nome="1"/>
				<HomeCard nome="2"/>
				<HomeCard nome="3"/>
			</CardContainer>

			<BtnAjuda />
		</Container>
	)
}

export default HomeScreen
