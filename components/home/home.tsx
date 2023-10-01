import styles from '@/styles/home.module.scss'

export default function Home() {
    return (
        <main className={`w-screen h-screen flex justify-center items-center ${styles.main}`}>
            <div className="flex flex-col items-center gap-20">
                <h1 className='text-center'style={{ width: '100%'}}>
                    La <span style={{color: '#03A888'}}>visibilité</span> de votre image est notre <span style={{color: '#04BF7B'}}>engagement</span>.
                </h1>
                <p className="text-center text-lg" style={{ width: "85%"}}>
                    Pixel Brain est l’ébauche d’une activité d’agence digitale de consultance, nous mettons à disposition nos talents afin de répondre à vos besoins numériques. <br />
                    Questionnement de votre projet, élaboration de vos contenus, développement, retrouvez chez Pixel Brain nos collaborateurs et leurs spécialités.
                </p>
                <button className="w-max py-4 px-12 text-3xl rounded-full border-3 border-solid rotate-93" style={{backgroundColor: "#04BF7B"}}>
                    Devis Gratuit
                </button>
            </div>
            <p className="absolute right-16 text-8xl" style={{ color: "#04BF7B", top: "2.5%", right: '2.5%'}}>Pixel Brain</p>
        </main>
    )
}
