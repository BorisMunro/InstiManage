import NavBar from "@/components/layout.tsx/Navbar"
import Sidebar from "@/components/layout.tsx/sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className="">
            <div className="gap-1 sm:gap-3 flex lg:gap-10">
                <Sidebar />
                <section className="container w-4/5 mx-auto">
                    <NavBar />
                    <div className="">
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
  }