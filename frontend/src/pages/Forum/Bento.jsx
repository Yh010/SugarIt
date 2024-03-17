import { Rating } from "@material-tailwind/react";
import SearchBox from "./SearchBox";
import { useState } from "react";
const posts = [
  {
    id: 1,
    title: 'Amazing Pav Bhaji',
    href: '#',
    description:
      'Your pav bhaji from Sugar Cafe is an absolute delight! The rich blend of flavors, the perfect balance of spices, and the hearty texture make it a culinary masterpiece. Each bite is a journey through a symphony of tastes that leaves me craving for more. It is evident that it is crafted with passion and expertise. Kudos to Sugar Cafe for serving such an outstanding dish!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
    id: 2,
    title: 'Masala Dosa',
    href: '#',
    description:
      'Sugar Cafe masala dosa is a true marvel! The crispy exterior perfectly complements the flavorful potato filling inside. It is a delightful experience of South Indian cuisine that never fails to impress.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
    id: 3,
    title: 'Paneer Tikka',
    href: '#',
    description:
      'The paneer tikka at Sugar Cafe is simply divine! Each tender piece of paneer is marinated to perfection, bursting with aromatic spices and grilled to just the right level of char. It is a tantalizing dish that always leaves me wanting more.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
    id: 4,
    title: 'Vegetable Biryani',
    href: '#',
    description:
      'Sugar Cafe vegetable biryani is a celebration of flavors! The fragrant basmati rice cooked with an assortment of vegetables and aromatic spices creates a harmonious blend that transports the taste buds to culinary paradise. It is a dish that never fails to satisfy.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
    id: 5,
    title: 'Chicken Tikka Masala:',
    href: '#',
    description:
      'Sugar Cafe chicken tikka masala is a culinary masterpiece! The tender chicken pieces cooked in a creamy tomato-based sauce, infused with aromatic spices, create a dish that is simply irresistible. It is comfort food at its finest.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
    id: 6,
    title: 'Chole Bhature',
    href: '#',
    description:
      'Indulging in Sugar Cafe chole bhature is always a treat! The fluffy bhature paired with the hearty and flavorful chole is a match made in heaven. Each bite is a burst of authenticity and deliciousness that keeps me coming back for more.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
  // More posts...
]

export default function Bento() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = searchTerm.trim() === "" 
    ? posts 
    : posts.filter(post => post.description.toLowerCase().includes(searchTerm.toLowerCase()));


    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="flex mx-auto max-w-2xl lg:mx-0">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dive into the Sugar It community</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            <ul>
                                <br></br>
                                <li>Discover upcoming events and notices at our cafe, designed to enrich your experience and keep you in the loop</li>
                                <br></br>
                                <li>Checkout latest reviews for your favourite dish,beautifully describing it's deliciousness</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/gradient-lo-fi-illustrations_52683-84144.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710460800&semt=sph"/>
                    </div>
          </div>
          <br></br>
                <SearchBox searchTerm={searchTerm} handleSearchInputChange={handleSearchInputChange}/>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                                <Rating value={5} readonly/>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}