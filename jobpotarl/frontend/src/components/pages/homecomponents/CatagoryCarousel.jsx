import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// const catagory = [
//   "Frontend Devoloper",
//   "Backend Devoloper",
//   "Full Stack Devoloper",
//   "Devops Engineer",
//   "Data Scientist",
//   "Machine Learning Engineer",
//   "Cloud Engineer",
//   "Cyber Security Engineer",
//   "Network Engineer",
//   "Database Admin",
//   "UI/UX Designer",
//   "Product Manager",
//   "Project Manager",
//   "Business Analyst",
//   "Data Analyst",

// ]

const CatagoryCarousel = () => {
  return (
   <>
      <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}

export default CatagoryCarousel