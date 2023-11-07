import { Input } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full min-w-[355px] sm:w-[480px] mx-auto mt-10">
      <div className="bg-zinc-800 rounded py-4 px-3.5">
        <Input
          type="number"
          label=""
          placeholder="0.00"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Sei</span>
            </div>
          }
        />
      </div>
    </div>
  )
}