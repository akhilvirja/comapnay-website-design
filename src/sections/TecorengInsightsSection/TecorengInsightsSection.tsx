import { useRef, useState } from "react";
import TecorengInsightCard from "./components/TecorengInsightCard";

interface InsightItem {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

const insightsData: InsightItem[] = [
  {
    title: "Hire Dedicated Developer From Tecoreng",
    date: "20-03-2023 - Paresh Solanki",
    description: "Tecoreng is a software development company. That provides many more services to our clients. If you have a find a developer for your project or software then we will guide you on How to choose a dedicated developer for your software development process. We have IT solution provider services. Like Custom software development, UI/UX services, […]",
    imageUrl: "https://tecoreng.com/blog/wp-content/uploads/2023/03/Hire-Devlopers.jpg-1.webp"
  },
  {
    title: "How to Make IT Services Truly Customer-Friendly",
    date: "11-04-2025 - Himani Shekhat",
    description: "Stop treating users like tickets—and start treating them like people. IT services are only as powerful as the experience they create for the people using them. While IT teams often pride themselves on speed, uptime, and ticket closure rates, the real question is: do users feel supported, understood, and empowered? Ultimately, technology is only as […]",
    imageUrl: "https://tecoreng.com/blog/wp-content/uploads/2025/04/How-to-Make-IT-Services-Truly-Customer-Friendly.webp"
  },
  {
    title: "Beyond the Basics: Mastering Scalable MERN Stack Applications",
    date: "11-03-2025 - shubham vaishnav",
    description: "Introduction In today’s fast-paced digital landscape, building a web application that simply works isn’t enough. You need scalability, efficiency, and high performance to handle growing user demands. The MERN (MongoDB, Express.js, React, and Node.js) stack is a powerful choice, but mastering it for scalability requires a strategic approach. In this guide, we’ll explore key techniques […]",
    imageUrl: "https://tecoreng.com/blog/wp-content/uploads/2025/03/How-Digital-Transformation-is-Changing-the-Future-of-Small-Businesses.webp"
  },
  {
    title: "What Is Django? You Need To Know The Features Of Django In 2023",
    date: "24-01-2023 - Paresh Solanki",
    description: "What Is Django? Django is the backend framework for web app development. That is the open-source framework and totally free framework. For web app development, you have to choose the right backend framework technology. The right tool makes your development very smooth. Moreover, Django is a simple, flexible, and easy-to-learn python programming language. It supports […]",
    imageUrl: "https://tecoreng.com/blog/wp-content/uploads/2023/01/what-is-django.jpg"
  },
  {
    title: "What Is IaaS? Infrastructure as a Service",
    date: "02-03-2023 - Paresh Solanki",
    description: "What Is Iaas? IaaS stands for Infrastructure as a Service. That is a part of cloud computing services. That offers the necessary computers, storage, and networking resources on the requirement according to a pay-as-you-go system.  Additionally, IaaS is also Known as HaaS (Hardware as a service). It is one of the cloud computing platforms. Service-based […]",
    imageUrl: "https://tecoreng.com/blog/wp-content/uploads/2023/03/Iaas-Blog.jpg"
  },
  {
    title: "What Is DevOps? Top DevOps Trends 2023",
    date: "17-10-2023 - Paresh Solanki",
    description: "Within the context of contemporary software development and IT operations, DevOps is a critical and revolutionary methodology. The very phrase “DevOps” is a combination of the words “development” and “operations,” signifying the fundamental idea of merging these two historically distinct fields. DevOps is a cultural movement that strives to promote cooperation, communication, and automation between […]",
    imageUrl: "https://tecoreng.com/blog/wp-content/uploads/2023/10/main-image-5-1.webp"
  }
]


function TecorengInsightsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // You can tweak drag speed here
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };


  return (
    <section className="w-full bg-primary py-16">
      <div className="container px-4">
        <h2 className="text-5xl text-white mb-12 text-custom-shadow">
          Tecoreng Insights
        </h2>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto py-4 scrollbar-hide cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {insightsData.map((item, idx) => (
            <TecorengInsightCard
              key={idx}
              title={item.title}
              date={item.date}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TecorengInsightsSection