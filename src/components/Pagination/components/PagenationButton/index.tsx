import { twMerge } from "tailwind-merge";
type PaginationButtonProps = {
  page: number;
  currentPage: number;
  url: string;
  className?: string;
};

export default function PaginationButton({
  page,
  currentPage,
  url,
  className,
}: PaginationButtonProps) {
  const buttonClass = twMerge(
    "h-6 w-6 flex items-center justify-center text-slate-900 hover:text-slate-500",
    currentPage === page
      ? "decoration-indigo-500 decoration-2 underline font-bold"
      : "",
    className
  );

  return (
    <a key={page} className={buttonClass} href={`${url}/${page}`}>
      {page}
    </a>
  );
}
