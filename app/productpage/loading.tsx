import { Skeleton } from "@/components/ui/skeleton";

async function loading() {
  return (
    <div
      className="flex flex-col p-6 lg:p-10 lg:flex-row w-full items-center space-x-4
        space-y-4"
    >
      <div className="flex space-x-4">
        <div className="hidden lg:inline space-y-4">
          <Skeleton className="w-[100px] h-[100px] rounded-md" />
          <Skeleton className="w-[100px] h-[100px] rounded-md" />
          <Skeleton className="w-[100px] h-[100px] rounded-md" />
        </div>

        <Skeleton className="inline lg:hidden w-[200px] h-[200px] rounded-md" />
        <Skeleton className="hidden lg:inline w-[600px] h-[400px] rounded-md" />
      </div>

      <div
        className="w-[520px] h-[780px] lg:w-[400px] lg:h-[500px] animate-pulse space-y-2 rounded-md
        p-10"
      >
        <Skeleton className="w-[500px] lg:w-[380] h-[100px] rounded-md" />
        <Skeleton className="w-[500px] lg:w-[380] h-[20px] rounded-md" />
        <Skeleton className="w-[500px] lg:w-[380] h-[20px] rounded-md" />
      </div>
    </div>
  );
}

export default loading;
