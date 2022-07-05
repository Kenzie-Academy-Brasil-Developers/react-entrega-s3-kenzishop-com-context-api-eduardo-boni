import { Container } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const ItensCart = ({ id, img, name, price }) => {
    const { removerFromCart } = useContext(CartContext);

    const handleClick = (item) => {
        removerFromCart(item);
    }

    return (
        <Container>
            <img src={img} alt="camiseta"/>
            <div>
                <p key={id}>{name}</p>
                <p>R$ {price.toFixed(2).replace('.', ',')}</p>
                <button onClick={() => handleClick(name)}>Remover</button>
            </div>
        </Container>
    )
}

export default ItensCart;