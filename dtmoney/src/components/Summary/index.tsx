import { Container } from "./styled";

import Entradas from  '../../assets/Entradas.svg'
import Saidas from '../../assets/Saídas.svg'
import Total from '../../assets/Total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Entradas} alt="Entradas" />
                </header>
                <strong>R$1.000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Saidas} alt="Saídas" />
                </header>
                <strong>- R$500</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={Total} alt="Total" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}