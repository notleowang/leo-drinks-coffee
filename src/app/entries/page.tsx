import Link from 'next/link';

import Navbar from '../ui/navbar';
import { toSlug } from '@/utils/slug';

// temp
const entries = [
    { id: '1', title: 'Arabica', country: 'USA', city: 'California', date: '2024-11-15' },
    { id: '2', title: 'Modus', country: 'Canada', city: 'Vancouver', date: '2024-11-10' },
];

export default function Page() {
    return (
        <div>
            <Navbar />

            <div className="text-center pb-16">
                <h1>ENTRIES</h1>
                <p>Contains all my reviews.</p>
            </div>

            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <Link href={`/entries/${toSlug(entry.country)}/${toSlug(entry.city)}/${toSlug(entry.title)}`}>{entry.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}