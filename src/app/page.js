"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import background from '../../public/background.png';
import Location from '../../public/Rectangl.png';
import holtel from '../../public/holtel.png';
import { MdHotelClass } from "react-icons/md";
import Room from '../../public/Room.png';
import { Pagination } from 'antd';
import 'antd/dist/reset.css';
import React, { useState, useEffect } from 'react';
import { CiFilter } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
const Property_DataBase = [
  {
    title: "Cozy Downtown Studio",
    description: "A charming studio apartment in the heart of downtown. Features modern amenities, a fully equipped kitchen, and easy access to public transport. Perfect for city living.",
    price: "$1,200/month",
    location: "123 City Lane, Downtown, Metropolis",
    bedrooms: 1,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Kitchen",
      "https://via.placeholder.com/150?text=Bathroom"
    ]
  },
  {
    title: "Spacious Suburban",
    description: "Beautiful 4-bedroom, 3-bathroom home with a large backyard, two-car garage, and modern appliances. Located in a family-friendly neighborhood with great schools.",
    price: "$2,500/month",
    location: "456 Oak Street, Maplewood, Metropolis",
    bedrooms: 4,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Kitchen",
      "https://via.placeholder.com/150?text=Backyard"
    ]
  },
  {
    title: "Modern Loft Apartment",
    description: "Stylish loft with exposed brick walls, high ceilings, and large windows. Located near trendy cafes and shops.",
    price: "$1,800/month",
    location: "789 Loft Lane, Arts District, Metropolis",
    bedrooms: 1,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Kitchen",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Charming Beachside",
    description: "Quaint cottage just steps from the beach. Features include a cozy fireplace, sunroom, and ocean views.",
    price: "$2,000/month",
    location: "101 Beach Road, Sandy Shores, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Sunroom",
      "https://via.placeholder.com/150?text=Beach+View"
    ]
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Exquisite penthouse with panoramic city views, private terrace, and high-end finishes throughout. Ideal for those who want to live in luxury.",
    price: "$5,000/month",
    location: "202 Sky Tower, Central City, Metropolis",
    bedrooms: 3,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Terrace",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Chic Urban Flat",
    description: "Contemporary flat in a vibrant neighborhood. Features an open floor plan, sleek kitchen, and convenient access to nightlife.",
    price: "$1,600/month",
    location: "303 Urban Street, Trendy District, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Kitchen",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Quiet Country Farmhouse",
    description: "Spacious farmhouse with large fields and a peaceful setting. Includes a barn, garden, and ample room for outdoor activities.",
    price: "$2,200/month",
    location: "404 Country Lane, Green Acres, Metropolis",
    bedrooms: 3,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Barn",
      "https://via.placeholder.com/150?text=Field"
    ]
  },
  {
    title: "Elegant City Apartment",
    description: "Sophisticated apartment with high ceilings, hardwood floors, and elegant finishes. Located in a prime city location with easy access to dining and entertainment.",
    price: "$2,300/month",
    location: "505 Grand Avenue, City Center, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Dining+Area",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Charming Cottage ",
    description: "Idyllic cottage surrounded by forest. Features include a stone fireplace, cozy interior, and a large deck for enjoying nature.",
    price: "$1,400/month",
    location: "606 Woodland Drive, Forest Glen, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Deck",
      "https://via.placeholder.com/150?text=Forest+View"
    ]
  },
  {
    title: "Bright and Airy Townhouse",
    description: "Modern townhouse with abundant natural light, spacious rooms, and a private patio. Located in a convenient location with easy access to amenities.",
    price: "$1,700/month",
    location: "707 Sunshine Way, Brightsville, Metropolis",
    bedrooms: 3,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Patio",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Rustic Mountain Cabin",
    description: "Cozy cabin with rustic charm and stunning mountain views. Features include a fireplace, wrap-around porch, and hiking trails nearby.",
    price: "$1,900/month",
    location: "808 Mountain Road, Summit Ridge, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Porch",
      "https://via.placeholder.com/150?text=Mountain+View"
    ]
  },
  {
    title: "Urban Loft with Balcony",
    description: "Stylish loft featuring a private balcony, modern finishes, and a spacious layout. Located in a trendy area with great walkability.",
    price: "$2,000/month",
    location: "909 Loft Avenue, Hip District, Metropolis",
    bedrooms: 1,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Balcony",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Sunny Beachfront Condo",
    description: "Luxurious condo with direct beach access, stunning ocean views, and modern amenities. Perfect for beach lovers and relaxation.",
    price: "$2,800/month",
    location: "1010 Ocean Drive, Beachfront, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Ocean+View",
      "https://via.placeholder.com/150?text=Beach+Access"
    ]
  },
  {
    title: "Newly Renovated",
    description: "Freshly updated apartment with contemporary finishes, new appliances, and a convenient location. Ideal for those seeking a modern living space.",
    price: "$1,500/month",
    location: "1111 New Street, Renovation Park, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Kitchen",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Historic Victorian Home",
    description: "Beautifully restored Victorian home with classic architecture, elegant interiors, and a large garden. Located in a historic neighborhood with character.",
    price: "$3,000/month",
    location: "1212 Heritage Lane, Old Town, Metropolis",
    bedrooms: 4,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Garden",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Contemporary Studio ",
    description: "Modern studio with access to a private gym, sleek kitchen, and comfortable living space. Conveniently located near shopping and transport.",
    price: "$1,100/month",
    location: "1313 Fitness Way, Health District, Metropolis",
    bedrooms: 1,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Gym",
      "https://via.placeholder.com/150?text=Kitchen"
    ]
  },
  {
    title: "Elegant Suburban Retreat",
    description: "Sophisticated home with elegant finishes, spacious rooms, and a large backyard. Located in a desirable suburban area with great amenities.",
    price: "$2,400/month",
    location: "1414 Serenity Lane, Peaceful Estates, Metropolis",
    bedrooms: 3,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Backyard",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  },
  {
    title: "Modern Industrial Loft",
    description: "Trendy industrial loft with exposed pipes, high ceilings, and a unique design. Located in a vibrant area with lots of character.",
    price: "$1,900/month",
    location: "1515 Brick Street, Industrial District, Metropolis",
    bedrooms: 2,
    images: [
      "https://via.placeholder.com/150?text=Living+Room",
      "https://via.placeholder.com/150?text=Design",
      "https://via.placeholder.com/150?text=Bedroom"
    ]
  }
]

