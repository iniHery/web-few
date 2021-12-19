// const products = [
//   {
//     name: "Cirrus No.3 Iron Steamer",
//     price: "180",
//     category: "Steamery",
//     image: "product1.png",
//   },
//   {
//     name: "Cirrus No.3 Iron Steamer",
//     price: "180",
//     category: "Steamery",
//     image: "product1.png",
//   },
// ];

export default function Home() {
  return (
    <div>
      <div className="w-full h-auto">
        <div>
          <div className="flex justify-center w-full fixed bg-white z-10 ">
            <div className="flex justify-between max-w-[1300px] h-20 items-center">
              <div className="mx-2">
                <img className="cursor-pointer" src="logo-company.svg" />
              </div>
              <div className="w-[1100px] max-w-[1300px]">
                <div className="w-full flex gap-10 font-sans text-xl text-center justify-center ">
                  <button className="cursor-pointer">All</button>
                  <button className="cursor-pointer">Home</button>
                  <button className="cursor-pointer">Kitchen</button>
                  <button className="cursor-pointer">Work</button>
                  <button className="cursor-pointer">Travel</button>
                  <button className="cursor-pointer">Tech</button>
                  <button className="text-red-500 cursor-pointer">
                    Gift Guid
                  </button>
                </div>
              </div>

              <div className="flex justify-end mx-2">
                <img src="icon-search.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="h-max ">
              <div className="flex justify-center h-min pt-20">
                <div className=" h-96  flex items-center text-center justify-center">
                  <p className=" text-9xl ">Essentials curated.</p>
                </div>
              </div>

              <div className="grid grid-cols-3 grid-rows-2 gap-8 px-20 py-5 h-max ">
                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="product1.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Steamery
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Steamery</p>
                    <p className="text-2xl">Cirrus No.3 Iron Steamer</p>
                    <p className="text-2xl">$180</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="product2.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-3250"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Bose
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Bose</p>
                    <p className="text-2xl">Noise Cancelling Headphones 700</p>
                    <p className="text-2xl">$379</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition"
                      src="product3.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-3250"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Hasami Porcelain
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">
                      Hasami Porcelain
                    </p>
                    <p className="text-2xl">Natural Mug</p>
                    <p className="text-2xl">$27</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition"
                      src="product4.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-3250"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Fellow
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Fellow</p>
                    <p className="text-2xl">Stagg EKG Electric Kettle</p>
                    <p className="text-2xl">$159</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition"
                      src="product5.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-3250"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Quip
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Quip</p>
                    <p className="text-2xl">Electric Toothbrush</p>
                    <p className="text-2xl">$40</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition"
                      src="product6.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-3250"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Away
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Away</p>
                    <p className="text-2xl">The Front Pocket Backpack</p>
                    <p className="text-2xl">$195</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-center justify-center h-24">
                <button className="rounded-full bg-transparant px-7 py-3 border border-gray-900 hover:bg-[#000000] hover:text-white transition duration-3000">
                  See all product
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="flex items-center text-center justify-center px-20 h-[130vh] py-0 transition duration-3000">
              <div className="text-[52px] my-[192px] mx-0">
                <span className="text-gray-500 mr-4">
                  Few is a curation of essential products, handpicked for their
                  exceptional performance and design.
                </span>
                In a world of excess, we curate essentials because we believe
                having fewer but better things makes life better.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="px-20">
              <div className="bg-cover bg-center bg-[url('/bg-1.jpg')] h-[90vh] rounded-[50px] flex items-center text-center justify-center text-white ">
                <div>
                  <p className="text-xl opacity-50">COMING SOON</p>
                  <p className="text-6xl mt-2 mb-7">Curated by</p>
                  <p className="text-3xl">
                    Creators and experts share products
                  </p>
                  <p className="text-3xl">that enrich their lives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="h-max">
              <div className="mt-[100px] h-[20vh]  flex items-center text-center justify-center">
                <p className=" text-6xl ">Home</p>
              </div>
              <div className="grid grid-cols-3 gap-8 px-20 py-5 h-max ">
                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="home1.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Onsen
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Onsen</p>
                    <p className="text-2xl">Bath Towel Set</p>
                    <p className="text-2xl">$75</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="home2.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Birkenstock
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Birkenstock</p>
                    <p className="text-2xl">Zermatt Shearling Slippers</p>
                    <p className="text-2xl">$100</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="home3.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Alaska bear
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Alaska bear</p>
                    <p className="text-2xl">sleep Mask</p>
                    <p className="text-2xl">$10</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-center justify-center h-24">
                <button className="rounded-full bg-transparant px-7 py-3 border border-gray-900 hover:bg-[#000000] hover:text-white transition duration-300">
                  See all Home
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="h-max">
              <div className="mt-[100px] h-[20vh]  flex items-center text-center justify-center">
                <p className=" text-6xl ">Kitchen</p>
              </div>
              <div className="grid grid-cols-3 gap-8 px-20 py-5 h-max ">
                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="kitchen1.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Gobal
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Gobal</p>
                    <p className="text-2xl">G-2 Chef's Knife with Sharpener</p>
                    <p className="text-2xl">$150</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="kitchen2.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Lodge
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Lodge</p>
                    <p className="text-2xl">
                      12" Seasoned Carbon Steel Skillet
                    </p>
                    <p className="text-2xl">$45</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="kitchen3.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Menu
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Menu</p>
                    <p className="text-2xl">Bottle Grinders</p>
                    <p className="text-2xl">$95</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-center justify-center h-24">
                <button className="rounded-full bg-transparant px-7 py-3 border border-gray-900 hover:bg-[#000000] hover:text-white transition duration-300">
                  See all Kitchen
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="h-max">
              <div className="mt-[100px] h-[20vh]  flex items-center text-center justify-center">
                <p className=" text-6xl ">Work</p>
              </div>
              <div className="grid grid-cols-3 gap-8 px-20 py-5 h-max ">
                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="work1.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Midori
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Midori</p>
                    <p className="text-2xl">MD Notebook</p>
                    <p className="text-2xl">$13</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="work2.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Fully
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Fully</p>
                    <p className="text-2xl">Jarvis Bamboo Standing Desk</p>
                    <p className="text-2xl">$569</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="work3.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Rain Design
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Rain Design</p>
                    <p className="text-2xl">mStand Laptop Stand</p>
                    <p className="text-2xl">$40</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-center justify-center h-24">
                <button className="rounded-full bg-transparant px-7 py-3 border border-gray-900 hover:bg-[#000000] hover:text-white transition duration-300">
                  See all Work
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="h-max">
              <div className="mt-[100px] h-[20vh]  flex items-center text-center justify-center">
                <p className=" text-6xl ">Travel</p>
              </div>
              <div className="grid grid-cols-3 gap-8 px-20 py-5 h-max ">
                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="travel1.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Away
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Away</p>
                    <p className="text-2xl">The Carry-On</p>
                    <p className="text-2xl">$225</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="travel2.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Kinto
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Kinto</p>
                    <p className="text-2xl">Travel Tumbler 500ml</p>
                    <p className="text-2xl">$37</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="travel3.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Nexstand
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Nexstand</p>
                    <p className="text-2xl">Portable Laptop Stand</p>
                    <p className="text-2xl">$30</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-center justify-center h-24">
                <button className="rounded-full bg-transparant px-7 py-3 border border-gray-900 hover:bg-[#000000] hover:text-white transition duration-300">
                  See all Travel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="h-max">
              <div className="mt-[100px] h-[20vh]  flex items-center text-center justify-center">
                <p className=" text-6xl ">Tech</p>
              </div>
              <div className="grid grid-cols-3 gap-8 px-20 py-5 h-max ">
                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="tech1.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Belking
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Belking</p>
                    <p className="text-2xl">Wireless Charger with MagSafe</p>
                    <p className="text-2xl">$90</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="tech2.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Belking
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Belking</p>
                    <p className="text-2xl">One Smart Speaker</p>
                    <p className="text-2xl">$269</p>
                  </div>
                </div>

                <div className="h-auto group">
                  <div className="relative overflow-hidden">
                    <img
                      className="group-hover:brightness-90 cursor-pointer rounded-[30px] transition duration-3250"
                      src="tech2.png"
                    />
                    <button
                      className="absolute bg-white text-gray-600 px-[16px] py-[7px] rounded-full text-lg translate-y-[200px] group-hover:translate-y-0 transition flex justify-center itemns-center duration-[250]"
                      style={{ bottom: 14, right: 14 }}
                    >
                      Amazon
                      <img className="pt-2 pl-1" src="arrow-btn.svg" />
                    </button>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 mt-4">Amazon</p>
                    <p className="text-2xl">2021 Kindle Paperwhite</p>
                    <p className="text-2xl">$140</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-center justify-center h-24">
                <button className="rounded-full bg-transparant px-7 py-3 border border-gray-900 hover:bg-[#000000] hover:text-white transition duration-300">
                  See all Tech
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <div className="h-[80vh]  flex items-center text-center justify-center ">
              <div className="pb-10">
                <div>
                  <h1 className="text-5xl pt-5 pb-0">Join the newsletter</h1>
                  <p className="text-3xl pt-5 pb-4">
                    Get curated essentials and updates to your inbox
                  </p>
                </div>
                <div className="w-96 m-auto">
                  <div className="flex items-center h-14 bg-white  pl-10 pr-5 rounded-full justify-between cursor-pointer border border-gray-300 hover:border-sky-300 ">
                    <input
                      className="text-xl focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                      type="email"
                      placeholder="Your email"
                    />

                    <button>
                      <img
                        className="cursor-pointer rounded-[30px] "
                        src="right-arrow.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[100%] max-w-[1300px]">
            <footer>
              <div className="px-20">
                <div className="flex justify-between py-10">
                  <div className="flex text-center">
                    <p className="w-[110px] text-lg">About</p>
                    <p className="w-[110px] text-lg">Instagram</p>
                    <p className="w-[110px] text-lg">Twitter</p>
                    <p className="w-[110px] text-lg">Privacy</p>
                    <p className="w-[110px] text-lg">Feedback</p>
                  </div>
                  <div>
                    <p className="w-auto text-lg">
                      © 2021 Few · All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
