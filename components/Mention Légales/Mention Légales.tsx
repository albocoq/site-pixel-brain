import styles from '@/styles/mention.module.scss'
export default function mentionLégales() {
    return (
        <main className={`w-screen h-screen flex justify-center items-center text-center ${styles.main}`}>
            <p className="text-xl leading-10 w-3/4"> 
                La navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ». <br /> <br />
                
                <span className="font-bold">Article 1 - Identification de l’éditeur</span> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lacinia nisi. Etiam lobortis congue elementum. Praesent ornare id nisi at laoreet. Sed scelerisque dui non neque lacinia, vitae viverra elit consectetur. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lacinia nisi. Etiam lobortis congue elementum. Praesent ornare id nisi at laoreet. Sed scelerisque dui non neque lacinia, vitae viverra elit consectetur.<br /> <br />
                
                <span className="font-bold">Article 2 - Hébergeur du site</span><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lacinia nisi. Etiam lobortis congue elementum. Praesent ornare id nisi at laoreet. Sed scelerisque dui non neque lacinia, vitae viverra elit consectetur.<br />
            </p>
        </main>
    )
}
