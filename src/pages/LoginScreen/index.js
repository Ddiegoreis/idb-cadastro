import { Link } from 'react-router-dom'

import {
	Container,
	Image, //div
	LoginContent, //div
	Title, //h2
	I, //div
	Button,
	InputDivOne,
	InputDivPass,
	Input,
	Main,
	A,
} from './style'

import imagem from '../../assets/loginScreenImage.jpg'

function LoginScreen() {
	return (
		<Main>
			<Container>
				<Image>
					<img src={imagem} />
				</Image>
				<LoginContent>
					<form>
						<Title>IDBCadastro</Title>
						<InputDivOne>
							<I />
							<div>
								<Input
									type='text'
									placeholder='E-mail'
								/>
							</div>
						</InputDivOne>
						<InputDivPass>
							<I />
							<div>
								<Input
									type='password'
									placeholder='Senha'
									class='input'
								/>
							</div>
						</InputDivPass>
						<Link style={{ textDecoration: 'none' }}>
                            <A href='#'>Cadastre-se</A>
                        </Link>
						<Link to="/Home" style={{ textDecoration: 'none' }}>
                            <Button
							    type='submit'
							    value='Login'>
                            </Button>
                        </Link>
					</form>
				</LoginContent>
			</Container>
		</Main>
	)
}

export default LoginScreen
