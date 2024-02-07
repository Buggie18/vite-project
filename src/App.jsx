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

import Footer from './components/ui/footer.tsx';
// import Comp from './components/ui/component.tsx';

function App() {
  return (
    <div className="m-0 p-0">
    <div>

    <Navbar />


    </div>

  <div class="bg-gray-300 h-24 w-48"></div>


    {/* <Navbar/> */}
    <div>
      
    <img src="src\assets\headerbg.png" alt="" className="inset-0 object-cover" loading="lazy" />
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

{/* <div>
  <span><img src="src/assets/headerImage.png" alt="" classN="absolute inset-0 w-48 h-48 object-cover" loading="lazy" />
  <h1 className="flex-column text-lg font-semibold text-right text-slate-900">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, provident sint? Ipsum fugiat placeat est porro quod dolores harum, praesentium, velit nulla officiis corporis, voluptatum autem vitae facilis! Tempora consequatur velit qui magni nam, provident et esse a nisi expedita sequi deserunt minus maxime quisquam repellat nesciunt? Ipsa, provident! Eum a iste aliquid, totam veritatis placeat! Quam quibusdam a ex deleniti quasi inventore in aliquid dolore obcaecati. Excepturi, ipsam in nemo rem explicabo adipisci ab! Odit, dicta, officia impedit corrupti delectus recusandae magnam id ullam ipsa quos facilis saepe obcaecati dolores expedita repellendus quas tempora nulla soluta reiciendis quae est!
      </h1>
  </span>
</div> */}

<div>
  <img src="src\assets\Frame 9.svg" alt="" />
</div>

{/* <div>
  <Comp/>
</div> */}

<div className="flex bg-violet-900 px-3 ">
  <div className="w-1/2 ">
    {/* <img src="src/assets/headerImage.png" alt="Image" className="w-full h-auto"> */}
    <img src="src/assets/headerImage.png" alt="" className="inset-0 w-full h-full object-cover p-4" loading="lazy" />
  </div>
  <div className="w-1/2">
    <p className="py-3 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget consequat turpis, sed tempus ipsum. Mauris posuere tincidunt quam, ut finibus sem blandit sit amet. Sed vel vehicula ante. Duis in lacinia lacus. Nullam faucibus nulla vitae ex blandit, vel congue ipsum posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Sed ac magna ut velit sodales commodo.</p>
  </div>
</div>


<div className="h-70 py-4 bg-sky-500">
    <Accordion type="single" className="bg-sky-500" collapsible >
  <AccordionItem value="item-1">
    <AccordionTrigger className="bg-sky-500"><p>How much does VAAYU cost?</p></AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-lg font-bold text-left bg-sky-500">
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
      <Footer/>
    </div>
    </div>
  );
}

export default App;
