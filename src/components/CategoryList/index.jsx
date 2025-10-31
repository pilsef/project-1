import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    const fetchData = () => {
        axios
            .get("http://localhost:9191/api/categories")
            .then(response => setCategories(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Category List</h1>
            <div className="row row-cols-4">
                {
                    categories.map( category => (
                        <Category key={category.categoryId} data={category} />
                    ))
                }
            </div>

        </div>
    );
}

export default CategoryList;