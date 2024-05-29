import Table from '@/app/ui/customers/table';
import {fetchFilteredCustomers} from '@/app/lib/data';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const customers = await fetchFilteredCustomers(searchParams?.query ?? "");
    return (
        <Table customers={customers}/>
    );
}
