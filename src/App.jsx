// import { useState } from 'react'
import "./App.css";
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import Navbar from './components/ui/Navbar.tsx';

// import Footer from './components/ui/footer.tsx';
// import Comp from './components/ui/component.tsx';
import FAQ from './components/ui/FAQ.tsx'

function App() {
  return (
    <div className="m-0 p-0">
    <div>

    <Navbar />


   




    {/* <Navbar/> */}
    <div className="flex justify-center items-center max-w-screen-lg object-fit" id="home">
    <img src="src\assets\Frame 51.svg" alt="" />
    </div>
    <div className="flex justify-center items-center" >
    <img src="src\assets\Frame 3 (2).svg" alt="" />
    </div>
    </div>
    <div className="flex justify-center items-center" id="features">
  <img src="src\assets\Frame 9.svg" alt="" />
</div>
<div className="flex justify-center items-center" >
  <img src="src\assets\Frame 4.svg" alt="" />
</div>
    <div className="max-w-screen-lg md:w-96 px-8 ml-32">
    <Carousel >
  <CarouselContent >
    <CarouselItem className="w-64">
    <img src="src\assets\SliderImage 1.png" alt="" className="inset-0 object-cover" loading="lazy" />
    </CarouselItem>
    <CarouselItem><img src="src\assets\SliderImage 2.png" alt="" className="inset-0 object-cover" loading="lazy" />
    </CarouselItem>
    <CarouselItem><img src="src\assets\SliderImage 3.png" alt="" className="inset-0 object-cover" loading="lazy" /></CarouselItem>
    <CarouselItem><img src="src\assets\SliderImage 4.png" alt="" className="h-100 inset-0 object-cover" loading="lazy" /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>



<div className="flex justify-center items-center" id="about">
  <img src="src\assets\Frame 8.svg" alt="" />
</div>
<div className="flex justify-center items-center" id="achive">
  <img src="src\assets\Frame 10.svg" alt="" />
</div>



{/* <div> */}
<FAQ/>
{/* </div>  */}

<div className="p-3" id="faq">
<div className="h-70 py-4">
    <Accordion type="single" className="bg-sky-50" collapsible >
  <AccordionItem value="item-1">
    <AccordionTrigger><p>How much does VAAYU cost?</p></AccordionTrigger>
    <AccordionContent className="px-6 py-4 ml-7 text-lg font-bold text-left">
        VAAYU is priced at only 6999 INR per unit.
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What size of particles can VAAYU trap?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 ml-7 text-lg font-bold text-left">
      Yes, VAAYU is designed to be compact and suitable for any indoor space.
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How does pre-filteration benefit air purification?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 ml-7 text-lg font-bold text-left">
    Pre-filtration extends the lifespan and efficiency of the main HEPA filter.
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How does Project CLAIR empower women?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 ml-7 text-lg font-bold text-left">
    Project CLAIR involves unemployed women in the Bharat Vihar community in the manufacturing and supply chain of VAAYU.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is the goal of Project CLAIR?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 ml-7 text-lg font-bold text-left">
    The goal of Project CLAIR is to provide clean and fresh air to underprivileged families.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div> 
    </div>
    <div className="flex justify-center items-center" id="footer">
  <img src="src\assets\Frame 11.svg" alt="" />
</div>
    </div>
    
  );
}

export default App;
