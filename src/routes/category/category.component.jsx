import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useSelector } from "react-redux";
import { slectCategoriesMap } from '../../store/categories/category.selector'

import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  console.log("render/re-render category component");
  const categoriesMap = useSelector(slectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    console.log("useEffect called for category component setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
