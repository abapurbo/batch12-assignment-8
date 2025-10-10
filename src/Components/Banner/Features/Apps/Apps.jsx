import AppCard from './AppCard';

export default function Apps({ cards }) {



    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-6 gap-4 '>
            {cards.slice(0, 8).map(app => (
                <AppCard key={app.id} app={app} />
            ))}

        </div>
    )
}
