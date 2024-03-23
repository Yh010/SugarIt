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
            <main className='bg-white'>
                <section className="menu section py-20">
                    <div className="title text-center mb-8">
                        <h2 className='text-4xl font-sans font-bold  block'>Our Menu</h2>
                        <div className='underline w-20 h-1 bg-gold mx-auto'></div>
                    </div>
                    <Categories categories={categories} filterItems={filterItems} />
                    <MenuBox items={menuItems} />
                </section>
            </main>
        </div>
    )
}

export default Menu;