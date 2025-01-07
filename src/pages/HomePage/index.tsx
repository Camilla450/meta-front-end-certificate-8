import Header from "@/components/Header/index"
import ResevereSection from "@/components/ReserveSection"
import OrderForDelivery from "@/components/OrderForDelivery"
import Menu from "@/components/Menu"
import "./index.scss"
export default function Page() {
  return (
    <div className="HomePage container">
      <Header></Header>
      <ResevereSection></ResevereSection>
      <OrderForDelivery></OrderForDelivery>
      <Menu></Menu>
    </div>
  )
}