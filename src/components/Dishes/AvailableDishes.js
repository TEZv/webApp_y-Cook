import DishItem from "./DishItem/DishItem";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import styles from "./AvailableDishes.module.css";

const AvailableDishes = (props) => {
  const [meals, setMeals] = useState([]);
  const { loading, error, requestHttp: fetchMeals } = useHttp();

  const parseMealData = (data) => {
    const parsedMeals = [];
    for (let meal of Object.keys(data)) {
      parsedMeals.push({
        id: meal,
        name: data[meal].name,
        description: data[meal].description,
        price: data[meal].price,
      });
    }
    setMeals(parsedMeals);
  };

  useEffect(() => {
    fetchMeals(
      {
        url: "https://yummy-4e21c-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      parseMealData
    );
  }, [fetchMeals]);

  let content = <>Sorry, You can`t order at the moment :\</>;

  loading && !error && (content = <Spinner className="place-self-center" />);

  !loading &&
    error &&
    (content = (
      <div className="place-self-center text-roseRed">
        Something went wrong. Please try again later.
      </div>
    ));

  !loading &&
    !error &&
    (content = meals.map((dish) => (
      <DishItem
        key={dish.id}
        id={dish.id}
        name={dish.name}
        description={dish.description}
        price={dish.price}
      />
    )));

  return (
    <div
      className={`container border-2 border-dashed border-black flex flex-col space-y-6 mx-auto w-full md:w-2/5 divide-y-2 divide-gray-200 mt-10 max-h-96 overflow-scroll scroll-smooth snap-y bg-beige p-4 rounded-md dropshadow-md ${styles.noscroll}`}
    >
      {content}
    </div>
  );
};

export default AvailableDishes;
