import { Fan, Globe, Hotel, Mail, MapPin, Phone, Utensils, Wifi } from "lucide-react"

export const tabs = [
  {id: 0, title: "Beach", category: "beach"},
  {id: 1, title: "Mountain", category: "mountain"},
  {id: 2, title: "Waterfall", category: "waterfall"},
  {id: 3, title: "Icebergs", category: "icebergs"},
  {id: 'view_all', title: "View all", category: "view_all"}
]

export const navTabs = [
  {id: 0, title: "Home", category: "home", url: "/"},
  {id: 1, title: "Category", category: "category"},
  {id: 2, title: "Blog", category: "blog", url: "/blog"},
  {id: 5, title: "About Us", category: "about_us", url: "/about_us"}
]

export const logoData=[
  [
  {id:0, icon: Globe, title: "Flight"},
  {id:1, icon: Wifi, title: "Wifi"}
  ],
  [
  {id:2, icon: Hotel, title: "Hotel"},
  {id:3, icon: Utensils, title: "Food"}
  ]
]

export const squareCardData = [
  {id:0, amount: "24+", title: "Cities"},
  {id:1, amount: "700+", title: "Places"},
  {id:2, amount: "200+", title: "Hotels"},
  {id:3, amount: "2k+", title: "Reviews"}
]

export const logo = [
  {id:0, icon: Fan, title:"aven"},
  {id:1, icon: Fan, title: "HEXLAB"},
  {id:2, icon: Fan, title: "kanba"},
  {id:3, icon: Fan, title: "liva"},
  {id:4, icon: Fan, title: "amara"}
]

export const links = [
  {id: 0, title: "FAQs"},
  {id: 1, title: "Privacy"},
  {id: 2, title: "Term & Conditions"},
  {id: 5, title: "Support"}
]
export const contactData = [
  {id:0, icon: MapPin, data: "342 Blone Street, Wisconsing United Staids"},
  {id:1, icon: Phone, data: "2145-5467-5378"},
  {id:2, icon: Mail, data: "tour@agency.com"}
]