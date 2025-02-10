import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-screen items-center">
      <h1 className="text-5xl font-bold uppercase tracking-tighter">Selamat Datang Di 20</h1>
      <Link href={'/contacts'} className="button mt-4 rounded-sm text-white font-medium p-4 hover:bg-blue-900 transition-all bg-blue-600">
        Contact List
      </Link>
    </div>
  )
}
