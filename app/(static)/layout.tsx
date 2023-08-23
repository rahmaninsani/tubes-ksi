import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"

const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </>
  )
}

export default StaticLayout
