import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import { ProductsProvider } from "../providers/products";
import { CartProvider } from "../providers/cart";

const Routes = () => {
    return (
        <Switch>
            <ProductsProvider>
                <CartProvider>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path={"/cart"}>
                    <Cart />
                </Route>
                </CartProvider>
            </ProductsProvider>
        </Switch>
    )
}

export default Routes;