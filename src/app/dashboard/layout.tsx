import NavBar from "@/components/layout.tsx/Navbar"
import Sidebar from "@/components/layout.tsx/sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className=" bg-slate-300">
            <div className="flex">
                <Sidebar />
                <section className="w-full container mx-auto">
                    <NavBar />
                    <div className="">
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
  }