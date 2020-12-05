import {
	Container,
	Header,
	Title,
	PoweredBy,
	CardContainer,
	LogoBbm,
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
				<HomeCard
					title='Criar Formulário'
					titleImage='Criar Formulário'
					description='Clique aqui para criar seu formulário.'
					to='/CreateForm'
				/>
				<HomeCard
					title='Gerenciar'
					titleImage='Gerenciar'
					description='Clique aqui para editar ou apagar seus formulários'
					to='/EditForm'
				/>
				<HomeCard
					title='Preenchimentos'
					titleImage='Preenchimentos'
					description='Clique aqui para gerenciar seus preenchimentos'
					to='/EditPreenc'
				/>
			</CardContainer>

			<BtnAjuda />
		</Container>
	)
}

export default HomeScreen
