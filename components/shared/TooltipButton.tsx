import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipButton = ({
  name,
}: {
  name: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <li>
          <h1
            className="relative text-slate-700 transition-colors hover:text-gray-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:secondary after:transition-all hover:after:w-full"
          >
            {name}
          </h1>
        </li>
      </TooltipTrigger>
      <TooltipContent>
        <p>Coming Soon!</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipButton;
