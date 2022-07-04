import NavBar from "../../components/NavBar";
import ProductList from "../../components/ProductList";
import { Container } from "./style";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";

const Home = () => {
    const { cart } =useContext(CartContext);

    return (
        <Container>
            <NavBar num={cart.length}/>
            <ProductList />
        </Container>
    )
}

export default Home;