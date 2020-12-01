import {
    Wave, //img
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
    A
} from './style'

function LoginScreen() {
	return (
        <Main>
            {/* <Wave src="img/wave.png"/> */}
            <Container>
                <Image >
                    {/* <img src="img/bg.svg" /> */}
                </Image>
                <LoginContent>
                    <form>
                        {/* <img src="img/avatar.svg" /> */}
                        <Title>IDBCadastro</Title>
                        <InputDivOne>
                            <I>
                                {/* <i class="fas fa-user"></i> */}
                            </I>
                            <div>
                                <Input type="text" placeholder="E-mail"/>
                            </div>
                        </InputDivOne>
                        <InputDivPass>
                            <I> 
                                {/* <i class="fas fa-lock"></i> */}
                            </I>
                            <div>
                                <Input type="password" placeholder="Senha" class="input" />
                            </div>
                        </InputDivPass>
                        <A href="#">Cadastre-se</A>
                        <Button type="submit" value="Login"></Button>
                    </form>
                </LoginContent>
            </Container>
        </Main> 
    )
}

export default LoginScreen
