'use client'

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from './ui/button'

interface PaginationProps {
  currentPage: number
  totalCount: number
  itemsPerPage: number
}

export function Pagination({
  currentPage,
  totalCount,
  itemsPerPage,
}: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pages = Math.ceil(totalCount / itemsPerPage) || 1

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  function handlePaginate(pageNumber: number) {
    const url = createPageURL(pageNumber)

    replace(url)
  }

  return (
    <div className="flex items-center justify-between">
      <span>Total de {totalCount} item(s)</span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {currentPage} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePaginate(1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePaginate(currentPage - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronLeft />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            disabled={pages <= currentPage}
            onClick={() => handlePaginate(currentPage + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronRight />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button
            disabled={pages <= currentPage}
            onClick={() => handlePaginate(pages)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsRight />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
