// "use client"

// import React, { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "./ui/button"
// import { useResponsiveGrid } from "../hooks/use-responsive-grid"

// interface CarouselContainerProps {
//   children: React.ReactNode
//   maxRows?: number
//   className?: string
//   customItemsPerRow?: number
// }

// const CarouselContainer = ({ children, maxRows = 2, className = "", customItemsPerRow }: CarouselContainerProps) => {
//   const [currentPage, setCurrentPage] = useState(0)
//   const [totalPages, setTotalPages] = useState(0)
//   const [visibleItems, setVisibleItems] = useState<React.ReactNode[]>([])
//   const responsiveItemsPerRow = useResponsiveGrid()
//   const itemsPerRow = customItemsPerRow || responsiveItemsPerRow
//   const childrenArray = React.Children.toArray(children)

//   useEffect(() => {
//     // Calculate how many items we can show at once (maxRows * itemsPerRow)
//     const itemsPerPage = maxRows * itemsPerRow

//     // Calculate total pages needed
//     const pages = Math.ceil(childrenArray.length / itemsPerPage)
//     setTotalPages(pages)

//     // Get the items for the current page
//     const startIndex = currentPage * itemsPerPage
//     const endIndex = Math.min(startIndex + itemsPerPage, childrenArray.length)
//     setVisibleItems(childrenArray.slice(startIndex, endIndex))

//     // Reset current page if it's out of bounds after a resize
//     if (currentPage >= pages) {
//       setCurrentPage(Math.max(0, pages - 1))
//     }
//   }, [childrenArray, currentPage, itemsPerRow, maxRows])

//   const nextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 1)
//     }
//   }

//   const prevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1)
//     }
//   }

//   // Only show navigation if we have more than one page
//   const showNavigation = totalPages > 1

//   // Determine grid columns based on itemsPerRow
//   const gridCols =
//     {
//       1: "grid-cols-1",
//       2: "grid-cols-1 md:grid-cols-2",
//       3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
//     }[itemsPerRow] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

//   return (
//     <div className={`relative ${className}`}>
//       <div className={`grid ${gridCols} gap-8`}>{visibleItems}</div>

//       {showNavigation && (
//         <div className="flex justify-center mt-8 gap-4">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={prevPage}
//             disabled={currentPage === 0}
//             className="bg-card-to-br text-card-foreground"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </Button>
//           <div className="flex items-center gap-2">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`h-2 w-2 rounded-full cursor-pointer ${currentPage === index ? "bg-primary" : "bg-muted"}`}
//                 onClick={() => setCurrentPage(index)}
//               />
//             ))}
//           </div>
//           <Button variant="outline"
//             size="icon"
//             onClick={nextPage}
//             disabled={currentPage === totalPages - 1}
//             className="bg-card-to-br text-card-foreground"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CarouselContainer
