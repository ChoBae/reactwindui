import {
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import PaginationButton from "./components/PagenationButton";
import { twMerge } from "tailwind-merge";

type PaginationProps = {
  className?: string;
  pageNum: number;
  url: string;
  displayPageCount?: number;
  currentPage: number;
  paginationButtonClassName?: string;
};
export default function Pagination(props: PaginationProps) {
  const PaginationClass = twMerge(
    "flex items-center justify-center gap-x-4",
    props.className
  );
  const displayPageCount = props.displayPageCount || 5;
  const renderPageButtons = () => {
    const pageButtons = [];
    const startPage = Math.max(
      1,
      props.currentPage - Math.floor(displayPageCount / 2)
    );
    const endPage = Math.min(props.pageNum, startPage + displayPageCount - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <PaginationButton
          key={i}
          page={i}
          currentPage={props.currentPage}
          url={props.url}
          className={props.paginationButtonClassName}
        />
      );
    }

    return pageButtons;
  };

  return (
    <div className={PaginationClass}>
      {/* First page */}
      <a className="cursor-pointer hover:opacity-70" href={`${props.url}/1`}>
        <ChevronDoubleLeftIcon className="h-5 w-5 text-indigo-400 rounded-3xl p-1 bg-gray-100" />
      </a>
      {/* Previous page */}
      <a
        className="cursor-pointer hover:opacity-70"
        href={`${props.url}/${Math.max(1, props.currentPage - 1)}`}
      >
        <ChevronLeftIcon className="h-7 w-7 text-indigo-400 rounded-3xl p-1 bg-gray-100" />
      </a>
      {/* Page numbers */}
      <div className="flex rounded-lg p-0.5 bg-gray-100 gap-1">
        {renderPageButtons()}
      </div>
      {/* Next page */}
      <a
        className="cursor-pointer hover:opacity-70"
        href={`${props.url}/${Math.min(props.pageNum, props.currentPage + 1)}`}
      >
        <ChevronRightIcon className="h-7 w-7 text-indigo-400 rounded-3xl p-1 bg-gray-100" />
      </a>
      {/* Last page */}
      <a
        className="cursor-pointer hover:opacity-70"
        href={`${props.url}/${props.pageNum}`}
      >
        <ChevronDoubleRightIcon className="h-5 w-5 text-indigo-400 rounded-3xl p-1 bg-gray-100" />
      </a>
    </div>
  );
}
