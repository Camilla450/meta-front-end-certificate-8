import "./index.scss"
import Card from "./Card"

export default function Page() {
  return (
    <div className="Menu menu">
      <div className="cards">
        <Card
          price={12.99}
          pic="src/assets/dish1.png"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
          name="Greek Salad"
        />
        <Card
          price={7.99}
          pic="src/assets/dish2.png"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta."
          name="Brushetta"
        />
        <Card
          price={20.00}
          pic="src/assets/dish3.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus."
          name="Grilled Fish"
        />
        <Card
          price={12.99}
          pic="src/assets/dish1.png"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
          name="Greek Salad"
        />
        <Card
          price={7.99}
          pic="src/assets/dish2.png"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta."
          name="Brushetta"
        />
        <Card
          price={20.00}
          pic="src/assets/dish3.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus."
          name="Grilled Fish"
        />
      </div>
    </div>
  )
}