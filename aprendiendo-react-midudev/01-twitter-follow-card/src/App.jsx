import { TwitterFollowCard } from './components/TwitterFollowCard'
import './css/app.css'

const users = [
    {
        userName: 'lombardimn',
        name: 'Matias Lombardi',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'manzdev',
        name: 'José Román Hernández Martín',
        isFollowing: true
    },
    {
        userName: 'chrisvdev',
        name: 'Christian Villegas',
        isFollowing: false
    }
]

export function App() {
    return (
        <>
        <h1 className='App-title'>Model Twitter Follow Card</h1>
        <div className='App-border'>
            <section className='App'>
                {
                    users.map(({userName, name, isFollowing})=>(
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    ))
                }
            </section>
        </div>
        </>
    )
}