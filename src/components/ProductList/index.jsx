import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import CardProduct from "../CardProduct";
import { Container } from "./style";

const ProductList = () => {
    const { products } = useContext(ProductsContext);
    
    return (
        <Container>
            {products.map((item, index) => (
                <CardProduct 
                key={index} 
                id={item.id} 
                name={item.name} 
                category={item.category} 
                img={item.img} 
                price={item.price} 
                item={item}/>
            ))}
        </Container>
    )
}

export default ProductList;