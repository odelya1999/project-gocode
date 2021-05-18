import { useContext } from "react";
import Header from "../Header";
import Products from "../Products";
import Cart from "../Cart";
import ThemeContext from "../ThemeContext";

function Home() {
  const { categories, myChoice, productCategory, value } = useContext(
    ThemeContext
  );
  const { isShown } = useContext(ThemeContext);
  return (
    <div className="myHome">
      {isShown && (
        <div>
          <Header categories={categories} myChoice={myChoice} />
          <div className="shopping-cart">
            <Cart />
          </div>
          <Products
            products={productCategory.filter(
              (p) => p.price >= value[0] && p.price <= value[1]
            )}
          />
        </div>
      )}
    </div>
  );
}
/*function Toggle() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <div>{isShown && "CONTENT"}</div>
      <button onClick={() => setIsShown(!isShown)}>Toggle</button>
    </>
  );
}*/

export default Home;
