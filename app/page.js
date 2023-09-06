import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const Products = [
    {
      title: "Dettol 500ml",
      price: "Rs 759",
      image: "/assets/detdet43854_2.webp",
    },
    {
      title: "Nestle Nido 1+ Milk Powder 375 gm Soft Pack",
      price: "Rs 759",
      image: "/assets/nes47245_1664973323_1.webp",
    },
    {
      title: "Dettol 500ml",
      price: "Rs 759",
      image: "/assets/detdet43854_2.webp",
    },
    {
      title: "Nestle Nido 1+ Milk Powder 375 gm Soft Pack",
      price: "Rs 759",
      image: "/assets/nes47245_1664973323_1.webp",
    },
  ];
  return (
    <div className="pb-10">
      <Image
        src={"/assets/banner.png"}
        height={1000}
        width={1200}
        alt=""
        className="h-full md:h-[400px] w-full object-contain md:object-cover cursor-pointer"
      />
      <div className="w-full max-w-7xl mx-auto px-5 md:px-0">
        {/* CARDS SECTION */}
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Prescription Card */}
          <Card className="relative bg-[#FFEAD4] border-none">
            <CardHeader>
              <CardTitle>Have a prescription?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm z-10 max-w-[80%]">
                Upload prescription and we will create your order!
              </p>
              <div className="absolute bottom-0 right-0 z-[0]">
                <Image
                  src={"/assets/desktop-rx.webp"}
                  height={150}
                  width={150}
                  alt=""
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#F29D43]">Order Now</Button>
            </CardFooter>
          </Card>

          {/* Lab Tests */}
          <Card className="relative bg-[#f7dedb] border-none">
            <CardHeader>
              <CardTitle>Lab Tests & Checkups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm z-10 max-w-[80%]">Lab at Home</p>
              <div className="absolute bottom-0 right-0 z-[0]">
                <Image
                  src={"/assets/home-labtest.webp"}
                  height={150}
                  width={150}
                  alt=""
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#ac5c51]">Book Now</Button>
            </CardFooter>
          </Card>

          {/* Household Items */}
          <Card className="relative bg-[#def0ef] border-none">
            <CardHeader>
              <CardTitle>Doctor Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm z-10 max-w-[80%]">Lab at Home</p>
              <div className="absolute bottom-0 right-0 z-[0]">
                <Image
                  src={"/assets/consultation2.webp"}
                  height={150}
                  width={150}
                  alt=""
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#32AA9E]">Book Now</Button>
            </CardFooter>
          </Card>
        </div>
        {/* Products Section */}
        <div className="pt-5">
          <h1 className="font-bold text-2xl text-primary uppercase">
            Popular Products
          </h1>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Products.map((product, i) => {
              return (
                <Card key={i} className="h-fit">
                  <CardHeader>
                    <Image
                      src={product.image}
                      height={150}
                      width={150}
                      alt=""
                      className="mx-auto"
                    />
                    <CardTitle className="mt-5 text-xl">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm ">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-primary w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
        {/* About Us Section */}
        <div className="mt-10">
          <h1 className="font-bold text-2xl uppercase">MB&T Pharmecy</h1>
          <div className="space-y-5">
            <p className="text-sm">
              Dawaai is Pakistan’s leading digital healthcare platform that
              brings you complete health facilities right to your doorstep.
              Order medicines online with our e-pharmacy or consult top doctors
              online in Pakistan from our App right from the comfort of your
              home. Dawaai Pakistan is the first-ever internationally certified
              and registered healthcare merchant (LegitScript Certified). We
              pride ourselves in providing our users with authentic medicines,
              medical equipment and health supplements in Pakistan.
            </p>
            <p className="text-sm">
              Moreover, you can opt to get to avail at-home care services such
              as home nursing services or book lab tests online. Over the years
              we have built trust by offering our users the utmost convenience
              to buy medicines. Get your prescriptions online and get monthly
              refill facilities with Dawaai Asaan orders. You can also get
              information about your medicines and learn its uses with our
              official medical content that will help you make better health
              choices.
            </p>
            <p className="text-sm">
              You can order online medicines, health products, lab test
              services,online doctor consultations from anywhere in Pakistan
              with ease (Karachi, Islamabad, Lahore, Rawalpindi & more) by using
              our fast medicine delivery service . In Karachi, you can get your
              selected medicines within 60 minutes of your order confirmation
              with dShops. Our mobile application is available on iOS
              andandroid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
