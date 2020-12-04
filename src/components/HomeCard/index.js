import {
	Card,
	Content,
	Title,
	Copy,
	Btn,
} from './style'

const HomeCard = (props) => {
	return (
		<Card>
			<Content>
				<Title>{ props.nome }</Title>

				<Copy>
					{ props.description }
				</Copy>
				<Btn>Entrar</Btn>
			</Content>
		</Card>
	)
}

export default HomeCard
