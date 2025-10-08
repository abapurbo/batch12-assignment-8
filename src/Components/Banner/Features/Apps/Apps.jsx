import AppCard from './AppCard';

export default function Apps({ cards }) {



    return (
        <div className='grid grid-cols-4 gap-6'>
            {cards.slice(0, 8).map(app => (
                <AppCard key={app.id} app={app} />
            ))}

        </div>
    )
}
