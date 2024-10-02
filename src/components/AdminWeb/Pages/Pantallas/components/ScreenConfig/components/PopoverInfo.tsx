import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';

function PopoverInfo({ children }: { children: React.ReactNode }) {
  return (
    <Popover showArrow offset={10} placement="bottom" backdrop="opaque">
      <PopoverTrigger>
        <Button
          className="md:flex hidden absolute right-2 top-2 z-50 border-none items-center justify-center"
          isIconOnly
          radius="full"
          size="sm"
          color="default"
          variant="faded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="dark:bg-zinc-700">
        <p className="text-lg dark:text-white w-40">{children}</p>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverInfo;
