import { useState } from 'react'
import MenuBox from './MenuBox'
import Categories from './Catergories'
import items from './Data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function Menu() {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return
        }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

    return (
        <div>
            <main>
                <section className="menu section">
                    <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                    </div>
                    <Categories categories={categories} filterItems={filterItems} />
                    <MenuBox items={menuItems} />
                </section>
            </main>
        </div>
    )
}

export default Menu;