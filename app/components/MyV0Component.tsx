/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L6ncEaQ9Y1b
 */
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
  return (
    <div className="border rounded-lg overflow-hidden max-w-lg">
      <ScrollArea className="h-72">
        <div className="p-4 space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold">Breaking News: Major Earthquake in Japan</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              A major earthquake of magnitude 7.5 has hit the eastern coast of Japan. Evacuations are underway...
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-zinc-400 dark:text-zinc-300">CNN - 2 hours ago</p>
              <Link
                className="text-blue-500 text-xs hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                href="#"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold">Major Tech Companies to Discuss Digital Privacy</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Leaders of major tech companies are set to discuss the future of digital privacy in a roundtable
              discussion...
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-zinc-400 dark:text-zinc-300">BBC - 4 hours ago</p>
              <Link
                className="text-blue-500 text-xs hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                href="#"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold">New Species of Bird Discovered in the Amazon</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              A new species of bird, never before seen by scientists, has been discovered in the heart of the Amazon
              rainforest...
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-zinc-400 dark:text-zinc-300">National Geographic - 6 hours ago</p>
              <Link
                className="text-blue-500 text-xs hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                href="#"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

