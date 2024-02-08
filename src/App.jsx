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

// import Comp from './components/ui/component.tsx';

function App() {
  return (
    <div className="m-0 p-0">
    <div>

    <Navbar />


   




    {/* <Navbar/> */}
    <div id >
    <img src="src\assets\Frame 51.svg" alt="" />
    </div>
    <div>
    <img src="src\assets\Frame 3 (2).svg" alt="" />
    </div>
    </div>
    <div>
  <img src="src\assets\Frame 9.svg" alt="" />
</div>
<div>
  <img src="src\assets\Frame 4.svg" alt="" />
</div>
    <div>
    <Carousel>
  <CarouselContent>
    <CarouselItem>
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



<div>
  <img src="src\assets\Frame 8.svg" alt="" />
</div>
<div>
  <img src="src\assets\Frame 10.svg" alt="" />
</div>



 


<div className="h-70 py-4">
    <Accordion type="single" className="bg-sky-50" collapsible >
  <AccordionItem value="item-1">
    <AccordionTrigger><p>How much does VAAYU cost?</p></AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-lg font-bold text-left">
        VAAYU is priced at only 6999 INR per unit.
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What size of particles can VAAYU trap?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-lg font-bold text-left">
      Yes, VAAYU is designed to be compact and suitable for any indoor space.
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How does pre-filteration benefit air purification?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-lg font-bold text-left">
    Pre-filtration extends the lifespan and efficiency of the main HEPA filter.
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How does Project CLAIR empower women?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-lg font-bold text-left">
    Project CLAIR involves unemployed women in the Bharat Vihar community in the manufacturing and supply chain of VAAYU.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
<div className="h-70 py-4">
<Accordion type="single" className="bg-sky-50" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is the goal of Project CLAIR?</AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-lg font-bold text-left">
    The goal of Project CLAIR is to provide clean and fresh air to underprivileged families.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div> 
    <div>
  <img src="src\assets\Frame 11.svg" alt="" />
</div>
    </div>
    
  );
}

export default App;
