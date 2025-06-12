// import SHOP_DATA from "../../shop-data.json";
import { Fragment } from "react";
// import { CategoriesContext } from "../../context/categories.context";
import { useSelector } from "react-redux";
import { slectCategoriesMap} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(slectCategoriesMap);
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Fragment key={title}>
            <CategoryPreview key={title} title={title} products={products} />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;