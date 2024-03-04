import { fetchFilteredCustomers } from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customers",
}
export default async function page({
  searchParams
}: {
  searchParams?: {
    query?: string,
    page?: string
  };
}) {
  const query = searchParams?.query || '';
  const totalPages = await fetchFilteredCustomers(query);
  return (
    <CustomersTable customers={[...totalPages]} />
  )
}
