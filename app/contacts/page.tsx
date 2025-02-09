import ContactTable from "@/components/ContactTable"
import Search from "@/components/Search"
import { CreateButton } from "@/components/Button"

export default function Contacts() {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateButton />
            </div>
            <ContactTable />
        </div>
    )
}
