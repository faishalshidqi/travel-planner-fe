import {SectionCards} from "@/components/section-cards.tsx";
import {ChartAreaInteractive} from "@/components/chart-area-interactive.tsx";
import {DataTable} from "@/components/data-table.tsx";
import data from "../data/data.json";

export default function DashboardPage() {
    document.title = "Halaman Dashboard - mlakumlaku.id";
    return (
        <div className='flex flex-1 flex-col'>
            <div className='@container/main flex flex-1 flex-col'>
                <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
                    <SectionCards/>
                    <div className='px-4 lg:px-6'>
                        <ChartAreaInteractive/>
                    </div>
                    <DataTable data={data}/>
                </div>
            </div>
        </div>
    )
}