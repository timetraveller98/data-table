import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Arrow } from "@radix-ui/react-tooltip";

const ProjectResources = ({ resources }: { resources: string[] }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <div className="bg-gray-200 h-7 w-7 items-center justify-center flex rounded-md">
            {resources.length}
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="bg-gray-900 text-base p-4">
          <Arrow />
          <div className="flex flex-col gap-1">
            <p className="text-indigo-200 uppercase text-sm mb-3">Resources</p>
            {resources.map((resource) => (
              <p key={resource} className="text-base">
                {resource}
              </p>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProjectResources;
