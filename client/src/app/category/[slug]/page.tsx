"use client";
import Link from "next/link";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const [products, setProducts] = React.useState<
    Array<{
      id: number;
      attributes: {
        title: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
        size: string;
        color: string;
        price: number;
        availableQty: number;
        category: string;
      };
    }>
  >([]);

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:1337/api/products?filters[category][$eq]=${params.slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resData = await res.json();
    setProducts(resData.data);
  };

  React.useEffect(() => {
    fetchData();
    console.log(params.slug);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((e) => {
            return (
              <Link
                href={`/product/${e.attributes.slug}`}
                key={e.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full shadow"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {e.attributes.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {e.attributes.title}
                  </h2>
                  <p className="mt-1">Rs. {e.attributes.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
