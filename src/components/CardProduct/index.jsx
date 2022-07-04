import { Card } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const CardProduct = ({ id, name, img, category, price, item }) => {
    const { addToCart } = useContext(CartContext);

    const handleClick = (tshirts) => {
        addToCart(tshirts);
    }

    return (
        <Card id={id}>
            <h3>{name}</h3>
            <img src={img} alt="camiseta"/>
            <h4 className="category">{category}</h4>
            <h4>R$ {price.toFixed(2).replace('.', ',')}</h4>
            <button onClick={() => handleClick(item)}>Comprar</button>
        </Card>
    )
}

export default CardProduct;