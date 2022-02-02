import ProductCard from "./ProductCard";

function Menu() {
  return (
    <div className="mx-28">
        <div>
            <p className="font-['Avenir-Black'] text-red-600 font-bold text-4xl my-10">
            Let’s Order
            </p>
        </div>
        <div className="flex justify-between gap-x-8">
            <ProductCard
                productImage="drink1"
                name="Ice Coffee Palm Sugar"
                price="Rp.27.000"
            />
            <ProductCard
                productImage="drink2"
                name="Ice Coffee Green Tea"
                price="Rp.31.000"
            />
            <ProductCard
                productImage="drink3"
                name="Hanami Latte"
                price="Rp.29.000"
            />
            <ProductCard
                productImage="drink4"
                name="Clepon Cooffee"
                price="Rp.28.000"
            />
        </div>
    </div>
  );
}

export default Menu;