const HeroSection = () => {
  return (
    <div className=" w-[80%] m-auto flex mt-8  items-center  justify-between">
      <h1 className=" font-bold capitalize leading-[70px] text-5xl text-white">
        The most affortable <br />  place to stay  in the <br />  san franciso bay area
      </h1>
      <img src={ Location.src } className=" object-cover mr-10  rounded " />
    </div>
  )
}

export default function Home() {
  const data = [
    'Pay as Little as possible!',
    'Enjoy wisdom of community!',
    'Let somebody else take care of Landlord!',
    'Enjoy peaceful Environment!',
    'Stay Safe! Save Money!',
    'Pay for what you use !'
  ];

  const [currentItems, setCurrentItems] = useState(Property_DataBase);
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]); // Adjust the max range based on your data
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const filteredItems = Property_DataBase
      .filter(item =>
        item.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        parseInt(item.price.replace(/[^0-9]/g, '')) >= priceRange[0] &&
        parseInt(item.price.replace(/[^0-9]/g, '')) <= priceRange[1]
      )
      .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    setCurrentItems(filteredItems);
  }, [searchLocation, priceRange, currentPage]);

  const handleSearchChange = (e) => {
    setSearchLocation(e.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
    setCurrentPage(1); // Reset to first page on price range change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <div className="bg-cover bg-center bg-no-repeat h-[700px]"
        style={ { backgroundImage: `url(${background.src})` } }>
        <Header />
        <HeroSection />
      </div>

      <div className="m-auto bg-white p-2">
        <br />
        <h3 className="capitalize px-10 font-bold text-2xl">Minimum living cost takes care of everything</h3>
        <div className="bg-white flex w-[80%] m-auto p-1 mt-6">
          <img src={ holtel.src } alt="Hotel" />
          <div className="grid grid-cols-3 gap-4 text-center p-3">
            { data.map((item, index) => (
              <div key={ index } className="flex border-b-2 border-indigo-300 flex-col items-center justify-center">
                <MdHotelClass size={ 24 } color="orange" />
                <p className="text-xl font-bold p-2">{ item }</p>
              </div>
            )) }
          </div>
        </div>
      </div>

      <div className="m-auto bg-[#f2f2f2] p-2">
        <div className="flex justify-between items-center py-10 w-[80%] m-auto">
          <h3 className="capitalize px-10 font-bold relative text-2xl">List of Properties</h3>
          <div className="w-[84px] h-1 rounded bg-[#F4511E] absolute left-[204px] mt-9" />
          <button className="bg-[#F4511E] w-[200px] h-[65px] rounded mr-2 text-white">View All Property</button>
        </div>

        <div className="bg-white flex rounded-3xl justify-between flex-row gap-10 p-2 w-[76%] m-auto">
          <input
            type="text"
            placeholder="Locations ...."
            className="bg-[#f2f2f2]  py-3 outline-none border-none p-3 w-[50%] rounded-3xl px-4"
            value={ searchLocation }
            onChange={ handleSearchChange }
          />
          <div className="flex p-2 gap-3 items-center">
            <CiFilter size={ 25 } color="red" />
            <input
              id="id"
              type="range"
              min="0"
              max="5000" // Adjust the range based on your data
              value={ priceRange[1] }
              onChange={ handlePriceRangeChange }
            />
            ${ priceRange[1] }
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          { currentItems.map((item, index) => (
            <div key={ index } className="mt-4 w-[358px] m-auto relative h-[530px] bg-[#FFFFFF] rounded-[26.62px] border border-[#979797]">
              <img src={ Room.src } alt={ item.title } /> {/* Display first image for each item */ }
              <div className="p-3">
                <h1 className="font-semibold text-2xl">{ item.title }</h1>
                <p className="text-[#818181] py-2">Private Room</p>
                <h2 className="text-xl text-[#F4511E] mb-1 mt-1 font-bold">{ item.price }</h2>
                <div className=" flex gap-6 items-center mt-1 py-2">
                  <p className="capitalize text-lg  font-semibold flex items-center gap-3">Bed<FaBed /> { item.bedrooms }</p>
                  <p className=" w-[100px]"></p>
                  <p className="capitalize text-lg  font-semibold flex items-center gap-3">Bath<GiBathtub /> { item.bedrooms }</p>
                </div>
                <button className="py-3 bg-[#F4511E] hover:bg-[#ff763c] w-[98%] absolute top-[470px] mt-2 right-1 text-white rounded-3xl">Book now</button>
              </div>
            </div>
          )) }
        </div>

        <Pagination
          current={ currentPage }
          pageSize={ pageSize }
          total={ Property_DataBase.length }
          onChange={ handlePageChange }
          className="mt-4"
        />
      </div>

      <div className="p-4 bg-white mt-2">
        <Footer />
      </div>
    </main>
  );
}