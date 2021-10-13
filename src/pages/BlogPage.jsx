import React from "react"
import PageHeader from "./../components/pageHeader/PageHeader"
import { NewsItem } from "./../components/news/NewsItem"
import blog1 from "../assets/img/news/blog-1.jpg"
import blog2 from "../assets/img/news/blog-2.jpg"
import blog3 from "../assets/img/news/blog-3.jpg"
import blog4 from "../assets/img/news/blog-4.jpg"
import blog5 from "../assets/img/news/blog-5.jpg"
import blog6 from "../assets/img/news/blog-6.jpg"
import blog7 from "../assets/img/news/blog-7.jpg"
import blog8 from "../assets/img/news/blog-8.jpg"
import banner from "../assets/img/banner/h1_banner-4.jpg"

const posts = [
  { img: blog1, title: "10 Reasons To Do A Digital Detox Challenge" },
  {
    img: blog2,
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese",
  },
  { img: blog3, title: "Traditional Soft Pretzels with Sweet Beer Cheese" },
  { img: blog3, title: "10 Reasons To Do A Digital Detox Challenge" },
  { img: blog4, title: "10 Reasons To Do A Digital Detox Challenge" },
  { img: blog5, title: "10 Reasons To Do A Digital Detox Challenge" },
]

const tags = [
  "beer",
  "burgers",
  "delicious",
  "fast food",
  "food mood",
  "good meal",
  "meat",
  "pizza",
]

const BlogPage = () => {
  return (
    <section>
      <PageHeader title="Our Blog" />
      <div className="layout mt-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="mb-8">
              <NewsItem
                title="The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese"
                desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo."
                img={blog1}
                type="blog"
              />
            </div>
            <div className="mb-8">
              <NewsItem
                title="Traditional Soft Pretzels with Sweet Beer Cheese"
                desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo."
                img={blog2}
                type="blog"
              />
            </div>
            <div className="mb-8">
              <NewsItem
                title="The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese"
                desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo."
                img={blog5}
                type="blog"
              />
            </div>
            <div className="mb-8">
              <NewsItem
                title="The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese"
                desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo."
                img={blog3}
                type="blog"
              />
            </div>
            <div className="mb-8">
              <NewsItem
                title="The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese"
                desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo."
                img={blog8}
                type="blog"
              />
            </div>
            <div className="mb-8">
              <NewsItem
                title="The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese"
                desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo."
                img={blog7}
                type="blog"
              />
            </div>
            <div className="mb-8">
              <NewsItem
                title="My Favorite Easy Black Pizza Toast Recipe"
                desc="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…"
                img={blog4}
                type="blog"
              />
            </div>
          </div>
          <div className="hidden lg:block col-span-3">
            <div className="">
              <h3 className="text-xl font-bold">Recent Posts</h3>
              <div className="mt-6">
                {posts.map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <div className="w-24 h-24 rounded-md">
                      <img
                        className="w-full h-full object-cover rounded-md"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-bold mb-2 line-clamp-2 cursor-pointer hover:text-primaryColor">
                        {item.title}
                      </h3>
                      <small>September 7, 2020</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold">Popular Tags</h3>
              <div className="mt-8">
                {tags.map((item, index) => (
                  <button
                    key={index}
                    className="py-1 px-4 mr-3 text-sm text-gray-600 text-normal hover:border-primaryColor hover:text-primaryColor mb-3 rounded-3xl border"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 relative">
              <img className="rounded-md absolute" src={banner} alt="" />
              <div className="left-1/2 text-center transform -translate-x-1/2 top-6 absolute text-white">
                <p className="font-Norican-Font text-2xl font-normal">
                  Super Delicious
                </p>
                <h1 className="text-5xl font-bold text-green my-2">Chicken</h1>
                <p className="text-xs font-bold mb-1">Call us now</p>
                <p className="text-xl font-bold text-red-600">1-800-555-333</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
